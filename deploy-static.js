const fs = require('fs');
const path = require('path');

console.log('🚀 Deploy Static Pages - Starting...\n');

// Simple function to copy directory recursively
function copyDir(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  // Read all items in source directory
  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      // Recursively copy subdirectories
      copyDir(srcPath, destPath);
    } else {
      // Copy file
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Main deploy function
function deployStatic() {
  const outputDir = path.join(__dirname, 'output');
  const deployDir = path.join(__dirname, 'deploy-output');

  // Clean deploy directory
  if (fs.existsSync(deployDir)) {
    fs.rmSync(deployDir, { recursive: true, force: true });
  }
  fs.mkdirSync(deployDir, { recursive: true });

  // Copy all files from output to deploy-output
  console.log('📁 Copying static files...');
  copyDir(outputDir, deployDir);

  // Verify critical files exist
  const criticalFiles = [
    'index.html',
    'sitemap.xml',
    'robots.txt',
    'styles.css',
    'barbearias/index.html',
    'assistencia-tecnica/index.html',
    'gestao-crescimento/index.html',
    'saloes-beleza/index.html',
    'ecommerce/index.html',
    'sistemas-agendamento/index.html'
  ];

  console.log('\n✅ Verifying critical files:');
  criticalFiles.forEach(file => {
    const filePath = path.join(deployDir, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      console.log(`  ✓ ${file} (${stats.size} bytes)`);
    } else {
      console.log(`  ❌ ${file} - MISSING!`);
    }
  });

  // Count total files
  function countFiles(dir) {
    let count = 0;
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const itemPath = path.join(dir, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        count += countFiles(itemPath);
      } else if (item.endsWith('.html')) {
        count++;
      }
    });
    
    return count;
  }

  const totalHtmlFiles = countFiles(deployDir);
  console.log(`\n📊 Total HTML files: ${totalHtmlFiles}`);
  
  console.log('\n✅ Deploy preparation complete!');
  console.log('📁 Output directory: deploy-output/');
  console.log('\n💡 Next: Push to GitHub to trigger Vercel deployment');
}

// Run deploy
deployStatic();