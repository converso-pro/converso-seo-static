// Enhanced page data with proper titles and descriptions
const LIBRARY_PAGE_DATA = {
  // Barbershop pages
  'melhor-aplicativo-barbearia': {
    title: {
      'pt-BR': 'Melhor Aplicativo para Barbearia 2025',
      'en': 'Best Barbershop App 2025',
      'es': 'Mejor Aplicación para Barbería 2025'
    },
    description: {
      'pt-BR': 'Análise completa dos melhores aplicativos para gerenciar sua barbearia. Compare recursos, preços e descubra qual é ideal para você.',
      'en': 'Complete analysis of the best apps to manage your barbershop. Compare features, prices and find the ideal one for you.',
      'es': 'Análisis completo de las mejores aplicaciones para gestionar tu barbería. Compara características, precios y encuentra la ideal.'
    },
    category: 'barbershop',
    featured: true
  },
  'como-administrar-dinheiro-barbearia': {
    title: {
      'pt-BR': 'Como Administrar o Dinheiro da Barbearia',
      'en': 'How to Manage Barbershop Finances',
      'es': 'Cómo Administrar las Finanzas de la Barbería'
    },
    description: {
      'pt-BR': 'Guia prático de gestão financeira para barbeiros. Aprenda a controlar custos, aumentar lucros e fazer seu negócio crescer.',
      'en': 'Practical financial management guide for barbers. Learn to control costs, increase profits and grow your business.',
      'es': 'Guía práctica de gestión financiera para barberos. Aprende a controlar costos, aumentar ganancias y hacer crecer tu negocio.'
    },
    category: 'barbershop',
    featured: true
  },
  'sistema-gestao-barbearia': {
    title: {
      'pt-BR': 'Sistema de Gestão para Barbearia: Guia Completo',
      'en': 'Barbershop Management System: Complete Guide',
      'es': 'Sistema de Gestión para Barbería: Guía Completa'
    },
    description: {
      'pt-BR': 'Descubra como um sistema de gestão pode transformar sua barbearia em um negócio mais organizado e lucrativo.',
      'en': 'Discover how a management system can transform your barbershop into a more organized and profitable business.',
      'es': 'Descubre cómo un sistema de gestión puede transformar tu barbería en un negocio más organizado y rentable.'
    },
    category: 'barbershop',
    featured: true
  },
  'marketing-digital-barbearia': {
    title: {
      'pt-BR': 'Marketing Digital para Barbearia: Estratégias que Funcionam',
      'en': 'Digital Marketing for Barbershops: Strategies that Work',
      'es': 'Marketing Digital para Barbería: Estrategias que Funcionan'
    },
    description: {
      'pt-BR': 'Aprenda estratégias comprovadas de marketing digital para atrair mais clientes para sua barbearia.',
      'en': 'Learn proven digital marketing strategies to attract more customers to your barbershop.',
      'es': 'Aprende estrategias probadas de marketing digital para atraer más clientes a tu barbería.'
    },
    category: 'barbershop'
  },
  'fila-digital-barbearia': {
    title: {
      'pt-BR': 'Fila Digital para Barbearia: Como Implementar',
      'en': 'Digital Queue for Barbershops: How to Implement',
      'es': 'Cola Digital para Barberías: Cómo Implementar'
    },
    description: {
      'pt-BR': 'Elimine filas físicas e melhore a experiência do cliente com um sistema de fila digital inteligente.',
      'en': 'Eliminate physical queues and improve customer experience with a smart digital queue system.',
      'es': 'Elimina las colas físicas y mejora la experiencia del cliente con un sistema de cola digital inteligente.'
    },
    category: 'barbershop'
  },
  
  // Beauty Salon pages
  'melhor-sistema-agendamento-saloes': {
    title: {
      'pt-BR': 'Melhor Sistema de Agendamento para Salões de Beleza',
      'en': 'Best Booking System for Beauty Salons',
      'es': 'Mejor Sistema de Reservas para Salones de Belleza'
    },
    description: {
      'pt-BR': 'Compare os melhores sistemas de agendamento online para salões. Recursos, preços e qual escolher para seu negócio.',
      'en': 'Compare the best online booking systems for salons. Features, prices and which to choose for your business.',
      'es': 'Compara los mejores sistemas de reservas online para salones. Características, precios y cuál elegir.'
    },
    category: 'salon',
    featured: true
  },
  'como-montar-salao-beleza': {
    title: {
      'pt-BR': 'Como Montar um Salão de Beleza do Zero',
      'en': 'How to Start a Beauty Salon from Scratch',
      'es': 'Cómo Montar un Salón de Belleza desde Cero'
    },
    description: {
      'pt-BR': 'Guia passo a passo para abrir seu salão de beleza. Documentação, investimento, equipamentos e primeiros clientes.',
      'en': 'Step by step guide to open your beauty salon. Documentation, investment, equipment and first clients.',
      'es': 'Guía paso a paso para abrir tu salón de belleza. Documentación, inversión, equipos y primeros clientes.'
    },
    category: 'salon'
  },
  'como-atrair-clientes-salao-beleza': {
    title: {
      'pt-BR': 'Como Atrair Clientes para Salão de Beleza',
      'en': 'How to Attract Clients to Beauty Salon',
      'es': 'Cómo Atraer Clientes al Salón de Belleza'
    },
    description: {
      'pt-BR': 'Estratégias comprovadas para atrair e fidelizar clientes. Marketing, promoções e atendimento diferenciado.',
      'en': 'Proven strategies to attract and retain clients. Marketing, promotions and differentiated service.',
      'es': 'Estrategias probadas para atraer y fidelizar clientes. Marketing, promociones y servicio diferenciado.'
    },
    category: 'salon'
  },
  
  // E-commerce pages
  'melhor-plataforma-ecommerce': {
    title: {
      'pt-BR': 'Melhor Plataforma de E-commerce 2025',
      'en': 'Best E-commerce Platform 2025',
      'es': 'Mejor Plataforma de E-commerce 2025'
    },
    description: {
      'pt-BR': 'Comparação detalhada das melhores plataformas de e-commerce. Shopify vs WooCommerce vs Converso.',
      'en': 'Detailed comparison of the best e-commerce platforms. Shopify vs WooCommerce vs Converso.',
      'es': 'Comparación detallada de las mejores plataformas de e-commerce. Shopify vs WooCommerce vs Converso.'
    },
    category: 'ecommerce'
  },
  'como-comecar-negocio-online': {
    title: {
      'pt-BR': 'Como Começar um Negócio Online do Zero',
      'en': 'How to Start an Online Business from Scratch',
      'es': 'Cómo Empezar un Negocio Online desde Cero'
    },
    description: {
      'pt-BR': 'Guia completo para iniciar seu negócio online. Planejamento, ferramentas e primeiras vendas.',
      'en': 'Complete guide to start your online business. Planning, tools and first sales.',
      'es': 'Guía completa para iniciar tu negocio online. Planificación, herramientas y primeras ventas.'
    },
    category: 'ecommerce'
  },
  
  // Phone/Tech pages
  'onde-achar-fornecedores-iphone': {
    title: {
      'pt-BR': 'Onde Achar Fornecedores de iPhone Confiáveis',
      'en': 'Where to Find Reliable iPhone Suppliers',
      'es': 'Dónde Encontrar Proveedores de iPhone Confiables'
    },
    description: {
      'pt-BR': 'Lista completa de fornecedores confiáveis de iPhone no Brasil e exterior. Dicas para evitar golpes.',
      'en': 'Complete list of reliable iPhone suppliers in Brazil and abroad. Tips to avoid scams.',
      'es': 'Lista completa de proveedores confiables de iPhone en Brasil y exterior. Consejos para evitar estafas.'
    },
    category: 'phone'
  },
  'margem-lucro-iphone': {
    title: {
      'pt-BR': 'Margem de Lucro na Revenda de iPhone',
      'en': 'Profit Margin in iPhone Resale',
      'es': 'Margen de Ganancia en Reventa de iPhone'
    },
    description: {
      'pt-BR': 'Descubra qual a margem de lucro real na revenda de iPhones. Cálculos, impostos e estratégias.',
      'en': 'Discover the real profit margin in iPhone resale. Calculations, taxes and strategies.',
      'es': 'Descubre el margen de ganancia real en reventa de iPhones. Cálculos, impuestos y estrategias.'
    },
    category: 'phone'
  },
  
  // Comparison pages
  'comparar/converso-vs-calendly': {
    title: {
      'pt-BR': 'Converso vs Calendly: Comparação Completa',
      'en': 'Converso vs Calendly: Complete Comparison',
      'es': 'Converso vs Calendly: Comparación Completa'
    },
    description: {
      'pt-BR': 'Compare Converso e Calendly: recursos, preços, vantagens. Descubra qual é melhor para seu negócio.',
      'en': 'Compare Converso and Calendly: features, prices, advantages. Find out which is better for your business.',
      'es': 'Compara Converso y Calendly: características, precios, ventajas. Descubre cuál es mejor para tu negocio.'
    },
    category: 'comparison'
  },
  'comparar/converso-vs-acuity': {
    title: {
      'pt-BR': 'Converso vs Acuity: Qual Escolher?',
      'en': 'Converso vs Acuity: Which to Choose?',
      'es': 'Converso vs Acuity: ¿Cuál Elegir?'
    },
    description: {
      'pt-BR': 'Análise detalhada: Converso vs Acuity Scheduling. Compare recursos, integrações e custo-benefício.',
      'en': 'Detailed analysis: Converso vs Acuity Scheduling. Compare features, integrations and value.',
      'es': 'Análisis detallado: Converso vs Acuity Scheduling. Compara características, integraciones y valor.'
    },
    category: 'comparison'
  }
};

module.exports = { LIBRARY_PAGE_DATA };