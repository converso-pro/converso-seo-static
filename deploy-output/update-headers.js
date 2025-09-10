#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Universal header HTML
const universalHeader = `<!-- Universal GoConverso Header -->
<header class="universal-header" data-lang="{LANG}">
  <div class="header-container">
    <div class="header-logo">
      <a href="https://goconverso.com" class="logo-link">
        <span class="logo-gradient">GoCONVERSO</span>
      </a>
    </div>
    
    <nav class="header-nav desktop-nav">
      <div class="nav-group">
        <a href="https://goconverso.com/pricing" class="nav-link">{PRICING}</a>
        
        <div class="dropdown">
          <button class="nav-link dropdown-toggle">{RESOURCES} <span class="arrow">▼</span></button>
          <div class="dropdown-content">
            <a href="https://goconverso.com/biblioteca" class="dropdown-link">{LIBRARY}</a>
            <a href="https://blog.goconverso.com" class="dropdown-link">Blog</a>
            <a href="https://academy.goconverso.com" class="dropdown-link">Academy</a>
            <a href="https://goconverso.com/apps" class="dropdown-link">Apps</a>
          </div>
        </div>
        
        <div class="dropdown">
          <button class="nav-link dropdown-toggle">{COMPANY} <span class="arrow">▼</span></button>
          <div class="dropdown-content">
            <a href="https://goconverso.com/about" class="dropdown-link">{ABOUT}</a>
            <a href="https://goconverso.com/contact" class="dropdown-link">{CONTACT}</a>
            <a href="https://goconverso.com/partners" class="dropdown-link">{PARTNERS}</a>
          </div>
        </div>
      </div>
      
      <div class="nav-actions">
        <div class="lang-switcher">
          <button class="lang-button">
            <span class="lang-icon">🌐</span>
            <span class="lang-code">{LANG_CODE}</span>
          </button>
          <div class="lang-dropdown">
            <a href="{PT_URL}" class="lang-option">🇧🇷 Português</a>
            <a href="{EN_URL}" class="lang-option">🇺🇸 English</a>
            <a href="{ES_URL}" class="lang-option">🇪🇸 Español</a>
          </div>
        </div>
        
        <a href="https://converso.pro/auth" class="btn-login">{LOGIN}</a>
        <a href="https://goconverso.com/pricing" class="btn-cta">{START_FREE}</a>
      </div>
    </nav>
    
    <button class="mobile-menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  
  <nav class="mobile-nav">
    <a href="https://goconverso.com/pricing" class="mobile-nav-link">{PRICING}</a>
    <a href="https://goconverso.com/biblioteca" class="mobile-nav-link">{LIBRARY}</a>
    <a href="https://blog.goconverso.com" class="mobile-nav-link">Blog</a>
    <a href="https://academy.goconverso.com" class="mobile-nav-link">Academy</a>
    <a href="https://goconverso.com/about" class="mobile-nav-link">{ABOUT}</a>
    <a href="https://goconverso.com/contact" class="mobile-nav-link">{CONTACT}</a>
    <div class="mobile-nav-actions">
      <a href="https://converso.pro/auth" class="btn-login">{LOGIN}</a>
      <a href="https://goconverso.com/pricing" class="btn-cta">{START_FREE}</a>
    </div>
  </nav>
</header>`;

// Universal header styles
const headerStyles = `<style>
/* Universal Header Styles */
.universal-header {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  flex-shrink: 0;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-gradient {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
}

.header-nav {
  display: flex;
  align-items: center;
  gap: 48px;
  flex: 1;
  justify-content: space-between;
  padding: 0 48px;
}

.nav-group {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
}

.nav-link:hover {
  color: #667eea;
}

.dropdown {
  position: relative;
}

.dropdown-toggle .arrow {
  font-size: 10px;
  transition: transform 0.2s;
}

.dropdown:hover .arrow {
  transform: rotate(180deg);
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 12px;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  margin-top: 8px;
}

.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}

.dropdown-link {
  display: block;
  padding: 10px 16px;
  color: #4a5568;
  text-decoration: none;
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.2s;
}

.dropdown-link:hover {
  background: #f7fafc;
  color: #667eea;
  transform: translateX(4px);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-switcher {
  position: relative;
}

.lang-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-button:hover {
  border-color: #667eea;
  background: white;
}

.lang-icon {
  font-size: 18px;
}

.lang-code {
  font-size: 14px;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
}

.lang-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 8px;
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  margin-top: 8px;
}

.lang-switcher:hover .lang-dropdown {
  opacity: 1;
  visibility: visible;
}

.lang-option {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  color: #4a5568;
  text-decoration: none;
  font-size: 14px;
  border-radius: 8px;
  transition: all 0.2s;
}

.lang-option:hover {
  background: #f7fafc;
  color: #667eea;
}

.btn-login {
  padding: 10px 20px;
  color: #667eea;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border: 2px solid #667eea;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-login:hover {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-cta {
  padding: 10px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

/* Mobile Menu */
.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: #4a5568;
  transition: all 0.3s;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

.mobile-nav {
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 72px);
  overflow-y: auto;
}

.mobile-nav.active {
  display: block;
}

.mobile-nav-link {
  display: block;
  padding: 12px 16px;
  color: #4a5568;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s;
}

.mobile-nav-link:hover {
  background: #f7fafc;
  color: #667eea;
}

.mobile-nav-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
}

.mobile-nav-actions .btn-login,
.mobile-nav-actions .btn-cta {
  display: block;
  text-align: center;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }
  
  .mobile-menu-toggle {
    display: flex;
  }
  
  .header-container {
    padding: 0 16px;
  }
}
</style>`;

// Tracking scripts
const trackingScripts = `<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LSHB9J6WS7"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-LSHB9J6WS7', {
    send_page_view: true,
    custom_map: {
      'dimension1': 'user_type',
      'dimension2': 'content_category'
    }
  });
  
  // Track as biblioteca content
  gtag('event', 'page_view', {
    user_type: 'visitor',
    content_category: 'biblioteca-seo'
  });
</script>

<!-- Meta Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '1697178904498506');
  fbq('track', 'PageView');
  fbq('track', 'ViewContent', {
    content_category: 'biblioteca-seo'
  });
</script>
<noscript>
  <img height="1" width="1" style="display:none"
       src="https://www.facebook.com/tr?id=1697178904498506&ev=PageView&noscript=1"/>
</noscript>

<!-- Internal Analytics Tracking -->
<script>
(function() {
  // Generate or get session ID
  let sessionId = sessionStorage.getItem('converso_session_id');
  if (!sessionId) {
    sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('converso_session_id', sessionId);
  }
  
  // Track page view
  const trackingData = {
    event_type: 'page_view',
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer,
    session_id: sessionId,
    professional_id: 'biblioteca-seo',
    timestamp: new Date().toISOString(),
    user_agent: navigator.userAgent,
    screen_resolution: screen.width + 'x' + screen.height,
    language: navigator.language,
    content_category: 'biblioteca'
  };
  
  // Send to Edge Function
  fetch('https://osuozhvpecszacvnqwky.supabase.co/functions/v1/track-insight', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(trackingData)
  }).catch(err => console.error('Tracking error:', err));
  
  // Track scroll depth
  let maxScroll = 0;
  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;
      if (scrollPercent >= 25 && scrollPercent < 50) {
        gtag('event', 'scroll', { 'percent': 25 });
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        gtag('event', 'scroll', { 'percent': 50 });
      } else if (scrollPercent >= 75) {
        gtag('event', 'scroll', { 'percent': 75 });
      }
    }
  });
  
  // Track time on page
  const startTime = Date.now();
  window.addEventListener('beforeunload', function() {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    navigator.sendBeacon('https://osuozhvpecszacvnqwky.supabase.co/functions/v1/track-insight', 
      JSON.stringify({
        event_type: 'time_on_page',
        duration: timeOnPage,
        page_url: window.location.href,
        session_id: sessionId,
        professional_id: 'biblioteca-seo'
      })
    );
  });
})();
</script>`;

// Language configurations
const languages = {
  pt: {
    code: 'PT',
    pricing: 'Preços',
    resources: 'Recursos',
    library: 'Biblioteca',
    company: 'Empresa',
    about: 'Sobre',
    contact: 'Contato',
    partners: 'Parceiros',
    login: 'Entrar',
    startFree: 'Começar Grátis'
  },
  en: {
    code: 'EN',
    pricing: 'Pricing',
    resources: 'Resources',
    library: 'Library',
    company: 'Company',
    about: 'About',
    contact: 'Contact',
    partners: 'Partners',
    login: 'Login',
    startFree: 'Start Free'
  },
  es: {
    code: 'ES',
    pricing: 'Precios',
    resources: 'Recursos',
    library: 'Librería',
    company: 'Empresa',
    about: 'Acerca',
    contact: 'Contacto',
    partners: 'Socios',
    login: 'Iniciar',
    startFree: 'Empezar Gratis'
  }
};

// Function to detect language from file path
function detectLanguage(filePath) {
  if (filePath.includes('/biblioteca/')) return 'pt';
  if (filePath.includes('/library/')) return 'en';
  if (filePath.includes('/libreria/')) return 'es';
  return 'pt'; // default
}

// Function to get article slug from file path
function getArticleSlug(filePath) {
  return path.basename(filePath, '.html');
}

// Function to generate language URLs
function generateLangUrls(slug, currentLang) {
  // This would need a mapping of article slugs across languages
  // For now, we'll use the same slug pattern
  return {
    pt: `https://goconverso.com/biblioteca/${slug}`,
    en: `https://goconverso.com/library/${slug}`,
    es: `https://goconverso.com/libreria/${slug}`
  };
}

// Function to process a single HTML file
function processHtmlFile(filePath) {
  try {
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Detect language
    const lang = detectLanguage(filePath);
    const langConfig = languages[lang];
    const slug = getArticleSlug(filePath);
    const langUrls = generateLangUrls(slug, lang);
    
    // Prepare header with language-specific content
    let finalHeader = universalHeader
      .replace(/{LANG}/g, lang)
      .replace(/{LANG_CODE}/g, langConfig.code)
      .replace(/{PRICING}/g, langConfig.pricing)
      .replace(/{RESOURCES}/g, langConfig.resources)
      .replace(/{LIBRARY}/g, langConfig.library)
      .replace(/{COMPANY}/g, langConfig.company)
      .replace(/{ABOUT}/g, langConfig.about)
      .replace(/{CONTACT}/g, langConfig.contact)
      .replace(/{PARTNERS}/g, langConfig.partners)
      .replace(/{LOGIN}/g, langConfig.login)
      .replace(/{START_FREE}/g, langConfig.startFree)
      .replace(/{PT_URL}/g, langUrls.pt)
      .replace(/{EN_URL}/g, langUrls.en)
      .replace(/{ES_URL}/g, langUrls.es);
    
    // Remove old header (if exists)
    // Look for patterns like <header> or <div class="header">
    content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '');
    content = content.replace(/<div[^>]*class="[^"]*header[^"]*"[^>]*>[\s\S]*?<\/div>\s*<\/div>/gi, '');
    
    // Update meta tags to point to goconverso.com
    content = content.replace(/https:\/\/seo\.converso\.pro/g, 'https://goconverso.com');
    
    // Add new tracking scripts if not present
    if (!content.includes('G-LSHB9J6WS7')) {
      // Add before </head>
      content = content.replace('</head>', trackingScripts + '</head>');
    }
    
    // Add header styles if not present
    if (!content.includes('universal-header')) {
      // Add before </head>
      content = content.replace('</head>', headerStyles + '</head>');
    }
    
    // Add the new header after <body> tag
    content = content.replace(/<body[^>]*>/, (match) => {
      return match + '\\n' + finalHeader + '\\n';
    });
    
    // Add mobile menu JavaScript before </body>
    const mobileMenuScript = `
<script>
// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
});
</script>`;
    
    if (!content.includes('mobile-menu-toggle')) {
      content = content.replace('</body>', mobileMenuScript + '</body>');
    }
    
    // Write the updated content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated: ${filePath}`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process all HTML files
function updateAllHeaders() {
  console.log('🚀 Starting header update process...');
  
  const folders = ['biblioteca', 'library', 'libreria'];
  let totalFiles = 0;
  let successCount = 0;
  
  folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    
    if (!fs.existsSync(folderPath)) {
      console.log(`⚠️ Folder ${folder} not found, skipping...`);
      return;
    }
    
    const files = fs.readdirSync(folderPath)
      .filter(file => file.endsWith('.html') && file !== 'index.html');
    
    console.log(`\\n📁 Processing ${files.length} files in ${folder}/...`);
    
    files.forEach(file => {
      const filePath = path.join(folderPath, file);
      totalFiles++;
      
      if (processHtmlFile(filePath)) {
        successCount++;
      }
    });
  });
  
  console.log(`\\n✨ Update complete!`);
  console.log(`📊 Processed ${successCount}/${totalFiles} files successfully`);
}

// Run the update
updateAllHeaders();