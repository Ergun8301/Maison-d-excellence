'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/navigation';
import type { ChangeEvent, FormEvent, MouseEvent, ReactNode } from 'react';

import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import type { Opt, Vals } from '@/components/site-vals';
import { SiteRuntime } from '@/lib/site-runtime';
import { waLink } from '@/lib/site';
import { ME_PRIX } from '@/lib/data/prix';
import { MODELES } from '@/lib/data/modeles';
import { TERRAINS } from '@/lib/data/terrains';
import { ARTICLES } from '@/lib/data/articles';
import { ECHEANCIER } from '@/lib/data/echeancier';
import { COMMUNES } from '@/lib/data/communes';
import { AVIS, AVIS_COUNT, GOOGLE_REVIEWS_URL } from '@/lib/data/avis';

/** Nom de vue de la maquette -> route Next.js. */
export const ROUTES: Record<string, string> = {
  accueil: '/',
  modeles: '/nos-modeles',
  realisations: '/realisations',
  entreprise: '/entreprise',
  contact: '/contact',
  terrains: '/terrains',
  investisseurs: '/investisseurs',
  blog: '/blog',
  zone: '/zone-intervention',
  renovation: '/renovation-extension',
  mentions: '/mentions-legales',
};

/**
 * Séparateur de milliers identique à `toLocaleString('fr-FR')` mais figé, pour
 * que le rendu du serveur et celui du navigateur coïncident exactement.
 */
const fmt = (n: number) =>
  String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

type EstState = {
  surface: number;
  niveau: string;
  chambres: number;
  garage: string;
  vs: string;
  finition: string;
};

const EST_INITIAL: EstState = {
  surface: 120,
  niveau: 'Avec étage',
  chambres: 4,
  garage: 'Simple',
  vs: 'Oui',
  finition: 'Clé en main',
};

/** Formule du simulateur, reprise sans changement : l'ordre des opérations compte. */
function estimate(s: EstState) {
  const base = ME_PRIX.baseM2;
  const coef = s.niveau === 'Plain-pied' ? ME_PRIX.coefPlainPied : ME_PRIX.coefEtage;
  let total = s.surface * base * coef;
  total += (s.chambres - ME_PRIX.chambresRef) * ME_PRIX.chambreDelta;
  total += (ME_PRIX.garage as Record<string, number>)[s.garage] || 0;
  total *= (ME_PRIX.finition as Record<string, number>)[s.finition] || 1;
  total += (ME_PRIX.videSanitaire as Record<string, number>)[s.vs] || 0;
  const r = ME_PRIX.arrondi;
  const low = Math.round((total * (1 - ME_PRIX.fourchette)) / r) * r;
  const high = Math.round((total * (1 + ME_PRIX.fourchette)) / r) * r;
  return { low, high, m2: Math.round(total / s.surface / 10) * 10 };
}

const BADGE: Record<string, string> = {
  Disponible: 'background:#E3EFE8;color:#1F6B4A;',
  'Dernier lot': 'background:#EFEADA;color:#7C6A2E;',
  Réservé: 'background:#EAEAE4;color:#7E837E;',
};

/** Message pré-rempli transmis au formulaire de contact d'une vue à l'autre. */
const PREFILL_KEY = 'me:prefill';

/**
 * Relève ce que le visiteur a saisi dans un formulaire.
 *
 * Les champs de la maquette n'ont pas d'attribut `name`. On reprend donc, dans
 * l'ordre, l'étiquette visible au-dessus du champ, son `aria-label`, puis à
 * défaut son texte d'exemple. Aucun balisage n'est retouché, et un champ que
 * le design ajouterait plus tard serait repris tout seul.
 */
function lireFormulaire(form: HTMLFormElement): [string, string][] {
  const champs: [string, string][] = [];

  form.querySelectorAll('input, select, textarea').forEach((el) => {
    const champ = el as HTMLInputElement;
    if (champ.type === 'checkbox' || champ.type === 'submit') return;

    // `:scope >` limite aux étiquettes voisines immédiates. Sans cette borne,
    // un champ posé directement dans le formulaire récupérait la première
    // étiquette venue — en pratique celle du consentement RGPD.
    const etiquette =
      champ.parentElement?.querySelector(':scope > label')?.textContent ?? '';

    const libelle = (
      champ.getAttribute('aria-label') ||
      etiquette ||
      champ.getAttribute('placeholder') ||
      ''
    )
      .replace(/\s*\*\s*$/, '') // l'astérisque du champ obligatoire
      .trim();

    const valeur = champ.value.trim();
    if (libelle && valeur) champs.push([libelle, valeur]);
  });

  return champs;
}

/** Ouvre WhatsApp avec la demande mise en forme, vers le numéro de l'entreprise. */
function envoyerVersWhatsApp(entete: string, champs: [string, string][]) {
  const corps = champs.map(([k, v]) => `${k} : ${v}`).join('\n');
  window.open(waLink(`${entete}\n\n${corps}`), '_blank', 'noopener,noreferrer');
}

const ViewContext = createContext<Vals | null>(null);

export default function Site({
  page,
  terrainSlug,
  articleSlug,
  children,
}: {
  page: string;
  terrainSlug?: string;
  articleSlug?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  const runtime = useRef<SiteRuntime | null>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [est, setEst] = useState<EstState>(EST_INITIAL);
  const [estSent, setEstSent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [terrainFilter, setTerrainFilter] = useState('Tout');
  const [formNature, setFormNature] = useState('Construction neuve');
  const [formMessage, setFormMessage] = useState('');

  // Effets de la maquette : barre au scroll, révélations, parallaxe, cartes.
  useEffect(() => {
    const rt = new SiteRuntime(page);
    runtime.current = rt;
    rt.start();
    return () => {
      rt.stop();
      runtime.current = null;
    };
  }, [page]);

  // Message pré-rempli déposé depuis « Ce modèle m'intéresse » ou une fiche terrain.
  useEffect(() => {
    if (page !== 'contact') return;
    const raw = sessionStorage.getItem(PREFILL_KEY);
    if (!raw) return;
    sessionStorage.removeItem(PREFILL_KEY);
    try {
      const { nature, message } = JSON.parse(raw);
      setFormNature(nature);
      setFormMessage(message);
      setSubmitted(false);
    } catch {
      /* rien à restaurer */
    }
  }, [page]);

  const navigate = useCallback(
    (view: string) => {
      setMenuOpen(false);
      router.push(ROUTES[view] ?? '/');
    },
    [router]
  );

  const goAnchor = useCallback(
    (e: MouseEvent | undefined, id: string, target: string) => {
      e?.preventDefault();
      setMenuOpen(false);
      if (page === target) {
        runtime.current?.scrollToId(id);
        return;
      }
      router.push(`${ROUTES[target] ?? '/'}#${id}`);
    },
    [page, router]
  );

  const askWith = useCallback(
    (message: string) => {
      sessionStorage.setItem(
        PREFILL_KEY,
        JSON.stringify({ nature: 'Construction neuve', message })
      );
      navigate('contact');
    },
    [navigate]
  );

  const setEstKey = useCallback(
    (key: keyof EstState, value: string | number) =>
      setEst((s) => ({ ...s, [key]: value })),
    []
  );

  const opts = useCallback(
    (list: readonly (string | number)[], key: keyof EstState): Opt[] =>
      list.map((v) => ({
        label: String(v),
        onClick: () => setEstKey(key, v),
        style:
          String(est[key]) === String(v)
            ? 'background:#2E5A49;color:#fff;border-color:#2E5A49;box-shadow:0 12px 26px -16px rgba(46,90,73,.9);'
            : 'background:#fff;color:#4E534E;border-color:rgba(17,20,18,0.18);',
      })),
    [est, setEstKey]
  );

  const v: Vals = useMemo(() => {
    const e = estimate(est);

    const terrains = TERRAINS.filter(
      (x) => terrainFilter === 'Tout' || x.secteur === terrainFilter
    ).map((x, i) => ({
      slug: x.slug,
      ref: x.ref,
      commune: x.commune,
      secteur: x.secteur,
      note: x.note,
      photo: x.photo,
      status: x.status,
      bg: `url("${x.photo}")`,
      surfaceLabel: `${fmt(x.surface)} m²`,
      priceLabel: `${fmt(x.price)} €`,
      badgeStyle: BADGE[x.status] || BADGE.Disponible,
      cardOpacity: x.status === 'Réservé' ? '0.6' : '1',
      delay: (i % 3) * 90,
      href: `/terrains/${x.slug}`,
      onOpen: () => router.push(`/terrains/${x.slug}`),
    }));

    const mods = MODELES.map((m, i) => ({
      ...m,
      bg: `url("${m.photo}")`,
      delay: (i % 3) * 90,
      onAsk: () =>
        askWith(
          `Bonjour, le modèle ${m.name} correspond à ce que je recherche. J’aimerais l’adapter à mon terrain.`
        ),
    }));

    const arts = ARTICLES.map((a, i) => ({
      slug: a.slug,
      title: a.title,
      cat: a.cat,
      date: a.date,
      read: a.read,
      excerpt: a.excerpt,
      img: a.img,
      alt: a.alt,
      bg: `url("${a.img}")`,
      href: `/blog/${a.slug}`,
      delay: (i % 3) * 90,
      onOpen: () => router.push(`/blog/${a.slug}`),
    }));

    const rawT = TERRAINS.find((x) => x.slug === terrainSlug);
    const t = rawT
      ? {
          ...rawT,
          surfaceLabel: `${fmt(rawT.surface)} m²`,
          priceLabel: `${fmt(rawT.price)} €`,
          bg: `url("${rawT.photo}")`,
        }
      : null;

    const art = ARTICLES.find((a) => a.slug === articleSlug);

    return {
      goAccueil: () => navigate('accueil'),
      goRealisations: () => navigate('realisations'),
      goModeles: () => navigate('modeles'),
      goEntreprise: () => navigate('entreprise'),
      goEstimation: (ev?: MouseEvent) => goAnchor(ev, 'estimation', 'accueil'),
      goContact: () => navigate('contact'),
      goContactForm: (ev?: MouseEvent) => goAnchor(ev, 'contact', 'contact'),
      goTrouver: (ev?: MouseEvent) => goAnchor(ev, 'nous-trouver', 'contact'),
      goTerrains: () => navigate('terrains'),
      goInvestisseurs: () => navigate('investisseurs'),
      goBlog: () => navigate('blog'),
      goZone: () => navigate('zone'),
      goRenovation: () => navigate('renovation'),
      goMentions: () => navigate('mentions'),
      goArticlePrix: () => router.push('/blog/prix-construction-m2'),
      goArticleEch: () => router.push('/blog/echeancier-ccmi'),
      menuOpen,
      toggleMenu: () => setMenuOpen((o) => !o),
      closeMenu: () => setMenuOpen(false),
      year: 2026,
      terrainsInNav: true,
      scrollTop: () => runtime.current?.smoothTo(0),

      avisCount: AVIS_COUNT,
      avisUrl: GOOGLE_REVIEWS_URL,
      avis: AVIS.map((a, i) => ({ ...a, delay: i * 110 })),
      echeancier: ECHEANCIER,

      modelesPP: mods.filter((m) => m.fam === 'pp'),
      modelesEtage: mods.filter((m) => m.fam === 'et'),
      modelesEco: mods.filter((m) => m.fam === 'ec'),

      estSurface: est.surface,
      estNiveau: est.niveau,
      estChambres: est.chambres,
      estGarage: est.garage,
      estVs: est.vs,
      estFinition: est.finition,
      estLow: fmt(e.low),
      estHigh: fmt(e.high),
      estM2: fmt(e.m2),
      teaserRange: `${fmt(e.low)} € – ${fmt(e.high)} €`,
      setSurface: (ev: ChangeEvent<HTMLInputElement>) =>
        setEstKey('surface', parseInt(ev.target.value, 10)),
      nivOptions: opts(['Plain-pied', 'Avec étage'], 'niveau'),
      chOptions: opts([2, 3, 4, 5], 'chambres'),
      garOptions: opts(['Sans', 'Simple', 'Double'], 'garage'),
      vsOptions: opts(['Oui', 'Non'], 'vs'),
      finOptions: opts(['Clé en main', 'Prêt à finir', "Hors d'eau / hors d'air"], 'finition'),
      estSent,
      estNotSent: !estSent,
      onEstSubmit: (ev: FormEvent) => {
        ev.preventDefault();
        const champs = lireFormulaire(ev.currentTarget as HTMLFormElement);
        envoyerVersWhatsApp(
          `Bonjour, voici mon estimation depuis le site :\n` +
            `${est.surface} m², ${est.niveau.toLowerCase()}, ${est.chambres} chambres, ` +
            `garage ${est.garage.toLowerCase()}, vide sanitaire ${est.vs.toLowerCase()}, ` +
            `${est.finition.toLowerCase()}.\n` +
            `Fourchette annoncée : ${fmt(e.low)} € – ${fmt(e.high)} €.`,
          champs
        );
        setEstSent(true);
      },

      submitted,
      notSubmitted: !submitted,
      onSubmit: (ev: FormEvent) => {
        ev.preventDefault();
        envoyerVersWhatsApp(
          'Bonjour, je vous écris depuis le site Maisons d’Excellence.',
          lireFormulaire(ev.currentTarget as HTMLFormElement)
        );
        setSubmitted(true);
      },
      resetForm: () => {
        setSubmitted(false);
        setFormMessage('');
      },
      formNature,
      formMessage,
      setNature: (ev: ChangeEvent<HTMLSelectElement>) => setFormNature(ev.target.value),
      setMessage: (ev: ChangeEvent<HTMLTextAreaElement>) => setFormMessage(ev.target.value),

      terrains,
      terrainCount: terrains.length,
      terrainChips: ['Tout', "Plaine de l'Ain", 'Côtière', 'Bugey'].map((f) => ({
        label: f,
        onClick: () => setTerrainFilter(f),
        style:
          terrainFilter === f
            ? 'background:#111412;color:#F7F7F4;border-color:#111412;'
            : 'background:transparent;color:#4E534E;border-color:rgba(17,20,18,0.2);',
      })),
      t: (t ?? {}) as Record<string, string>,
      hasTerrain: !!t,
      askTerrain: () => {
        if (!t) return;
        askWith(
          `Bonjour, je suis intéressé par le terrain réf. ${t.ref} à ${t.commune} (${t.surfaceLabel}, ${t.priceLabel}). J’aimerais étudier un projet de construction sur cette parcelle.`
        );
      },

      articles: arts,
      featured: arts[0] ?? {},
      hasFeatured: arts.length > 0,
      others: arts.slice(1),
      art: (art ? { ...art, bg: `url("${art.img}")` } : {}) as unknown as Record<string, string>,
      hasArt: !!art,
      artBody: art ? art.body : [],
      communes: COMMUNES.map((c) => ({ n: c.n, hub: (c as { hub?: boolean }).hub ? 'Pôle' : 'Commune' })),
    } as Vals;
  }, [
    est,
    estSent,
    submitted,
    menuOpen,
    terrainFilter,
    formNature,
    formMessage,
    terrainSlug,
    articleSlug,
    navigate,
    goAnchor,
    askWith,
    opts,
    setEstKey,
    router,
  ]);

  return (
    <div
      style={{
        fontFamily: "'Manrope',system-ui,sans-serif",
        color: '#111412',
        background: '#F7F7F4',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <SiteHeader {...v} />
      <SiteView vals={v}>{children}</SiteView>
      <SiteFooter {...v} />
    </div>
  );
}

/** Passe la surface de données à la vue rendue par la route. */
function SiteView({ vals, children }: { vals: Vals; children: ReactNode }) {
  return <ViewContext.Provider value={vals}>{children}</ViewContext.Provider>;
}

export function useVals(): Vals {
  const v = useContext(ViewContext);
  if (!v) throw new Error('useVals doit être appelé dans <Site>');
  return v;
}
