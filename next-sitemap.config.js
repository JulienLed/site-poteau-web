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
      "/about": 0.7,
      "/legals": 0.3,
    };
    const changefreqs = {
      "/": "weekly",
      "/services": "monthly",
      "/tarifs": "monthly",
      "/portfolio": "monthly",
      "/contact": "monthly",
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
