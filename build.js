const fs = require('fs');
const path = require('path');
const { SEO_PAGES } = require('./seo-pages.js');
const { PAGE_CONTENTS } = require('./page-contents.js');

// Translations
const translations = {
  en: {
    NAV_FEATURES: 'Features',
    NAV_PRICING: 'Pricing', 
    NAV_TESTIMONIALS: 'Testimonials',
    BTN_LOGIN: 'Login',
    BTN_START_FREE: 'Start Free',
    FOOTER_DESCRIPTION: 'Create professional booking websites in 5 minutes.',
    FOOTER_PRODUCT: 'Product',
    FOOTER_FEATURES: 'Features',
    FOOTER_PRICING: 'Pricing',
    FOOTER_APPS: 'Apps',
    FOOTER_SUPPORT: 'Support',
    FOOTER_HELP: 'Help Center',
    FOOTER_CONTACT: 'Contact',
    FOOTER_LEGAL: 'Legal',
    FOOTER_PRIVACY: 'Privacy Policy',
    FOOTER_TERMS: 'Terms of Service',
    FOOTER_RIGHTS: 'All rights reserved.',
    CTA_TITLE: 'Ready to Get Started?',
    CTA_SUBTITLE: 'Join thousands of professionals using Converso',
    CTA_BUTTON: 'Create Your Website Now',
    FEATURE_CHECK: '✓'
  },
  'pt-BR': {
    NAV_FEATURES: 'Recursos',
    NAV_PRICING: 'Preços',
    NAV_TESTIMONIALS: 'Depoimentos',
    BTN_LOGIN: 'Entrar',
    BTN_START_FREE: 'Começar Grátis',
    FOOTER_DESCRIPTION: 'Crie sites profissionais de agendamento em 5 minutos.',
    FOOTER_PRODUCT: 'Produto',
    FOOTER_FEATURES: 'Recursos',
    FOOTER_PRICING: 'Preços',
    FOOTER_APPS: 'Apps',
    FOOTER_SUPPORT: 'Suporte',
    FOOTER_HELP: 'Central de Ajuda',
    FOOTER_CONTACT: 'Contato',
    FOOTER_LEGAL: 'Legal',
    FOOTER_PRIVACY: 'Política de Privacidade',
    FOOTER_TERMS: 'Termos de Serviço',
    FOOTER_RIGHTS: 'Todos os direitos reservados.',
    CTA_TITLE: 'Pronto para Começar?',
    CTA_SUBTITLE: 'Junte-se a milhares de profissionais usando Converso',
    CTA_BUTTON: 'Criar Seu Site Agora',
    FEATURE_CHECK: '✓'
  },
  es: {
    NAV_FEATURES: 'Características',
    NAV_PRICING: 'Precios',
    NAV_TESTIMONIALS: 'Testimonios',
    BTN_LOGIN: 'Iniciar Sesión',
    BTN_START_FREE: 'Empezar Gratis',
    FOOTER_DESCRIPTION: 'Crea sitios web profesionales de reservas en 5 minutos.',
    FOOTER_PRODUCT: 'Producto',
    FOOTER_FEATURES: 'Características',
    FOOTER_PRICING: 'Precios',
    FOOTER_APPS: 'Apps',
    FOOTER_SUPPORT: 'Soporte',
    FOOTER_HELP: 'Centro de Ayuda',
    FOOTER_CONTACT: 'Contacto',
    FOOTER_LEGAL: 'Legal',
    FOOTER_PRIVACY: 'Política de Privacidad',
    FOOTER_TERMS: 'Términos de Servicio',
    FOOTER_RIGHTS: 'Todos los derechos reservados.',
    CTA_TITLE: '¿Listo para Empezar?',
    CTA_SUBTITLE: 'Únete a miles de profesionales usando Converso',
    CTA_BUTTON: 'Crear Tu Sitio Ahora',
    FEATURE_CHECK: '✓'
  }
};

// Generate content based on template type
function generateContent(page, language) {
  const t = translations[language] || translations.en;
  
  switch(page.template) {
    case 'comparison':
      return generateComparisonContent(page, language, t);
    case 'use-case':
      return generateUseCaseContent(page, language, t);
    case 'local':
      return generateLocalContent(page, language, t);
    case 'apps-directory':
      return generateAppsDirectoryContent(page, language, t);
    case 'app-detail':
      return generateAppDetailContent(page, language, t);
    case 'blog-post':
      return generateBlogPostContent(page, language, t);
    default:
      return generateDefaultContent(page, language, t);
  }
}

// Generate comparison page content
function generateComparisonContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'Comparison';
  const description = page.data?.metaDescription || '';
  const competitor = page.data?.competitor || 'Others';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-primary bg-clip-text text-transparent">
          ${title}
        </h1>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          ${description}
        </p>
        
        <!-- Comparison Table -->
        <div class="card-neumorphic overflow-hidden">
          <table class="w-full">
            <thead class="bg-gradient-primary text-white">
              <tr>
                <th class="p-4 text-left">Feature</th>
                <th class="p-4 text-center">Converso</th>
                <th class="p-4 text-center">${competitor}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-4">Own Website</td>
                <td class="p-4 text-center text-green-600 text-2xl">${t.FEATURE_CHECK}</td>
                <td class="p-4 text-center text-red-600 text-2xl">✗</td>
              </tr>
              <tr class="border-b bg-gray-50">
                <td class="p-4">No Booking Fees</td>
                <td class="p-4 text-center text-green-600 text-2xl">${t.FEATURE_CHECK}</td>
                <td class="p-4 text-center text-red-600 text-2xl">✗</td>
              </tr>
              <tr class="border-b">
                <td class="p-4">WhatsApp Integration</td>
                <td class="p-4 text-center text-green-600 text-2xl">${t.FEATURE_CHECK}</td>
                <td class="p-4 text-center text-gray-400 text-2xl">?</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- CTA Section -->
        <div class="mt-16 text-center">
          <div class="card-neumorphic bg-gradient-primary text-white p-8">
            <h2 class="text-3xl font-bold mb-4">${t.CTA_TITLE}</h2>
            <p class="text-xl mb-6">${t.CTA_SUBTITLE}</p>
            <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
              ${t.CTA_BUTTON}
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Generate use case content
function generateUseCaseContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'Use Case';
  const description = page.data?.metaDescription || '';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">${title}</h1>
        <p class="text-xl text-gray-600 mb-12">${description}</p>
        
        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 gap-6 mb-12">
          <div class="card-neumorphic">
            <h3 class="text-xl font-bold mb-3">Professional Website</h3>
            <p class="text-gray-600">Get your own domain and brand, no marketplace competition.</p>
          </div>
          <div class="card-neumorphic">
            <h3 class="text-xl font-bold mb-3">Smart Booking</h3>
            <p class="text-gray-600">Real-time availability with automatic confirmations.</p>
          </div>
          <div class="card-neumorphic">
            <h3 class="text-xl font-bold mb-3">Payment Integration</h3>
            <p class="text-gray-600">Accept cards, PIX, and cash with automatic receipts.</p>
          </div>
          <div class="card-neumorphic">
            <h3 class="text-xl font-bold mb-3">Team Management</h3>
            <p class="text-gray-600">Multiple staff with individual schedules and permissions.</p>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center">
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            ${t.CTA_BUTTON}
          </a>
        </div>
      </div>
    </section>
  `;
}

// Generate local SEO content
function generateLocalContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'Local Services';
  const description = page.data?.metaDescription || '';
  const city = page.data?.city || page.city || 'your city';
  const service = page.data?.service || page.service || 'professional services';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">${title}</h1>
        <p class="text-xl text-gray-600 mb-12">${description}</p>
        
        <div class="prose prose-lg max-w-none">
          <h2 class="text-2xl font-bold mb-4">Best ${service} Services in ${city}</h2>
          <p class="mb-6">
            Looking for professional ${service} services in ${city}? With Converso, you can launch 
            your professional booking website in just 5 minutes. Stop competing on marketplaces 
            and take control of your business.
          </p>
          
          <div class="card-neumorphic my-8">
            <h3 class="text-xl font-bold mb-4">Why Choose Converso?</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
                <span>Professional website with your own domain</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
                <span>Real-time booking management</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
                <span>Integrated payments (cards, PIX, cash)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
                <span>Automatic reminders via WhatsApp</span>
              </li>
            </ul>
          </div>
          
          <div class="mt-12 p-8 bg-gradient-primary text-white rounded-xl text-center">
            <h3 class="text-2xl font-bold mb-4">Start Free Today</h3>
            <p class="mb-6 text-lg">
              Join thousands of ${service} professionals in ${city} who are growing 
              their business with Converso.
            </p>
            <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
              Create Your Website Now
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Generate apps directory content
function generateAppsDirectoryContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'Apps Directory';
  const description = page.data?.metaDescription || '';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">${title}</h1>
        <p class="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          ${description}
        </p>
        
        <!-- Apps Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${generateAppCards(language)}
        </div>
        
        <!-- CTA -->
        <div class="mt-16 text-center">
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            ${t.CTA_BUTTON}
          </a>
        </div>
      </div>
    </section>
  `;
}

// Generate app cards for directory
function generateAppCards(language) {
  const apps = [
    { name: 'Digital Queue', icon: '⏱️', desc: 'Manage walk-in customers efficiently' },
    { name: 'Loyalty Program', icon: '🎁', desc: 'Reward your best customers' },
    { name: 'Email Marketing', icon: '📧', desc: 'Professional email campaigns' },
    { name: 'WhatsApp Widget', icon: '💬', desc: 'Live chat on your website' },
    { name: 'Reviews Manager', icon: '⭐', desc: 'Collect and manage reviews' },
    { name: 'Blog System', icon: '📝', desc: 'SEO-optimized content' }
  ];
  
  return apps.map(app => `
    <div class="card-neumorphic hover:shadow-neumorphic-inset transition-all cursor-pointer">
      <div class="text-4xl mb-4">${app.icon}</div>
      <h3 class="text-xl font-bold mb-2">${app.name}</h3>
      <p class="text-gray-600">${app.desc}</p>
    </div>
  `).join('');
}

// Generate app detail content
function generateAppDetailContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'App';
  const description = page.data?.metaDescription || '';
  const appName = page.data?.appName || 'App';
  const icon = page.data?.icon || '🚀';
  const category = page.data?.category || 'Converso App';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-4 mb-8">
          <div class="text-6xl">${icon}</div>
          <div>
            <h1 class="text-4xl font-bold">${title}</h1>
            <p class="text-gray-600 mt-2">${category}</p>
          </div>
        </div>
        
        <p class="text-xl text-gray-600 mb-12">${description}</p>
        
        <!-- Features -->
        <div class="card-neumorphic mb-8">
          <h2 class="text-2xl font-bold mb-6">Key Features</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Easy setup and configuration</span>
            </div>
            <div class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Full Converso integration</span>
            </div>
            <div class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Real-time updates</span>
            </div>
            <div class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Mobile optimized</span>
            </div>
          </div>
        </div>
        
        <!-- CTA -->
        <div class="text-center">
          <a href="https://app.converso.pro/dashboard/app-store" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            Activate Now
          </a>
        </div>
      </div>
    </section>
  `;
}

// Generate blog post content
function generateBlogPostContent(page, language, t) {
  return `
    <article class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">${page.title[language]}</h1>
        <p class="text-xl text-gray-600 mb-12">${description}</p>
        
        <div class="prose prose-lg max-w-none">
          ${page.content || generateDefaultBlogContent(page, language)}
        </div>
        
        <!-- CTA -->
        <div class="mt-16 p-8 bg-gradient-primary text-white rounded-xl text-center">
          <h3 class="text-2xl font-bold mb-4">${t.CTA_TITLE}</h3>
          <p class="mb-6 text-lg">${t.CTA_SUBTITLE}</p>
          <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold">
            ${t.CTA_BUTTON}
          </a>
        </div>
      </div>
    </article>
  `;
}

// Generate rich content sections
function generateRichSection(section, t) {
  switch(section.type) {
    case 'hero':
      return `
        <section class="bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              ${section.title}
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              ${section.subtitle}
            </p>
          </div>
        </section>
      `;
      
    case 'features':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${section.items.map(item => `
                <div class="card-neumorphic">
                  <div class="text-4xl mb-4">${item.icon}</div>
                  <h3 class="text-xl font-bold mb-3">${item.title}</h3>
                  <p class="text-gray-600">${item.description}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'comparison':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-lg shadow-neumorphic">
                <thead>
                  <tr class="bg-gradient-primary text-white">
                    ${section.table.headers.map(h => `<th class="p-4">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${section.table.rows.map((row, i) => `
                    <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''}">
                      ${row.map(cell => `<td class="p-4 text-center">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
      
    case 'testimonials':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-3 gap-8">
              ${section.items.map(item => `
                <div class="card-neumorphic">
                  <div class="flex mb-4">
                    ${Array(item.rating).fill('⭐').join('')}
                  </div>
                  <p class="text-gray-700 mb-4 italic">"${item.text}"</p>
                  <div>
                    <p class="font-bold">${item.name}</p>
                    <p class="text-sm text-gray-600">${item.business}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'pricing':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-${section.plans.length} gap-8 max-w-4xl mx-auto">
              ${section.plans.map(plan => `
                <div class="card-neumorphic ${plan.popular ? 'ring-4 ring-blue-500' : ''}">
                  ${plan.popular ? '<div class="bg-blue-500 text-white text-center py-2 -mt-6 -mx-6 mb-6 rounded-t-xl">Mais Popular</div>' : ''}
                  <h3 class="text-2xl font-bold mb-2">${plan.name}</h3>
                  <p class="text-3xl font-bold text-blue-600 mb-2">${plan.price}</p>
                  <p class="text-gray-600 mb-6">${plan.description}</p>
                  <ul class="space-y-3 mb-8">
                    ${plan.features.map(f => `
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>${f}</span>
                      </li>
                    `).join('')}
                  </ul>
                  <a href="https://app.converso.pro/auth?mode=signup" class="block w-full py-3 text-center bg-gradient-primary text-white rounded-lg font-bold hover:opacity-90">
                    Começar Agora
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'faq':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.items.map(item => `
                <details class="card-neumorphic cursor-pointer">
                  <summary class="font-bold text-lg p-6">${item.question}</summary>
                  <p class="px-6 pb-6 text-gray-700">${item.answer}</p>
                </details>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'content':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto prose prose-lg">
            <h2 class="text-2xl font-bold mb-6">${section.title}</h2>
            ${section.paragraphs.map(p => `<p class="mb-4">${p}</p>`).join('')}
          </div>
        </section>
      `;
      
    case 'step-by-step':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            ${section.steps.map(step => `
              <div class="mb-12 card-neumorphic">
                <div class="flex items-center mb-6">
                  <div class="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    ${step.number}
                  </div>
                  <h3 class="text-2xl font-bold">${step.title}</h3>
                </div>
                <p class="text-gray-700 mb-6">${step.content}</p>
                ${step.checklist ? `
                  <ul class="space-y-2">
                    ${step.checklist.map(item => `
                      <li class="flex items-start">
                        <span class="text-green-500 mr-2">✓</span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
                ${step.tip ? `<p class="mt-4 p-4 bg-blue-50 rounded-lg text-blue-700"><strong>💡 Dica:</strong> ${step.tip}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </section>
      `;
      
    case 'regional-pricing':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-8">${section.title}</h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-lg shadow-neumorphic">
                <thead>
                  <tr class="bg-gradient-primary text-white">
                    <th class="p-4 text-left">Região</th>
                    <th class="p-4">Básico</th>
                    <th class="p-4">Premium</th>
                    <th class="p-4">Luxo</th>
                  </tr>
                </thead>
                <tbody>
                  ${section.data.map((item, i) => `
                    <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''}">
                      <td class="p-4 font-medium">${item.region}</td>
                      <td class="p-4 text-center">${item.basic}</td>
                      <td class="p-4 text-center">${item.premium}</td>
                      <td class="p-4 text-center">${item.luxury}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ${section.note ? `<p class="text-sm text-gray-600 mt-4 text-center">${section.note}</p>` : ''}
          </div>
        </section>
      `;
      
    case 'market-overview':
      return `
        <section class="py-16 px-4 bg-gradient-to-br from-blue-50 to-green-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              ${section.stats.map(stat => `
                <div class="bg-white rounded-lg p-6 shadow-neumorphic text-center">
                  <div class="text-3xl font-bold text-blue-600 mb-2">${stat.number}</div>
                  <div class="text-gray-700 font-medium">${stat.label}</div>
                  ${stat.growth ? `<div class="text-green-600 text-sm mt-2">${stat.growth}</div>` : ''}
                  ${stat.detail ? `<div class="text-gray-500 text-sm mt-2">${stat.detail}</div>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'segment-breakdown':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.segments.map(segment => `
                <div class="card-neumorphic">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold">${segment.name}</h3>
                    <div class="text-right">
                      <div class="text-2xl font-bold text-blue-600">${segment.value}</div>
                      <div class="text-sm text-gray-600">${segment.percentage} do mercado</div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="text-green-600 font-medium">${segment.growth} crescimento</div>
                    <div class="text-sm text-gray-600">${segment.includes.join(', ')}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'pricing-comparison':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.categories.map(cat => `
                <div class="card-neumorphic ${cat.highlight ? 'ring-4 ring-green-500' : ''}">
                  <h3 class="text-xl font-bold mb-2">${cat.name}</h3>
                  <p class="text-2xl font-bold text-blue-600 mb-4">${cat.pricing}</p>
                  <div class="mb-4">
                    <p class="font-medium text-green-600 mb-2">Prós:</p>
                    <ul class="text-sm text-gray-700 space-y-1">
                      ${cat.pros.map(pro => `<li>✓ ${pro}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="mb-4">
                    <p class="font-medium text-red-600 mb-2">Contras:</p>
                    <ul class="text-sm text-gray-700 space-y-1">
                      ${cat.cons.map(con => `<li>✗ ${con}</li>`).join('')}
                    </ul>
                  </div>
                  <div class="pt-4 border-t">
                    <p class="text-sm font-medium">Custo Real: <span class="text-lg font-bold">${cat.realCost}</span></p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    default:
      return '';
  }
}

// Generate default content
function generateDefaultContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || 'Converso';
  const description = page.data?.metaDescription || '';
  const slug = page.slug;
  
  // Check if we have rich content for this page
  const richContent = PAGE_CONTENTS[slug]?.[language];
  
  if (richContent && richContent.sections) {
    // Generate rich content
    return richContent.sections.map(section => generateRichSection(section, t)).join('');
  }
  
  // Fallback to simple content
  return `
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">${title}</h1>
        <p class="text-xl text-gray-600 mb-12">${description}</p>
        
        <div class="card-neumorphic mb-8">
          <h2 class="text-2xl font-bold mb-4">Por que escolher o Converso?</h2>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Crie seu site profissional em 5 minutos</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Sem taxas por agendamento ou comissões</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2 text-xl">${t.FEATURE_CHECK}</span>
              <span>Controle total sobre seu negócio</span>
            </li>
          </ul>
        </div>
        
        <!-- CTA -->
        <div class="text-center">
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            ${t.CTA_BUTTON}
          </a>
        </div>
      </div>
    </section>
  `;
}

// Generate default blog content
function generateDefaultBlogContent(page, language) {
  const title = page.data?.h1 || page.data?.title || 'Guide';
  const description = page.data?.metaDescription || '';
  
  return `
    <p>Welcome to our comprehensive guide on ${title}.</p>
    
    <h2>Introduction</h2>
    <p>In today's digital age, having a professional online presence is crucial for any business. 
    ${description}</p>
    
    <h2>Key Benefits</h2>
    <ul>
      <li>Professional website with your own domain</li>
      <li>Complete booking management system</li>
      <li>Integrated payment processing</li>
      <li>Automated customer communications</li>
    </ul>
    
    <h2>Getting Started</h2>
    <p>With Converso, you can launch your professional booking website in just 5 minutes. 
    Our platform is designed to be intuitive and easy to use, even for those without technical experience.</p>
    
    <h2>Conclusion</h2>
    <p>Stop competing on marketplaces and take control of your business with Converso. 
    Join thousands of professionals who are already growing their business with our platform.</p>
  `;
}

// Replace template variables
function replaceVariables(template, variables) {
  let result = template;
  for (const [key, value] of Object.entries(variables)) {
    result = result.replace(new RegExp(`{{${key}}}`, 'g'), value || '');
  }
  return result;
}

// Main build function
async function build() {
  console.log('🚀 Starting static site generation...');
  
  // Read base template
  const baseTemplate = fs.readFileSync(path.join(__dirname, 'templates/base.html'), 'utf8');
  
  // Create output directory
  const outputDir = path.join(__dirname, 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Copy static files
  const staticDir = path.join(__dirname, 'static');
  if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
  }
  
  let generatedCount = 0;
  
  // Generate pages for each language
  for (const page of SEO_PAGES) {
    // Skip if page doesn't support this language
    if (page.languages && !page.languages.includes('en') && !page.languages.includes('pt-BR') && !page.languages.includes('es')) {
      continue;
    }
    
    const supportedLanguages = page.languages || ['en', 'pt-BR', 'es'];
    
    for (const language of supportedLanguages) {
      const t = translations[language];
      
      // Determine path from slug
      let pagePath = '/' + page.slug;
      
      // Add language prefix for non-English
      if (language === 'pt-BR') {
        // Handle special PT-BR paths
        if (page.slug.includes('compare/')) {
          pagePath = '/pt-BR/comparar/' + page.slug.replace('compare/', '');
        } else {
          pagePath = '/pt-BR/' + page.slug;
        }
      } else if (language === 'es') {
        // Handle special ES paths
        if (page.slug.includes('compare/')) {
          pagePath = '/es/comparar/' + page.slug.replace('compare/', '');
        } else {
          pagePath = '/es/' + page.slug;
        }
      }
      
      // Create directory
      const dir = path.join(outputDir, pagePath);
      fs.mkdirSync(dir, { recursive: true });
      
      // Generate content
      const content = generateContent(page, language, t);
      
      // Get title and description
      const title = page.data?.title || 'Converso - Professional Booking Platform';
      const description = page.data?.metaDescription || 'Create your professional booking website in 5 minutes';
      
      // Replace variables
      const variables = {
        LANG: language === 'pt-BR' ? 'pt-BR' : language,
        TITLE: title,
        DESCRIPTION: description,
        PATH: pagePath,
        CONTENT: content,
        ...t
      };
      
      const html = replaceVariables(baseTemplate, variables);
      
      // Write file
      const filePath = path.join(dir, 'index.html');
      fs.writeFileSync(filePath, html);
      
      generatedCount++;
      console.log(`✓ Generated: ${pagePath}`);
    }
  }
  
  // Generate homepage
  const homepageContent = `
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Professional Booking Websites in 5 Minutes
        </h1>
        <p class="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Stop competing on marketplaces. Launch your own professional website with Converso.
        </p>
        <div class="flex justify-center gap-4">
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            Start Free Trial
          </a>
          <a href="#features" class="btn-neumorphic text-gray-700 text-lg px-8 py-4">
            Learn More
          </a>
        </div>
      </div>
    </section>
  `;
  
  // Generate homepage for each language
  for (const language of ['en', 'pt-BR', 'es']) {
    const t = translations[language];
    const homePath = language === 'en' ? '' : `/${language}`;
    const homeDir = path.join(outputDir, homePath);
    
    fs.mkdirSync(homeDir, { recursive: true });
    
    const variables = {
      LANG: language === 'pt-BR' ? 'pt-BR' : language,
      TITLE: language === 'en' ? 'Converso - Professional Booking Websites in 5 Minutes' : 
             language === 'pt-BR' ? 'Converso - Sites Profissionais de Agendamento em 5 Minutos' :
             'Converso - Sitios Web Profesionales de Reservas en 5 Minutos',
      DESCRIPTION: t.FOOTER_DESCRIPTION,
      PATH: homePath || '/',
      CONTENT: homepageContent,
      ...t
    };
    
    const html = replaceVariables(baseTemplate, variables);
    fs.writeFileSync(path.join(homeDir, 'index.html'), html);
    generatedCount++;
  }
  
  console.log(`\n✅ Successfully generated ${generatedCount} pages!`);
  console.log('\n📁 Output directory: ' + outputDir);
  console.log('\n🎨 Don\'t forget to run: npm run build:css');
}

// Run build
build().catch(console.error);