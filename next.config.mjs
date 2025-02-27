import { withContentCollections } from '@content-collections/next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

// withContentCollections must be the outermost plugin
export default withContentCollections(withNextIntl(withBundleAnalyzer(nextConfig)));
