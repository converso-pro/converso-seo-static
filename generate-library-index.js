const fs = require('fs');
const path = require('path');
const { SEO_PAGES } = require('./seo-pages');
const { LIBRARY_PAGE_DATA } = require('./library-page-data');

// Group pages by category
function groupPagesByCategory(pages) {
  const categories = {
    barbershop: { title: 'Barbearias', pages: [] },
    salon: { title: 'Salões de Beleza', pages: [] },
    phone: { title: 'Celulares & iPhones', pages: [] },
    ecommerce: { title: 'E-commerce', pages: [] },
    comparison: { title: 'Comparações', pages: [] },
    apps: { title: 'Apps', pages: [] },
    'use-cases': { title: 'Casos de Uso', pages: [] },
    other: { title: 'Outros', pages: [] }
  };

  pages.forEach(page => {
    if (page.slug.includes('barber') || page.slug.includes('barbearia') || page.slug.includes('barberia')) {
      categories.barbershop.pages.push(page);
    } else if (page.slug.includes('salao') || page.slug.includes('salon') || page.slug.includes('beleza') || page.slug.includes('cabeleireira')) {
      categories.salon.pages.push(page);
    } else if (page.slug.includes('iphone') || page.slug.includes('celular') || page.slug.includes('phone')) {
      categories.phone.pages.push(page);
    } else if (page.slug.includes('loja') || page.slug.includes('shopify') || page.slug.includes('ecommerce') || page.slug.includes('negocio')) {
      categories.ecommerce.pages.push(page);
    } else if (page.slug.includes('vs') || page.slug.includes('compare') || page.slug.includes('comparar')) {
      categories.comparison.pages.push(page);
    } else if (page.slug.includes('apps')) {
      categories.apps.pages.push(page);
    } else if (page.slug.includes('use-cases') || page.slug.includes('casos-de-uso')) {
      categories['use-cases'].pages.push(page);
    } else {
      categories.other.pages.push(page);
    }
  });

  return categories;
}

// Generate HTML for library index
function generateLibraryIndex(language) {
  const t = {
    'en': {
      title: 'Converso.pro Library',
      subtitle: 'Professional Resources for Service Business Success',
      description: 'Access 100+ guides, tutorials, and comparisons to grow your service business with proven strategies.',
      search: 'Search resources...',
      categories: {
        barbershop: 'Barbershops',
        salon: 'Beauty Salons',
        phone: 'Phone & Tech',
        ecommerce: 'E-commerce',
        comparison: 'Comparisons',
        apps: 'Apps',
        'use-cases': 'Use Cases',
        other: 'Others'
      },
      viewAll: 'View All',
      readArticle: 'Read Article',
      minRead: 'min read',
      trending: 'Trending',
      featured: 'Featured Resources',
      recent: 'Recent Articles',
      cta: 'Start Your Free Trial',
      footer: 'Join 10,000+ professionals transforming their businesses'
    },
    'pt-BR': {
      title: 'Biblioteca Converso.pro',
      subtitle: 'Recursos Profissionais para o Sucesso do Seu Negócio',
      description: 'Acesse mais de 100 guias, tutoriais e comparações para crescer seu negócio de serviços com estratégias comprovadas.',
      search: 'Buscar recursos...',
      categories: {
        barbershop: 'Barbearias',
        salon: 'Salões de Beleza',
        phone: 'Celulares & Tech',
        ecommerce: 'E-commerce',
        comparison: 'Comparações',
        apps: 'Apps',
        'use-cases': 'Casos de Uso',
        other: 'Outros'
      },
      viewAll: 'Ver Todos',
      readArticle: 'Ler Artigo',
      minRead: 'min de leitura',
      trending: 'Em Alta',
      featured: 'Recursos em Destaque',
      recent: 'Artigos Recentes',
      cta: 'Comece Seu Teste Grátis',
      footer: 'Junte-se a 10.000+ profissionais transformando seus negócios'
    },
    'es': {
      title: 'Biblioteca Converso.pro',
      subtitle: 'Recursos Profesionales para el Éxito de Tu Negocio',
      description: 'Accede a más de 100 guías, tutoriales y comparaciones para hacer crecer tu negocio de servicios con estrategias probadas.',
      search: 'Buscar recursos...',
      categories: {
        barbershop: 'Barberías',
        salon: 'Salones de Belleza',
        phone: 'Móviles & Tech',
        ecommerce: 'E-commerce',
        comparison: 'Comparaciones',
        apps: 'Apps',
        'use-cases': 'Casos de Uso',
        other: 'Otros'
      },
      viewAll: 'Ver Todos',
      readArticle: 'Leer Artículo',
      minRead: 'min de lectura',
      trending: 'Tendencias',
      featured: 'Recursos Destacados',
      recent: 'Artículos Recientes',
      cta: 'Comienza Tu Prueba Gratis',
      footer: 'Únete a 10.000+ profesionales transformando sus negocios'
    }
  }[language];

  const langPath = language === 'en' ? '' : `/${language}`;
  const categories = groupPagesByCategory(SEO_PAGES);

  // Featured pages (select popular ones)
  const featuredPages = [
    SEO_PAGES.find(p => p.slug === 'melhor-aplicativo-barbearia'),
    SEO_PAGES.find(p => p.slug === 'como-administrar-dinheiro-barbearia'),
    SEO_PAGES.find(p => p.slug === 'sistema-gestao-barbearia'),
    SEO_PAGES.find(p => p.slug === 'melhor-sistema-agendamento-saloes')
  ].filter(Boolean).slice(0, 4);

  const html = `<!DOCTYPE html>
<html lang="${language}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title} - ${t.subtitle}</title>
  <meta name="description" content="${t.description}">
  <meta property="og:title" content="${t.title}">
  <meta property="og:description" content="${t.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://seo.converso.pro${langPath}">
  <meta property="og:image" content="https://converso.pro/converso-og.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="canonical" href="https://seo.converso.pro${langPath}">
  <link rel="stylesheet" href="/styles.css">
  <link rel="icon" href="https://converso.pro/favicon.ico">
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
<body class="bg-gray-50 text-gray-900">
  <!-- Header -->
  <header class="bg-white shadow-neumorphic sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <a href="https://converso.pro" class="flex items-center group">
          <span class="text-2xl font-bold">
            <span class="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">converso.pro</span>
          </span>
        </a>
        
        <!-- Language Switcher -->
        <div class="flex items-center space-x-4">
          <select onchange="switchLanguage(this.value)" class="bg-gray-100 rounded-lg px-4 py-2 text-sm">
            <option value="en" ${language === 'en' ? 'selected' : ''}>English</option>
            <option value="pt-BR" ${language === 'pt-BR' ? 'selected' : ''}>Português</option>
            <option value="es" ${language === 'es' ? 'selected' : ''}>Español</option>
          </select>
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white hover:opacity-90">
            ${t.cta}
          </a>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
        ${t.title}
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        ${t.description}
      </p>
      <div class="max-w-2xl mx-auto">
        <input type="text" 
               placeholder="${t.search}" 
               class="w-full px-6 py-4 rounded-lg shadow-neumorphic-inset text-lg"
               onkeyup="searchResources(this.value)">
      </div>
    </div>
  </section>

  <!-- Featured Resources -->
  <section class="py-16 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">${t.featured}</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        ${featuredPages.map(page => {
          const pageData = LIBRARY_PAGE_DATA[page.slug] || {};
          const title = pageData.title?.[language] || pageData.title?.['pt-BR'] || page.title?.[language] || page.title?.['pt-BR'] || page.title || page.slug;
          const desc = pageData.description?.[language] || pageData.description?.['pt-BR'] || page.description?.[language] || page.description?.['pt-BR'] || page.description || '';
          return `
            <a href="${langPath}/${page.slug}" class="card-neumorphic hover:shadow-neumorphic-hover transition-all group">
              <div class="flex items-start justify-between mb-2">
                <span class="bg-gradient-primary text-white text-xs px-2 py-1 rounded">${t.trending}</span>
                <span class="text-sm text-gray-500">10 ${t.minRead}</span>
              </div>
              <h3 class="font-bold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                ${title}
              </h3>
              <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                ${desc}
              </p>
              <span class="text-blue-600 font-medium text-sm group-hover:underline">
                ${t.readArticle} →
              </span>
            </a>
          `;
        }).join('')}
      </div>
    </div>
  </section>

  <!-- Categories -->
  ${Object.entries(categories).map(([key, category]) => {
    if (category.pages.length === 0) return '';
    
    return `
      <section class="py-16 px-4 ${key === 'barbershop' ? 'bg-gray-50' : ''}">
        <div class="max-w-7xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold">${t.categories[key]}</h2>
            <span class="text-gray-500">${category.pages.length} recursos</span>
          </div>
          <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            ${category.pages.slice(0, 8).map(page => {
              const pageData = LIBRARY_PAGE_DATA[page.slug] || {};
              const title = pageData.title?.[language] || pageData.title?.['pt-BR'] || page.title?.[language] || page.title?.['pt-BR'] || page.title || page.slug;
              const desc = pageData.description?.[language] || pageData.description?.['pt-BR'] || page.description?.[language] || page.description?.['pt-BR'] || page.description || '';
              return `
                <a href="${langPath}/${page.slug}" class="card-neumorphic hover:shadow-neumorphic-hover transition-all group">
                  <h3 class="font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    ${title}
                  </h3>
                  <p class="text-gray-600 text-sm line-clamp-2">
                    ${desc}
                  </p>
                </a>
              `;
            }).join('')}
          </div>
          ${category.pages.length > 8 ? `
            <div class="text-center mt-8">
              <button class="btn-neumorphic px-6 py-2 text-blue-600 hover:bg-blue-50">
                ${t.viewAll} (${category.pages.length})
              </button>
            </div>
          ` : ''}
        </div>
      </section>
    `;
  }).join('')}

  <!-- CTA Section -->
  <section class="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
    <div class="max-w-4xl mx-auto text-center text-white">
      <h2 class="text-4xl font-bold mb-4">${t.cta}</h2>
      <p class="text-xl mb-8">${t.footer}</p>
      <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
        ${t.cta}
      </a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="text-center">
        <p>&copy; 2025 Converso. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script>
    function switchLanguage(lang) {
      const langPath = lang === 'en' ? '' : '/' + lang;
      window.location.href = langPath || '/';
    }

    function searchResources(query) {
      // Simple client-side search - in production, this would be server-side
      console.log('Searching for:', query);
    }
  </script>
</body>
</html>`;

  return html;
}

// Generate index for all languages
function generateIndexes() {
  const languages = ['en', 'pt-BR', 'es'];
  
  languages.forEach(lang => {
    const html = generateLibraryIndex(lang);
    const outputPath = lang === 'en' 
      ? path.join('output', 'index.html')
      : path.join('output', lang, 'index.html');
    
    // Ensure directory exists
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html);
    console.log(`✓ Generated library index for ${lang}`);
  });
}

// Run generation
generateIndexes();
console.log('✓ Library indexes generated successfully!');