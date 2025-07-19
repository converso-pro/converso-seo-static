// SEO Pages Configuration
// This file contains all SEO pages that need to be generated

const SEO_PAGES = [
  // ==================== APPS & COMPARISONS ====================
  
  // Apps Pages
  {
    slug: 'apps',
    template: 'apps-directory',
    languages: ['en', 'pt-BR', 'es'],
    data: {
      title: 'Converso Apps - Professional Business Tools',
      metaDescription: 'Discover professional apps to manage your business. Booking, e-commerce, loyalty programs, and more.',
      h1: 'Professional Apps for Your Business'
    }
  },
  {
    slug: 'apps/e-commerce',
    template: 'app-detail',
    languages: ['en', 'pt-BR', 'es'],
    data: {
      title: 'E-commerce App - Sell Online with Converso',
      metaDescription: 'Create your online store in minutes. Manage products, orders, and payments all in one place.',
      h1: 'E-commerce App for Your Business',
      appName: 'E-commerce Pro'
    }
  },

  // Comparison Pages - Calendly
  {
    slug: 'compare/converso-vs-calendly',
    template: 'comparison',
    languages: ['en'],
    data: {
      title: 'Converso vs Calendly - Complete Comparison 2024',
      metaDescription: 'Compare Converso vs Calendly. Features, pricing, and which is best for your business.',
      h1: 'Converso vs Calendly: Which is Better?',
      competitor: 'Calendly'
    }
  },
  {
    slug: 'comparar/converso-vs-calendly',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Converso vs Calendly - Comparação Completa 2024',
      metaDescription: 'Compare Converso vs Calendly. Recursos, preços e qual é melhor para seu negócio.',
      h1: 'Converso vs Calendly: Qual é Melhor?',
      competitor: 'Calendly'
    }
  },
  {
    slug: 'comparar/converso-vs-calendly',
    template: 'comparison',
    languages: ['es'],
    data: {
      title: 'Converso vs Calendly - Comparación Completa 2024',
      metaDescription: 'Compara Converso vs Calendly. Características, precios y cuál es mejor para tu negocio.',
      h1: 'Converso vs Calendly: ¿Cuál es Mejor?',
      competitor: 'Calendly'
    }
  },

  // Comparison Pages - Acuity
  {
    slug: 'compare/converso-vs-acuity',
    template: 'comparison',
    languages: ['en'],
    data: {
      title: 'Converso vs Acuity - Complete Comparison 2024',
      metaDescription: 'Compare Converso vs Acuity Scheduling. Features, pricing, and honest review.',
      h1: 'Converso vs Acuity: Which is Better?',
      competitor: 'Acuity'
    }
  },
  {
    slug: 'comparar/converso-vs-acuity',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Converso vs Acuity - Comparação Completa 2024',
      metaDescription: 'Compare Converso vs Acuity Scheduling. Recursos, preços e análise honesta.',
      h1: 'Converso vs Acuity: Qual é Melhor?',
      competitor: 'Acuity'
    }
  },
  {
    slug: 'comparar/converso-vs-acuity',
    template: 'comparison',
    languages: ['es'],
    data: {
      title: 'Converso vs Acuity - Comparación Completa 2024',
      metaDescription: 'Compara Converso vs Acuity Scheduling. Características, precios y análisis honesto.',
      h1: 'Converso vs Acuity: ¿Cuál es Mejor?',
      competitor: 'Acuity'
    }
  },

  // Comparison Pages - Square
  {
    slug: 'compare/converso-vs-square',
    template: 'comparison',
    languages: ['en'],
    data: {
      title: 'Converso vs Square Appointments - Comparison 2024',
      metaDescription: 'Compare Converso vs Square Appointments. Features, fees, and which fits your business.',
      h1: 'Converso vs Square: Complete Comparison',
      competitor: 'Square'
    }
  },
  {
    slug: 'comparar/converso-vs-square',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Converso vs Square Appointments - Comparação 2024',
      metaDescription: 'Compare Converso vs Square Appointments. Recursos, taxas e qual se adequa ao seu negócio.',
      h1: 'Converso vs Square: Comparação Completa',
      competitor: 'Square'
    }
  },

  // Alternatives Pages
  {
    slug: 'calendly-alternatives',
    template: 'alternatives',
    languages: ['en'],
    data: {
      title: 'Best Calendly Alternatives 2024 - Top 10 Options',
      metaDescription: 'Looking for Calendly alternatives? Compare the best scheduling tools with features and pricing.',
      h1: 'Top Calendly Alternatives for 2024',
      mainCompetitor: 'Calendly'
    }
  },
  {
    slug: 'alternativas-calendly',
    template: 'alternatives',
    languages: ['pt-BR'],
    data: {
      title: 'Melhores Alternativas ao Calendly 2024 - Top 10 Opções',
      metaDescription: 'Procurando alternativas ao Calendly? Compare as melhores ferramentas de agendamento com recursos e preços.',
      h1: 'Principais Alternativas ao Calendly para 2024',
      mainCompetitor: 'Calendly'
    }
  },
  {
    slug: 'alternativas-calendly',
    template: 'alternatives',
    languages: ['es'],
    data: {
      title: 'Mejores Alternativas a Calendly 2024 - Top 10 Opciones',
      metaDescription: 'Buscando alternativas a Calendly? Compara las mejores herramientas de programación con características y precios.',
      h1: 'Principales Alternativas a Calendly para 2024',
      mainCompetitor: 'Calendly'
    }
  },

  // ==================== INDUSTRY SPECIFIC ====================

  // Hair Salon Booking
  {
    slug: 'best-booking-system-for-hair-salons',
    template: 'industry',
    languages: ['en'],
    data: {
      title: 'Best Booking System for Hair Salons 2024',
      metaDescription: 'Find the best booking system for your hair salon. Compare features, pricing, and reviews.',
      h1: 'Best Booking System for Hair Salons',
      industry: 'hair-salon'
    }
  },
  {
    slug: 'melhor-sistema-agendamento-saloes',
    template: 'industry',
    languages: ['pt-BR'],
    data: {
      title: 'Melhor Sistema de Agendamento para Salões 2024',
      metaDescription: 'Encontre o melhor sistema de agendamento para seu salão. Compare recursos, preços e avaliações.',
      h1: 'Melhor Sistema de Agendamento para Salões',
      industry: 'hair-salon'
    }
  },
  {
    slug: 'mejor-sistema-citas-salones',
    template: 'industry',
    languages: ['es'],
    data: {
      title: 'Mejor Sistema de Citas para Salones 2024',
      metaDescription: 'Encuentra el mejor sistema de citas para tu salón. Compara características, precios y reseñas.',
      h1: 'Mejor Sistema de Citas para Salones',
      industry: 'hair-salon'
    }
  },

  // ==================== USE CASES ====================

  // Personal Trainer
  {
    slug: 'use-cases/personal-trainer-booking',
    template: 'use-case',
    languages: ['en'],
    data: {
      title: 'Personal Trainer Booking System - Complete Solution',
      metaDescription: 'Professional booking system for personal trainers. Manage clients, schedules, and payments.',
      h1: 'Booking System for Personal Trainers',
      useCase: 'personal-trainer'
    }
  },
  {
    slug: 'casos-de-uso/personal-trainer',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Agendamento para Personal Trainer',
      metaDescription: 'Sistema profissional de agendamento para personal trainers. Gerencie clientes, horários e pagamentos.',
      h1: 'Sistema de Agendamento para Personal',
      useCase: 'personal-trainer'
    }
  },
  {
    slug: 'casos-de-uso/personal-trainer-citas',
    template: 'use-case',
    languages: ['es'],
    data: {
      title: 'Sistema de Citas para Personal Trainer',
      metaDescription: 'Sistema profesional de citas para entrenadores personales. Gestiona clientes, horarios y pagos.',
      h1: 'Sistema de Citas para Personal Trainer',
      useCase: 'personal-trainer'
    }
  },

  // Medical Clinic
  {
    slug: 'use-cases/medical-clinic-booking',
    template: 'use-case',
    languages: ['en'],
    data: {
      title: 'Medical Clinic Booking System - HIPAA Compliant',
      metaDescription: 'Professional booking system for medical clinics. Patient management, scheduling, and reminders.',
      h1: 'Medical Clinic Booking System',
      useCase: 'medical-clinic'
    }
  },
  {
    slug: 'casos-de-uso/clinica-medica',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Agendamento para Clínica Médica',
      metaDescription: 'Sistema profissional para clínicas médicas. Gestão de pacientes, agendamento e lembretes.',
      h1: 'Sistema de Agendamento Médico',
      useCase: 'medical-clinic'
    }
  },
  {
    slug: 'casos-de-uso/citas-medicas-clinica',
    template: 'use-case',
    languages: ['es'],
    data: {
      title: 'Sistema de Citas para Clínica Médica',
      metaDescription: 'Sistema profesional para clínicas médicas. Gestión de pacientes, programación y recordatorios.',
      h1: 'Sistema de Citas Médicas',
      useCase: 'medical-clinic'
    }
  },

  // Therapist
  {
    slug: 'use-cases/therapist-booking',
    template: 'use-case',
    languages: ['en'],
    data: {
      title: 'Therapist Booking System - Private Practice Solution',
      metaDescription: 'Professional booking system for therapists. Client management, scheduling, and secure notes.',
      h1: 'Therapist Booking System',
      useCase: 'therapist'
    }
  },
  {
    slug: 'casos-de-uso/terapeutas',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Agendamento para Terapeutas',
      metaDescription: 'Sistema profissional para terapeutas. Gestão de clientes, agendamento e notas seguras.',
      h1: 'Sistema para Terapeutas',
      useCase: 'therapist'
    }
  },
  {
    slug: 'casos-de-uso/terapeuta-citas',
    template: 'use-case',
    languages: ['es'],
    data: {
      title: 'Sistema de Citas para Terapeutas',
      metaDescription: 'Sistema profesional para terapeutas. Gestión de clientes, programación y notas seguras.',
      h1: 'Sistema para Terapeutas',
      useCase: 'therapist'
    }
  },

  // Barber
  {
    slug: 'use-cases/barber',
    template: 'use-case',
    languages: ['en'],
    data: {
      title: 'Barber Booking System - Professional Solution',
      metaDescription: 'Complete booking system for barbers. Manage appointments, walk-ins, and loyalty programs.',
      h1: 'Professional Barber Booking System',
      useCase: 'barber'
    }
  },
  {
    slug: 'casos-de-uso/barbearia',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Agendamento para Barbearia',
      metaDescription: 'Sistema completo para barbearias. Gerencie agendamentos, fila e programa de fidelidade.',
      h1: 'Sistema Profissional para Barbearia',
      useCase: 'barber'
    }
  },
  {
    slug: 'casos-de-uso/barberia',
    template: 'use-case',
    languages: ['es'],
    data: {
      title: 'Sistema de Citas para Barbería',
      metaDescription: 'Sistema completo para barberías. Gestiona citas, cola y programa de fidelidad.',
      h1: 'Sistema Profesional para Barbería',
      useCase: 'barber'
    }
  },

  // ==================== CELL PHONE BUSINESS ====================

  {
    slug: 'sistema-gestao-loja-celular',
    template: 'industry',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Gestão para Loja de Celular - Completo',
      metaDescription: 'Sistema completo para gerenciar loja de celular. Vendas, estoque, assistência técnica e mais.',
      h1: 'Sistema de Gestão para Loja de Celular',
      industry: 'phone-store'
    }
  },
  {
    slug: 'ordem-servico-assistencia-tecnica-celular',
    template: 'feature',
    languages: ['pt-BR'],
    data: {
      title: 'Ordem de Serviço para Assistência Técnica de Celular',
      metaDescription: 'Sistema de ordem de serviço para assistência técnica. Controle reparos, peças e garantias.',
      h1: 'Ordem de Serviço Digital para Celular',
      feature: 'service-order'
    }
  },
  {
    slug: 'guia-completo-revenda-celulares',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Guia Completo para Revenda de Celulares 2024',
      metaDescription: 'Aprenda como montar uma revenda de celulares. Fornecedores, margem de lucro e estratégias.',
      h1: 'Guia Completo: Revenda de Celulares',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'uso-revendedor-celulares',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema para Revendedor de Celulares - Caso de Uso',
      metaDescription: 'Como revendedores de celulares usam Converso para vender mais e gerenciar melhor.',
      h1: 'Converso para Revendedores de Celulares',
      useCase: 'phone-reseller'
    }
  },

  // ==================== BARBERSHOP PAGES ====================

  // Portuguese Barbershop Pages
  {
    slug: 'sistema-gestao-barbearia',
    template: 'industry',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Gestão para Barbearia - Completo 2024',
      metaDescription: 'Sistema completo para gerenciar sua barbearia. Agendamento, fila digital, fidelidade e mais.',
      h1: 'Sistema de Gestão Completo para Barbearia',
      industry: 'barbershop'
    }
  },
  {
    slug: 'agendamento-barbearia',
    template: 'feature',
    languages: ['pt-BR'],
    data: {
      title: 'Sistema de Agendamento para Barbearia Online',
      metaDescription: 'Agendamento online para barbearia. Reduza faltas, organize horários e aumente faturamento.',
      h1: 'Agendamento Online para Barbearia',
      feature: 'booking'
    }
  },
  {
    slug: 'uso-barbearia-moderna',
    template: 'use-case',
    languages: ['pt-BR'],
    data: {
      title: 'Barbearia Moderna: Como Usar Tecnologia para Crescer',
      metaDescription: 'Descubra como barbearias modernas usam tecnologia para fidelizar clientes e aumentar lucros.',
      h1: 'Tecnologia para Barbearia Moderna',
      useCase: 'modern-barbershop'
    }
  },
  {
    slug: 'guia-abrir-barbearia',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Guia Completo: Como Abrir uma Barbearia 2024',
      metaDescription: 'Tudo que você precisa saber para abrir uma barbearia. Investimento, documentação e dicas.',
      h1: 'Como Abrir uma Barbearia: Guia Completo',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'fila-digital-barbearia',
    template: 'feature',
    languages: ['pt-BR'],
    data: {
      title: 'Fila Digital para Barbearia - Sem Espera',
      metaDescription: 'Sistema de fila digital para barbearia. Clientes entram na fila pelo celular e acompanham em tempo real.',
      h1: 'Fila Digital: Fim da Espera na Barbearia',
      feature: 'digital-queue'
    }
  },
  {
    slug: 'marketing-digital-barbearia',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Marketing Digital para Barbearia - Guia 2024',
      metaDescription: 'Estratégias de marketing digital para barbearia. Redes sociais, Google e fidelização.',
      h1: 'Marketing Digital para Barbearia',
      guideType: 'marketing'
    }
  },

  // English Barbershop Pages
  {
    slug: 'barbershop-management-system',
    template: 'industry',
    languages: ['en'],
    data: {
      title: 'Barbershop Management System - Complete Solution',
      metaDescription: 'Complete system to manage your barbershop. Booking, digital queue, loyalty programs.',
      h1: 'Complete Barbershop Management System',
      industry: 'barbershop'
    }
  },
  {
    slug: 'barbershop-online-booking',
    template: 'feature',
    languages: ['en'],
    data: {
      title: 'Barbershop Online Booking System',
      metaDescription: 'Online booking for barbershops. Reduce no-shows, organize schedules, increase revenue.',
      h1: 'Online Booking for Barbershops',
      feature: 'booking'
    }
  },
  {
    slug: 'modern-barbershop-use-case',
    template: 'use-case',
    languages: ['en'],
    data: {
      title: 'Modern Barbershop: Using Technology to Grow',
      metaDescription: 'Discover how modern barbershops use technology to retain clients and increase profits.',
      h1: 'Technology for Modern Barbershops',
      useCase: 'modern-barbershop'
    }
  },
  {
    slug: 'open-barbershop-guide',
    template: 'guide',
    languages: ['en'],
    data: {
      title: 'Complete Guide: How to Open a Barbershop 2024',
      metaDescription: 'Everything you need to know to open a barbershop. Investment, documentation, and tips.',
      h1: 'How to Open a Barbershop: Complete Guide',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'digital-queue-barbershop',
    template: 'feature',
    languages: ['en'],
    data: {
      title: 'Digital Queue for Barbershops - No More Waiting',
      metaDescription: 'Digital queue system for barbershops. Clients join the queue from their phone and track in real-time.',
      h1: 'Digital Queue: End Waiting at Barbershops',
      feature: 'digital-queue'
    }
  },
  {
    slug: 'digital-marketing-barbershop',
    template: 'guide',
    languages: ['en'],
    data: {
      title: 'Digital Marketing for Barbershops - Guide 2024',
      metaDescription: 'Digital marketing strategies for barbershops. Social media, Google, and customer retention.',
      h1: 'Digital Marketing for Barbershops',
      guideType: 'marketing'
    }
  },

  // Spanish Barbershop Pages
  {
    slug: 'sistema-gestion-barberia',
    template: 'industry',
    languages: ['es'],
    data: {
      title: 'Sistema de Gestión para Barbería - Completo',
      metaDescription: 'Sistema completo para gestionar tu barbería. Citas, cola digital, fidelización.',
      h1: 'Sistema de Gestión Completo para Barbería',
      industry: 'barbershop'
    }
  },
  {
    slug: 'guia-abrir-barberia',
    template: 'guide',
    languages: ['es'],
    data: {
      title: 'Guía Completa: Cómo Abrir una Barbería 2024',
      metaDescription: 'Todo lo que necesitas saber para abrir una barbería. Inversión, documentación y consejos.',
      h1: 'Cómo Abrir una Barbería: Guía Completa',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'uso-barberia-moderna',
    template: 'use-case',
    languages: ['es'],
    data: {
      title: 'Barbería Moderna: Usar Tecnología para Crecer',
      metaDescription: 'Descubre cómo las barberías modernas usan tecnología para fidelizar clientes.',
      h1: 'Tecnología para Barbería Moderna',
      useCase: 'modern-barbershop'
    }
  },
  {
    slug: 'fila-digital-barberia',
    template: 'feature',
    languages: ['es'],
    data: {
      title: 'Cola Digital para Barbería - Sin Esperas',
      metaDescription: 'Sistema de cola digital para barbería. Los clientes se unen desde el móvil.',
      h1: 'Cola Digital: Fin de la Espera',
      feature: 'digital-queue'
    }
  },
  {
    slug: 'marketing-digital-barberia',
    template: 'guide',
    languages: ['es'],
    data: {
      title: 'Marketing Digital para Barbería - Guía 2024',
      metaDescription: 'Estrategias de marketing digital para barbería. Redes sociales y fidelización.',
      h1: 'Marketing Digital para Barbería',
      guideType: 'marketing'
    }
  },

  // ==================== LOCAL SEO PAGES ====================

  // Henderson, NV
  {
    slug: 'barbershop-guide-henderson-nv',
    template: 'local',
    languages: ['en'],
    data: {
      title: 'Barbershop Guide Henderson NV - Start Your Business',
      metaDescription: 'Complete guide to open a barbershop in Henderson, Nevada. Licenses, costs, and local tips.',
      h1: 'Barbershop Business Guide for Henderson, NV',
      city: 'Henderson',
      state: 'Nevada'
    }
  },
  {
    slug: 'best-barbershop-software-henderson',
    template: 'local',
    languages: ['en'],
    data: {
      title: 'Best Barbershop Software in Henderson - Local Solutions',
      metaDescription: 'Find the best barbershop software for Henderson businesses. Local support and features.',
      h1: 'Best Barbershop Software in Henderson',
      city: 'Henderson',
      state: 'Nevada'
    }
  },
  {
    slug: 'barbershop-booking-henderson',
    template: 'local',
    languages: ['en'],
    data: {
      title: 'Barbershop Booking System Henderson - Online Scheduling',
      metaDescription: 'Online booking system for barbershops in Henderson. Accept appointments 24/7.',
      h1: 'Barbershop Booking in Henderson',
      city: 'Henderson',
      state: 'Nevada'
    }
  },

  // Clark County
  {
    slug: 'best-barber-app-clark-county',
    template: 'local',
    languages: ['en'],
    data: {
      title: 'Best Barber App Clark County - Professional Tools',
      metaDescription: 'Best barber app for Clark County professionals. Booking, payments, and management.',
      h1: 'Best Barber App in Clark County',
      city: 'Clark County',
      state: 'Nevada'
    }
  },
  {
    slug: 'mejor-app-barberia-clark-county',
    template: 'local',
    languages: ['es'],
    data: {
      title: 'Mejor App de Barbería Clark County - Herramientas Pro',
      metaDescription: 'La mejor app para barberos en Clark County. Reservas, pagos y gestión.',
      h1: 'Mejor App de Barbería en Clark County',
      city: 'Clark County',
      state: 'Nevada'
    }
  },
  {
    slug: 'free-barber-app-clark-county',
    template: 'local',
    languages: ['en'],
    data: {
      title: 'Free Barber App Clark County - Start Free Today',
      metaDescription: 'Free barber app for Clark County businesses. No credit card required.',
      h1: 'Free Barber App for Clark County',
      city: 'Clark County',
      state: 'Nevada'
    }
  },
  {
    slug: 'app-gratis-barberia-clark-county',
    template: 'local',
    languages: ['es'],
    data: {
      title: 'App Gratis Barbería Clark County - Empieza Hoy',
      metaDescription: 'App gratuita para barberías en Clark County. Sin tarjeta de crédito.',
      h1: 'App Gratis para Barbería en Clark County',
      city: 'Clark County',
      state: 'Nevada'
    }
  },

  // ==================== BRAZILIAN MARKET SEO ====================

  // Barbershop Questions
  {
    slug: 'melhor-aplicativo-barbearia',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Qual o Melhor Aplicativo para Barbearia? Guia 2024',
      metaDescription: 'Descubra o melhor aplicativo para barbearia. Compare preços, recursos e avaliações.',
      h1: 'Qual o Melhor Aplicativo para Barbearia?',
      competitors: ['Fresha', 'Booksy', 'Trinks']
    }
  },
  {
    slug: 'quanto-custa-app-barbearia',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa um App para Barbearia? Preços 2024',
      metaDescription: 'Saiba quanto custa um app para barbearia. Compare preços e calcule o ROI.',
      h1: 'Quanto Custa um App para Barbearia?',
      priceRange: { min: 0, max: 88, currency: 'BRL' }
    }
  },
  {
    slug: 'melhor-aplicativo-agendamento',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Melhor Aplicativo de Agendamento Online 2024',
      metaDescription: 'Compare os melhores aplicativos de agendamento online. Preços e recursos.',
      h1: 'Qual o Melhor Aplicativo de Agendamento?',
      competitors: ['Calendly', 'Booksy', 'Google Calendar']
    }
  },
  {
    slug: 'como-captar-clientes-barbearia',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Captar Clientes para Barbearia - 7 Estratégias',
      metaDescription: 'Aprenda como captar clientes para sua barbearia. Estratégias comprovadas.',
      h1: 'Como Captar Clientes para Barbearia?',
      strategies: 7
    }
  },
  {
    slug: 'fresha-gratuita',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'A Fresha é Gratuita? Análise Completa das Taxas',
      metaDescription: 'Descubra se a Fresha é realmente gratuita. Análise das taxas ocultas.',
      h1: 'A Fresha é Realmente Gratuita?',
      platform: 'Fresha'
    }
  },
  {
    slug: 'melhor-programa-gratuito-cadastro-clientes',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Melhor Programa Gratuito para Cadastro de Clientes',
      metaDescription: 'Compare os melhores programas gratuitos para cadastrar clientes.',
      h1: 'Qual o Melhor Programa Gratuito para Cadastro?',
      competitors: ['Excel', 'Google Forms', 'Papel']
    }
  },
  {
    slug: 'como-administrar-dinheiro-barbearia',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Administrar o Dinheiro da Barbearia - Guia',
      metaDescription: 'Aprenda a administrar as finanças da sua barbearia. Dicas práticas.',
      h1: 'Como Administrar o Dinheiro da Barbearia?',
      guideType: 'financial'
    }
  },
  {
    slug: 'quanto-custa-site-barbearia',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa um Site para Barbearia? Preços 2024',
      metaDescription: 'Descubra quanto custa criar um site para barbearia. Compare opções.',
      h1: 'Quanto Custa um Site para Barbearia?',
      priceRange: { min: 0, max: 5000, currency: 'BRL' }
    }
  },
  {
    slug: 'como-fidelizar-clientes-barbearia',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Fidelizar Clientes na Barbearia - 10 Dicas',
      metaDescription: 'Estratégias para fidelizar clientes na sua barbearia. Aumente o retorno.',
      h1: 'Como Fidelizar Clientes na Barbearia?',
      tips: 10
    }
  },

  // iPhone Reseller Questions
  {
    slug: 'como-ser-revendedor-iphone',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Ser Revendedor de iPhone - Guia Completo',
      metaDescription: 'Aprenda como se tornar revendedor de iPhone. Fornecedores e estratégias.',
      h1: 'Como Ser Revendedor de iPhone?',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'quanto-custa-iphone-revender',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa iPhone para Revender? Tabela 2024',
      metaDescription: 'Preços de iPhone para revenda. Margem de lucro e fornecedores.',
      h1: 'Quanto Custa iPhone para Revender?',
      productType: 'iPhone'
    }
  },
  {
    slug: 'onde-achar-fornecedores-iphone',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Onde Achar Fornecedores de iPhone - Lista 2024',
      metaDescription: 'Encontre fornecedores confiáveis de iPhone. Nacional e importação.',
      h1: 'Onde Achar Fornecedores de iPhone?',
      guideType: 'suppliers'
    }
  },
  {
    slug: 'margem-lucro-iphone',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'Margem de Lucro iPhone - Análise Completa 2024',
      metaDescription: 'Descubra a margem de lucro na revenda de iPhone. Cálculos reais.',
      h1: 'Qual a Margem de Lucro do iPhone?',
      productType: 'iPhone'
    }
  },
  {
    slug: 'quanto-ganha-revendedor-iphone',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Ganha um Revendedor de iPhone? Valores 2024',
      metaDescription: 'Descubra quanto ganha um revendedor de iPhone. Valores reais.',
      h1: 'Quanto Ganha um Revendedor de iPhone?',
      profession: 'revendedor-iphone'
    }
  },

  // iPhone Technician Questions
  {
    slug: 'quanto-ganha-tecnico-iphone',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Ganha um Técnico de iPhone? Salários 2024',
      metaDescription: 'Salários de técnico de iPhone. CLT, autônomo e próprio negócio.',
      h1: 'Quanto Ganha um Técnico de iPhone?',
      profession: 'tecnico-iphone'
    }
  },
  {
    slug: 'quanto-cobrar-restaurar-iphone',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Cobrar para Restaurar iPhone? Tabela 2024',
      metaDescription: 'Tabela de preços para restauração de iPhone. Valores por modelo.',
      h1: 'Quanto Cobrar para Restaurar iPhone?',
      service: 'restauracao'
    }
  },
  {
    slug: 'quanto-custa-reparo-placa-iphone',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Reparo de Placa iPhone? Preços 2024',
      metaDescription: 'Preços de reparo de placa-mãe iPhone. Valores por modelo e defeito.',
      h1: 'Quanto Custa Reparo de Placa iPhone?',
      service: 'reparo-placa'
    }
  },
  {
    slug: 'quanto-custa-curso-manutencao-iphone',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Curso de Manutenção iPhone? Valores',
      metaDescription: 'Preços de cursos de manutenção iPhone. Presencial e online.',
      h1: 'Quanto Custa Curso de Manutenção iPhone?',
      courseType: 'manutencao-iphone'
    }
  },

  // Beauty Salon Questions
  {
    slug: 'quanto-custa-curso-cabeleireiro',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Curso de Cabeleireiro? Valores 2024',
      metaDescription: 'Preços de cursos de cabeleireiro. Básico ao avançado.',
      h1: 'Quanto Custa um Curso de Cabeleireiro?',
      courseType: 'cabeleireiro'
    }
  },
  {
    slug: 'como-comecar-salao-beleza',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Começar um Salão de Beleza - Guia Completo',
      metaDescription: 'Passo a passo para abrir seu salão de beleza. Do zero ao sucesso.',
      h1: 'Como Começar um Salão de Beleza?',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'quanto-custa-abrir-salao-beleza',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Abrir um Salão de Beleza? Investimento',
      metaDescription: 'Investimento para abrir salão de beleza. Pequeno, médio e grande.',
      h1: 'Quanto Custa Abrir um Salão de Beleza?',
      businessType: 'salao-beleza'
    }
  },
  {
    slug: 'como-ter-sucesso-cabeleireira',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Ter Sucesso como Cabeleireira - 15 Dicas',
      metaDescription: 'Dicas para ter sucesso como cabeleireira. Carreira e negócio próprio.',
      h1: 'Como Ter Sucesso como Cabeleireira?',
      tips: 15
    }
  },
  {
    slug: 'como-ganhar-dinheiro-cabeleireira',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Ganhar Dinheiro como Cabeleireira - Estratégias',
      metaDescription: 'Estratégias para ganhar mais como cabeleireira. Aumente seus lucros.',
      h1: 'Como Ganhar Dinheiro como Cabeleireira?',
      strategies: 8
    }
  },
  {
    slug: 'como-atrair-clientes-salao-beleza',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Atrair Clientes para Salão de Beleza - 12 Dicas',
      metaDescription: 'Estratégias para atrair clientes para seu salão. Marketing eficaz.',
      h1: 'Como Atrair Clientes para Salão?',
      tips: 12
    }
  },
  {
    slug: 'como-comecar-salao-beleza-pequeno',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Começar Salão de Beleza Pequeno - Guia 2024',
      metaDescription: 'Monte um salão pequeno com pouco investimento. Passo a passo.',
      h1: 'Como Começar um Salão Pequeno?',
      businessSize: 'pequeno'
    }
  },
  {
    slug: 'qual-area-beleza-da-mais-lucro',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'Qual Área da Beleza Dá Mais Lucro? Análise 2024',
      metaDescription: 'Descubra as áreas mais lucrativas da beleza. Dados e tendências.',
      h1: 'Qual Área da Beleza Dá Mais Lucro?',
      industry: 'beleza'
    }
  },
  {
    slug: 'o-que-nao-pode-faltar-salao-beleza',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'O Que Não Pode Faltar em Salão de Beleza - Lista',
      metaDescription: 'Lista completa do que não pode faltar no seu salão. Equipamentos e produtos.',
      h1: 'O Que Não Pode Faltar no Salão?',
      checklistType: 'equipamentos'
    }
  },

  // E-commerce Questions
  {
    slug: 'como-criar-loja-pouco-dinheiro',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Criar Loja Online com Pouco Dinheiro - Guia',
      metaDescription: 'Crie sua loja online com pouco investimento. Passo a passo completo.',
      h1: 'Como Criar Loja com Pouco Dinheiro?',
      budget: 'low'
    }
  },
  {
    slug: 'quanto-custa-abrir-loja',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Abrir uma Loja? Online e Física 2024',
      metaDescription: 'Investimento para abrir loja online e física. Compare os valores.',
      h1: 'Quanto Custa Abrir uma Loja?',
      storeTypes: ['online', 'fisica']
    }
  },
  {
    slug: 'o-que-necessario-loja-online',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'O Que é Necessário para Loja Online? Checklist',
      metaDescription: 'Tudo que você precisa para criar uma loja online. Lista completa.',
      h1: 'O Que é Necessário para Loja Online?',
      checklistType: 'setup'
    }
  },
  {
    slug: 'como-comecar-negocio-online',
    template: 'guide',
    languages: ['pt-BR'],
    data: {
      title: 'Como Começar um Negócio Online - Guia Completo',
      metaDescription: 'Passo a passo para começar seu negócio online. Do zero ao sucesso.',
      h1: 'Como Começar um Negócio Online?',
      guideType: 'business-setup'
    }
  },
  {
    slug: 'melhor-plataforma-ecommerce',
    template: 'comparison',
    languages: ['pt-BR'],
    data: {
      title: 'Melhor Plataforma de E-commerce 2024 - Comparativo',
      metaDescription: 'Compare as melhores plataformas de e-commerce. Preços e recursos.',
      h1: 'Qual a Melhor Plataforma de E-commerce?',
      competitors: ['Shopify', 'WooCommerce', 'Nuvemshop']
    }
  },

  // Shopify Questions
  {
    slug: 'quanto-paga-mes-shopify',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Paga por Mês no Shopify? Planos e Taxas',
      metaDescription: 'Valores mensais do Shopify. Planos, taxas e custos ocultos.',
      h1: 'Quanto Paga por Mês no Shopify?',
      platform: 'Shopify'
    }
  },
  {
    slug: 'shopify-gratuita',
    template: 'analysis',
    languages: ['pt-BR'],
    data: {
      title: 'A Shopify é Gratuita? Análise Completa 2024',
      metaDescription: 'Descubra se a Shopify é gratuita. Teste grátis e custos reais.',
      h1: 'A Shopify é Gratuita?',
      platform: 'Shopify'
    }
  },
  {
    slug: 'quanto-custa-criar-site-shopify',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Criar um Site no Shopify? Valores',
      metaDescription: 'Custos para criar site no Shopify. Desenvolvimento e manutenção.',
      h1: 'Quanto Custa Criar Site no Shopify?',
      platform: 'Shopify'
    }
  },
  {
    slug: 'quanto-custa-manter-site',
    template: 'pricing',
    languages: ['pt-BR'],
    data: {
      title: 'Quanto Custa Manter um Site? Custos Mensais 2024',
      metaDescription: 'Custos mensais para manter um site. Hospedagem, domínio e mais.',
      h1: 'Quanto Custa Manter um Site?',
      maintenanceType: 'website'
    }
  },

  // ==================== STATIC PAGES ====================

  {
    slug: 'about',
    template: 'static',
    languages: ['en', 'pt-BR', 'es'],
    data: {
      title: 'About Converso - Professional Booking Platform',
      metaDescription: 'Learn about Converso, the platform helping professionals create booking websites.',
      h1: 'About Converso',
      pageType: 'about'
    }
  },
  {
    slug: 'privacy',
    template: 'static',
    languages: ['en', 'pt-BR', 'es'],
    data: {
      title: 'Privacy Policy - Converso',
      metaDescription: 'Converso privacy policy. How we collect, use, and protect your data.',
      h1: 'Privacy Policy',
      pageType: 'privacy'
    }
  },
  {
    slug: 'terms',
    template: 'static',
    languages: ['en', 'pt-BR', 'es'],
    data: {
      title: 'Terms of Service - Converso',
      metaDescription: 'Converso terms of service. Rules and guidelines for using our platform.',
      h1: 'Terms of Service',
      pageType: 'terms'
    }
  }
]

// Templates for different page types
const SEO_TEMPLATES = {
  'seo-comparison': 'comparison',
  'seo-pricing': 'pricing', 
  'seo-guide': 'guide',
  'seo-local': 'local',
  'seo-niche': 'niche'
}

// Export for CommonJS (gatsby-node.js)
module.exports = {
  SEO_PAGES,
  SEO_TEMPLATES
}