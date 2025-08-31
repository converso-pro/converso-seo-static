/**
 * Universal Header JavaScript
 * Provides interactions for the static header across all SEO library pages
 */

(function() {
  'use strict';

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader);
  } else {
    initializeHeader();
  }

  /**
   * Initialize all header interactions
   */
  function initializeHeader() {
    setupMobileMenu();
    setupDropdowns();
    setupLanguageDetection();
    setupScrollEffects();
    setupTranslations();
    setupKeyboardNavigation();
  }

  /**
   * Mobile menu functionality
   */
  function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-toggle');
    const menu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (!toggle || !menu) return;

    // Toggle mobile menu
    toggle.addEventListener('click', function() {
      const isOpen = menu.dataset.state === 'open';
      
      menu.dataset.state = isOpen ? 'closed' : 'open';
      toggle.setAttribute('aria-expanded', !isOpen);
      body.style.overflow = isOpen ? '' : 'hidden';
      
      // Animate menu
      if (!isOpen) {
        menu.style.display = 'block';
        setTimeout(() => {
          menu.style.transform = 'translateY(0)';
        }, 10);
      } else {
        menu.style.transform = 'translateY(-100%)';
        setTimeout(() => {
          menu.style.display = 'none';
        }, 300);
      }
    });

    // Mobile sections (Apps, Resources)
    const sectionToggles = document.querySelectorAll('.mobile-section-toggle');
    sectionToggles.forEach(toggle => {
      toggle.addEventListener('click', function() {
        const section = this.parentElement;
        const content = section.querySelector('.mobile-section-content');
        const isOpen = section.classList.contains('open');
        
        section.classList.toggle('open');
        content.style.display = isOpen ? 'none' : 'block';
      });
    });

    // Close menu when clicking on a link
    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        menu.dataset.state = 'closed';
        toggle.setAttribute('aria-expanded', false);
        body.style.overflow = '';
        menu.style.transform = 'translateY(-100%)';
      });
    });
  }

  /**
   * Desktop dropdown functionality
   */
  function setupDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.dropdown-trigger');
      const content = dropdown.querySelector('.dropdown-content');
      let timeout;

      // Mouse events for desktop
      dropdown.addEventListener('mouseenter', function() {
        clearTimeout(timeout);
        dropdown.classList.add('active');
        trigger.setAttribute('aria-expanded', true);
      });

      dropdown.addEventListener('mouseleave', function() {
        timeout = setTimeout(() => {
          dropdown.classList.remove('active');
          trigger.setAttribute('aria-expanded', false);
        }, 100);
      });

      // Click event for touch devices
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
        const isOpen = dropdown.classList.contains('active');
        
        // Close other dropdowns
        dropdowns.forEach(d => {
          if (d !== dropdown) {
            d.classList.remove('active');
            d.querySelector('.dropdown-trigger').setAttribute('aria-expanded', false);
          }
        });
        
        dropdown.classList.toggle('active');
        trigger.setAttribute('aria-expanded', !isOpen);
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
          dropdown.querySelector('.dropdown-trigger').setAttribute('aria-expanded', false);
        });
      }
    });
  }

  /**
   * Language detection and highlighting
   */
  function setupLanguageDetection() {
    const path = window.location.pathname;
    let currentLang = 'en'; // default
    
    // Detect language from URL
    if (path.includes('/biblioteca') || path.includes('/artigos')) {
      currentLang = 'pt';
    } else if (path.includes('/libreria') || path.includes('/articulos')) {
      currentLang = 'es';
    } else if (path.includes('/library') || path.includes('/articles')) {
      currentLang = 'en';
    }
    
    // Update header language attribute
    const header = document.querySelector('.universal-header');
    if (header) {
      header.setAttribute('data-lang', currentLang);
    }
    
    // Highlight current language in dropdowns
    const langOptions = document.querySelectorAll('.lang-option, .mobile-lang-option');
    langOptions.forEach(option => {
      if (option.dataset.lang === currentLang) {
        option.classList.add('active');
      }
    });

    // Update language links to preserve current article
    updateLanguageLinks(currentLang);
  }

  /**
   * Update language switcher links based on current page
   */
  function updateLanguageLinks(currentLang) {
    const path = window.location.pathname;
    const langLinks = document.querySelectorAll('.lang-option, .mobile-lang-option');
    
    // Extract article slug if on an article page
    let articleSlug = '';
    const articleMatch = path.match(/\/(articles?|articulos?|artigos?)\/(.*?)(\.html)?$/);
    if (articleMatch) {
      articleSlug = articleMatch[2];
    }
    
    langLinks.forEach(link => {
      const targetLang = link.dataset.lang;
      let newPath = '/library';
      
      if (targetLang === 'es') {
        newPath = articleSlug ? `/articulos/${translateSlug(articleSlug, targetLang)}.html` : '/libreria';
      } else if (targetLang === 'pt') {
        newPath = articleSlug ? `/artigos/${translateSlug(articleSlug, targetLang)}.html` : '/biblioteca';
      } else {
        newPath = articleSlug ? `/articles/${translateSlug(articleSlug, targetLang)}.html` : '/library';
      }
      
      link.href = newPath;
    });
  }

  /**
   * Translate article slug between languages
   */
  function translateSlug(slug, targetLang) {
    // This is a simplified version - in production, you'd have a mapping object
    // or make an API call to get the correct translated slug
    return slug; // Return same slug for now
  }

  /**
   * Scroll effects for header
   */
  function setupScrollEffects() {
    const header = document.querySelector('.universal-header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      // Add scrolled class for styling
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  /**
   * Setup translations for i18n data attributes
   */
  function setupTranslations() {
    const lang = document.querySelector('.universal-header').dataset.lang || 'en';
    
    // Translation strings
    const translations = {
      en: {
        apps: 'Apps',
        resources: 'Resources',
        templates: 'Templates',
        pricing: 'Pricing',
        login: 'Login',
        startFree: 'Start Free',
        digitalQueue: 'Digital Queue',
        digitalQueueDesc: 'Smart waitlist management',
        comboMagico: 'Magic Combo',
        comboMagicoDesc: 'Boost sales with combos',
        loyaltyProgram: 'Loyalty Program',
        loyaltyDesc: 'Reward your customers',
        reviews: 'Reviews',
        reviewsDesc: 'Collect customer feedback',
        emailMarketing: 'Email Marketing',
        emailDesc: 'Automated campaigns',
        ecommerce: 'E-commerce',
        ecommerceDesc: 'Sell products online',
        blog: 'Blog',
        blogDesc: 'Content marketing',
        digitalCard: 'Digital Card',
        cardDesc: 'Professional presence',
        serviceOrders: 'Service Orders',
        ordersDesc: 'Manage repairs & services',
        academy: 'Academy',
        academyDesc: 'Learn & grow your business',
        blogResourceDesc: 'Tips and insights',
        libraryDesc: 'Articles and guides',
        faq: 'FAQ',
        faqDesc: 'Common questions',
        popular: 'Popular',
        new: 'New',
        selectLanguage: 'Select Language:'
      },
      es: {
        apps: 'Aplicaciones',
        resources: 'Recursos',
        templates: 'Plantillas',
        pricing: 'Precios',
        login: 'Iniciar Sesión',
        startFree: 'Empezar Gratis',
        digitalQueue: 'Fila Digital',
        digitalQueueDesc: 'Gestión inteligente de espera',
        comboMagico: 'Combo Mágico',
        comboMagicoDesc: 'Aumenta ventas con combos',
        loyaltyProgram: 'Programa de Fidelidad',
        loyaltyDesc: 'Recompensa a tus clientes',
        reviews: 'Reseñas',
        reviewsDesc: 'Recopila comentarios de clientes',
        emailMarketing: 'Email Marketing',
        emailDesc: 'Campañas automatizadas',
        ecommerce: 'E-commerce',
        ecommerceDesc: 'Vende productos en línea',
        blog: 'Blog',
        blogDesc: 'Marketing de contenidos',
        digitalCard: 'Tarjeta Digital',
        cardDesc: 'Presencia profesional',
        serviceOrders: 'Órdenes de Servicio',
        ordersDesc: 'Gestiona reparaciones y servicios',
        academy: 'Academia',
        academyDesc: 'Aprende y haz crecer tu negocio',
        blogResourceDesc: 'Consejos e insights',
        libraryDesc: 'Artículos y guías',
        faq: 'FAQ',
        faqDesc: 'Preguntas frecuentes',
        popular: 'Popular',
        new: 'Nuevo',
        selectLanguage: 'Seleccionar Idioma:'
      },
      pt: {
        apps: 'Apps',
        resources: 'Recursos',
        templates: 'Modelos',
        pricing: 'Preços',
        login: 'Entrar',
        startFree: 'Começar Grátis',
        digitalQueue: 'Fila Digital',
        digitalQueueDesc: 'Gestão inteligente de espera',
        comboMagico: 'Combo Mágico',
        comboMagicoDesc: 'Aumente vendas com combos',
        loyaltyProgram: 'Programa de Fidelidade',
        loyaltyDesc: 'Recompense seus clientes',
        reviews: 'Avaliações',
        reviewsDesc: 'Colete feedback dos clientes',
        emailMarketing: 'Email Marketing',
        emailDesc: 'Campanhas automatizadas',
        ecommerce: 'E-commerce',
        ecommerceDesc: 'Venda produtos online',
        blog: 'Blog',
        blogDesc: 'Marketing de conteúdo',
        digitalCard: 'Cartão Digital',
        cardDesc: 'Presença profissional',
        serviceOrders: 'Ordens de Serviço',
        ordersDesc: 'Gerencie reparos e serviços',
        academy: 'Academia',
        academyDesc: 'Aprenda e cresça seu negócio',
        blogResourceDesc: 'Dicas e insights',
        libraryDesc: 'Artigos e guias',
        faq: 'FAQ',
        faqDesc: 'Perguntas frequentes',
        popular: 'Popular',
        new: 'Novo',
        selectLanguage: 'Selecionar Idioma:'
      }
    };
    
    // Apply translations
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
      const key = element.dataset.i18n;
      const translation = translations[lang]?.[key] || translations.en[key] || key;
      element.textContent = translation;
    });
  }

  /**
   * Keyboard navigation support
   */
  function setupKeyboardNavigation() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      const trigger = dropdown.querySelector('.dropdown-trigger');
      const items = dropdown.querySelectorAll('a');
      let currentIndex = -1;
      
      trigger.addEventListener('keydown', function(e) {
        switch(e.key) {
          case 'Enter':
          case ' ':
            e.preventDefault();
            dropdown.classList.toggle('active');
            trigger.setAttribute('aria-expanded', dropdown.classList.contains('active'));
            if (dropdown.classList.contains('active') && items.length > 0) {
              currentIndex = 0;
              items[currentIndex].focus();
            }
            break;
          case 'Escape':
            dropdown.classList.remove('active');
            trigger.setAttribute('aria-expanded', false);
            trigger.focus();
            break;
        }
      });
      
      items.forEach((item, index) => {
        item.addEventListener('keydown', function(e) {
          switch(e.key) {
            case 'ArrowDown':
              e.preventDefault();
              currentIndex = (index + 1) % items.length;
              items[currentIndex].focus();
              break;
            case 'ArrowUp':
              e.preventDefault();
              currentIndex = (index - 1 + items.length) % items.length;
              items[currentIndex].focus();
              break;
            case 'Escape':
              dropdown.classList.remove('active');
              trigger.setAttribute('aria-expanded', false);
              trigger.focus();
              break;
            case 'Tab':
              if (e.shiftKey && index === 0) {
                dropdown.classList.remove('active');
                trigger.setAttribute('aria-expanded', false);
              } else if (!e.shiftKey && index === items.length - 1) {
                dropdown.classList.remove('active');
                trigger.setAttribute('aria-expanded', false);
              }
              break;
          }
        });
      });
    });
  }

  /**
   * Utility function to debounce function calls
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Analytics tracking (optional)
   */
  function trackEvent(category, action, label) {
    // Add your analytics tracking here
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        'event_category': category,
        'event_label': label
      });
    }
  }

  // Expose API for external use if needed
  window.UniversalHeader = {
    init: initializeHeader,
    detectLanguage: setupLanguageDetection,
    trackEvent: trackEvent
  };

})();