const fs = require('fs');
const path = require('path');

// Function to recursively find all HTML files in a directory
function findHtmlFiles(dir, baseDir = dir) {
  let htmlFiles = [];
  
  try {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursively search subdirectories
        htmlFiles = htmlFiles.concat(findHtmlFiles(filePath, baseDir));
      } else if (file.endsWith('.html')) {
        // Get relative path from base directory
        const relativePath = path.relative(baseDir, filePath);
        htmlFiles.push(relativePath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return htmlFiles;
}

// Function to backup ALL existing pages before build
function backupCustomPages() {
  const outputDir = path.join(__dirname, 'output');
  const backupDir = path.join(__dirname, '.custom-pages-backup');
  
  // Find all HTML files in output directory
  console.log('Scanning output directory for existing pages...');
  const allPages = findHtmlFiles(outputDir);
  console.log(`Found ${allPages.length} pages to preserve`);
  
  // Create backup directory
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  
  // Backup each page
  let backedUp = 0;
  allPages.forEach(pagePath => {
    const sourcePath = path.join(outputDir, pagePath);
    if (fs.existsSync(sourcePath)) {
      try {
        const content = fs.readFileSync(sourcePath, 'utf8');
        const backupPath = path.join(backupDir, pagePath);
        const backupFileDir = path.dirname(backupPath);
        
        // Create directory structure in backup
        if (!fs.existsSync(backupFileDir)) {
          fs.mkdirSync(backupFileDir, { recursive: true });
        }
        
        // Save backup
        fs.writeFileSync(backupPath, content);
        backedUp++;
      } catch (error) {
        console.error(`Error backing up ${pagePath}:`, error.message);
      }
    }
  });
  
  console.log(`Backed up ${backedUp} pages successfully`);
}

// Function to restore pages after build
// Only restores if the new content is a fallback/basic template
function restoreCustomPages() {
  const outputDir = path.join(__dirname, 'output');
  const backupDir = path.join(__dirname, '.custom-pages-backup');
  
  if (!fs.existsSync(backupDir)) {
    console.log('No backup directory found');
    return;
  }
  
  // Find all backed up files
  const backedUpPages = findHtmlFiles(backupDir);
  console.log(`Found ${backedUpPages.length} backed up pages`);
  
  let restored = 0;
  backedUpPages.forEach(pagePath => {
    const backupPath = path.join(backupDir, pagePath);
    const targetPath = path.join(outputDir, pagePath);
    
    try {
      const backupContent = fs.readFileSync(backupPath, 'utf8');
      let shouldRestore = false;
      
      // Check if current file exists and compare
      if (fs.existsSync(targetPath)) {
        const currentContent = fs.readFileSync(targetPath, 'utf8');
        
        // Restore if:
        // 1. Backup has neumorphic styling and current doesn't
        // 2. Backup is significantly longer (more content)
        // 3. Backup has custom meta descriptions
        const hasNeumorphic = backupContent.includes('box-shadow: 20px 20px 60px #c8cacd, -20px -20px 60px #ffffff');
        const currentHasNeumorphic = currentContent.includes('box-shadow: 20px 20px 60px #c8cacd, -20px -20px 60px #ffffff');
        const contentLengthRatio = backupContent.length / currentContent.length;
        
        if (hasNeumorphic && !currentHasNeumorphic) {
          shouldRestore = true;
          console.log(`Restoring ${pagePath} - has neumorphic design`);
        } else if (contentLengthRatio > 1.5) {
          shouldRestore = true;
          console.log(`Restoring ${pagePath} - richer content (${Math.round(contentLengthRatio)}x larger)`);
        }
      } else {
        // File was deleted, restore it
        shouldRestore = true;
        console.log(`Restoring ${pagePath} - file was deleted`);
      }
      
      if (shouldRestore) {
        const targetDir = path.dirname(targetPath);
        
        // Ensure directory exists
        if (!fs.existsSync(targetDir)) {
          fs.mkdirSync(targetDir, { recursive: true });
        }
        
        // Restore file
        fs.writeFileSync(targetPath, backupContent);
        restored++;
      }
    } catch (error) {
      console.error(`Error restoring ${pagePath}:`, error.message);
    }
  });
  
  console.log(`Restored ${restored} custom pages`);
  
  // Clean up backup directory
  fs.rmSync(backupDir, { recursive: true, force: true });
}

module.exports = {
  backupCustomPages,
  restoreCustomPages
};