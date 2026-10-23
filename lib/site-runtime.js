/**
 * Effets de la maquette Claude Design : barre d'en-tête au scroll, révélations
 * à l'apparition, parallaxe, diaporama du hero et les deux cartes Leaflet.
 *
 * Le corps des méthodes est repris SANS RETOUCHE du script de la maquette
 * (design/Maisons d'Excellence.dc.html). Seules ont changé les entrées qui
 * dépendaient de l'état du composant d'origine : la page courante est passée
 * au constructeur, et l'index du diaporama est tenu en interne.
 *
 * Ne pas « moderniser » ce fichier : c'est la référence visuelle.
 */

/* eslint-disable */

export class SiteRuntime {
  constructor(page) {
    this.page = page;
    this._slide = 0;
    // Assombrissement du hero. La maquette proposait 46 % ; Claude Design en
    // avait retenu 30 en repère de travail. À la demande du client — voir la
    // photo, pas seulement la deviner sous le voile — on descend à 22 : les
    // grands textes portent leur propre ombre locale (`textShadow`) et n'ont
    // pas besoin du voile pour rester lisibles ; ce sont les petits textes
    // (repères, preuves) qui en dépendent le plus, et 22 % suffit encore à
    // les détacher de la photo la plus claire du diaporama.
    this.props = { heroAlign: 'Centré', heroVoile: 22 };
  }

  handleScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    const h = document.querySelector('[data-header]');
    // Toutes les pages ouvrent sur un fond sombre : barre transparente en haut, verre crème au scroll.
    //
    // Le seuil du fond et celui du texte doivent être le même. La maquette
    // basculait le fond à 40 px et le texte à 60 : entre les deux, le nom
    // s'écrivait en crème sur un fond crème et disparaissait purement et
    // simplement — contraste 1,00:1 sur une bande de vingt pixels.
    const overHero = y <= 40;
    if (h) {
      if (overHero) {
        h.style.background = 'transparent';
        h.style.backdropFilter = 'none';
        h.style.webkitBackdropFilter = 'none';
        h.style.borderBottomColor = 'transparent';
        h.style.boxShadow = 'none';
      } else {
        h.style.background = 'rgba(247,247,244,0.92)';
        h.style.backdropFilter = 'saturate(140%) blur(14px)';
        h.style.webkitBackdropFilter = 'saturate(140%) blur(14px)';
        h.style.borderBottomColor = 'rgba(17,20,18,0.10)';
        h.style.boxShadow = '0 10px 40px -30px rgba(17,20,18,0.7)';
      }
      h.style.color = overHero ? '#F7F7F4' : '#111412';
      h.querySelectorAll('[data-navitem]').forEach(a => {
        a.style.color = overHero ? 'rgba(247,247,244,0.86)' : 'rgba(17,20,18,0.68)';
      });
      // Le logo suit la barre. Le vert d'origine de l'entreprise se détache
      // sur la photo sombre (5,15:1) mais s'éteint sur le crème (2,77:1) ;
      // le vert profond du site fait l'inverse (1,95:1 puis 7,31:1). Chacun
      // sur son fond : le logo reste vert partout, sans qu'aucune teinte
      // nouvelle n'entre dans la palette.
      h.querySelectorAll('[data-logomark]').forEach(s => {
        s.style.color = overHero ? '#55A845' : '#2E5A49';
      });
    }
    const tt = document.querySelector('[data-totop]');
    if (tt) {
      const on = y > 700;
      tt.style.opacity = on ? '1' : '0';
      tt.style.pointerEvents = on ? 'auto' : 'none';
      tt.style.transform = on ? 'translateY(0)' : 'translateY(10px)';
    }
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
      const r = el.getBoundingClientRect();
      const off = (r.top + r.height / 2 - window.innerHeight / 2) * -speed;
      el.style.transform = 'translate3d(0,' + off.toFixed(1) + 'px,0) scale(1.1)';
    });
    this.revealInView();
  }

  runReveals() {
    if (this._obs) this._obs.disconnect();
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    els.forEach(el => {
      const dir = el.getAttribute('data-reveal');
      el.style.transition = 'opacity 0.6s cubic-bezier(.16,.84,.44,1), transform 0.6s cubic-bezier(.16,.84,.44,1)';
      el.style.willChange = 'opacity, transform';
      el.style.transitionDelay = '0ms';
      if (dir === 'mask') {
        el.style.transition = 'none';
        el.style.opacity = '1';
        el.style.transform = 'none';
        this._armMask(el);
      } else if (dir === 'wipe') {
        el.style.transition = 'opacity 0.7s cubic-bezier(.16,.84,.44,1), clip-path 0.75s cubic-bezier(.16,.84,.44,1)';
        el.style.opacity = '1';
        el.style.clipPath = 'inset(0 0 100% 0)';
        el.style.transform = 'none';
      } else {
        el.style.opacity = '0';
        el.style.transform = dir === 'left' ? 'translateX(-32px)' : dir === 'right' ? 'translateX(32px)' : 'translateY(36px)';
      }
      // Décalage vertical de départ de l'animation. `revealInView` s'en sert
      // pour juger l'élément sur la place qu'il occupera, non sur celle d'où
      // il part : sans quoi un élément posé en bas du premier écran se
      // retrouve exclu par son propre décalage, et n'apparaît jamais.
      el.dataset.revealDy = dir === 'mask' || dir === 'wipe' || dir === 'left' || dir === 'right' ? '0' : '36';
      el.dataset.shown = '0';
    });
    void document.body.offsetHeight; // force le calcul des styles initiaux avant la transition
    this._revealEls = els;
    try {
      this._obs = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) this._reveal(e.target);
          else if (e.target.getAttribute('data-reveal') === 'mask') this._armMask(e.target);
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -7% 0px' });
      els.forEach(el => this._obs.observe(el));
    } catch (err) { this._obs = null; }
    requestAnimationFrame(() => this.revealInView(true));
  }

  /**
   * Révèle ce qui est déjà à l'écran.
   *
   * `premierEcran` élargit la fenêtre de déclenchement à la hauteur entière.
   * Au défilement, on garde les 94 % d'origine — un élément se dévoile une
   * fois franchement entré dans le champ, pas au premier pixel. Mais au
   * chargement, un élément posé exprès en pied du premier écran tombe pile
   * sur cette limite : il faut le prendre, sinon il reste invisible tant
   * qu'on ne fait pas défiler la page, ce qui vide de son sens un repère
   * dont le rôle est justement d'inviter à défiler.
   */
  revealInView(premierEcran) {
    const els = this._revealEls || document.querySelectorAll('[data-reveal]');
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const limite = premierEcran ? vh : vh * 0.94;
    els.forEach(el => {
      if (el.dataset.shown === '1') return;
      const r = el.getBoundingClientRect();
      const dy = Number(el.dataset.revealDy || 0);
      if (r.top - dy < limite && r.bottom - dy > 0) this._reveal(el);
    });
  }

  _reveal(el) {
    if (!el || el.dataset.shown === '1') return;
    el.dataset.shown = '1';
    const d = Math.round((parseFloat(el.getAttribute('data-delay')) || 0) * 0.55);
    if (el.getAttribute('data-reveal') === 'mask') {
      Array.prototype.forEach.call(el.querySelectorAll('.me-w > span'), (w, i) => {
        const dl = (d + i * 68) + 'ms';
        w.style.transition = 'transform 0.85s cubic-bezier(.19,1,.22,1) ' + dl + ', opacity 0.55s ease ' + dl;
        w.style.transform = 'perspective(760px) rotateX(0deg) translateY(0) scale(1)';
        w.style.opacity = '1';
      });
      return;
    }
    el.style.transitionDelay = d + 'ms';
    el.style.opacity = '1';
    el.style.transform = 'none';
    if (el.getAttribute('data-reveal') === 'wipe') el.style.clipPath = 'inset(0 0 0 0)';
    if (this._obs) this._obs.unobserve(el);
  }

  _armMask(el) {
    el.dataset.shown = '0';
    Array.prototype.forEach.call(el.querySelectorAll('.me-w > span'), w => {
      w.style.transition = 'none';
      w.style.transform = 'perspective(760px) rotateX(-88deg) translateY(46%) scale(0.94)';
      w.style.opacity = '0';
    });
  }

  /* ── Cartes ─────────────────────────────────────────────────────────────
   * Les deux cartes vivent dans une page autonome, public/carte.html, chargée
   * en cadre. Le site n'embarque donc plus Leaflet — il le chargeait sur ses
   * dix-sept pages pour deux cartes — et aucune requête ne part vers un
   * fournisseur de tuiles tant que le visiteur n'est pas descendu jusqu'à la
   * carte.
   *
   * Le gabarit écrit le cadre sans `src` ; il est renseigné quand le bloc
   * arrive à 600 px de l'écran, une seule fois. Un navigateur sans
   * IntersectionObserver charge tout de suite, plutôt que de ne rien montrer.
   */
  stopMapWatch() {
    if (this._mapObs) { this._mapObs.disconnect(); this._mapObs = null; }
  }

  startMapWatch() {
    this.stopMapWatch();
    const cadres = [...document.querySelectorAll('[data-carte]')].filter(el => !el.getAttribute('src'));
    if (!cadres.length) return;
    const charger = (el) => {
      if (el.getAttribute('src')) return;
      el.setAttribute('src', el.getAttribute('data-carte'));
    };
    if (!('IntersectionObserver' in window)) { cadres.forEach(charger); return; }
    this._mapObs = new IntersectionObserver((entrees) => {
      entrees.forEach((e) => {
        if (!e.isIntersecting) return;
        charger(e.target);
        if (this._mapObs) this._mapObs.unobserve(e.target);
      });
    }, { rootMargin: '600px 0px' });
    cadres.forEach(el => this._mapObs.observe(el));
  }

  smoothTo(y) {
    const target = Math.max(0, Math.round(y));
    try { window.scrollTo({ top: target, behavior: 'smooth' }); }
    catch (e) { window.scrollTo(0, target); }
    setTimeout(() => {
      if (Math.abs(window.pageYOffset - target) > 4) {
        const html = document.documentElement;
        html.style.setProperty('scroll-behavior', 'auto');
        window.scrollTo(0, target);
        requestAnimationFrame(() => { html.style.removeProperty('scroll-behavior'); });
      }
    }, 420);
  }

  scrollToId(id, tries) {
    const el = document.getElementById(id);
    if (!el) {
      const t = tries || 0;
      if (t < 14) setTimeout(() => this.scrollToId(id, t + 1), 60);
      return;
    }
    const hdr = document.querySelector('[data-header]');
    const off = (hdr ? hdr.getBoundingClientRect().height : 76) + 24;
    const vise = () => el.getBoundingClientRect().top + window.pageYOffset - off;
    this.smoothTo(vise());

    // Les révélations à l'apparition changent la hauteur du contenu pendant le
    // défilement : la cible se déplace en cours de route et l'on atterrit sous
    // le début du bloc. On revérifie une fois le mouvement terminé.
    clearTimeout(this._recale);
    this._recale = setTimeout(() => {
      const ecart = vise() - window.pageYOffset;
      if (Math.abs(ecart) > 8) this.smoothTo(vise());
    }, 720);
  }

  slides() {
    return ['Contemporaine · Meximieux', 'Plain-pied · Pérouges', 'Séjour traversant · Montluel', 'Maison à étage · Ambérieu'];
  }

  // ── Cycle de vie ────────────────────────────────────────────
  // Reprend componentDidMount de la maquette, sans le routage par hash :
  // la navigation est désormais assurée par les routes Next.js.
  start() {
    this._onScroll = () => this.handleScroll();
    window.addEventListener('scroll', this._onScroll, { passive: true });
    this._onResize = () => this.handleScroll();
    window.addEventListener('resize', this._onResize);
    this.applyHeroTweaks();
    requestAnimationFrame(() => { this.handleScroll(); this.runReveals(); });
    this.startMapWatch();
    this.startSlides();
    this.bindDeclarativeStyles();
    this.ouvrirWhatsAppDansLOngletCourant();
  }

  stop() {
    this.stopMapWatch();
    if (this._slideTimer) clearInterval(this._slideTimer);
    window.removeEventListener('scroll', this._onScroll);
    window.removeEventListener('resize', this._onResize);
    if (this._obs) this._obs.disconnect();
    if (this._unbindStyles) this._unbindStyles();
  }

  /** Rejoue les révélations après un changement de vue. */
  refresh() {
    this.applyHeroTweaks();
    this.startMapWatch();
    this.startSlides();
    this.bindDeclarativeStyles();
    this.ouvrirWhatsAppDansLOngletCourant();
    requestAnimationFrame(() => { this.runReveals(); this.handleScroll(); });
  }

  startSlides() {
    if (this._slideTimer) { clearInterval(this._slideTimer); this._slideTimer = null; }
    if (this.page !== 'accueil') return;
    requestAnimationFrame(() => this.paintSlide());
    this._slideTimer = setInterval(() => {
      if (this.page !== 'accueil') return;
      this._slide = (this._slide + 1) % this.slides().length;
      this.paintSlide();
    // 7 000 ms à l'origine ; réduit d'un quart (5 250 ms) pour que les cinq
    // photos défilent sans qu'on décroche.
    }, 5250);
  }

  paintSlide() {
    const els = document.querySelectorAll('[data-slide]');
    if (!els.length) return;
    const n = this._slide;
    els.forEach((el, i) => {
      el.style.opacity = i === n ? '1' : '0';
      if (i === n) { el.style.animation = 'none'; void el.offsetWidth; el.style.animation = 'meKb 17s ease-out forwards'; }
    });
  }

  applyHeroTweaks() {
    const left = (this.props.heroAlign || 'Centré') === 'À gauche';
    const col = document.querySelector('[data-hero-col]');
    if (col) {
      col.style.alignItems = left ? 'flex-start' : 'center';
      col.style.textAlign = left ? 'left' : 'center';
      const h1 = col.querySelector('.me-hero-h1');
      if (h1) h1.style.justifyContent = left ? 'flex-start' : 'center';
      const cta = col.querySelector('.me-hero-cta');
      if (cta) cta.style.justifyContent = left ? 'flex-start' : 'center';
    }
    const v = Math.max(0, Math.min(90, this.props.heroVoile == null ? 46 : this.props.heroVoile)) / 100;
    const r = document.querySelector('[data-veil="radial"]');
    if (r) r.style.background = 'radial-gradient(120% 92% at 50% 44%,rgba(11,13,12,' + (v * 0.57).toFixed(3) + ') 0%,rgba(11,13,12,' + (v).toFixed(3) + ') 58%,rgba(11,13,12,' + Math.min(0.95, v * 1.56).toFixed(3) + ') 100%)';
    const l = document.querySelector('[data-veil="linear"]');
    if (l) l.style.background = 'linear-gradient(180deg,rgba(11,13,12,' + Math.min(0.95, v * 1.26).toFixed(3) + ') 0%,rgba(11,13,12,' + (v * 0.26).toFixed(3) + ') 26%,rgba(11,13,12,' + (v * 0.39).toFixed(3) + ') 60%,rgba(11,13,12,' + Math.min(0.95, v * 1.35).toFixed(3) + ') 100%)';
  }

  /**
   * Ouverture des liens WhatsApp sur écran tactile.
   *
   * Les liens portent target="_blank". Sur Android, l'onglet ainsi ouvert
   * charge wa.me, qui redirige vers api.whatsapp.com, qui tente de passer la
   * main à l'application. Le navigateur refuse cette passation depuis un
   * onglet tout juste ouvert : l'onglet se referme et l'on revient en arrière
   * sans que l'application ne s'ouvre.
   *
   * Une navigation ordinaire, dans l'onglet courant, aboutit elle
   * normalement. On retire donc l'attribut là où il nuit — et seulement là :
   * sur ordinateur, le nouvel onglet reste préférable, puisqu'il évite de
   * quitter le site pour WhatsApp Web.
   */
  ouvrirWhatsAppDansLOngletCourant() {
    if (!window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('a[href*="wa.me/"]').forEach((a) => {
      a.removeAttribute('target');
      a.setAttribute('rel', 'noopener');
    });
  }

  /**
   * `style-hover` et `style-focus` sont des attributs déclaratifs de l'éditeur
   * Claude Design, interprétés par son aperçu et absents de support.js. On les
   * rejoue ici à l'identique : la déclaration est appliquée au survol ou au
   * focus, puis le style de base est restauré.
   */
  bindDeclarativeStyles() {
    if (this._unbindStyles) this._unbindStyles();
    const parse = (decl) => {
      const out = [];
      let depth = 0, cur = '';
      for (const ch of decl) {
        if (ch === '(') depth++;
        else if (ch === ')') depth--;
        if (ch === ';' && depth === 0) { if (cur.trim()) out.push(cur); cur = ''; }
        else cur += ch;
      }
      if (cur.trim()) out.push(cur);
      return out.map(d => {
        const i = d.indexOf(':');
        return i === -1 ? null : [d.slice(0, i).trim(), d.slice(i + 1).trim()];
      }).filter(Boolean);
    };

    const cleanups = [];
    const wire = (attr, onEvents, offEvents) => {
      document.querySelectorAll('[' + attr + ']').forEach(el => {
        const props = parse(el.getAttribute(attr) || '');
        if (!props.length) return;
        const base = props.map(([p]) => [p, el.style.getPropertyValue(p)]);
        const on = () => props.forEach(([p, val]) => el.style.setProperty(p, val));
        const off = () => base.forEach(([p, val]) => {
          if (val) el.style.setProperty(p, val); else el.style.removeProperty(p);
        });
        onEvents.forEach(e => el.addEventListener(e, on));
        offEvents.forEach(e => el.addEventListener(e, off));
        cleanups.push(() => {
          onEvents.forEach(e => el.removeEventListener(e, on));
          offEvents.forEach(e => el.removeEventListener(e, off));
        });
      });
    };

    wire('style-hover', ['mouseenter'], ['mouseleave']);
    wire('style-focus', ['focus'], ['blur']);

    this._unbindStyles = () => { cleanups.forEach(fn => fn()); this._unbindStyles = null; };
  }
}
