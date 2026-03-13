/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  transform: async (config, path) => {
    const priorities = {
      "/": 1.0,
      "/services": 0.9,
      "/tarifs": 0.9,
      "/portfolio": 0.8,
      "/contact": 0.8,
      "/faq": 0.8,
      "/articles": 0.8,
      "/articles/combien-coute-un-site-web-en-belgique": 0.7,
      "/articles/freelance-vs-agence-web": 0.7,
      "/articles/quest-ce-que-le-seo": 0.7,
      "/articles/site-internet-asbl-belgique": 0.7,
      "/articles/site-mobile-responsive-2025": 0.7,
      "/about": 0.7,
      "/legals": 0.3,
    };
    const changefreqs = {
      "/": "weekly",
      "/services": "monthly",
      "/tarifs": "monthly",
      "/portfolio": "monthly",
      "/contact": "monthly",
      "/faq": "monthly",
      "/articles": "weekly",
      "/articles/combien-coute-un-site-web-en-belgique": "monthly",
      "/articles/freelance-vs-agence-web": "monthly",
      "/articles/quest-ce-que-le-seo": "monthly",
      "/articles/site-internet-asbl-belgique": "monthly",
      "/articles/site-mobile-responsive-2025": "monthly",
      "/about": "monthly",
      "/legals": "yearly",
    };
    return {
      loc: path,
      changefreq: changefreqs[path] ?? "monthly",
      priority: priorities[path] ?? 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
