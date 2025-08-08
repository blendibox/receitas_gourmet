/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:  'https://cursoconfeitaria.blendibox.com.br',
  generateRobotsTxt: false,
  sitemapSize: 5000,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: ["/404"] },
      { userAgent: "*", allow: "/" },
    ]
  },
}