/**
 * Conversion mécanique du balisage Claude Design vers JSX.
 *
 * Objectif : ne rien changer au rendu. Les styles en ligne, les classes et
 * l'ordre des nœuds sont conservés tels quels ; seule la syntaxe change.
 */

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr',
]);

/** Attributs HTML dont le nom diffère en JSX. */
const ATTR = {
  class: 'className',
  for: 'htmlFor',
  tabindex: 'tabIndex',
  readonly: 'readOnly',
  maxlength: 'maxLength',
  minlength: 'minLength',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  spellcheck: 'spellCheck',
  contenteditable: 'contentEditable',
  srcset: 'srcSet',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  usemap: 'useMap',
  novalidate: 'noValidate',
  enctype: 'encType',
  crossorigin: 'crossOrigin',
  viewbox: 'viewBox',
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-opacity': 'strokeOpacity',
  'fill-rule': 'fillRule',
  'fill-opacity': 'fillOpacity',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'text-anchor': 'textAnchor',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-weight': 'fontWeight',
  'letter-spacing': 'letterSpacing',
  'dominant-baseline': 'dominantBaseline',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'gradientunits': 'gradientUnits',
  'patternunits': 'patternUnits',
  'preserveaspectratio': 'preserveAspectRatio',
};

/** Attributs booléens : `required=""` en HTML devient `required={true}` en JSX. */
const BOOLEAN = new Set([
  'required', 'disabled', 'checked', 'readonly', 'autofocus', 'multiple',
  'selected', 'hidden', 'open', 'muted', 'controls', 'loop', 'autoplay',
  'playsinline', 'novalidate', 'async', 'defer', 'reversed', 'itemscope',
  'default', 'formnovalidate', 'ismap', 'nomodule',
]);

/** Attributs que React attend en nombre. */
const NUMERIC = new Set([
  'rows', 'cols', 'size', 'span', 'start', 'maxlength', 'minlength',
  'tabindex', 'colspan', 'rowspan', 'step', 'min', 'max',
]);

/**
 * Décode les entités HTML d'une valeur d'attribut.
 *
 * Indispensable : en HTML, `&amp;` est décodé par l'analyseur avant que la
 * valeur ne serve. En JSX, cette valeur devient une chaîne JavaScript où
 * `&amp;` resterait littéral — une URL telle que
 * `photo-123?auto=format&amp;w=2400` ne pointerait alors sur rien.
 */
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

const decodeEntities = (s) =>
  s.replace(/&(?:#(\d+)|#[xX]([0-9a-fA-F]+)|([a-zA-Z]+));/g, (m, dec, hex, name) => {
    if (dec) return String.fromCodePoint(Number(dec));
    if (hex) return String.fromCodePoint(parseInt(hex, 16));
    return ENTITIES[name] ?? m;
  });

const camel = (p) =>
  p.startsWith('--') ? p : p.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** `{{ expr }}` -> `${expr}` dans un littéral de gabarit. */
const interp = (s) => s.replace(/\{\{\s*([\s\S]*?)\s*\}\}/g, (_, e) => '${' + e + '}');
const hasBinding = (s) => /\{\{/.test(s);

/** "a:b;c:d" -> objet de style JSX, en préservant valeurs et ordre. */
function styleToObject(css) {
  const out = [];
  let depth = 0;
  let cur = '';
  // Découpe sur `;` hors parenthèses (clamp(), rgba(), linear-gradient()…).
  for (const ch of css) {
    if (ch === '(') depth++;
    else if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      if (cur.trim()) out.push(cur);
      cur = '';
    } else cur += ch;
  }
  if (cur.trim()) out.push(cur);

  const props = out.map((decl) => {
    const i = decl.indexOf(':');
    if (i === -1) return null;
    const prop = decl.slice(0, i).trim();
    const val = decl.slice(i + 1).trim();
    const key = /^[a-zA-Z][a-zA-Z0-9]*$/.test(camel(prop)) ? camel(prop) : JSON.stringify(prop);
    const value = hasBinding(val)
      ? '`' + interp(val).replace(/`/g, '\\`') + '`'
      : JSON.stringify(val);
    return `${key}: ${value}`;
  });

  return '{ ' + props.filter(Boolean).join(', ') + ' }';
}

/** Découpe la chaîne d'attributs d'une balise en paires nom/valeur. */
function splitAttrs(src) {
  const attrs = [];
  const re = /([:@a-zA-Z_][-:.\w]*)(\s*=\s*("([^"]*)"|'([^']*)'))?/g;
  let m;
  while ((m = re.exec(src))) {
    const name = m[1];
    const raw = m[4] !== undefined ? m[4] : m[5] !== undefined ? m[5] : null;
    // Décodage ici, une fois pour toutes : styles, URLs et attributs
    // déclaratifs deviennent tous des chaînes JavaScript en aval.
    attrs.push([name, raw === null ? null : decodeEntities(raw)]);
  }
  return attrs;
}

function convertAttrs(src) {
  return splitAttrs(src)
    .map(([name, value]) => {
      const lower = name.toLowerCase();

      if (lower === 'style' && value !== null) return `style={${styleToObject(value)}}`;

      // Attributs déclaratifs Claude Design : conservés tels quels, notre
      // runtime les relit côté client pour rejouer survol et focus.
      if (lower === 'style-hover' || lower === 'style-focus') {
        return `${lower}=${JSON.stringify(value ?? '')}`;
      }

      const jsxName = ATTR[lower] ?? (lower.includes('-') ? name : ATTR[name] ?? name);

      if (value === null) return `${jsxName}={true}`;
      if (BOOLEAN.has(lower) && (value === '' || value.toLowerCase() === lower)) {
        return `${jsxName}={true}`;
      }
      if (NUMERIC.has(lower) && /^-?\d+$/.test(value.trim())) {
        return `${jsxName}={${value.trim()}}`;
      }
      if (hasBinding(value)) {
        const only = /^\{\{\s*([\s\S]*?)\s*\}\}$/.exec(value);
        return only ? `${jsxName}={${only[1]}}` : `${jsxName}={\`${interp(value).replace(/`/g, '\\`')}\`}`;
      }
      return `${jsxName}=${JSON.stringify(value)}`;
    })
    .join(' ');
}

/** Texte libre : bindings -> accolades, accolades littérales échappées. */
function convertText(text) {
  return text
    .split(/(\{\{[\s\S]*?\}\})/)
    .map((part) => {
      const m = /^\{\{\s*([\s\S]*?)\s*\}\}$/.exec(part);
      if (m) return `{${m[1]}}`;
      return part.replace(/([{}])/g, (c) => `{'${c}'}`);
    })
    .join('');
}

export function toJsx(html, { loopKey = 'i' } = {}) {
  let out = '';
  let i = 0;
  let loopDepth = 0;

  while (i < html.length) {
    const lt = html.indexOf('<', i);
    if (lt === -1) {
      out += convertText(html.slice(i));
      break;
    }
    out += convertText(html.slice(i, lt));

    // Commentaire HTML
    if (html.startsWith('<!--', lt)) {
      const end = html.indexOf('-->', lt);
      const body = html.slice(lt + 4, end).replace(/\*\//g, '*\\/');
      out += `{/*${body}*/}`;
      i = end + 3;
      continue;
    }

    const gt = html.indexOf('>', lt);
    if (gt === -1) {
      out += convertText(html.slice(lt));
      break;
    }

    let raw = html.slice(lt + 1, gt);
    const closing = raw.startsWith('/');
    if (closing) raw = raw.slice(1);
    const selfClosed = raw.endsWith('/');
    if (selfClosed) raw = raw.slice(0, -1);

    const sp = raw.search(/\s/);
    const tag = (sp === -1 ? raw : raw.slice(0, sp)).trim();
    const attrSrc = sp === -1 ? '' : raw.slice(sp);

    // Boucles
    if (tag === 'sc-for') {
      if (closing) {
        loopDepth--;
        out += '))}';
      } else {
        const attrs = Object.fromEntries(splitAttrs(attrSrc));
        const list = /\{\{\s*([\s\S]*?)\s*\}\}/.exec(attrs.list ?? '')?.[1] ?? '[]';
        const as = attrs.as ?? 'item';
        const idx = loopKey + (loopDepth || '');
        loopDepth++;
        out += `{(${list} ?? []).map((${as}, ${idx}) => (`;
      }
      i = gt + 1;
      continue;
    }

    // Conditions
    if (tag === 'sc-if') {
      if (closing) {
        out += '</>) : null}';
      } else {
        const attrs = Object.fromEntries(splitAttrs(attrSrc));
        const cond = /\{\{\s*([\s\S]*?)\s*\}\}/.exec(attrs.value ?? '')?.[1] ?? 'false';
        out += `{(${cond}) ? (<>`;
      }
      i = gt + 1;
      continue;
    }

    if (closing) {
      out += `</${tag}>`;
      i = gt + 1;
      continue;
    }

    const attrs = convertAttrs(attrSrc);
    const space = attrs ? ' ' + attrs : '';
    // Une balise ouvrante juste après `sc-for` porte la clé de liste.
    const needsKey = loopDepth > 0 && /\{\(\S+ \?\? \[\]\)\.map\(\([^)]*\) => \($/.test(out.trimEnd());
    const key = needsKey ? ` key={${loopKey + (loopDepth - 1 || '')}}` : '';

    if (VOID.has(tag) || selfClosed) out += `<${tag}${space}${key} />`;
    else out += `<${tag}${space}${key}>`;

    i = gt + 1;
  }

  return out;
}
