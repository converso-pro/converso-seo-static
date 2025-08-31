#!/usr/bin/env node

/**
 * Apply corrected header to test pages only
 * This script creates safe test versions with absolute URLs
 */

const fs = require('fs').promises;
const path = require('path');

// Read the header template
async function getHeaderHTML(lang) {
  const headerBase = await fs.readFile('header-universal-corrected.html', 'utf-8');
  
  // Get language-specific content
  const langConfig = {
    pt: {
      code: 'pt',
      flag: '🇧🇷',
      name: 'Português',
      libraryPath: 'biblioteca',
      currentPage: 'Biblioteca'
    },
    en: {
      code: 'en',
      flag: '🇺🇸', 
      name: 'English',
      libraryPath: 'library',
      currentPage: 'Library'
    },
    es: {
      code: 'es',
      flag: '🇪🇸',
      name: 'Español',
      libraryPath: 'libreria',
      currentPage: 'Librería'
    }
  };
  
  const config = langConfig[lang];
  
  // Header content with absolute URLs
  const headerContent = `
<header class="universal-header" data-lang="${config.code}">
  <div class="header-container">
    <!-- Logo Section -->
    <div class="header-logo">
      <a href="https://goconverso.com" class="logo-link" aria-label="Go to GoConverso homepage">
        <span class="logo-gradient">GoCONVERSO</span>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="header-nav desktop-nav" aria-label="Main navigation">
      <!-- Apps Dropdown -->
      <div class="dropdown" data-dropdown="apps">
        <button class="dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          <span>Apps</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="dropdown-content apps-grid" role="menu">
          <!-- Digital Queue -->
          <a href="https://goconverso.com/apps/fila-digital" class="app-item" role="menuitem">
            <div class="app-icon purple-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Fila Digital' : lang === 'es' ? 'Cola Digital' : 'Digital Queue'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Gestão inteligente de filas' : lang === 'es' ? 'Gestión inteligente de colas' : 'Smart waitlist management'}</div>
              <div class="app-badge popular">Popular</div>
            </div>
          </a>

          <!-- Combo Mágico -->
          <a href="https://goconverso.com/apps/combo-magico" class="app-item" role="menuitem">
            <div class="app-icon orange-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Combo Mágico' : lang === 'es' ? 'Combo Mágico' : 'Magic Combo'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Aumente vendas com combos' : lang === 'es' ? 'Aumenta ventas con combos' : 'Boost sales with combos'}</div>
            </div>
          </a>

          <!-- Loyalty Program -->
          <a href="https://goconverso.com/apps/programa-fidelidade" class="app-item" role="menuitem">
            <div class="app-icon amber-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L15 9L23 10L17.5 15L19 23L12 19L5 23L6.5 15L1 10L9 9L12 2Z"/>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Programa de Fidelidade' : lang === 'es' ? 'Programa de Lealtad' : 'Loyalty Program'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Recompense seus clientes' : lang === 'es' ? 'Recompensa a tus clientes' : 'Reward your customers'}</div>
              <div class="app-badge popular">Popular</div>
            </div>
          </a>

          <!-- Reviews -->
          <a href="https://goconverso.com/apps/reviews" class="app-item" role="menuitem">
            <div class="app-icon yellow-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Avaliações' : lang === 'es' ? 'Reseñas' : 'Reviews'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Colete feedback dos clientes' : lang === 'es' ? 'Recopila opiniones' : 'Collect customer feedback'}</div>
            </div>
          </a>

          <!-- Email Marketing -->
          <a href="https://goconverso.com/apps/email-marketing" class="app-item" role="menuitem">
            <div class="app-icon rose-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">Email Marketing</div>
              <div class="app-desc">${lang === 'pt' ? 'Campanhas automatizadas' : lang === 'es' ? 'Campañas automatizadas' : 'Automated campaigns'}</div>
              <div class="app-badge popular">Popular</div>
            </div>
          </a>

          <!-- E-commerce -->
          <a href="https://goconverso.com/apps/ecommerce" class="app-item" role="menuitem">
            <div class="app-icon emerald-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">E-commerce</div>
              <div class="app-desc">${lang === 'pt' ? 'Venda produtos online' : lang === 'es' ? 'Vende productos online' : 'Sell products online'}</div>
            </div>
          </a>

          <!-- Blog -->
          <a href="https://goconverso.com/apps/blog" class="app-item" role="menuitem">
            <div class="app-icon green-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">Blog</div>
              <div class="app-desc">${lang === 'pt' ? 'Marketing de conteúdo' : lang === 'es' ? 'Marketing de contenido' : 'Content marketing'}</div>
            </div>
          </a>

          <!-- Digital Business Card -->
          <a href="https://goconverso.com/apps/cartao-digital" class="app-item" role="menuitem">
            <div class="app-icon indigo-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x="1" y="10" x2="23" y2="10"></line>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Cartão Digital' : lang === 'es' ? 'Tarjeta Digital' : 'Digital Card'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Presença profissional' : lang === 'es' ? 'Presencia profesional' : 'Professional presence'}</div>
            </div>
          </a>

          <!-- Service Orders -->
          <a href="https://goconverso.com/apps/ordens-servico" class="app-item" role="menuitem">
            <div class="app-icon blue-gradient">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <div class="app-info">
              <div class="app-name">${lang === 'pt' ? 'Ordens de Serviço' : lang === 'es' ? 'Órdenes de Servicio' : 'Service Orders'}</div>
              <div class="app-desc">${lang === 'pt' ? 'Gerencie reparos' : lang === 'es' ? 'Gestiona reparaciones' : 'Manage repairs'}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Resources Dropdown -->
      <div class="dropdown" data-dropdown="resources">
        <button class="dropdown-trigger" aria-expanded="false" aria-haspopup="true">
          <span>${lang === 'pt' ? 'Recursos' : lang === 'es' ? 'Recursos' : 'Resources'}</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="dropdown-content resources-menu" role="menu">
          <!-- Academy -->
          <a href="https://goconverso.com/academy" class="resource-item" role="menuitem">
            <div class="resource-icon academy-icon">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div class="resource-info">
              <div class="resource-name">Academy</div>
              <div class="resource-desc">${lang === 'pt' ? 'Aprenda e cresça' : lang === 'es' ? 'Aprende y crece' : 'Learn & grow'}</div>
              <span class="resource-badge new">${lang === 'pt' ? 'Novo' : lang === 'es' ? 'Nuevo' : 'New'}</span>
            </div>
          </a>

          <!-- Blog -->
          <a href="https://goconverso.com/blog" class="resource-item" role="menuitem">
            <div class="resource-icon blog-icon">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <div class="resource-info">
              <div class="resource-name">Blog</div>
              <div class="resource-desc">${lang === 'pt' ? 'Dicas e insights' : lang === 'es' ? 'Consejos e insights' : 'Tips and insights'}</div>
            </div>
          </a>

          <!-- Library (Current Page) -->
          <a href="https://goconverso.com/${config.libraryPath}" class="resource-item active" role="menuitem" aria-current="page">
            <div class="resource-icon library-icon">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                <path d="M12 6v8"></path>
                <path d="M8 10h8"></path>
              </svg>
            </div>
            <div class="resource-info">
              <div class="resource-name">${config.currentPage}</div>
              <div class="resource-desc">${lang === 'pt' ? 'Artigos e guias' : lang === 'es' ? 'Artículos y guías' : 'Articles and guides'}</div>
            </div>
          </a>

          <!-- FAQ -->
          <a href="https://goconverso.com/faq" class="resource-item" role="menuitem">
            <div class="resource-icon faq-icon">
              <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div class="resource-info">
              <div class="resource-name">FAQ</div>
              <div class="resource-desc">${lang === 'pt' ? 'Perguntas frequentes' : lang === 'es' ? 'Preguntas frecuentes' : 'Common questions'}</div>
            </div>
          </a>
        </div>
      </div>

      <!-- Direct Links -->
      <a href="https://goconverso.com/templates" class="nav-link">Templates</a>
      <a href="https://goconverso.com/pricing" class="nav-link">${lang === 'pt' ? 'Preços' : lang === 'es' ? 'Precios' : 'Pricing'}</a>
    </nav>

    <!-- Right Section -->
    <div class="header-actions">
      <!-- Language Switcher -->
      <div class="language-switcher">
        <button class="lang-trigger" aria-label="Change language" aria-expanded="false" aria-haspopup="true">
          <span class="flag">${config.flag}</span>
          <span class="lang-name">${config.name}</span>
          <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="lang-dropdown" role="menu">
          <a href="https://goconverso.com/library" class="lang-option" data-lang="en" role="menuitem">
            <span class="flag">🇺🇸</span>
            <span>English</span>
          </a>
          <a href="https://goconverso.com/libreria" class="lang-option" data-lang="es" role="menuitem">
            <span class="flag">🇪🇸</span>
            <span>Español</span>
          </a>
          <a href="https://goconverso.com/biblioteca" class="lang-option" data-lang="pt" role="menuitem">
            <span class="flag">🇧🇷</span>
            <span>Português</span>
          </a>
        </div>
      </div>

      <!-- CTA Buttons -->
      <a href="https://app.converso.pro/auth" class="btn-login">Login</a>
      <a href="https://app.converso.pro/auth?signup=true" class="btn-start">
        <span>${lang === 'pt' ? 'Começar Grátis' : lang === 'es' ? 'Empezar Gratis' : 'Start Free'}</span>
        <svg class="arrow-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button class="mobile-toggle" aria-label="Toggle mobile menu" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>

  <!-- Mobile Menu -->
  <nav class="mobile-menu" data-state="closed" aria-label="Mobile navigation">
    <div class="mobile-menu-content">
      <!-- Mobile sections would go here - keeping it simple for now -->
      <div class="mobile-cta-section">
        <a href="https://app.converso.pro/auth" class="mobile-btn-login">Login</a>
        <a href="https://app.converso.pro/auth?signup=true" class="mobile-btn-start">${lang === 'pt' ? 'Começar Grátis' : lang === 'es' ? 'Empezar Gratis' : 'Start Free'}</a>
      </div>
    </div>
  </nav>
</header>
  `;
  
  return headerBase.replace('{HEADER_CONTENT}', headerContent);
}

// Process a single file
async function processFile(filePath, lang) {
  console.log(`Processing ${filePath}...`);
  
  // Read the original file
  const content = await fs.readFile(filePath, 'utf-8');
  
  // Get the new header
  const newHeader = await getHeaderHTML(lang);
  
  // Find where the original header ends and content begins
  // Look for the hero section or main content
  const heroMatch = content.match(/<section class="hero">/);
  const mainMatch = content.match(/<main[^>]*>/);
  
  let splitPoint = 0;
  if (heroMatch) {
    splitPoint = heroMatch.index;
  } else if (mainMatch) {
    splitPoint = mainMatch.index;
  } else {
    // Find the end of the header tag
    const headerEndMatch = content.match(/<\/header>/);
    if (headerEndMatch) {
      splitPoint = headerEndMatch.index + '</header>'.length;
    }
  }
  
  if (splitPoint === 0) {
    console.error(`Could not find content split point for ${filePath}`);
    return;
  }
  
  // Get the content after the header
  const pageContent = content.substring(splitPoint);
  
  // Get the head section
  const headMatch = content.match(/<head>([\s\S]*?)<\/head>/);
  const headContent = headMatch ? headMatch[0] : '<head></head>';
  
  // Build the new page
  const newPage = `<!DOCTYPE html>
<html lang="${lang === 'pt' ? 'pt-BR' : lang === 'es' ? 'es' : 'en'}">
${headContent}
<body>
${newHeader}

<!-- Original Page Content -->
${pageContent}
</body>
</html>`;
  
  // Write the new file
  await fs.writeFile(filePath, newPage);
  console.log(`✅ Updated ${filePath}`);
}

// Main function
async function main() {
  try {
    console.log('🚀 Applying corrected header to test pages...\n');
    
    // Process each test page
    await processFile('deploy-output/biblioteca-test.html', 'pt');
    await processFile('deploy-output/library-test.html', 'en');
    await processFile('deploy-output/libreria-test.html', 'es');
    
    console.log('\n✅ All test pages updated successfully!');
    console.log('\n📋 Test locally by opening:');
    console.log('  - deploy-output/biblioteca-test.html');
    console.log('  - deploy-output/library-test.html');
    console.log('  - deploy-output/libreria-test.html');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run
main();