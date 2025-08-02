/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://smartbot.am',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.9,
  sitemapSize: 5000,
  alternateRefs: [
    {
      href: 'https://smartbot.am/hy',
      hreflang: 'hy',
    },
    {
      href: 'https://smartbot.am/en',
      hreflang: 'en',
    },
  ],
};
