import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const messagesPath = path.resolve(process.cwd(), 'messages');

const withNextIntl = createNextIntlPlugin(messagesPath);

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
};

export default withNextIntl(nextConfig);
