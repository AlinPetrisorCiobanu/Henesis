import fs from 'fs'
import path from 'path'

const routes = [
  '/',
  '/proyectos',
  '/info',
  '/blog',
  '/contacto',
  '/login',
  '/register'
]

const siteUrl = 'https://www.henesis.com'

const urls = routes.map(route => {
  return `  <url>\n    <loc>${siteUrl}${route}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
}).join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`

const outDir = path.resolve(process.cwd(), 'public')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml)
console.log('sitemap.xml generated at public/sitemap.xml')
