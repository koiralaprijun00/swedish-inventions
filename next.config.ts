import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./messages'); // Provide the path to your translation files

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
    locales: ['en', 'sv'],
    defaultLocale: 'en',
  },
};

export default withNextIntl(nextConfig);
