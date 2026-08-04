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
    this.props = { heroAlign: 'Centré', heroVoile: 30 };
  }

  handleScroll() {
    const y = window.pageYOffset || document.documentElement.scrollTop || 0;
    const h = document.querySelector('[data-header]');
    // Toutes les pages ouvrent sur un fond sombre : barre transparente en haut, verre crème au scroll.
    const overHero = y <= 60;
    if (h) {
      if (y > 40) {
        h.style.background = 'rgba(247,247,244,0.92)';
        h.style.backdropFilter = 'saturate(140%) blur(14px)';
        h.style.webkitBackdropFilter = 'saturate(140%) blur(14px)';
        h.style.borderBottomColor = 'rgba(17,20,18,0.10)';
        h.style.boxShadow = '0 10px 40px -30px rgba(17,20,18,0.7)';
      } else if (overHero) {
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
        h.style.boxShadow = 'none';
      }
      h.style.color = overHero ? '#F7F7F4' : '#111412';
      h.querySelectorAll('[data-navitem]').forEach(a => {
        a.style.color = overHero ? 'rgba(247,247,244,0.86)' : 'rgba(17,20,18,0.68)';
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
    requestAnimationFrame(() => this.revealInView());
  }

  revealInView() {
    const els = this._revealEls || document.querySelectorAll('[data-reveal]');
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach(el => {
      if (el.dataset.shown === '1') return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.94 && r.bottom > 0) this._reveal(el);
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

  stopMapWatch() {
    if (this._mapTimer) { clearInterval(this._mapTimer); this._mapTimer = null; }
  }

  startMapWatch() {
    this.stopMapWatch();
    const spec = this.mapSpec();
    if (!spec) {
      if (this._map) { try { this._map.remove(); } catch (err) {} this._map = null; this._mapEl = null; }
      return;
    }
    this._mapTicks = 0;
    this.ensureMap();
    this._mapTimer = setInterval(() => {
      this._mapTicks++;
      const s = this.mapSpec();
      if (!s || s.page !== spec.page || this._mapTicks > 120) { this.stopMapWatch(); return; }
      this.ensureMap();
    }, 300);
  }

  ensureMap() {
    const spec = this.mapSpec();
    if (!spec) { this.stopMapWatch(); return; }
    const el = document.getElementById(spec.id);
    if (!el || !window.L) return;
    // Le nœud a pu être remplacé par un nouveau rendu : on réinitialise sur le nouveau conteneur.
    if (this._mapEl === el && el._leaflet_id) { this.stopMapWatch(); return; }
    if (this._map && this._mapEl !== el) { try { this._map.remove(); } catch (err) {} this._map = null; }
    if (el._leaflet_id) { try { delete el._leaflet_id; } catch (err) {} el.innerHTML = ''; }
    try { spec.build(el); } catch (err) { console.error('Carte :', err); this.stopMapWatch(); }
  }

  buildBureauMap(el) {
    const L = window.L;
    const pos = [45.903688, 5.192938];
    // fadeAnimation désactivé : le fondu des tuiles restait bloqué à opacité 0 dans ce conteneur.
    const map = L.map(el, { scrollWheelZoom: false, zoomControl: true, attributionControl: true, fadeAnimation: false });
    // Fond « voyager » : routes, végétation et eau en couleur, contrairement au fond gris de la carte de zone.
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap, &copy; CARTO', maxZoom: 19, subdomains: 'abcd'
    }).addTo(map);
    map.setView(pos, 16);
    const pin =
      '<svg width="42" height="56" viewBox="0 0 42 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<ellipse cx="21" cy="52" rx="7.5" ry="2.6" fill="rgba(17,20,18,0.28)"/>' +
      '<path d="M21 5c-7.18 0-13 5.82-13 13 0 3.05 1.05 5.85 2.8 8.07L21 49l10.2-22.93A12.94 12.94 0 0 0 34 18c0-7.18-5.82-13-13-13z" fill="#2E5A49" stroke="#FFFFFF" stroke-width="2.6"/>' +
      '<circle cx="21" cy="18" r="4.6" fill="#FFFFFF"/></svg>';
    L.marker(pos, {
      keyboard: false, zIndexOffset: 500,
      icon: L.divIcon({ className: 'me-pin', html: pin, iconSize: [42, 56], iconAnchor: [21, 50] })
    }).addTo(map);
    L.marker(pos, {
      keyboard: false, interactive: false,
      icon: L.divIcon({
        className: 'me-pin',
        html: '<span style="display:inline-block;padding:5px 11px;border-radius:100px;background:#FFFFFF;box-shadow:0 4px 12px -3px rgba(17,20,18,.45);font-size:12px;font-weight:700;color:#111412;white-space:nowrap;">Maisons d\u2019Excellence</span>',
        iconSize: [0, 0], iconAnchor: [-14, -4]
      })
    }).addTo(map);
    this._map = map;
    this._mapEl = el;
    this.stopMapWatch();
  }

  buildMap(el) {
    const L = window.L;
    // Même cause que sur la carte du bureau : sans cela le fondu des tuiles reste bloqué à opacité 0.
    const map = L.map(el, { scrollWheelZoom: false, zoomControl: true, fadeAnimation: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap, &copy; CARTO', maxZoom: 17, subdomains: 'abcd'
    }).addTo(map);
    const hubs = this.communes().filter(c => c.hub);
    hubs.forEach(c => {
      L.circle([c.lat, c.lng], { radius: 30000, color: '#2E5A49', weight: 1.2, opacity: 0.65, fillColor: '#2E5A49', fillOpacity: 0.055 }).addTo(map);
    });
    // Seuls les trois pôles portent leur nom : au-delà, les étiquettes se chevauchaient.
    this.communes().forEach(c => {
      const size = c.hub ? 13 : 9;
      const dot = '<span style="display:block;flex:none;width:' + size + 'px;height:' + size + 'px;border-radius:50%;background:' +
                  (c.hub ? '#111412' : '#2E5A49') + ';border:2px solid #FFFFFF;box-shadow:0 4px 10px -3px rgba(17,20,18,.8);"></span>';
      const html = c.hub
        ? '<div style="display:flex;align-items:center;gap:8px;width:max-content;transform:translate(-' + (size/2) + 'px,-' + (size/2) + 'px);white-space:nowrap;">' + dot +
          '<span style="padding:3px 9px;border-radius:100px;background:#FFFFFF;box-shadow:0 3px 9px -3px rgba(17,20,18,.4);font-size:12.5px;font-weight:700;color:#111412;">' + c.n + '</span></div>'
        : '<div style="transform:translate(-' + (size/2) + 'px,-' + (size/2) + 'px);">' + dot + '</div>';
      const m = L.marker([c.lat, c.lng], {
        icon: L.divIcon({ className: 'me-pin', html: html, iconSize: [0, 0] }),
        keyboard: false, zIndexOffset: c.hub ? 400 : 0
      }).addTo(map);
      if (!c.hub) m.bindTooltip(c.n, { direction: 'right', offset: [8, 0], className: 'me-pin' });
    });
    map.fitBounds(L.latLngBounds(hubs.map(c => [c.lat, c.lng])).pad(0.85));
    this._map = map;
    this._mapEl = el;
    this.stopMapWatch();
    setTimeout(() => { try { map.invalidateSize(); } catch (err) {} }, 260);
    setTimeout(() => { try { map.invalidateSize(); } catch (err) {} }, 900);
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

  communes() {
    return [
      { n: 'Bourg-en-Bresse', lat: 46.2056, lng: 5.2289, hub: true },
      { n: 'Meximieux', lat: 45.9083, lng: 5.1936, hub: true },
      { n: 'Ambérieu-en-Bugey', lat: 45.9569, lng: 5.3567, hub: true },
      { n: 'Villefranche-sur-Saône', lat: 45.9895, lng: 4.7194 },
      { n: 'Montluel', lat: 45.8517, lng: 5.0567 },
      { n: 'Lagnieu', lat: 45.9042, lng: 5.3417 },
      { n: 'Pérouges', lat: 45.9033, lng: 5.1747 },
      { n: 'Chalamont', lat: 45.9986, lng: 5.1747 },
      { n: 'Villars-les-Dombes', lat: 45.9994, lng: 5.0303 },
      { n: 'Miribel', lat: 45.8256, lng: 4.9542 }
    ];
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
    if (this._map) { this._map.remove(); this._map = null; }
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
    }, 7000);
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

  mapSpec() {
    if (this.page === 'zone') return { page: 'zone', id: 'me-map', build: (el) => this.buildMap(el) };
    if (this.page === 'contact') return { page: 'contact', id: 'me-map-bureau', build: (el) => this.buildBureauMap(el) };
    return null;
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
