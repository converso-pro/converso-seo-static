const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Iniciando build completo da biblioteca SEO...\n');

try {
  // 1. Preparar estrutura de arquivos
  console.log('📁 Passo 1: Reorganizando arquivos...');
  execSync('node prepare-static.js', { stdio: 'inherit' });
  
  // 2. Atualizar URLs
  console.log('\n🔗 Passo 2: Atualizando URLs para goconverso.com...');
  execSync('node update-urls.js', { stdio: 'inherit' });
  
  // 3. Gerar sitemap
  console.log('\n🗺️  Passo 3: Gerando sitemap...');
  execSync('node generate-sitemap-new.js', { stdio: 'inherit' });
  
  // Verificar resultado
  const deployDir = './deploy-output';
  const files = {
    biblioteca: fs.readdirSync(`${deployDir}/biblioteca`).length,
    library: fs.readdirSync(`${deployDir}/library`).length,
    libreria: fs.readdirSync(`${deployDir}/libreria`).length
  };
  
  console.log('\n✅ Build completo!');
  console.log('📊 Estatísticas:');
  console.log(`  - Biblioteca (PT): ${files.biblioteca} arquivos`);
  console.log(`  - Library (EN): ${files.library} arquivos`);
  console.log(`  - Librería (ES): ${files.libreria} arquivos`);
  console.log(`  - Total: ${files.biblioteca + files.library + files.libreria} arquivos`);
  
} catch (error) {
  console.error('\n❌ Erro durante o build:', error.message);
  process.exit(1);
}