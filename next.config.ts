import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
  },
  i18n: {
    locales: ['en', 'sv'],  // English and Swedish
    defaultLocale: 'en',    // Default to English
  },
};

export default nextConfig;
