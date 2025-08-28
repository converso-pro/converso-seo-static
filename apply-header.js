#!/usr/bin/env node

/**
 * Universal Header Application Script
 * Applies the universal header to all HTML pages in the SEO library
 * 
 * Usage:
 *   node apply-header.js                    # Apply to all pages
 *   node apply-header.js --test             # Test mode (3 pages only)
 *   node apply-header.js --file=index.html  # Apply to specific file
 *   node apply-header.js --dry-run          # Preview changes without applying
 *   node apply-header.js --restore-backup   # Restore from backup
 */

const fs = require('fs').promises;
const path = require('path');
const cheerio = require('cheerio');

// Configuration
const CONFIG = {
  templatePath: path.join(__dirname, 'templates/header-universal.html'),
  cssPath: path.join(__dirname, 'templates/header-universal.css'),
  jsPath: path.join(__dirname, 'templates/header-universal.js'),
  outputDir: path.join(__dirname, 'output'),
  assetsDir: path.join(__dirname, 'output/assets'),
  backupDir: path.join(__dirname, 'backup-header-' + new Date().toISOString().slice(0, 10)),
  
  // Language mappings
  languages: {
    pt: {
      code: 'pt',
      name: 'Português',
      flag: '🇧🇷',
      libraryPath: '/biblioteca',
      libraryName: 'Biblioteca',
      paths: ['/biblioteca', '/artigos', 'pt-BR']
    },
    es: {
      code: 'es',
      name: 'Español',
      flag: '🇪🇸',
      libraryPath: '/libreria',
      libraryName: 'Librería',
      paths: ['/libreria', '/articulos', '/es/']
    },
    en: {
      code: 'en',
      name: 'English',
      flag: '🇺🇸',
      libraryPath: '/library',
      libraryName: 'Library',
      paths: ['/library', '/articles', '/en/']
    }
  }
};

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  test: args.includes('--test'),
  dryRun: args.includes('--dry-run'),
  restoreBackup: args.includes('--restore-backup'),
  specificFile: args.find(arg => arg.startsWith('--file='))?.split('=')[1],
  verbose: args.includes('--verbose') || args.includes('-v'),
  force: args.includes('--force')
};

// Statistics tracking
const stats = {
  totalFiles: 0,
  processedFiles: 0,
  skippedFiles: 0,
  errorFiles: 0,
  backedUpFiles: 0,
  languages: { pt: 0, es: 0, en: 0 },
  startTime: Date.now()
};

// Console colors
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

/**
 * Log with color
 */
function log(message, color = 'reset') {
  console.log(colors[color] + message + colors.reset);
}

/**
 * Main execution
 */
async function main() {
  try {
    log('\n🚀 Universal Header Application Script', 'bright');
    log('=' .repeat(50), 'cyan');
    
    // Handle backup restoration
    if (options.restoreBackup) {
      await restoreFromBackup();
      return;
    }
    
    // Validate environment
    await validateEnvironment();
    
    // Copy assets
    if (!options.dryRun) {
      await copyAssets();
    }
    
    // Get files to process
    const files = await getHTMLFiles();
    stats.totalFiles = files.length;
    
    log(`\n📁 Found ${stats.totalFiles} HTML files to process`, 'cyan');
    
    if (options.test) {
      log('🧪 TEST MODE: Processing only 3 sample files', 'yellow');
      files.splice(3);
    }
    
    if (options.dryRun) {
      log('👁️  DRY RUN MODE: No files will be modified', 'yellow');
    }
    
    // Create backup
    if (!options.dryRun && !options.test) {
      await createBackup(files);
    }
    
    // Process files
    log('\n⚙️  Processing files...', 'cyan');
    
    for (const file of files) {
      await processFile(file);
    }
    
    // Show report
    showReport();
    
  } catch (error) {
    log(`\n❌ Error: ${error.message}`, 'red');
    process.exit(1);
  }
}

/**
 * Validate that required files exist
 */
async function validateEnvironment() {
  log('\n🔍 Validating environment...', 'cyan');
  
  // Check template exists
  try {
    await fs.access(CONFIG.templatePath);
    log('  ✓ Template file found', 'green');
  } catch {
    throw new Error(`Template not found: ${CONFIG.templatePath}`);
  }
  
  // Check CSS exists
  try {
    await fs.access(CONFIG.cssPath);
    log('  ✓ CSS file found', 'green');
  } catch {
    throw new Error(`CSS not found: ${CONFIG.cssPath}`);
  }
  
  // Check JS exists
  try {
    await fs.access(CONFIG.jsPath);
    log('  ✓ JavaScript file found', 'green');
  } catch {
    throw new Error(`JavaScript not found: ${CONFIG.jsPath}`);
  }
  
  // Check output directory
  try {
    await fs.access(CONFIG.outputDir);
    log('  ✓ Output directory found', 'green');
  } catch {
    throw new Error(`Output directory not found: ${CONFIG.outputDir}`);
  }
}

/**
 * Copy CSS and JS to assets directory
 */
async function copyAssets() {
  log('\n📦 Copying assets...', 'cyan');
  
  // Create assets directory if it doesn't exist
  try {
    await fs.mkdir(CONFIG.assetsDir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  // Copy CSS
  const cssContent = await fs.readFile(CONFIG.cssPath, 'utf-8');
  await fs.writeFile(path.join(CONFIG.assetsDir, 'header-universal.css'), cssContent);
  log('  ✓ Copied header-universal.css', 'green');
  
  // Copy JS
  const jsContent = await fs.readFile(CONFIG.jsPath, 'utf-8');
  await fs.writeFile(path.join(CONFIG.assetsDir, 'header-universal.js'), jsContent);
  log('  ✓ Copied header-universal.js', 'green');
}

/**
 * Get all HTML files recursively
 */
async function getHTMLFiles() {
  const files = [];
  
  async function scanDirectory(dir) {
    const items = await fs.readdir(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'assets') {
        await scanDirectory(fullPath);
      } else if (item.isFile() && item.name.endsWith('.html')) {
        // Skip specific files
        if (item.name === 'header-preview.html') continue;
        if (item.name.includes('backup')) continue;
        
        files.push(fullPath);
      }
    }
  }
  
  if (options.specificFile) {
    const specificPath = path.join(CONFIG.outputDir, options.specificFile);
    try {
      await fs.access(specificPath);
      files.push(specificPath);
    } catch {
      throw new Error(`Specified file not found: ${options.specificFile}`);
    }
  } else {
    await scanDirectory(CONFIG.outputDir);
  }
  
  return files.sort();
}

/**
 * Create backup of files
 */
async function createBackup(files) {
  log('\n💾 Creating backup...', 'cyan');
  
  try {
    await fs.mkdir(CONFIG.backupDir, { recursive: true });
    
    for (const file of files) {
      const relativePath = path.relative(CONFIG.outputDir, file);
      const backupPath = path.join(CONFIG.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      
      await fs.mkdir(backupDir, { recursive: true });
      const content = await fs.readFile(file, 'utf-8');
      await fs.writeFile(backupPath, content);
      stats.backedUpFiles++;
    }
    
    log(`  ✓ Backed up ${stats.backedUpFiles} files to ${CONFIG.backupDir}`, 'green');
  } catch (error) {
    log(`  ⚠ Backup failed: ${error.message}`, 'yellow');
    
    if (!options.force) {
      throw new Error('Backup failed. Use --force to continue without backup.');
    }
  }
}

/**
 * Detect language from file path
 */
function detectLanguage(filePath) {
  const normalizedPath = filePath.replace(/\\/g, '/').toLowerCase();
  
  // Check each language's paths
  for (const [langCode, langConfig] of Object.entries(CONFIG.languages)) {
    for (const pathPattern of langConfig.paths) {
      if (normalizedPath.includes(pathPattern)) {
        return langConfig;
      }
    }
  }
  
  // Default to English
  return CONFIG.languages.en;
}

/**
 * Process a single HTML file
 */
async function processFile(filePath) {
  const relativePath = path.relative(CONFIG.outputDir, filePath);
  
  try {
    // Read file
    const html = await fs.readFile(filePath, 'utf-8');
    const $ = cheerio.load(html, {
      decodeEntities: false,
      xmlMode: false
    });
    
    // Detect language
    const lang = detectLanguage(filePath);
    stats.languages[lang.code]++;
    
    // Read template
    let headerTemplate = await fs.readFile(CONFIG.templatePath, 'utf-8');
    
    // Replace placeholders
    headerTemplate = headerTemplate
      .replace(/{LANG_CODE}/g, lang.code)
      .replace(/{LANG_NAME}/g, lang.name)
      .replace(/{FLAG_EMOJI}/g, lang.flag)
      .replace(/{LIBRARY_PATH}/g, lang.libraryPath)
      .replace(/{LIBRARY_NAME}/g, lang.libraryName);
    
    // Remove old headers
    const oldHeaderSelectors = [
      'header',
      '.header',
      '#header',
      '.site-header',
      '.page-header',
      '.navbar',
      'nav.main-nav'
    ];
    
    let removedHeader = false;
    oldHeaderSelectors.forEach(selector => {
      if ($(selector).length > 0) {
        $(selector).remove();
        removedHeader = true;
      }
    });
    
    // Check if CSS/JS already included
    const hasCSS = $('link[href*="header-universal.css"]').length > 0;
    const hasJS = $('script[src*="header-universal.js"]').length > 0;
    
    // Add CSS if not present
    if (!hasCSS) {
      $('head').append('\n    <link rel="stylesheet" href="/assets/header-universal.css">\n');
    }
    
    // Insert new header at body start
    const bodyContent = $('body').html();
    $('body').html('\n' + headerTemplate + '\n' + bodyContent);
    
    // Add JS at body end if not present
    if (!hasJS) {
      $('body').append('\n<script src="/assets/header-universal.js"></script>\n');
    }
    
    // Save file (or just preview in dry run)
    if (options.dryRun) {
      log(`  [DRY RUN] Would process: ${relativePath} (${lang.flag} ${lang.code})`, 'yellow');
    } else {
      await fs.writeFile(filePath, $.html());
      
      const icon = removedHeader ? '🔄' : '✨';
      const action = removedHeader ? 'Updated' : 'Added header to';
      
      if (options.verbose) {
        log(`  ${icon} ${action}: ${relativePath} (${lang.flag} ${lang.code})`, 'green');
      }
    }
    
    stats.processedFiles++;
    
  } catch (error) {
    log(`  ❌ Error processing ${relativePath}: ${error.message}`, 'red');
    stats.errorFiles++;
  }
}

/**
 * Restore from backup
 */
async function restoreFromBackup() {
  log('\n🔄 Restoring from backup...', 'cyan');
  
  // Find latest backup
  const backups = (await fs.readdir(__dirname))
    .filter(dir => dir.startsWith('backup-header-'))
    .sort()
    .reverse();
  
  if (backups.length === 0) {
    throw new Error('No backups found');
  }
  
  const latestBackup = path.join(__dirname, backups[0]);
  log(`  Using backup: ${backups[0]}`, 'cyan');
  
  // Copy files back
  async function restoreDirectory(backupDir, targetDir) {
    const items = await fs.readdir(backupDir, { withFileTypes: true });
    
    for (const item of items) {
      const backupPath = path.join(backupDir, item.name);
      const targetPath = path.join(targetDir, item.name);
      
      if (item.isDirectory()) {
        await fs.mkdir(targetPath, { recursive: true });
        await restoreDirectory(backupPath, targetPath);
      } else if (item.isFile()) {
        const content = await fs.readFile(backupPath, 'utf-8');
        await fs.writeFile(targetPath, content);
        stats.processedFiles++;
      }
    }
  }
  
  await restoreDirectory(latestBackup, CONFIG.outputDir);
  log(`  ✓ Restored ${stats.processedFiles} files`, 'green');
}

/**
 * Show final report
 */
function showReport() {
  const duration = ((Date.now() - stats.startTime) / 1000).toFixed(2);
  
  log('\n' + '=' .repeat(50), 'cyan');
  log('📊 REPORT', 'bright');
  log('=' .repeat(50), 'cyan');
  
  log(`\n📈 Statistics:`, 'cyan');
  log(`  Total files found:     ${stats.totalFiles}`);
  log(`  Files processed:       ${stats.processedFiles}`, 'green');
  log(`  Files skipped:         ${stats.skippedFiles}`, 'yellow');
  log(`  Files with errors:     ${stats.errorFiles}`, stats.errorFiles > 0 ? 'red' : 'green');
  
  log(`\n🌍 Language distribution:`, 'cyan');
  log(`  🇺🇸 English:          ${stats.languages.en} files`);
  log(`  🇪🇸 Spanish:          ${stats.languages.es} files`);
  log(`  🇧🇷 Portuguese:       ${stats.languages.pt} files`);
  
  if (!options.dryRun && stats.backedUpFiles > 0) {
    log(`\n💾 Backup:`, 'cyan');
    log(`  Files backed up:      ${stats.backedUpFiles}`);
    log(`  Backup location:      ${CONFIG.backupDir}`);
  }
  
  log(`\n⏱️  Time elapsed: ${duration} seconds`, 'cyan');
  
  if (options.dryRun) {
    log('\n⚠️  This was a DRY RUN - no files were modified', 'yellow');
    log('   Remove --dry-run flag to apply changes', 'yellow');
  } else {
    log('\n✅ Header application complete!', 'green');
    
    if (!options.test) {
      log('\n📝 Next steps:', 'cyan');
      log('  1. Review a few pages to verify the header looks correct');
      log('  2. Test navigation and dropdowns');
      log('  3. Deploy with: npm run deploy');
      log('\n💡 To restore backup if needed:', 'cyan');
      log('  node apply-header.js --restore-backup');
    }
  }
  
  log('\n' + '=' .repeat(50), 'cyan');
}

// Check if cheerio is installed
async function checkDependencies() {
  try {
    require('cheerio');
  } catch {
    log('\n📦 Installing required dependency: cheerio', 'yellow');
    const { execSync } = require('child_process');
    execSync('npm install cheerio', { stdio: 'inherit', cwd: __dirname });
    log('  ✓ Cheerio installed', 'green');
  }
}

// Run the script
(async () => {
  await checkDependencies();
  await main();
})();