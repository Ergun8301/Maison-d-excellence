/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Les visuels Unsplash de la maquette sont provisoires : le handoff les
    // liste comme à remplacer par les photos de chantier du client.
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
};

export default nextConfig;
