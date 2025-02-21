import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./messages');

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
    localeDetection: false,
  },
  images: { // Images config goes here, outside i18n
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
  },
};

export default withNextIntl(nextConfig);