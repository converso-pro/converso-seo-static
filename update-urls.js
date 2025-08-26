const fs = require('fs');
const path = require('path');

function updateURLsInFiles() {
  const deployDir = './deploy-output';
  
  console.log('🔄 Atualizando URLs nos arquivos HTML...\n');
  
  // Processar todos os arquivos HTML
  processDirectory(deployDir);
  
  console.log('\n✅ URLs atualizadas com sucesso!');
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      updateFile(filePath);
    }
  });
}

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // Detectar idioma baseado no caminho
  const isPortuguese = filePath.includes('/biblioteca/');
  const isEnglish = filePath.includes('/library/');
  const isSpanish = filePath.includes('/libreria/');
  
  // 1. Atualizar canonical URLs
  const oldCanonicalPattern = /<link rel="canonical" href="https:\/\/seo\.converso\.pro\/(.*?)"/g;
  if (oldCanonicalPattern.test(content)) {
    content = content.replace(oldCanonicalPattern, (match, path) => {
      let newPath = path;
      
      // Remover .html se existir
      newPath = newPath.replace('.html', '');
      
      // Mapear para nova estrutura
      if (path.startsWith('artigos/')) {
        newPath = path.replace('artigos/', 'biblioteca/').replace('.html', '');
        return `<link rel="canonical" href="https://goconverso.com/${newPath}"`;
      } else if (path.startsWith('articles/')) {
        newPath = path.replace('articles/', 'library/').replace('.html', '');
        return `<link rel="canonical" href="https://goconverso.com/${newPath}"`;
      } else if (path.startsWith('articulos/')) {
        newPath = path.replace('articulos/', 'libreria/').replace('.html', '');
        return `<link rel="canonical" href="https://goconverso.com/${newPath}"`;
      }
      
      // Para outras páginas (categorias, etc)
      if (isPortuguese) {
        return `<link rel="canonical" href="https://goconverso.com/biblioteca/${path.replace('.html', '')}"`;
      } else if (isSpanish) {
        return `<link rel="canonical" href="https://goconverso.com/libreria/${path.replace('.html', '')}"`;
      } else {
        return `<link rel="canonical" href="https://goconverso.com/library/${path.replace('.html', '')}"`;
      }
    });
    updated = true;
  }
  
  // 2. Atualizar hreflang tags
  const oldHreflangPattern = /<link rel="alternate" hreflang="(.*?)" href="https:\/\/seo\.converso\.pro\/(.*?)"/g;
  if (oldHreflangPattern.test(content)) {
    content = content.replace(oldHreflangPattern, (match, lang, path) => {
      let newPath = path.replace('.html', '');
      
      if (path.includes('artigos/') || lang === 'pt-BR') {
        newPath = newPath.replace('artigos/', 'biblioteca/');
        return `<link rel="alternate" hreflang="${lang}" href="https://goconverso.com/${newPath}"`;
      } else if (path.includes('articles/') || lang === 'en') {
        newPath = newPath.replace('articles/', 'library/');
        return `<link rel="alternate" hreflang="${lang}" href="https://goconverso.com/${newPath}"`;
      } else if (path.includes('articulos/') || lang === 'es') {
        newPath = newPath.replace('articulos/', 'libreria/');
        return `<link rel="alternate" hreflang="${lang}" href="https://goconverso.com/${newPath}"`;
      }
      
      return match;
    });
    updated = true;
  }
  
  // 3. Atualizar links internos
  const internalLinkPattern = /href="\/(artigos|articles|articulos)\/(.*?)\.html"/g;
  if (internalLinkPattern.test(content)) {
    content = content.replace(internalLinkPattern, (match, folder, slug) => {
      if (folder === 'artigos') {
        return `href="/biblioteca/${slug}"`;
      } else if (folder === 'articles') {
        return `href="/library/${slug}"`;
      } else if (folder === 'articulos') {
        return `href="/libreria/${slug}"`;
      }
      return match;
    });
    updated = true;
  }
  
  // 4. Atualizar og:url
  const ogUrlPattern = /<meta property="og:url" content="https:\/\/seo\.converso\.pro\/(.*?)"/g;
  if (ogUrlPattern.test(content)) {
    content = content.replace(ogUrlPattern, (match, path) => {
      let newPath = path.replace('.html', '');
      
      if (path.includes('artigos/')) {
        newPath = newPath.replace('artigos/', 'biblioteca/');
      } else if (path.includes('articles/')) {
        newPath = newPath.replace('articles/', 'library/');
      } else if (path.includes('articulos/')) {
        newPath = newPath.replace('articulos/', 'libreria/');
      }
      
      return `<meta property="og:url" content="https://goconverso.com/${newPath}"`;
    });
    updated = true;
  }
  
  // 5. Atualizar schema.org URLs
  content = content.replace(/"https:\/\/seo\.converso\.pro/g, '"https://goconverso.com');
  
  // 6. Atualizar links para home da biblioteca
  if (isPortuguese) {
    content = content.replace(/href="\/"/g, 'href="/biblioteca/"');
    content = content.replace(/href="\/index\.html"/g, 'href="/biblioteca/"');
  } else if (isSpanish) {
    content = content.replace(/href="\/"/g, 'href="/libreria/"');
    content = content.replace(/href="\/index\.html"/g, 'href="/libreria/"');
  } else if (isEnglish) {
    content = content.replace(/href="\/"/g, 'href="/library/"');
    content = content.replace(/href="\/index\.html"/g, 'href="/library/"');
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Atualizado: ${path.relative('./deploy-output', filePath)}`);
  }
}

// Executar atualizações
updateURLsInFiles();