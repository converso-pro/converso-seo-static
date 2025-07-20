const fs = require('fs');
const path = require('path');
const { SEO_PAGES } = require('./seo-pages');
const { PAGE_CONTENTS } = require('./page-contents-complete');

// Translation strings
const translations = {
  en: {
    TITLE_SUFFIX: 'Professional Booking System',
    FEATURE_CHECK: '✓',
    CTA_BUTTON: 'Create Your Website Now',
    CTA_SUBTITLE: 'Start free trial',
    READ_MORE: 'Read more',
    CONTACT: 'Contact',
    FEATURES: 'Features',
    PRICING: 'Pricing',
    TESTIMONIALS: 'Testimonials',
    LOGIN: 'Login',
    START_FREE: 'Start Free'
  },
  'pt-BR': {
    TITLE_SUFFIX: 'Sistema de Agendamento Profissional',
    FEATURE_CHECK: '✓',
    CTA_BUTTON: 'Criar Seu Site Agora',
    CTA_SUBTITLE: 'Teste grátis por 7 dias',
    READ_MORE: 'Saiba mais',
    CONTACT: 'Contato',
    FEATURES: 'Recursos',
    PRICING: 'Preços',
    TESTIMONIALS: 'Depoimentos',
    LOGIN: 'Entrar',
    START_FREE: 'Começar Grátis'
  },
  es: {
    TITLE_SUFFIX: 'Sistema de Reservas Profesional',
    FEATURE_CHECK: '✓',
    CTA_BUTTON: 'Crea Tu Sitio Ahora',
    CTA_SUBTITLE: 'Prueba gratis por 7 días',
    READ_MORE: 'Leer más',
    CONTACT: 'Contacto',
    FEATURES: 'Características',
    PRICING: 'Precios',
    TESTIMONIALS: 'Testimonios',
    LOGIN: 'Iniciar sesión',
    START_FREE: 'Empezar Gratis'
  }
};

// Footer translations
const footerTranslations = {
  en: {
    FOOTER_DESCRIPTION: 'Create your professional booking website in minutes. Join thousands of professionals who trust Converso.',
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
    FOOTER_RIGHTS: 'All rights reserved.'
  },
  'pt-BR': {
    FOOTER_DESCRIPTION: 'Crie seu site profissional de agendamentos em minutos. Junte-se a milhares de profissionais que confiam no Converso.',
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
    FOOTER_RIGHTS: 'Todos os direitos reservados.'
  },
  es: {
    FOOTER_DESCRIPTION: 'Crea tu sitio web profesional de reservas en minutos. Únete a miles de profesionales que confían en Converso.',
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
    FOOTER_RIGHTS: 'Todos los derechos reservados.'
  }
};

// Load template
const template = fs.readFileSync(path.join(__dirname, 'templates/base.html'), 'utf8');

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
      
    case 'quick-answer':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <div class="card-neumorphic bg-blue-50">
              <h2 class="text-2xl font-bold mb-4">${section.title}</h2>
              <p class="text-lg text-gray-700">${section.content}</p>
              ${section.regionalTable ? `
                <div class="mt-8 overflow-x-auto">
                  <table class="w-full bg-white rounded-lg">
                    <thead>
                      <tr class="bg-gradient-primary text-white">
                        ${section.regionalTable.headers.map(h => `<th class="p-3 text-sm">${h}</th>`).join('')}
                      </tr>
                    </thead>
                    <tbody>
                      ${section.regionalTable.rows.map((row, i) => `
                        <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''}">
                          ${row.map(cell => `<td class="p-3 text-center text-sm">${cell}</td>`).join('')}
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              ` : ''}
            </div>
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
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            ${section.subtitle ? `<p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>` : ''}
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-lg shadow-neumorphic">
                <thead>
                  <tr class="bg-gradient-primary text-white">
                    ${section.table.headers.map(h => `<th class="p-4 text-left whitespace-nowrap">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${section.table.rows.map((row, i) => `
                    <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''} border-b">
                      ${row.map((cell, idx) => `<td class="p-4 ${idx === 0 ? 'font-medium' : 'text-center'}">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;
      
    case 'calculator':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            ${section.subtitle ? `<p class="text-xl text-gray-600 text-center mb-8">${section.subtitle}</p>` : ''}
            <div class="card-neumorphic">
              <p class="text-lg mb-6">${section.description}</p>
              ${section.calculations ? `
                <div class="space-y-4">
                  ${section.calculations.map(calc => `
                    <div class="flex justify-between items-center p-4 ${calc.platform === 'Converso' ? 'bg-green-50 rounded-lg' : ''}">
                      <span class="font-medium">${calc.platform}</span>
                      <div class="text-right">
                        <span class="text-lg">${calc.monthly}</span>
                        <span class="text-sm text-gray-600 ml-2">(${calc.yearly}/ano)</span>
                        ${calc.savings ? `<div class="text-green-600 font-bold">${calc.savings}</div>` : ''}
                      </div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        </section>
      `;
      
    case 'case-study':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-8">${section.subtitle}</p>
            <div class="card-neumorphic bg-gradient-to-r from-blue-50 to-green-50">
              <p class="text-lg mb-6">${section.content}</p>
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                ${section.results.map(result => `
                  <div class="flex items-start">
                    <span class="text-green-600 text-2xl mr-3">✓</span>
                    <span class="text-lg">${result}</span>
                  </div>
                `).join('')}
              </div>
              ${section.quote ? `
                <blockquote class="border-l-4 border-blue-600 pl-6 italic">
                  <p class="text-lg mb-2">"${section.quote.text}"</p>
                  <footer class="text-gray-600">— ${section.quote.author}, ${section.quote.role}</footer>
                </blockquote>
              ` : ''}
            </div>
          </div>
        </section>
      `;
      
    case 'features-deep-dive':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-${section.sections.length} gap-8">
              ${section.sections.map(item => `
                <div class="card-neumorphic">
                  <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
                  <p class="text-gray-700 mb-6">${item.content}</p>
                  <ul class="space-y-2">
                    ${item.features.map(feat => `
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">•</span>
                        <span>${feat}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'testimonials':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${section.items.map(item => `
                <div class="card-neumorphic">
                  <div class="flex mb-4">
                    ${Array(item.rating).fill('⭐').join('')}
                  </div>
                  <p class="text-gray-700 mb-4 italic">"${item.text}"</p>
                  <div>
                    <p class="font-bold">${item.name}</p>
                    <p class="text-sm text-gray-600">${item.business}</p>
                    ${item.results ? `<p class="text-sm text-green-600 font-bold mt-1">${item.results}</p>` : ''}
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
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            ${section.subtitle ? `<p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>` : ''}
            <div class="grid md:grid-cols-${section.plans.length} gap-8 max-w-4xl mx-auto">
              ${section.plans.map(plan => `
                <div class="card-neumorphic ${plan.popular ? 'ring-4 ring-blue-500 relative' : ''}">
                  ${plan.popular ? '<div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">Mais Popular</div>' : ''}
                  <h3 class="text-2xl font-bold mb-2 ${plan.popular ? 'mt-4' : ''}">${plan.name}</h3>
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
                  <a href="https://app.converso.pro/auth?mode=signup" class="block w-full py-3 text-center ${plan.popular ? 'bg-gradient-primary' : 'bg-gray-700'} text-white rounded-lg font-bold hover:opacity-90 transition">
                    ${plan.cta || 'Começar Agora'}
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
                <details class="card-neumorphic cursor-pointer group">
                  <summary class="font-bold text-lg p-6 flex justify-between items-center">
                    ${item.question}
                    <span class="transform group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div class="px-6 pb-6 text-gray-700">${item.answer}</div>
                </details>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'guarantee':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <div class="card-neumorphic bg-gradient-to-r from-green-50 to-blue-50 text-center">
              <h2 class="text-3xl font-bold mb-4">${section.title}</h2>
              <p class="text-xl mb-8">${section.content}</p>
              <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                ${section.features.map(feat => `
                  <div class="flex items-center justify-center">
                    <span class="text-green-600 text-2xl mr-2">✓</span>
                    <span>${feat}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>
      `;
      
    case 'cta-final':
      // Handle both old and new CTA formats
      const primaryText = section.primaryCta?.text || section.cta?.primary || 'Começar Grátis';
      const primarySubtext = section.primaryCta?.subtext || '';
      const secondaryText = section.secondaryCta?.text || section.cta?.secondary || null;
      const secondarySubtext = section.secondaryCta?.subtext || '';
      
      return `
        <section class="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-4xl font-bold mb-4">${section.title}</h2>
            <p class="text-xl mb-12">${section.subtitle}</p>
            ${section.benefits ? `
              <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
                ${section.benefits.map(benefit => `
                  <div class="flex items-center justify-center">
                    <span class="text-2xl mr-2">✓</span>
                    <span>${benefit}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
                ${primaryText}
                ${primarySubtext ? `<span class="block text-sm font-normal mt-1">${primarySubtext}</span>` : ''}
              </a>
              ${secondaryText ? `
                <a href="https://wa.me/5511999999999" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                  ${secondaryText}
                  ${secondarySubtext ? `<span class="block text-sm font-normal mt-1">${secondarySubtext}</span>` : ''}
                </a>
              ` : ''}
            </div>
          </div>
        </section>
      `;

    case 'market-overview':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              ${section.stats.map(stat => `
                <div class="card-neumorphic text-center">
                  <div class="text-3xl font-bold text-blue-600 mb-2">${stat.value}</div>
                  <div class="text-xl font-medium mb-1">${stat.metric}</div>
                  <div class="text-sm text-gray-600">${stat.period}</div>
                  ${stat.detail ? `<div class="text-xs text-gray-500 mt-2">${stat.detail}</div>` : ''}
                </div>
              `).join('')}
            </div>
            ${section.insights ? `
              <div class="card-neumorphic bg-blue-50">
                <h3 class="font-bold mb-4">Principais Insights:</h3>
                <ul class="space-y-2">
                  ${section.insights.map(insight => `
                    <li class="flex items-start">
                      <span class="text-blue-600 mr-2">•</span>
                      <span>${insight}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'pricing-factors':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.factors.map(factor => `
                <div class="card-neumorphic">
                  <div class="flex items-start mb-4">
                    <span class="text-3xl mr-4">${factor.factor}</span>
                    <div class="flex-1">
                      <h3 class="text-xl font-bold">${factor.factor.replace(/[^\w\s]/g, '')}</h3>
                      <p class="text-sm text-gray-600">Impacto: ${factor.impact}</p>
                    </div>
                  </div>
                  <ul class="space-y-2">
                    ${factor.details.map(detail => `
                      <li class="flex items-start">
                        <span class="text-green-600 mr-2">•</span>
                        <span class="text-sm">${detail}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'cost-calculation':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>
            ${section.steps.map((step, idx) => `
              <div class="card-neumorphic mb-8">
                <h3 class="text-xl font-bold mb-4">${step.step}</h3>
                ${step.items ? `
                  <div class="space-y-2 mb-4">
                    ${step.items.map(item => `
                      <div class="flex justify-between">
                        <span>${item.item}</span>
                        <span class="font-medium">${item.example}</span>
                      </div>
                    `).join('')}
                    ${step.total ? `
                      <div class="border-t pt-2 mt-4">
                        <div class="flex justify-between font-bold">
                          <span>Total</span>
                          <span>${step.total}</span>
                        </div>
                      </div>
                    ` : ''}
                  </div>
                ` : ''}
                ${step.calculation ? `
                  <div class="bg-gray-50 p-4 rounded-lg">
                    ${step.calculation.map(calc => `<p class="text-sm">${calc}</p>`).join('')}
                    ${step.realistic ? `<p class="font-bold mt-2">${step.realistic}</p>` : ''}
                  </div>
                ` : ''}
                ${step.formula ? `
                  <div class="bg-blue-50 p-4 rounded-lg text-center">
                    <p class="font-mono">${step.formula}</p>
                    <p class="text-sm text-gray-600 mt-2">${step.example}</p>
                  </div>
                ` : ''}
                ${step.margins ? `
                  <div class="grid grid-cols-3 gap-4 mt-4">
                    ${step.margins.map(margin => `
                      <div class="text-center p-3 ${margin.type === 'Lucrativo' ? 'bg-green-50' : 'bg-gray-50'} rounded">
                        <div class="font-bold">${margin.type}</div>
                        <div class="text-sm text-gray-600">${margin.margin}</div>
                        <div class="font-medium">${margin.price}</div>
                      </div>
                    `).join('')}
                  </div>
                  ${step.recommendation ? `<p class="text-center mt-4 text-green-600 font-medium">${step.recommendation}</p>` : ''}
                ` : ''}
                ${step.tips ? `
                  <ul class="mt-4 space-y-2">
                    ${step.tips.map(tip => `
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">→</span>
                        <span class="text-sm">${tip}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </section>
      `;

    case 'pricing-strategies':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${section.strategies.map(strategy => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-3">${strategy.name}</h3>
                  <p class="text-gray-600 mb-4">${strategy.description}</p>
                  ${strategy.examples ? `
                    <div class="bg-gray-50 p-4 rounded-lg mb-4">
                      ${strategy.examples.map(ex => `<p class="text-sm mb-1">• ${ex}</p>`).join('')}
                    </div>
                  ` : ''}
                  ${strategy.includes ? `
                    <ul class="space-y-1 mb-4">
                      ${strategy.includes.map(item => `
                        <li class="text-sm flex items-start">
                          <span class="text-green-600 mr-1">✓</span>
                          <span>${item}</span>
                        </li>
                      `).join('')}
                    </ul>
                  ` : ''}
                  ${strategy.impact || strategy.justification || strategy.result ? `
                    <p class="text-sm font-medium text-blue-600 mt-4">
                      ${strategy.impact || strategy.justification || strategy.result}
                    </p>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'pricing-breakdown':
    case 'segment-breakdown':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            ${section.categories ? `
              <div class="space-y-8">
                ${section.categories.map((cat, idx) => `
                  <div class="card-neumorphic ${cat.highlight ? 'ring-4 ring-green-500' : ''}">
                    <div class="flex items-start gap-4 mb-4">
                      <span class="text-3xl">${cat.name.split(' ')[0]}</span>
                      <div class="flex-1">
                        <h3 class="text-xl font-bold">${cat.name.substring(cat.name.indexOf(' ') + 1)}</h3>
                        <p class="text-sm text-gray-600">${cat.examples || ''}</p>
                        <div class="mt-2">
                          <span class="font-medium">Preço: </span>${cat.pricing}
                          <span class="text-red-600 ml-4">${cat.hiddenCosts}</span>
                        </div>
                        <div class="font-bold text-lg mt-1 ${cat.highlight ? 'text-green-600' : 'text-gray-700'}">
                          Custo real: ${cat.realCost}
                        </div>
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 class="font-medium mb-2 text-green-600">Prós:</h4>
                        <ul class="space-y-1">
                          ${cat.pros.map(pro => `
                            <li class="text-sm flex items-start">
                              <span class="text-green-500 mr-1">✓</span>
                              <span>${pro}</span>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                      <div>
                        <h4 class="font-medium mb-2 text-red-600">Contras:</h4>
                        <ul class="space-y-1">
                          ${cat.cons.map(con => `
                            <li class="text-sm flex items-start">
                              <span class="text-red-500 mr-1">✗</span>
                              <span>${con}</span>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                    <div class="text-center font-bold ${cat.verdict.includes('✅') ? 'text-green-600' : cat.verdict.includes('❌') ? 'text-red-600' : 'text-yellow-600'}">
                      ${cat.verdict}
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${section.segments ? `
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${section.segments.map(seg => `
                  <div class="card-neumorphic">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-2xl font-bold">${seg.segment}</h3>
                      <span class="text-3xl font-bold text-blue-600">${seg.share}</span>
                    </div>
                    <p class="text-xl text-gray-700 mb-2">${seg.value}</p>
                    <p class="text-sm text-green-600 font-medium mb-4">Crescimento: ${seg.growth}</p>
                    <div class="mb-4">
                      <h4 class="font-medium mb-2">Destaques:</h4>
                      <ul class="space-y-1">
                        ${seg.highlights.map(h => `
                          <li class="text-sm flex items-start">
                            <span class="text-blue-600 mr-1">•</span>
                            <span>${h}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    <div class="border-t pt-4">
                      <h4 class="font-medium mb-2">Oportunidades:</h4>
                      <ul class="space-y-1">
                        ${seg.opportunities.map(o => `
                          <li class="text-sm flex items-start">
                            <span class="text-green-600 mr-1">→</span>
                            <span>${o}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'step-guide':
      return `
        <section class="py-16 px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            ${section.steps.map((step, idx) => `
              <div class="mb-12 card-neumorphic ${idx === 0 ? 'ring-4 ring-blue-500' : ''}">
                <div class="flex items-start gap-4 mb-6">
                  <div class="w-20 h-20 bg-gradient-primary text-white rounded-full flex items-center justify-center text-3xl font-bold flex-shrink-0">
                    ${step.number}
                  </div>
                  <div class="flex-1">
                    <h3 class="text-2xl font-bold mb-2">${step.title}</h3>
                    ${step.duration ? `<p class="text-sm text-gray-600 mb-4">⏱️ ${step.duration}</p>` : ''}
                    <p class="text-gray-700 mb-4">${step.content}</p>
                  </div>
                </div>
                ${step.tasks ? `
                  <div class="space-y-4 mb-6">
                    ${step.tasks.map(task => `
                      <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-bold mb-2">${task.task}</h4>
                        <p class="text-gray-700">${task.detail}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.documents ? `
                  <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">📄 Documentos Necessários:</h4>
                    <ul class="grid md:grid-cols-2 gap-2">
                      ${step.documents.map(doc => `
                        <li class="flex items-center">
                          <span class="text-blue-600 mr-2">•</span>
                          <span class="text-sm">${doc}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.tip ? `
                  <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p class="font-medium">${step.tip}</p>
                  </div>
                ` : ''}
                ${step.cost ? `
                  <div class="mt-4 text-right">
                    <span class="font-bold text-lg">💰 Investimento: ${step.cost}</span>
                  </div>
                ` : ''}
                ${step.criteria ? `
                  <div class="space-y-3 mb-6">
                    ${step.criteria.map(criterion => `
                      <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-bold text-sm mb-1">${criterion.factor}</h5>
                        <p class="text-sm text-gray-700">${criterion.detail}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.renovation ? `
                  <div class="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-3">💰 Custos de Reforma:</h4>
                    <div class="space-y-2">
                      ${step.renovation.map(item => `
                        <div class="flex justify-between text-sm">
                          <span>${item.item}</span>
                          <span class="font-medium">${item.cost}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${step.warning ? `
                  <div class="bg-red-50 p-4 rounded-lg mb-6 border-l-4 border-red-500">
                    <p class="font-medium">${step.warning}</p>
                  </div>
                ` : ''}
                ${step.essentials ? `
                  <div class="space-y-6 mb-6">
                    ${step.essentials.map(cat => `
                      <div>
                        <h4 class="font-bold mb-3">${cat.category}</h4>
                        <div class="bg-gray-50 p-4 rounded-lg">
                          ${cat.items ? `
                            <div class="space-y-2">
                              ${cat.items.map(item => `
                                <div class="flex justify-between text-sm">
                                  <span>${item.item} ${item.qty ? `(${item.qty}x)` : ''}</span>
                                  <span class="font-medium">${item.total || item.unitCost || ''}</span>
                                </div>
                              `).join('')}
                            </div>
                          ` : ''}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.suppliers ? `
                  <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">🛒 Onde Comprar:</h4>
                    <ul class="space-y-1">
                      ${step.suppliers.map(supplier => `
                        <li class="text-sm">• ${supplier}</li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.totalCost ? `
                  <div class="text-right">
                    <span class="font-bold text-xl">💰 Total: ${step.totalCost}</span>
                  </div>
                ` : ''}
                ${step.categories ? `
                  <div class="space-y-4 mb-6">
                    ${step.categories.map(cat => `
                      <div>
                        <h4 class="font-bold mb-2">${cat.name}</h4>
                        <ul class="space-y-1 text-sm">
                          ${cat.items.map(item => `
                            <li>• ${item}</li>
                          `).join('')}
                        </ul>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.negotiation ? `
                  <div class="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">💡 Dicas de Negociação:</h4>
                    <ul class="space-y-1">
                      ${step.negotiation.map(tip => `
                        <li class="text-sm">• ${tip}</li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.models ? `
                  <div class="space-y-6 mb-6">
                    ${step.models.map(model => `
                      <div class="bg-gray-50 p-4 rounded-lg">
                        <h4 class="font-bold mb-2">${model.type}</h4>
                        ${model.description ? `<p class="text-sm text-gray-700 mb-3">${model.description}</p>` : ''}
                        <div class="grid md:grid-cols-2 gap-4">
                          ${model.pros ? `
                            <div>
                              <h5 class="font-medium text-green-600 mb-2">Prós:</h5>
                              <ul class="space-y-1">
                                ${model.pros.map(pro => `
                                  <li class="text-sm">✓ ${pro}</li>
                                `).join('')}
                              </ul>
                            </div>
                          ` : ''}
                          ${model.cons ? `
                            <div>
                              <h5 class="font-medium text-red-600 mb-2">Contras:</h5>
                              <ul class="space-y-1">
                                ${model.cons.map(con => `
                                  <li class="text-sm">✗ ${con}</li>
                                `).join('')}
                              </ul>
                            </div>
                          ` : ''}
                        </div>
                        ${model.costs ? `
                          <div class="mt-3 pt-3 border-t">
                            <h5 class="font-medium mb-2">Custos:</h5>
                            <ul class="space-y-1">
                              ${model.costs.map(cost => `
                                <li class="text-sm">• ${cost}</li>
                              `).join('')}
                            </ul>
                          </div>
                        ` : ''}
                        ${model.ideal ? `<p class="text-sm text-blue-600 mt-3 font-medium">Ideal para: ${model.ideal}</p>` : ''}
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.positions ? `
                  <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-3">💼 Cargos e Salários:</h4>
                    <div class="space-y-2">
                      ${step.positions.map(pos => `
                        <div class="flex justify-between text-sm">
                          <span>${pos.role} ${pos.qty > 1 ? `(${pos.qty})` : ''}</span>
                          <span class="font-medium">${pos.cost}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${step.recruitment ? `
                  <div class="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">🔍 Onde Recrutar:</h4>
                    <ul class="space-y-1">
                      ${step.recruitment.map(tip => `
                        <li class="text-sm">• ${tip}</li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.monthlyCost ? `
                  <div class="text-right">
                    <span class="font-bold text-lg">💰 Custo Mensal: ${step.monthlyCost}</span>
                  </div>
                ` : ''}
                ${step.preLaunch ? `
                  <div class="mb-6">
                    <h4 class="font-bold mb-3">🚀 Pré-Lançamento:</h4>
                    <div class="space-y-3">
                      ${step.preLaunch.map(item => `
                        <div class="bg-gray-50 p-3 rounded-lg">
                          <div class="flex justify-between items-start">
                            <div>
                              <h5 class="font-medium">${item.action}</h5>
                              <p class="text-sm text-gray-700">${item.detail}</p>
                            </div>
                            <span class="text-sm font-medium whitespace-nowrap ml-3">${item.cost}</span>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${step.launch ? `
                  <div class="mb-6">
                    <h4 class="font-bold mb-3">🎉 Lançamento:</h4>
                    <div class="space-y-3">
                      ${step.launch.map(item => `
                        <div class="bg-yellow-50 p-3 rounded-lg">
                          <h5 class="font-medium">${item.strategy}</h5>
                          <p class="text-sm text-gray-700">${item.detail}</p>
                          ${item.impact ? `<p class="text-sm text-green-600 mt-1">→ ${item.impact}</p>` : ''}
                          ${item.cost ? `<p class="text-sm font-medium mt-1">Custo: ${item.cost}</p>` : ''}
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${step.ongoing ? `
                  <div class="mb-6">
                    <h4 class="font-bold mb-3">♻️ Marketing Contínuo:</h4>
                    <div class="space-y-3">
                      ${step.ongoing.map(item => `
                        <div class="bg-blue-50 p-3 rounded-lg">
                          <h5 class="font-medium">${item.tactic}</h5>
                          <p class="text-sm text-gray-700">${item.detail}</p>
                          <p class="text-sm text-green-600 mt-1">→ ${item.result}</p>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                ` : ''}
                ${step.budget ? `<p class="text-right font-bold">💰 Orçamento: ${step.budget}</p>` : ''}
                ${step.systems ? `
                  <div class="space-y-4 mb-6">
                    ${step.systems.map(sys => `
                      <div class="bg-gray-50 p-4 rounded-lg">
                        <h5 class="font-bold mb-2">${sys.area}</h5>
                        <p class="text-sm text-gray-700 mb-1">${sys.solution}</p>
                        <p class="text-sm text-green-600 mb-1">→ ${sys.benefit}</p>
                        <p class="text-sm font-medium">Ferramenta: ${sys.tool}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.metrics ? `
                  <div class="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">📊 Métricas Essenciais:</h4>
                    <ul class="space-y-1">
                      ${step.metrics.map(metric => `
                        <li class="text-sm">• ${metric}</li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.challenges ? `
                  <div class="space-y-3 mb-6">
                    ${step.challenges.map(challenge => `
                      <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium">${challenge.month}</h5>
                        <p class="text-sm text-gray-700">${challenge.focus}</p>
                        <p class="text-sm text-blue-600 mt-1">Meta: ${challenge.goal}</p>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${step.growth ? `
                  <div class="bg-green-50 p-4 rounded-lg mb-6">
                    <h4 class="font-bold mb-2">📈 Estratégias de Crescimento:</h4>
                    <ul class="space-y-1">
                      ${step.growth.map(strategy => `
                        <li class="text-sm">• ${strategy}</li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}
                ${step.factors ? `
                  <div class="space-y-3">
                    ${step.factors.map(factor => `
                      <div class="bg-gray-50 p-3 rounded-lg">
                        <h5 class="font-medium">${factor.factor}</h5>
                        <ul class="space-y-1 mt-2">
                          ${factor.detail.split('\n').map(line => `
                            <li class="text-sm">• ${line}</li>
                          `).join('')}
                        </ul>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
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
                ${step.breakdown ? `
                  <div class="space-y-2">
                    ${step.breakdown.map(item => `
                      <div class="flex justify-between ${item.highlight ? 'font-bold text-lg' : ''}">
                        <span>${item.item}</span>
                        <span>${item.cost}</span>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </section>
      `;

    case 'hidden-costs':
      // Handle different hidden costs formats
      if (section.costs) {
        // Platform comparison format
        return `
          <section class="py-16 px-4 bg-red-50">
            <div class="max-w-6xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
              <div class="overflow-x-auto">
                <table class="w-full card-neumorphic">
                  <thead>
                    <tr class="border-b">
                      <th class="text-left p-4">Custo</th>
                      <th class="text-center p-4">Shopify</th>
                      <th class="text-center p-4">WooCommerce</th>
                      <th class="text-center p-4">Nuvemshop</th>
                      <th class="text-center p-4">Loja Integrada</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${section.costs.map(cost => `
                      <tr class="border-b">
                        <td class="p-4 font-medium">${cost.item}</td>
                        <td class="p-4 text-center">${cost.shopify || '-'}</td>
                        <td class="p-4 text-center">${cost.woo || '-'}</td>
                        <td class="p-4 text-center">${cost.nuvem || '-'}</td>
                        <td class="p-4 text-center">${cost.loja || '-'}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        `;
      } else if (section.items) {
        // Standard hidden costs format
        return `
          <section class="py-16 px-4 bg-red-50">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
              ${section.subtitle ? `<p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>` : ''}
              <div class="space-y-6">
                ${section.items.map(item => `
                  <div class="card-neumorphic bg-white">
                    <div class="flex items-start justify-between">
                      <div class="flex-1">
                        <h3 class="text-lg font-bold mb-2">${item.cost}</h3>
                        <p class="text-gray-700 mb-2">${item.description}</p>
                        <p class="text-red-600 font-medium">Impacto: ${item.impact}</p>
                      </div>
                      <div class="ml-4 text-right">
                        <p class="text-green-600 font-bold">${item.converso}</p>
                      </div>
                    </div>
                  </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      }
      return '';

    case 'service-table':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            ${section.subtitle ? `<p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>` : ''}
            ${section.services.map(cat => `
              <div class="mb-12">
                <h3 class="text-2xl font-bold mb-6">${cat.category}</h3>
                <div class="overflow-x-auto">
                  <table class="w-full bg-white rounded-lg shadow-neumorphic">
                    <thead>
                      <tr class="bg-gradient-primary text-white">
                        <th class="p-4 text-left">Serviço</th>
                        <th class="p-4 text-center">Tempo</th>
                        <th class="p-4 text-center">Popular</th>
                        <th class="p-4 text-center">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${cat.items.map((item, i) => `
                        <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''}">
                          <td class="p-4 font-medium">${item.service}</td>
                          <td class="p-4 text-center text-gray-600">${item.time}</td>
                          <td class="p-4 text-center font-medium">${item.popular}</td>
                          <td class="p-4 text-center font-medium text-blue-600">${item.premium}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>
            `).join('')}
          </div>
        </section>
      `;

    case 'regional-analysis':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              ${section.regions.map(region => `
                <div class="card-neumorphic">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold">${region.region}</h3>
                    <span class="text-2xl font-bold text-blue-600">${region.share}</span>
                  </div>
                  <div class="mb-4">
                    <h4 class="font-medium mb-2">Características:</h4>
                    <ul class="space-y-1">
                      ${region.characteristics.map(char => `
                        <li class="text-sm flex items-start">
                          <span class="text-gray-600 mr-1">•</span>
                          <span>${char}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="mb-4">
                    <h4 class="font-medium mb-2 text-green-600">Oportunidades:</h4>
                    <ul class="space-y-1">
                      ${region.opportunities.map(opp => `
                        <li class="text-sm flex items-start">
                          <span class="text-green-600 mr-1">→</span>
                          <span>${opp}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  ${region.challenges ? `
                    <div>
                      <h4 class="font-medium mb-2 text-red-600">Desafios:</h4>
                      <ul class="space-y-1">
                        ${region.challenges.map(chal => `
                          <li class="text-sm flex items-start">
                            <span class="text-red-600 mr-1">!</span>
                            <span>${chal}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'consumer-profile':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.profiles.map(profile => `
                <div class="card-neumorphic">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold">${profile.segment}</h3>
                    <span class="text-2xl font-bold text-blue-600">${profile.share}</span>
                  </div>
                  <div class="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span class="text-gray-600">Frequência:</span>
                      <span class="font-medium ml-2">${profile.frequency}</span>
                    </div>
                    <div>
                      <span class="text-gray-600">Ticket:</span>
                      <span class="font-medium ml-2">${profile.avgTicket}</span>
                    </div>
                  </div>
                  <div class="mb-4">
                    <h4 class="font-medium mb-2">Prioridades:</h4>
                    <ul class="space-y-1">
                      ${profile.priorities.map(prio => `
                        <li class="text-sm flex items-center">
                          <span class="text-blue-600 mr-2">•</span>
                          <span>${prio}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="border-t pt-4">
                    <h4 class="font-medium mb-2">Insights:</h4>
                    <ul class="space-y-1">
                      ${profile.insights.map(insight => `
                        <li class="text-sm flex items-start">
                          <span class="text-green-600 mr-2">💡</span>
                          <span>${insight}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'success-factors':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.factors.map((factor, idx) => `
                <div class="card-neumorphic ${idx === 0 ? 'ring-4 ring-green-500' : ''}">
                  <div class="flex items-start gap-4">
                    <div class="text-3xl">${factor.factor}</div>
                    <div class="flex-1">
                      <div class="flex items-center justify-between mb-2">
                        <h3 class="text-xl font-bold">${factor.factor.replace(/[^\w\s]/g, '')}</h3>
                        <span class="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                          ${factor.importance}
                        </span>
                      </div>
                      <p class="text-gray-700 mb-4">${factor.why || ''}</p>
                      ${factor.tip ? `<p class="text-sm text-gray-600 italic">💡 ${factor.tip}</p>` : ''}
                      ${factor.how ? `
                        <ul class="space-y-2">
                          ${factor.how.map(item => `
                            <li class="flex items-start">
                            <span class="text-green-600 mr-2">✓</span>
                            <span class="text-sm">${item}</span>
                          </li>
                        `).join('')}
                      </ul>
                      ` : ''}
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'opportunities-matrix':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-8">
              ${section.opportunities.map(level => `
                <div>
                  <h3 class="text-2xl font-bold mb-4 ${level.level.includes('Alta') ? 'text-green-600' : level.level.includes('Média') ? 'text-yellow-600' : 'text-red-600'}">
                    ${level.level}
                  </h3>
                  <div class="grid md:grid-cols-${level.areas.length > 2 ? '3' : '2'} gap-6">
                    ${level.areas.map(area => `
                      <div class="card-neumorphic">
                        <h4 class="text-lg font-bold mb-2">${area.area}</h4>
                        <div class="space-y-2 text-sm">
                          <div>
                            <span class="text-gray-600">Investimento:</span>
                            <span class="font-medium ml-2">${area.investment}</span>
                          </div>
                          <div>
                            <span class="text-gray-600">Retorno:</span>
                            <span class="font-medium ml-2">${area.return}</span>
                          </div>
                          <p class="text-gray-700 mt-3">${area.why}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'investment-analysis':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.scenarios.map(scenario => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-4">${scenario.model}</h3>
                  <div class="space-y-3">
                    <div class="flex justify-between">
                      <span class="text-gray-600">Investimento:</span>
                      <span class="font-bold text-red-600">${scenario.investment}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Faturamento:</span>
                      <span class="font-bold">${scenario.monthlyRevenue}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Lucro líquido:</span>
                      <span class="font-bold text-green-600">${scenario.profit}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">Retorno:</span>
                      <span class="font-bold text-blue-600">${scenario.breakeven}</span>
                    </div>
                    <p class="text-sm text-gray-700 mt-4 pt-4 border-t">${scenario.profile}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'trends-2024':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.trends.map(trend => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-3">${trend.trend}</h3>
                  <p class="text-gray-700 mb-4">${trend.description}</p>
                  <div class="flex items-center justify-between mb-4">
                    <span class="text-sm text-gray-600">${trend.growth ? `Crescimento:` : trend.adoption ? `Adoção:` : trend.demand ? `Demanda:` : 'Mercado:'}</span>
                    <span class="font-bold text-green-600">${trend.growth || trend.adoption || trend.demand || trend.market}</span>
                  </div>
                  <div class="border-t pt-4">
                    <h4 class="font-medium mb-2">Oportunidades:</h4>
                    <ul class="space-y-1">
                      ${trend.opportunities.map(opp => `
                        <li class="text-sm flex items-start">
                          <span class="text-blue-600 mr-2">→</span>
                          <span>${opp}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
      
    case 'quick-summary':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <div class="card-neumorphic bg-blue-50">
              <h2 class="text-2xl font-bold mb-4">${section.title}</h2>
              <p class="text-lg text-gray-700 mb-6">${section.content}</p>
              ${section.highlights ? `
                <div class="grid md:grid-cols-2 gap-4">
                  ${section.highlights.map(highlight => `
                    <div class="flex items-center">
                      <span class="text-green-600 text-xl mr-2">•</span>
                      <span>${highlight}</span>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
        </section>
      `;

    case 'toc':
      return `
        <section class="py-8 px-4">
          <div class="max-w-4xl mx-auto">
            <div class="card-neumorphic">
              <h2 class="text-2xl font-bold mb-6">${section.title}</h2>
              <ul class="space-y-3">
                ${section.items.map((item, idx) => `
                  <li class="flex items-start">
                    <span class="text-blue-600 font-bold mr-3">${idx + 1}.</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </section>
      `;

    case 'pricing-tips':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.tips.map(tip => `
                <div class="card-neumorphic">
                  <h3 class="text-lg font-bold mb-2">${tip.title}</h3>
                  <p class="text-gray-700">${tip.content}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'final-comparison':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="overflow-x-auto">
              <table class="w-full bg-white rounded-lg shadow-neumorphic">
                <thead>
                  <tr class="bg-gradient-primary text-white">
                    ${section.table.headers.map(h => `<th class="p-4 text-left">${h}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${section.table.rows.map((row, i) => `
                    <tr class="${i % 2 === 0 ? 'bg-gray-50' : ''}">
                      ${row.map((cell, idx) => `<td class="p-4 ${idx === 0 ? 'font-medium' : ''}">${cell}</td>`).join('')}
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      `;

    case 'cta-smart':
      return `
        <section class="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl font-bold mb-8">${section.title}</h2>
            ${section.calculation ? `
              <div class="bg-white/10 backdrop-blur rounded-lg p-6 mb-8">
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p class="text-sm opacity-90">Outros sistemas:</p>
                    <p class="text-2xl font-bold">${section.calculation.otherSystems}</p>
                  </div>
                  <div>
                    <p class="text-sm opacity-90">Converso:</p>
                    <p class="text-2xl font-bold">${section.calculation.converso}</p>
                  </div>
                </div>
                <div class="border-t border-white/20 pt-4">
                  <p class="text-sm opacity-90">Economia mensal:</p>
                  <p class="text-3xl font-bold">${section.calculation.savings}</p>
                  <p class="text-xl mt-2">${section.calculation.yearlySavings}</p>
                </div>
              </div>
            ` : ''}
            <p class="text-xl mb-8">${section.message}</p>
            <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
              ${section.cta}
            </a>
          </div>
        </section>
      `;

    case 'competitor-analysis':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-8">
              ${section.steps.map((step, idx) => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-4">${step.action}</h3>
                  <ul class="space-y-2">
                    ${step.how.map(item => `
                      <li class="flex items-start">
                        <span class="text-blue-600 mr-2">→</span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                  ${step.columns ? `
                    <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p class="font-medium mb-2">Colunas da planilha:</p>
                      <div class="grid md:grid-cols-2 gap-2">
                        ${step.columns.map(col => `
                          <span class="text-sm">• ${col}</span>
                        `).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'value-proposition':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>
            <div class="grid md:grid-cols-2 gap-8">
              ${section.strategies.map(strategy => `
                <div class="card-neumorphic">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-xl font-bold">${strategy.value}</h3>
                    <span class="text-sm font-medium px-3 py-1 bg-green-100 text-green-700 rounded-full">
                      ${strategy.premium}
                    </span>
                  </div>
                  <ul class="space-y-2">
                    ${strategy.offerings.map(offering => `
                      <li class="flex items-start">
                        <span class="text-green-600 mr-2">✓</span>
                        <span class="text-sm">${offering}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'pricing-mistakes':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.mistakes.map(mistake => `
                <div class="card-neumorphic border-l-4 border-red-500">
                  <h3 class="text-lg font-bold mb-3">${mistake.mistake}</h3>
                  <div class="mb-4">
                    <h4 class="font-medium text-red-600 mb-2">Consequências:</h4>
                    <ul class="space-y-1">
                      ${mistake.consequences.map(cons => `
                        <li class="text-sm flex items-start">
                          <span class="text-red-500 mr-2">•</span>
                          <span>${cons}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="bg-green-50 p-3 rounded-lg">
                    <p class="font-medium text-green-700">✓ Solução: ${mistake.solution}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'regional-insights':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-8">
              ${section.regions.map(region => `
                <div class="card-neumorphic">
                  <h3 class="text-2xl font-bold mb-3">${region.region}</h3>
                  <p class="text-gray-600 mb-4">${region.profile}</p>
                  <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 class="font-medium mb-2">Insights:</h4>
                      <ul class="space-y-1">
                        ${region.insights.map(insight => `
                          <li class="text-sm flex items-start">
                            <span class="text-blue-600 mr-2">•</span>
                            <span>${insight}</span>
                          </li>
                        `).join('')}
                      </ul>
                    </div>
                    <div>
                      <h4 class="font-medium mb-2">Oportunidade:</h4>
                      <p class="text-sm text-green-600">${region.opportunity}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'profit-optimization':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${section.tactics.map(tactic => `
                <div class="card-neumorphic">
                  <h3 class="text-lg font-bold mb-3">${tactic.tactic}</h3>
                  <ul class="space-y-2 mb-4">
                    ${tactic.how.map(item => `
                      <li class="text-sm flex items-start">
                        <span class="text-green-600 mr-2">→</span>
                        <span>${item}</span>
                      </li>
                    `).join('')}
                  </ul>
                  <p class="text-sm font-medium text-green-600 border-t pt-3">
                    Impacto: ${tactic.impact}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'pricing-communication':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.techniques.map(tech => `
                <div class="card-neumorphic">
                  <h3 class="font-bold mb-2">${tech.technique}</h3>
                  <p class="text-gray-700 italic">"${tech.example}"</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'case-studies':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-${section.cases.length > 2 ? '3' : '2'} gap-8">
              ${section.cases.map(study => `
                <div class="card-neumorphic">
                  <h3 class="text-lg font-bold mb-3">${study.business}</h3>
                  <div class="space-y-3">
                    <div>
                      <p class="text-sm text-gray-600">Antes:</p>
                      <p class="font-medium">${study.before}</p>
                    </div>
                    ${study.strategy ? `
                      <div>
                        <p class="text-sm text-gray-600">Estratégia:</p>
                        <p class="font-medium">${study.strategy}</p>
                      </div>
                    ` : ''}
                    ${study.after ? `
                      <div>
                        <p class="text-sm text-gray-600">Depois:</p>
                        <p class="font-medium">${study.after}</p>
                      </div>
                    ` : ''}
                    ${study.results ? `
                      <div>
                        <p class="text-sm text-gray-600">Resultados:</p>
                        <ul class="space-y-1">
                          ${study.results.map(result => `
                            <li class="text-sm font-medium text-green-600">• ${result}</li>
                          `).join('')}
                        </ul>
                      </div>
                    ` : ''}
                    ${study.monthly || study.yearly ? `
                      <div class="border-t pt-3">
                        ${study.monthly ? `<p class="text-sm">Mensal: <span class="font-bold text-green-600">${study.monthly}</span></p>` : ''}
                        ${study.yearly ? `<p class="text-sm">Anual: <span class="font-bold text-green-600">${study.yearly}</span></p>` : ''}
                      </div>
                    ` : ''}
                    ${study.testimonial ? `
                      <p class="text-sm italic text-gray-600 border-t pt-3">"${study.testimonial}"</p>
                    ` : ''}
                    ${study.lesson ? `
                      <p class="text-sm font-medium text-blue-600 mt-3">→ ${study.lesson}</p>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'future-trends':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.trends.map(trend => `
                <div class="card-neumorphic">
                  <h3 class="text-lg font-bold mb-2">${trend.trend}</h3>
                  <p class="text-gray-700 mb-2">${trend.description}</p>
                  <p class="text-sm text-blue-600 font-medium">→ ${trend.impact}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'action-plan':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.steps.map((step, idx) => `
                <div class="card-neumorphic ${idx === 0 ? 'ring-4 ring-blue-500' : ''}">
                  <h3 class="text-xl font-bold mb-4">${step.week}</h3>
                  <ul class="space-y-2">
                    ${step.actions.map(action => `
                      <li class="flex items-start">
                        <span class="text-green-600 mr-2">✓</span>
                        <span>${action}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'pricing-calculator-cta':
      return `
        <section class="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-3xl font-bold mb-4">${section.title}</h2>
            <p class="text-xl mb-8">${section.description}</p>
            <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              ${section.features.map(feat => `
                <div class="flex items-center justify-center">
                  <span class="text-2xl mr-2">✓</span>
                  <span>${feat}</span>
                </div>
              `).join('')}
            </div>
            <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
              ${section.cta.text}
              <span class="block text-sm font-normal mt-1">${section.cta.subtext}</span>
            </a>
          </div>
        </section>
      `;

    case 'growth-analysis':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-8">
              ${section.periods.map(period => `
                <div class="card-neumorphic">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-2xl font-bold">${period.period}</h3>
                    <span class="text-3xl font-bold text-green-600">${period.growth}</span>
                  </div>
                  ${period.revenue ? `<p class="text-xl text-gray-700 mb-4">Faturamento esperado: <span class="font-bold">${period.revenue}</span></p>` : ''}
                  <div>
                    <h4 class="font-medium mb-2">${period.factors ? 'Fatores:' : 'Drivers:'}</h4>
                    <ul class="space-y-1">
                      ${(period.factors || period.drivers).map(item => `
                        <li class="text-sm flex items-start">
                          <span class="text-blue-600 mr-2">•</span>
                          <span>${item}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
            ${section.comparison ? `
              <div class="mt-12">
                <h3 class="text-2xl font-bold mb-6">${section.comparison.title}</h3>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  ${section.comparison.data.map(item => `
                    <div class="card-neumorphic text-center">
                      <h4 class="font-bold mb-2">${item.sector}</h4>
                      <p class="text-2xl font-bold ${item.sector.includes('Beleza') ? 'text-green-600' : 'text-gray-600'}">${item.growth}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'feature-comparison':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-8">
              ${section.sections.map(sec => `
                <div>
                  <h3 class="text-xl font-bold mb-2">${sec.category}</h3>
                  <p class="text-gray-600 mb-6">${sec.description}</p>
                  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${sec.items.map(item => `
                      <div class="card-neumorphic ${item.importance === 'critical' ? 'ring-2 ring-red-500' : item.importance === 'high' ? 'ring-2 ring-yellow-500' : ''}">
                        <h4 class="font-medium">${item.feature}</h4>
                        <p class="text-xs text-gray-600 mt-1">Importância: ${item.importance === 'critical' ? 'Crítica' : item.importance === 'high' ? 'Alta' : 'Média'}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'roi-analysis':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>
            ${section.content ? `<p class="text-lg text-center mb-8">${section.content}</p>` : ''}
            ${section.metrics ? `
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                ${section.metrics.map(metric => `
                  <div class="card-neumorphic">
                    <h3 class="text-lg font-bold mb-3">${metric.benefit}</h3>
                    <div class="space-y-2">
                      <div class="flex justify-between">
                        <span class="text-gray-600">Antes:</span>
                        <span class="font-medium">${metric.before}</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-gray-600">Depois:</span>
                        <span class="font-medium text-green-600">${metric.after}</span>
                      </div>
                      <div class="flex justify-between border-t pt-2">
                        <span class="text-gray-600">Impacto:</span>
                        <span class="font-bold">${metric.impact}</span>
                      </div>
                      <div class="bg-green-50 p-2 rounded text-center">
                        <span class="font-bold text-green-700">${metric.value}</span>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${section.benefits ? `
              <div class="space-y-4">
                ${section.benefits.map(benefit => `
                  <div class="card-neumorphic">
                    <div class="flex items-start">
                      <div class="flex-1">
                        <h3 class="font-bold mb-2">${benefit.metric}</h3>
                        <p class="text-gray-700">${benefit.value}</p>
                      </div>
                      <div class="ml-4 text-right">
                        <p class="text-2xl font-bold text-green-600">${benefit.impact}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            ` : ''}
            ${section.totalROI ? `
              <div class="mt-8 card-neumorphic bg-gradient-to-r from-blue-50 to-green-50 text-center">
                <h3 class="text-2xl font-bold mb-4">Retorno Total</h3>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <p class="text-gray-600">Investimento:</p>
                    <p class="text-xl font-bold">${section.totalROI.investment}</p>
                  </div>
                  <div>
                    <p class="text-gray-600">Retorno:</p>
                    <p class="text-xl font-bold text-green-600">${section.totalROI.return}</p>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t">
                  <p class="text-3xl font-bold text-blue-600">ROI: ${section.totalROI.roi}</p>
                  <p class="text-lg text-gray-600">Payback: ${section.totalROI.payback}</p>
                </div>
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'investment-breakdown':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.categories.map(cat => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-4">${cat.category}</h3>
                  <div class="space-y-2">
                    ${cat.items.map(item => `
                      <div class="flex justify-between">
                        <span>${item.item}</span>
                        <span class="font-medium">${item.cost}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div class="border-t mt-3 pt-3">
                    <div class="flex justify-between font-bold">
                      <span>Subtotal:</span>
                      <span>${cat.subtotal}</span>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            ${section.total ? `
              <div class="mt-8 card-neumorphic bg-gradient-to-r from-blue-50 to-green-50 text-center">
                <h3 class="text-2xl font-bold mb-4">Investimento Total</h3>
                <div class="grid md:grid-cols-3 gap-4">
                  <div>
                    <p class="text-gray-600">Mínimo:</p>
                    <p class="text-xl font-bold">${section.total.minimum}</p>
                  </div>
                  <div>
                    <p class="text-gray-600">Máximo:</p>
                    <p class="text-xl font-bold">${section.total.maximum}</p>
                  </div>
                  <div>
                    <p class="text-gray-600">Realista:</p>
                    <p class="text-2xl font-bold text-green-600">${section.total.realistic}</p>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'financial-projection':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            ${section.disclaimer ? `<p class="text-center text-gray-600 mb-12">${section.disclaimer}</p>` : ''}
            ${section.monthly ? `
              <div class="card-neumorphic">
                <h3 class="text-2xl font-bold mb-6">Projeção Mensal</h3>
                <div class="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 class="font-bold mb-4 text-green-600">Receitas</h4>
                    <div class="space-y-2">
                      ${section.monthly.revenue.map(item => `
                        <div class="flex justify-between">
                          <span>${item.source}</span>
                          <span class="font-medium">${item.amount}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="border-t mt-3 pt-3">
                      <div class="flex justify-between font-bold text-lg">
                        <span>Total Receitas:</span>
                        <span class="text-green-600">${section.monthly.totalRevenue}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 class="font-bold mb-4 text-red-600">Despesas</h4>
                    <div class="space-y-2">
                      ${section.monthly.expenses.map(item => `
                        <div class="flex justify-between">
                          <span>${item.expense}</span>
                          <span class="font-medium">${item.amount}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="border-t mt-3 pt-3">
                      <div class="flex justify-between font-bold text-lg">
                        <span>Total Despesas:</span>
                        <span class="text-red-600">${section.monthly.totalExpenses}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg text-center">
                  <h4 class="text-xl font-bold mb-2">Lucro Líquido</h4>
                  <p class="text-3xl font-bold text-green-600">${section.monthly.netProfit}</p>
                  <p class="text-lg text-gray-600">Margem: ${section.monthly.margin}</p>
                </div>
              </div>
            ` : ''}
            <div class="mt-8 grid md:grid-cols-2 gap-6">
              <div class="card-neumorphic text-center">
                <h4 class="font-bold mb-2">Ponto de Equilíbrio</h4>
                <p class="text-2xl font-bold text-blue-600">${section.breakeven}</p>
              </div>
              <div class="card-neumorphic text-center">
                <h4 class="font-bold mb-2">Retorno do Investimento</h4>
                <p class="text-2xl font-bold text-green-600">${section.roi}</p>
              </div>
            </div>
          </div>
        </section>
      `;

    case 'common-mistakes':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.mistakes.map(mistake => `
                <div class="card-neumorphic border-l-4 border-red-500">
                  <h3 class="text-lg font-bold mb-3">${mistake.mistake}</h3>
                  <p class="text-red-600 mb-3">Consequência: ${mistake.consequence}</p>
                  <div class="bg-green-50 p-3 rounded-lg">
                    <p class="font-medium text-green-700">✓ Solução: ${mistake.solution}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'checklist':
      // Handle both categorized and simple checklists
      if (section.categories) {
        return `
          <section class="py-16 px-4 bg-gray-50">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
              <div class="grid md:grid-cols-2 gap-6">
                ${section.categories.map(cat => `
                  <div class="card-neumorphic">
                    <h3 class="text-lg font-bold mb-4">${cat.category}</h3>
                    <ul class="space-y-2">
                      ${cat.items.map(item => `
                        <li class="flex items-start">
                          <span class="text-green-600 mr-2">☐</span>
                          <span>${item}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        `;
      } else if (section.items) {
        // Simple checklist
        return `
          <section class="py-16 px-4 bg-gray-50">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
              <div class="card-neumorphic max-w-2xl mx-auto">
                <ul class="space-y-3">
                  ${section.items.map(item => `
                    <li class="flex items-start">
                      <span class="text-green-600 mr-2 text-xl">${item.startsWith('✓') ? '' : '✓'}</span>
                      <span>${item.replace('✓ ', '')}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </section>
      `;
      }
      return '';

    case 'final-tips':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.tips.map(tip => `
                <div class="card-neumorphic">
                  <p class="italic text-lg mb-3">"${tip.tip}"</p>
                  <p class="text-right font-medium">— ${tip.author}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'next-steps':
      return `
        <section class="py-16 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center text-white mb-12">${section.title}</h2>
            ${section.cta ? `
              <div class="card-neumorphic bg-white/10 backdrop-blur text-white">
                <h3 class="text-2xl font-bold mb-4">${section.cta.title}</h3>
                <p class="text-lg mb-6">${section.cta.content}</p>
                <ul class="space-y-2 mb-8">
                  ${section.cta.benefits.map(benefit => `
                    <li class="flex items-start">
                      <span class="text-2xl mr-2">✓</span>
                      <span>${benefit}</span>
                    </li>
                  `).join('')}
                </ul>
                <div class="text-center">
                  <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
                    ${section.cta.action}
                  </a>
                </div>
              </div>
            ` : ''}
          </div>
        </section>
      `;

    case 'regulatory-landscape':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.regulations.map(reg => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-4">${reg.area}</h3>
                  <div class="mb-4">
                    <h4 class="font-medium mb-2">Requisitos:</h4>
                    <ul class="space-y-1">
                      ${reg.requirements.map(req => `
                        <li class="text-sm flex items-start">
                          <span class="text-blue-600 mr-2">•</span>
                          <span>${req}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  ${reg.current && Array.isArray(reg.current) ? `
                    <div class="mb-4">
                      <h4 class="font-medium mb-2">Situação Atual:</h4>
                      <ul class="space-y-1">
                        ${reg.current.map(item => `
                          <li class="text-sm">${item}</li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                  <p class="text-sm text-gray-600 border-t pt-3">
                    <span class="font-medium">Tendência:</span> ${reg.trend}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'competitive-advantages':
      return `
        <section class="py-16 px-4">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 gap-6">
              ${section.strategies.map(strategy => `
                <div class="card-neumorphic">
                  <h3 class="text-xl font-bold mb-4">${strategy.strategy}</h3>
                  <div class="mb-4">
                    <h4 class="font-medium mb-2">Exemplos:</h4>
                    <ul class="space-y-1">
                      ${strategy.examples.map(ex => `
                        <li class="text-sm flex items-start">
                          <span class="text-green-600 mr-2">→</span>
                          <span>${ex}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <p class="text-sm font-medium text-blue-600 border-t pt-3">
                    Resultado: ${strategy.result}
                  </p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'future-outlook':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              ${section.projections.map(proj => `
                <div class="card-neumorphic">
                  <h3 class="text-lg font-bold mb-3">${proj.trend}</h3>
                  <p class="text-gray-700 mb-3">${proj.description}</p>
                  <p class="text-sm text-blue-600 font-medium">→ ${proj.impact}</p>
                </div>
              `).join('')}
            </div>
            <div class="card-neumorphic bg-gradient-to-r from-blue-50 to-green-50 text-center">
              <h3 class="text-2xl font-bold mb-4">Mercado em 2030</h3>
              <p class="text-4xl font-bold text-green-600 mb-2">${section.marketSize2030}</p>
              <p class="text-lg text-gray-600">Crescimento: ${section.cagr}</p>
            </div>
          </div>
        </section>
      `;

    case 'action-roadmap':
      return `
        <section class="py-16 px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.phases.map((phase, idx) => `
                <div class="card-neumorphic ${idx === 0 ? 'ring-4 ring-blue-500' : ''}">
                  <h3 class="text-xl font-bold mb-4">${phase.phase}</h3>
                  <ul class="space-y-2">
                    ${phase.actions.map(action => `
                      <li class="flex items-start">
                        <span class="text-green-600 mr-2">→</span>
                        <span>${action}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'final-insights':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-6">
              ${section.quotes.map(quote => `
                <div class="card-neumorphic">
                  <blockquote class="text-lg italic mb-4">"${quote.quote}"</blockquote>
                  <p class="font-medium mb-2">— ${quote.expert}</p>
                  <p class="text-sm text-blue-600 font-medium">💡 ${quote.insight}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;

    case 'final-cta':
      return `
        <section class="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600">
          <div class="max-w-4xl mx-auto text-center text-white">
            <h2 class="text-4xl font-bold mb-4">${section.title}</h2>
            <p class="text-xl mb-8">${section.subtitle}</p>
            <div class="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              ${section.benefits.map(benefit => `
                <div class="flex items-center justify-center">
                  <span class="text-2xl mr-2">✓</span>
                  <span>${benefit}</span>
                </div>
              `).join('')}
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.converso.pro/auth?mode=signup" class="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-neumorphic hover:shadow-neumorphic-inset transition-all">
                ${section.cta.primary}
              </a>
              ${section.cta.secondary ? `
                <a href="#" class="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all">
                  ${section.cta.secondary}
                </a>
              ` : ''}
            </div>
            ${section.cta.urgency ? `
              <p class="mt-8 text-lg font-medium">${section.cta.urgency}</p>
            ` : ''}
          </div>
        </section>
      `;
      
    case 'cost-calculator':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4">${section.title}</h2>
            <p class="text-xl text-gray-600 text-center mb-12">${section.subtitle}</p>
            <div class="card-neumorphic">
              ${section.inputs ? `
                <div class="mb-6">
                  <h3 class="font-bold mb-4">Seus Dados:</h3>
                  <div class="grid md:grid-cols-2 gap-4">
                    ${section.inputs.map(input => `
                      <div>
                        <label class="text-sm text-gray-600">${input.label}:</label>
                        <div class="font-bold text-lg">${input.default}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              ${section.results ? `
                <div class="border-t pt-6">
                  <h3 class="font-bold mb-4">Comparação de Custos:</h3>
                  <div class="space-y-4">
                    ${Object.entries(section.results).map(([key, result]) => `
                      <div class="flex items-center justify-between p-3 rounded-lg ${key === 'converso' ? 'bg-green-50' : 'bg-gray-50'}">
                        <div>
                          <h4 class="font-medium">${key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                          <p class="text-sm text-gray-600">Base: ${result.base} + Taxa: ${result.tax}</p>
                        </div>
                        <div class="text-right">
                          <p class="text-2xl font-bold ${key === 'converso' ? 'text-green-600' : ''}">${result.total}</p>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              ${section.savings ? `
                <div class="mt-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg text-center">
                  <p class="text-2xl font-bold text-green-600">${section.savings}</p>
                </div>
              ` : ''}
            </div>
          </div>
        </section>
      `;

    case 'pricing-communication':
      return `
        <section class="py-16 px-4 bg-gray-50">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12">${section.title}</h2>
            <div class="space-y-4">
              ${section.techniques.map(tech => `
                <div class="card-neumorphic">
                  <h3 class="font-bold mb-2">${tech.technique}</h3>
                  <p class="text-gray-700 italic">"${tech.example}"</p>
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

// Generate complete page with rich content
function generateRichPage(page, language, t) {
  const content = PAGE_CONTENTS[page.slug]?.[language];
  
  if (!content || !content.sections) {
    // Fallback to simple content if no rich content available
    return generateDefaultContent(page, language, t);
  }
  
  // Generate all sections with error handling
  const sectionsHtml = content.sections.map((section, idx) => {
    try {
      return generateRichSection(section, t);
    } catch (err) {
      console.error(`Error in section ${idx} (type: ${section.type}) for ${page.slug}/${language}`);
      console.error(`Error: ${err.message}`);
      console.error(`Section data:`, JSON.stringify(section, null, 2).slice(0, 300));
      return ''; // Skip this section
    }
  }).join('');
  
  return sectionsHtml;
}

// Default content fallback
function generateDefaultContent(page, language, t) {
  const title = page.data?.h1 || page.data?.title || page.title || 'Converso';
  const description = page.data?.metaDescription || page.description || '';
  
  return `
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">${title}</h1>
        <p class="text-xl text-gray-600 text-center mb-12">${description}</p>
        
        <div class="card-neumorphic mb-8">
          <h2 class="text-2xl font-bold mb-4">Professional Booking System</h2>
          <p class="mb-4">Create your professional booking website in just 5 minutes with Converso.</p>
          <ul class="space-y-2">
            <li class="flex items-center">
              <span class="text-green-600 mr-2">✓</span>
              <span>No booking fees</span>
            </li>
            <li class="flex items-center">
              <span class="text-green-600 mr-2">✓</span>
              <span>Your own professional website</span>
            </li>
            <li class="flex items-center">
              <span class="text-green-600 mr-2">✓</span>
              <span>WhatsApp integration</span>
            </li>
          </ul>
        </div>
        
        <div class="text-center">
          <a href="https://app.converso.pro/auth?mode=signup" class="btn-neumorphic bg-gradient-primary text-white text-lg px-8 py-4">
            ${t.CTA_BUTTON}
          </a>
        </div>
      </div>
    </section>
  `;
}

// Process single page
function processPage(page, language) {
  const t = translations[language] || translations['en'];
  const langPath = language === 'en' ? '' : `/${language}`;
  const pageContent = generateRichPage(page, language, t);
  
  // Get title and description from page config
  const title = page.title?.[language] || page.title?.['pt-BR'] || page.title || 'Converso';
  const description = page.description?.[language] || page.description?.['pt-BR'] || page.description || '';
  
  const html = template
    // Meta tags
    .replace(/{{LANG}}/g, language)
    .replace(/{{TITLE}}/g, title)
    .replace(/{{DESCRIPTION}}/g, description)
    .replace(/{{PATH}}/g, `/${page.slug}`)
    
    // Content
    .replace(/{{CONTENT}}/g, pageContent)
    
    // Navigation
    .replace(/{{NAV_FEATURES}}/g, t.FEATURES)
    .replace(/{{NAV_PRICING}}/g, t.PRICING)
    .replace(/{{NAV_TESTIMONIALS}}/g, t.TESTIMONIALS)
    .replace(/{{BTN_LOGIN}}/g, t.LOGIN)
    .replace(/{{BTN_START_FREE}}/g, t.START_FREE)
    
    // Footer
    .replace(/{{FOOTER_DESCRIPTION}}/g, footerTranslations[language].FOOTER_DESCRIPTION)
    .replace(/{{FOOTER_PRODUCT}}/g, footerTranslations[language].FOOTER_PRODUCT)
    .replace(/{{FOOTER_FEATURES}}/g, footerTranslations[language].FOOTER_FEATURES)
    .replace(/{{FOOTER_PRICING}}/g, footerTranslations[language].FOOTER_PRICING)
    .replace(/{{FOOTER_APPS}}/g, footerTranslations[language].FOOTER_APPS)
    .replace(/{{FOOTER_SUPPORT}}/g, footerTranslations[language].FOOTER_SUPPORT)
    .replace(/{{FOOTER_HELP}}/g, footerTranslations[language].FOOTER_HELP)
    .replace(/{{FOOTER_CONTACT}}/g, footerTranslations[language].FOOTER_CONTACT)
    .replace(/{{FOOTER_LEGAL}}/g, footerTranslations[language].FOOTER_LEGAL)
    .replace(/{{FOOTER_PRIVACY}}/g, footerTranslations[language].FOOTER_PRIVACY)
    .replace(/{{FOOTER_TERMS}}/g, footerTranslations[language].FOOTER_TERMS)
    .replace(/{{FOOTER_RIGHTS}}/g, footerTranslations[language].FOOTER_RIGHTS);
  
  return html;
}

// Main build function
function build() {
  console.log('Starting build with rich content...');
  
  // Clean output directory
  if (fs.existsSync('output')) {
    fs.rmSync('output', { recursive: true });
  }
  
  // Create language directories
  const languages = ['en', 'pt-BR', 'es'];
  languages.forEach(lang => {
    const langDir = lang === 'en' ? 'output' : `output/${lang}`;
    fs.mkdirSync(langDir, { recursive: true });
  });
  
  // Find pages with rich content
  const richContentPages = Object.keys(PAGE_CONTENTS);
  console.log(`Found ${richContentPages.length} pages with rich content`);
  
  // Process all pages
  let processedCount = 0;
  SEO_PAGES.forEach(page => {
    languages.forEach(language => {
      try {
        const html = processPage(page, language);
        const langPath = language === 'en' ? '' : `/${language}`;
        const outputDir = `output${langPath}/${page.slug}`;
        
        fs.mkdirSync(outputDir, { recursive: true });
        fs.writeFileSync(path.join(outputDir, 'index.html'), html);
        processedCount++;
      } catch (error) {
        console.error(`Error processing ${page.slug} in ${language}:`, error.message);
      }
    });
  });
  
  console.log(`✓ Generated ${processedCount} pages with rich content`);
  console.log(`✓ Build complete!`);
}

// Run build
build();