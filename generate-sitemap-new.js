const fs = require('fs');
const path = require('path');

function generateSitemap() {
  const deployDir = './deploy-output';
  const baseUrl = 'https://goconverso.com';
  
  console.log('🗺️  Gerando novo sitemap.xml...\n');
  
  const urls = [];
  
  // Adicionar páginas principais
  urls.push({
    loc: `${baseUrl}/biblioteca/`,
    changefreq: 'weekly',
    priority: '0.9'
  });
  
  urls.push({
    loc: `${baseUrl}/library/`,
    changefreq: 'weekly',
    priority: '0.9'
  });
  
  urls.push({
    loc: `${baseUrl}/libreria/`,
    changefreq: 'weekly',
    priority: '0.9'
  });
  
  // Coletar todos os arquivos HTML
  const ptFiles = collectFiles(path.join(deployDir, 'biblioteca'));
  const enFiles = collectFiles(path.join(deployDir, 'library'));
  const esFiles = collectFiles(path.join(deployDir, 'libreria'));
  
  // Adicionar arquivos ao sitemap
  ptFiles.forEach(file => {
    urls.push({
      loc: `${baseUrl}/biblioteca/${path.basename(file, '.html')}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });
  
  enFiles.forEach(file => {
    urls.push({
      loc: `${baseUrl}/library/${path.basename(file, '.html')}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });
  
  esFiles.forEach(file => {
    urls.push({
      loc: `${baseUrl}/libreria/${path.basename(file, '.html')}`,
      changefreq: 'monthly',
      priority: '0.7'
    });
  });
  
  // Gerar XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  // Salvar sitemap
  fs.writeFileSync(path.join(deployDir, 'sitemap.xml'), xml);
  console.log(`✅ Sitemap gerado com ${urls.length} URLs`);
  console.log(`   📁 Salvo em: deploy-output/sitemap.xml`);
}

function collectFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Não incluir index.html das categorias no sitemap principal
      if (file !== 'assets') {
        collectFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && file !== 'index.html') {
      fileList.push(file);
    }
  });
  
  return fileList;
}

// Executar
generateSitemap();
