const fs = require('fs');

console.log('🔧 Corrigindo links nas páginas biblioteca/library/libreria...\n');

// Arquivos para corrigir
const files = [
  'output/biblioteca.html',
  'output/library.html',
  'output/libreria.html',
  'deploy-output/biblioteca/index.html',
  'deploy-output/library/index.html',
  'deploy-output/libreria/index.html'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`📄 Processando: ${file}`);
    
    let content = fs.readFileSync(file, 'utf8');
    let changes = 0;
    
    // Remover prefixo /biblioteca/, /library/, /libreria/ dos links internos
    // Mas manter para os links de idioma
    content = content.replace(/href="\/biblioteca\/([^"]+)"/g, (match, path) => {
      // Se for link de idioma, manter
      if (path === '' || path === 'index.html') {
        return match;
      }
      changes++;
      return `href="/${path}"`;
    });
    
    content = content.replace(/href="\/library\/([^"]+)"/g, (match, path) => {
      if (path === '' || path === 'index.html') {
        return match;
      }
      changes++;
      return `href="/${path}"`;
    });
    
    content = content.replace(/href="\/libreria\/([^"]+)"/g, (match, path) => {
      if (path === '' || path === 'index.html') {
        return match;
      }
      changes++;
      return `href="/${path}"`;
    });
    
    fs.writeFileSync(file, content);
    console.log(`  ✅ ${changes} links corrigidos\n`);
  } else {
    console.log(`  ❌ Arquivo não encontrado: ${file}\n`);
  }
});

console.log('✅ Correção concluída!');
