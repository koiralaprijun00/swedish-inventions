/** @type {import('next-sitemap').IConfig} */
export default { // Use export default
  siteUrl: process.env.SITE_URL || 'https://swedishinventions.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/private-page'],
};