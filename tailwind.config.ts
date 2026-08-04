import type { Config } from 'tailwindcss';

/**
 * Les tokens définitifs (couleurs, échelle typographique, espacements, rayons,
 * ombres, grilles, ruptures responsive) proviennent de la section « Tokens »
 * du dossier de handoff Claude Design et seront reportés ici à l'identique.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
