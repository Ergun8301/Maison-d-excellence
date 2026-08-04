/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Export en pages statiques : les 26 pages deviennent des fichiers HTML
  // complets. Google reçoit le contenu sans attendre, et le site s'héberge
  // gratuitement, sans serveur à faire tourner. Les effets, eux, se jouent
  // normalement dans le navigateur.
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
