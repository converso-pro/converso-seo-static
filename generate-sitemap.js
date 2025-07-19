const fs = require('fs');
const path = require('path');

function generateSitemap() {
  const outputDir = path.join(__dirname, 'output');
  const urls = [];
  
  // Function to recursively find all index.html files
  function findHtmlFiles(dir, baseUrl = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        findHtmlFiles(filePath, baseUrl + '/' + file);
      } else if (file === 'index.html') {
        // Convert file path to URL
        const url = baseUrl || '/';
        urls.push({
          loc: `https://seo.converso.pro${url}`,
          changefreq: 'weekly',
          priority: url === '/' ? '1.0' : '0.8'
        });
      }
    }
  }
  
  findHtmlFiles(outputDir);
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
  
  // Write sitemap
  fs.writeFileSync(path.join(outputDir, 'sitemap.xml'), sitemap);
  console.log(`✅ Generated sitemap.xml with ${urls.length} URLs`);
}

generateSitemap();