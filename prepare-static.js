const fs = require('fs');
const path = require('path');

function reorganizeFiles() {
  const outputDir = './output';
  const deployDir = './deploy-output';
  
  console.log('🚀 Iniciando reorganização para goconverso.com...\n');
  
  // Limpar diretório de deploy
  if (fs.existsSync(deployDir)) {
    console.log('🧹 Limpando diretório de deploy anterior...');
    fs.rmSync(deployDir, { recursive: true });
  }
  fs.mkdirSync(deployDir, { recursive: true });
  
  // Criar estrutura nova para três idiomas
  console.log('📁 Criando estrutura de diretórios...');
  fs.mkdirSync(path.join(deployDir, 'biblioteca'), { recursive: true });
  fs.mkdirSync(path.join(deployDir, 'library'), { recursive: true });
  fs.mkdirSync(path.join(deployDir, 'libreria'), { recursive: true });
  fs.mkdirSync(path.join(deployDir, 'assets'), { recursive: true });
  
  // 🇧🇷 Mover artigos em PORTUGUÊS para /biblioteca/
  console.log('\n🇧🇷 Processando conteúdo em PORTUGUÊS...');
  const artigosDir = path.join(outputDir, 'artigos');
  if (fs.existsSync(artigosDir)) {
    const files = fs.readdirSync(artigosDir);
    let count = 0;
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const oldPath = path.join(artigosDir, file);
        const newPath = path.join(deployDir, 'biblioteca', file);
        fs.copyFileSync(oldPath, newPath);
        count++;
      }
    });
    console.log(`  ✅ ${count} artigos movidos para /biblioteca/`);
  }
  
  // 🇺🇸 Mover artigos em INGLÊS para /library/
  console.log('\n🇺🇸 Processando conteúdo em INGLÊS...');
  const articlesDir = path.join(outputDir, 'articles');
  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir);
    let count = 0;
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const oldPath = path.join(articlesDir, file);
        const newPath = path.join(deployDir, 'library', file);
        fs.copyFileSync(oldPath, newPath);
        count++;
      }
    });
    console.log(`  ✅ ${count} artigos movidos para /library/`);
  }
  
  // 🇪🇸 Mover artigos em ESPANHOL para /libreria/
  console.log('\n🇪🇸 Processando conteúdo em ESPANHOL...');
  const articulosDir = path.join(outputDir, 'articulos');
  if (fs.existsSync(articulosDir)) {
    const files = fs.readdirSync(articulosDir);
    let count = 0;
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const oldPath = path.join(articulosDir, file);
        const newPath = path.join(deployDir, 'libreria', file);
        fs.copyFileSync(oldPath, newPath);
        count++;
      }
    });
    console.log(`  ✅ ${count} artigos movidos para /libreria/`);
  }
  
  // Mapear categorias para cada idioma
  console.log('\n📂 Processando categorias...');
  
  const categoriesPT = [
    'barbearias',
    'assistencia-tecnica',
    'saloes-beleza',
    'gestao-crescimento',
    'ecommerce',
    'sistemas-agendamento'
  ];
  
  // Mapear categorias em português que existem no output
  categoriesPT.forEach(category => {
    const srcPath = path.join(outputDir, category);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(deployDir, 'biblioteca', category);
      copyDirectory(srcPath, destPath);
      console.log(`  ✅ Categoria PT: ${category}`);
    }
  });
  
  // Para categorias em inglês, vamos verificar se existem traduções
  const categoriesENMap = {
    'barbershops': 'barbershop',
    'tech-support': 'assistencia-tecnica',
    'beauty-salons': 'saloes-beleza',
    'business-growth': 'business-growth',
    'ecommerce': 'ecommerce',
    'booking-systems': 'booking-systems'
  };
  
  // Por enquanto, vamos copiar apenas se encontrarmos as pastas específicas
  const enCategories = ['business-growth', 'ecommerce', 'digital-marketing', 'booking-systems'];
  enCategories.forEach(category => {
    const srcPath = path.join(outputDir, category);
    if (fs.existsSync(srcPath)) {
      const destPath = path.join(deployDir, 'library', category);
      copyDirectory(srcPath, destPath);
      console.log(`  ✅ Categoria EN: ${category}`);
    }
  });
  
  // Criar páginas index para cada idioma
  console.log('\n📄 Criando páginas index...');
  createIndexPages(outputDir, deployDir);
  
  // Copiar assets
  console.log('\n🎨 Copiando assets...');
  const stylesPath = path.join(outputDir, 'styles.css');
  if (fs.existsSync(stylesPath)) {
    fs.copyFileSync(stylesPath, path.join(deployDir, 'assets', 'styles.css'));
    console.log('  ✅ styles.css copiado');
  }
  
  // Copiar robots.txt
  const robotsPath = path.join(outputDir, 'robots.txt');
  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, path.join(deployDir, 'robots.txt'));
    console.log('  ✅ robots.txt copiado');
  }
  
  // Criar arquivo de redirect principal
  createMainRedirect(deployDir);
  
  console.log('\n✅ Reorganização completa!');
  console.log(`📊 Total de arquivos: ${countFiles(deployDir)}`);
  console.log('\n📁 Estrutura criada:');
  console.log('  /biblioteca/ - Conteúdo em português');
  console.log('  /library/    - Conteúdo em inglês');
  console.log('  /libreria/   - Conteúdo em espanhol');
  console.log('\n💡 Próximo passo: npm run deploy');
}

function createIndexPages(outputDir, deployDir) {
  // Usar os índices específicos de cada idioma
  const ptIndexPath = path.join(outputDir, 'pt-BR', 'index.html');
  const enIndexPath = path.join(outputDir, 'en', 'index.html');
  const esIndexPath = path.join(outputDir, 'es', 'index.html');
  const defaultIndexPath = path.join(outputDir, 'index.html');
  
  // Biblioteca (português) - usar pt-BR/index.html ou fallback para index.html
  if (fs.existsSync(ptIndexPath)) {
    fs.copyFileSync(ptIndexPath, path.join(deployDir, 'biblioteca', 'index.html'));
    console.log('  ✅ Index PT criado (de pt-BR/index.html)');
  } else if (fs.existsSync(defaultIndexPath)) {
    fs.copyFileSync(defaultIndexPath, path.join(deployDir, 'biblioteca', 'index.html'));
    console.log('  ✅ Index PT criado (de index.html)');
  }
  
  // Library (inglês) - usar en/index.html
  if (fs.existsSync(enIndexPath)) {
    fs.copyFileSync(enIndexPath, path.join(deployDir, 'library', 'index.html'));
    console.log('  ✅ Index EN criado (de en/index.html)');
  } else {
    console.log('  ⚠️ Index EN não encontrado em en/index.html');
  }
  
  // Librería (espanhol) - usar es/index.html
  if (fs.existsSync(esIndexPath)) {
    fs.copyFileSync(esIndexPath, path.join(deployDir, 'libreria', 'index.html'));
    console.log('  ✅ Index ES criado (de es/index.html)');
  } else {
    console.log('  ⚠️ Index ES não encontrado em es/index.html');
  }
}

function createMainRedirect(deployDir) {
  // Criar uma página principal que redireciona baseado no idioma do navegador
  const redirectHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GoConverso Library - SEO Resources</title>
    <script>
        // Detectar idioma do navegador e redirecionar
        const userLang = navigator.language || navigator.userLanguage;
        
        if (userLang.startsWith('pt')) {
            window.location.href = '/biblioteca/';
        } else if (userLang.startsWith('es')) {
            window.location.href = '/libreria/';
        } else {
            window.location.href = '/library/';
        }
    </script>
    <noscript>
        <meta http-equiv="refresh" content="0; url=/library/">
    </noscript>
</head>
<body>
    <p>Redirecting to library...</p>
    <p><a href="/biblioteca/">Português</a> | <a href="/library/">English</a> | <a href="/libreria/">Español</a></p>
</body>
</html>`;
  
  fs.writeFileSync(path.join(deployDir, 'index.html'), redirectHTML);
  console.log('  ✅ Página de redirect principal criada');
}

function copyDirectory(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const files = fs.readdirSync(src);
  files.forEach(file => {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function countFiles(dir) {
  let count = 0;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      count += countFiles(filePath);
    } else {
      count++;
    }
  });
  return count;
}

// Executar reorganização
reorganizeFiles();