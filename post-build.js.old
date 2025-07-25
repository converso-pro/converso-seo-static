const fs = require('fs');
const path = require('path');

// Custom index.html content
const customIndexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Converso.pro Library - 297 Resources for Service Professionals</title>
  <meta name="description" content="Explore 297 comprehensive guides, comparisons, and resources for service professionals. Learn about booking systems, business management, and digital transformation in multiple languages.">
  <meta property="og:title" content="Converso.pro Library - Complete Resource Directory">
  <meta property="og:description" content="Access 297 professional resources in English, Spanish, and Portuguese. Guides for barbershops, salons, clinics, and service businesses.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://seo.converso.pro">
  <meta property="og:image" content="https://converso.pro/converso-og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Converso.pro Library - Professional Resources">
  <meta name="twitter:description" content="297 guides for service professionals in 3 languages">
  <link rel="canonical" href="https://seo.converso.pro">
  <link rel="icon" href="https://converso.pro/favicon.ico">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background-color: #f0f2f5;
      color: #333;
      line-height: 1.6;
    }

    .neumorphic {
      background: #f0f2f5;
      border-radius: 20px;
      box-shadow: 20px 20px 60px #c8cacd, -20px -20px 60px #ffffff;
      padding: 2rem;
      margin-bottom: 2rem;
    }

    .neumorphic-inset {
      background: #f0f2f5;
      border-radius: 15px;
      box-shadow: inset 8px 8px 16px #c8cacd, inset -8px -8px 16px #ffffff;
      padding: 1.5rem;
      margin-bottom: 1rem;
    }

    .gradient-text {
      background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .gradient-bg {
      background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
    }

    header {
      background: #f0f2f5;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
    }

    .nav-buttons {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.3s ease;
      display: inline-block;
    }

    .btn-primary {
      background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #333;
      box-shadow: 5px 5px 15px #c8cacd, -5px -5px 15px #ffffff;
    }

    .hero {
      text-align: center;
      padding: 4rem 2rem;
      max-width: 1000px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .subtitle {
      font-size: 1.25rem;
      color: #666;
      max-width: 800px;
      margin: 0 auto 3rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 0 auto;
    }

    .stat-card {
      text-align: center;
      padding: 1.5rem;
    }

    .stat-number {
      font-size: 3rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .language-section {
      margin: 4rem 0;
    }

    .language-header {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .language-flag {
      font-size: 2.5rem;
    }

    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .category-card {
      padding: 2rem;
      transition: transform 0.3s ease;
    }

    .category-card:hover {
      transform: translateY(-5px);
    }

    .category-title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #1e40af;
    }

    .page-list {
      list-style: none;
      padding: 0;
    }

    .page-list li {
      margin: 0.75rem 0;
    }

    .page-link {
      color: #3b82f6;
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: all 0.3s ease;
      padding: 0.5rem;
      border-radius: 10px;
    }

    .page-link:hover {
      background: #e0e7ff;
      padding-left: 1rem;
    }

    .page-link .icon {
      margin-right: 0.5rem;
      color: #10b981;
    }

    .search-box {
      max-width: 600px;
      margin: 0 auto 3rem;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 1rem 1.5rem 1rem 3.5rem;
      border: none;
      border-radius: 15px;
      font-size: 1.1rem;
      background: #f0f2f5;
      box-shadow: inset 8px 8px 16px #c8cacd, inset -8px -8px 16px #ffffff;
      transition: all 0.3s ease;
    }

    .search-input:focus {
      outline: none;
      box-shadow: inset 10px 10px 20px #c8cacd, inset -10px -10px 20px #ffffff;
    }

    .search-icon {
      position: absolute;
      left: 1.5rem;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
    }

    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 3rem;
    }

    .quick-link {
      background: white;
      padding: 0.75rem 1.5rem;
      border-radius: 25px;
      text-decoration: none;
      color: #333;
      box-shadow: 5px 5px 15px #c8cacd, -5px -5px 15px #ffffff;
      transition: all 0.3s ease;
    }

    .quick-link:hover {
      transform: translateY(-2px);
      box-shadow: 7px 7px 20px #c8cacd, -7px -7px 20px #ffffff;
    }

    .cta-section {
      background: linear-gradient(135deg, #3b82f6 0%, #10b981 100%);
      border-radius: 30px;
      color: white;
      text-align: center;
      margin: 4rem 0;
      padding: 3rem 2rem;
    }

    .cta-section h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    footer {
      background: #1f2937;
      color: white;
      padding: 3rem 0 2rem;
      margin-top: 4rem;
      text-align: center;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .hide-mobile {
        display: none;
      }
      
      .category-grid {
        grid-template-columns: 1fr;
      }
      
      .stats-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="header-container">
      <a href="https://converso.pro" class="logo gradient-text">converso.pro</a>
      <div class="nav-buttons">
        <a href="https://converso.pro" class="btn btn-secondary hide-mobile">Main Site</a>
        <a href="https://app.converso.pro/auth" class="btn btn-primary">Get Started</a>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1 class="gradient-text">Converso.pro Library</h1>
    <p class="subtitle">Your complete resource hub for professional service business management. Explore 297 in-depth guides, comparisons, and tutorials in 3 languages.</p>
    
    <div class="stats-grid">
      <div class="neumorphic stat-card">
        <div class="stat-number gradient-text">297</div>
        <div>Total Resources</div>
      </div>
      <div class="neumorphic stat-card">
        <div class="stat-number gradient-text">3</div>
        <div>Languages</div>
      </div>
      <div class="neumorphic stat-card">
        <div class="stat-number gradient-text">12+</div>
        <div>Categories</div>
      </div>
    </div>
  </section>

  <!-- Search Section -->
  <div class="container">
    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" placeholder="Search 297 resources..." id="searchInput">
    </div>

    <!-- Quick Links -->
    <div class="quick-links">
      <a href="#english" class="quick-link">🇺🇸 English (31)</a>
      <a href="#spanish" class="quick-link">🇪🇸 Español (118)</a>
      <a href="#portuguese" class="quick-link">🇧🇷 Português (148)</a>
      <a href="/apps/" class="quick-link">📱 All Apps</a>
      <a href="/use-cases/barber/" class="quick-link">💈 Barbershop</a>
      <a href="/compare/converso-vs-calendly/" class="quick-link">⚔️ Comparisons</a>
    </div>

    <!-- English Section -->
    <section id="english" class="language-section">
      <div class="language-header">
        <span class="language-flag">🇺🇸</span>
        <h2 style="font-size: 2.5rem;">English Resources</h2>
        <span style="color: #666; font-size: 1.25rem;">(31 pages)</span>
      </div>

      <div class="category-grid">
        <!-- Use Cases -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📋 Use Cases</h3>
          <ul class="page-list">
            <li><a href="/use-cases/barber/" class="page-link"><span class="icon">✓</span> Barbershop Booking System</a></li>
            <li><a href="/use-cases/medical-clinic-booking/" class="page-link"><span class="icon">✓</span> Medical Clinic Booking</a></li>
            <li><a href="/use-cases/personal-trainer-booking/" class="page-link"><span class="icon">✓</span> Personal Trainer Booking</a></li>
            <li><a href="/use-cases/therapist-booking/" class="page-link"><span class="icon">✓</span> Therapist Booking</a></li>
          </ul>
        </div>

        <!-- Comparisons -->
        <div class="neumorphic category-card">
          <h3 class="category-title">⚔️ Platform Comparisons</h3>
          <ul class="page-list">
            <li><a href="/compare/converso-vs-acuity/" class="page-link"><span class="icon">✓</span> Converso vs Acuity</a></li>
            <li><a href="/compare/converso-vs-calendly/" class="page-link"><span class="icon">✓</span> Converso vs Calendly</a></li>
            <li><a href="/compare/converso-vs-square/" class="page-link"><span class="icon">✓</span> Converso vs Square</a></li>
            <li><a href="/calendly-alternatives/" class="page-link"><span class="icon">✓</span> Calendly Alternatives</a></li>
          </ul>
        </div>

        <!-- Location-Based -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📍 Henderson & Clark County</h3>
          <ul class="page-list">
            <li><a href="/barbershop-booking-henderson/" class="page-link"><span class="icon">✓</span> Barbershop Booking Henderson</a></li>
            <li><a href="/barbershop-guide-henderson-nv/" class="page-link"><span class="icon">✓</span> Barbershop Guide Henderson</a></li>
            <li><a href="/best-barbershop-software-henderson/" class="page-link"><span class="icon">✓</span> Best Software Henderson</a></li>
            <li><a href="/best-barber-app-clark-county/" class="page-link"><span class="icon">✓</span> Best App Clark County</a></li>
            <li><a href="/free-barber-app-clark-county/" class="page-link"><span class="icon">✓</span> Free App Clark County</a></li>
          </ul>
        </div>

        <!-- Industry Guides -->
        <div class="neumorphic category-card">
          <h3 class="category-title">💼 Industry Solutions</h3>
          <ul class="page-list">
            <li><a href="/barbershop-management-system/" class="page-link"><span class="icon">✓</span> Barbershop Management</a></li>
            <li><a href="/barbershop-online-booking/" class="page-link"><span class="icon">✓</span> Online Booking System</a></li>
            <li><a href="/barbershop-booking-software/" class="page-link"><span class="icon">✓</span> Booking Software</a></li>
            <li><a href="/best-booking-system-for-hair-salons/" class="page-link"><span class="icon">✓</span> Hair Salon Booking</a></li>
            <li><a href="/digital-queue-barbershop/" class="page-link"><span class="icon">✓</span> Digital Queue System</a></li>
            <li><a href="/digital-marketing-barbershop/" class="page-link"><span class="icon">✓</span> Digital Marketing</a></li>
          </ul>
        </div>

        <!-- Features -->
        <div class="neumorphic category-card">
          <h3 class="category-title">🚀 Features & Apps</h3>
          <ul class="page-list">
            <li><a href="/apps/" class="page-link"><span class="icon">✓</span> All Converso Apps</a></li>
            <li><a href="/apps/e-commerce/" class="page-link"><span class="icon">✓</span> E-commerce App</a></li>
            <li><a href="/open-barbershop-guide/" class="page-link"><span class="icon">✓</span> Open Barbershop Guide</a></li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📄 Legal & Info</h3>
          <ul class="page-list">
            <li><a href="/about/" class="page-link"><span class="icon">✓</span> About Converso</a></li>
            <li><a href="/privacy/" class="page-link"><span class="icon">✓</span> Privacy Policy</a></li>
            <li><a href="/terms/" class="page-link"><span class="icon">✓</span> Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Spanish Section -->
    <section id="spanish" class="language-section">
      <div class="language-header">
        <span class="language-flag">🇪🇸</span>
        <h2 style="font-size: 2.5rem;">Recursos en Español</h2>
        <span style="color: #666; font-size: 1.25rem;">(118 páginas)</span>
      </div>

      <div class="category-grid">
        <!-- Casos de Uso -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📋 Casos de Uso</h3>
          <ul class="page-list">
            <li><a href="/es/casos-de-uso/barbearia/" class="page-link"><span class="icon">✓</span> Sistema de Reservas para Barbería</a></li>
            <li><a href="/es/casos-de-uso/citas-medicas-clinica/" class="page-link"><span class="icon">✓</span> Reservas Clínica Médica</a></li>
            <li><a href="/es/casos-de-uso/personal-trainer-citas/" class="page-link"><span class="icon">✓</span> Citas Personal Trainer</a></li>
            <li><a href="/es/casos-de-uso/terapeuta-citas/" class="page-link"><span class="icon">✓</span> Citas para Terapeutas</a></li>
          </ul>
        </div>

        <!-- Comparaciones -->
        <div class="neumorphic category-card">
          <h3 class="category-title">⚔️ Comparaciones</h3>
          <ul class="page-list">
            <li><a href="/es/comparar/converso-vs-acuity/" class="page-link"><span class="icon">✓</span> Converso vs Acuity</a></li>
            <li><a href="/es/comparar/converso-vs-calendly/" class="page-link"><span class="icon">✓</span> Converso vs Calendly</a></li>
            <li><a href="/es/comparar/converso-vs-square/" class="page-link"><span class="icon">✓</span> Converso vs Square</a></li>
            <li><a href="/es/alternativas-calendly/" class="page-link"><span class="icon">✓</span> Alternativas a Calendly</a></li>
          </ul>
        </div>

        <!-- Guías de Negocio -->
        <div class="neumorphic category-card">
          <h3 class="category-title">💼 Guías de Negocio</h3>
          <ul class="page-list">
            <li><a href="/es/guia-abrir-barberia/" class="page-link"><span class="icon">✓</span> Guía Abrir Barbería</a></li>
            <li><a href="/es/sistema-gestion-barberia/" class="page-link"><span class="icon">✓</span> Sistema Gestión Barbería</a></li>
            <li><a href="/es/marketing-digital-barberia/" class="page-link"><span class="icon">✓</span> Marketing Digital Barbería</a></li>
            <li><a href="/es/fila-digital-barberia/" class="page-link"><span class="icon">✓</span> Fila Digital Barbería</a></li>
            <li><a href="/es/uso-barberia-moderna/" class="page-link"><span class="icon">✓</span> Barbería Moderna</a></li>
          </ul>
        </div>

        <!-- Cómo Hacer -->
        <div class="neumorphic category-card">
          <h3 class="category-title">🎯 Guías Cómo Hacer</h3>
          <ul class="page-list">
            <li><a href="/es/como-captar-clientes-barbearia/" class="page-link"><span class="icon">✓</span> Cómo Captar Clientes</a></li>
            <li><a href="/es/como-fidelizar-clientes-barbearia/" class="page-link"><span class="icon">✓</span> Cómo Fidelizar Clientes</a></li>
            <li><a href="/es/como-administrar-dinheiro-barbearia/" class="page-link"><span class="icon">✓</span> Administrar Dinero</a></li>
            <li><a href="/es/como-montar-salao-beleza/" class="page-link"><span class="icon">✓</span> Montar Salón de Belleza</a></li>
            <li><a href="/es/como-atrair-clientes-salao-beleza/" class="page-link"><span class="icon">✓</span> Atraer Clientes Salón</a></li>
          </ul>
        </div>

        <!-- Aplicaciones -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📱 Aplicaciones y Software</h3>
          <ul class="page-list">
            <li><a href="/es/apps/" class="page-link"><span class="icon">✓</span> Todas las Aplicaciones</a></li>
            <li><a href="/es/melhor-aplicativo-barbearia/" class="page-link"><span class="icon">✓</span> Mejor App Barbería</a></li>
            <li><a href="/es/app-gratis-barberia-clark-county/" class="page-link"><span class="icon">✓</span> App Gratis Clark County</a></li>
            <li><a href="/es/mejor-app-barberia-clark-county/" class="page-link"><span class="icon">✓</span> Mejor App Clark County</a></li>
            <li><a href="/es/mejor-sistema-citas-salones/" class="page-link"><span class="icon">✓</span> Sistema Citas Salones</a></li>
          </ul>
        </div>

        <!-- Ver más páginas en español... -->
        <div class="neumorphic category-card" style="text-align: center; display: flex; align-items: center; justify-content: center;">
          <div>
            <h3 class="category-title">➕ Y mucho más...</h3>
            <p style="color: #666; margin-bottom: 1rem;">Explora 118 recursos completos en español</p>
            <a href="/es/" class="btn btn-primary">Ver Todo en Español</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Portuguese Section -->
    <section id="portuguese" class="language-section">
      <div class="language-header">
        <span class="language-flag">🇧🇷</span>
        <h2 style="font-size: 2.5rem;">Recursos em Português</h2>
        <span style="color: #666; font-size: 1.25rem;">(148 páginas)</span>
      </div>

      <div class="category-grid">
        <!-- Casos de Uso -->
        <div class="neumorphic category-card">
          <h3 class="category-title">📋 Casos de Uso</h3>
          <ul class="page-list">
            <li><a href="/pt-BR/casos-de-uso/barbearia/" class="page-link"><span class="icon">✓</span> Sistema de Agendamento Barbearia</a></li>
            <li><a href="/pt-BR/casos-de-uso/clinica-medica/" class="page-link"><span class="icon">✓</span> Agendamento Clínica Médica</a></li>
            <li><a href="/pt-BR/casos-de-uso/personal-trainer/" class="page-link"><span class="icon">✓</span> Personal Trainer</a></li>
            <li><a href="/pt-BR/casos-de-uso/terapeutas/" class="page-link"><span class="icon">✓</span> Agendamento Terapeutas</a></li>
          </ul>
        </div>

        <!-- Comparações -->
        <div class="neumorphic category-card">
          <h3 class="category-title">⚔️ Comparações</h3>
          <ul class="page-list">
            <li><a href="/pt-BR/comparar/converso-vs-acuity/" class="page-link"><span class="icon">✓</span> Converso vs Acuity</a></li>
            <li><a href="/pt-BR/comparar/converso-vs-calendly/" class="page-link"><span class="icon">✓</span> Converso vs Calendly</a></li>
            <li><a href="/pt-BR/comparar/converso-vs-square/" class="page-link"><span class="icon">✓</span> Converso vs Square</a></li>
            <li><a href="/pt-BR/alternativas-calendly/" class="page-link"><span class="icon">✓</span> Alternativas ao Calendly</a></li>
          </ul>
        </div>

        <!-- Guias de Negócio -->
        <div class="neumorphic category-card">
          <h3 class="category-title">💼 Guias de Negócio</h3>
          <ul class="page-list">
            <li><a href="/pt-BR/guia-abrir-barbearia/" class="page-link"><span class="icon">✓</span> Guia Abrir Barbearia</a></li>
            <li><a href="/pt-BR/sistema-gestao-barbearia/" class="page-link"><span class="icon">✓</span> Sistema Gestão Barbearia</a></li>
            <li><a href="/pt-BR/marketing-digital-barbearia/" class="page-link"><span class="icon">✓</span> Marketing Digital</a></li>
            <li><a href="/pt-BR/agendamento-barbearia/" class="page-link"><span class="icon">✓</span> Agendamento Barbearia</a></li>
            <li><a href="/pt-BR/fila-digital-barbearia/" class="page-link"><span class="icon">✓</span> Fila Digital</a></li>
          </ul>
        </div>

        <!-- Guias Como Fazer -->
        <div class="neumorphic category-card">
          <h3 class="category-title">🎯 Guias Como Fazer</h3>
          <ul class="page-list">
            <li><a href="/pt-BR/como-captar-clientes-barbearia/" class="page-link"><span class="icon">✓</span> Como Captar Clientes</a></li>
            <li><a href="/pt-BR/como-fidelizar-clientes-barbearia/" class="page-link"><span class="icon">✓</span> Como Fidelizar Clientes</a></li>
            <li><a href="/pt-BR/como-montar-salao-beleza/" class="page-link"><span class="icon">✓</span> Como Montar Salão</a></li>
            <li><a href="/pt-BR/como-atrair-clientes-salao-beleza/" class="page-link"><span class="icon">✓</span> Atrair Clientes Salão</a></li>
            <li><a href="/pt-BR/como-comecar-negocio-online/" class="page-link"><span class="icon">✓</span> Começar Negócio Online</a></li>
          </ul>
        </div>

        <!-- Guias de Preços -->
        <div class="neumorphic category-card">
          <h3 class="category-title">💰 Guias de Preços</h3>
          <ul class="page-list">
            <li><a href="/pt-BR/quanto-custa-abrir-salao-beleza/" class="page-link"><span class="icon">✓</span> Quanto Custa Abrir Salão</a></li>
            <li><a href="/pt-BR/quanto-custa-app-barbearia/" class="page-link"><span class="icon">✓</span> Quanto Custa App</a></li>
            <li><a href="/pt-BR/quanto-cobrar-corte-cabelo/" class="page-link"><span class="icon">✓</span> Quanto Cobrar Corte</a></li>
            <li><a href="/pt-BR/preco-sistema-agendamento-online/" class="page-link"><span class="icon">✓</span> Preço Sistema Online</a></li>
            <li><a href="/pt-BR/quanto-custa-site-barbearia/" class="page-link"><span class="icon">✓</span> Quanto Custa Site</a></li>
          </ul>
        </div>

        <!-- Ver mais páginas em português... -->
        <div class="neumorphic category-card" style="text-align: center; display: flex; align-items: center; justify-content: center;">
          <div>
            <h3 class="category-title">➕ E muito mais...</h3>
            <p style="color: #666; margin-bottom: 1rem;">Explore 148 recursos completos em português</p>
            <a href="/pt-BR/" class="btn btn-primary">Ver Tudo em Português</a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <div class="cta-section">
      <h2>Ready to Transform Your Business?</h2>
      <p style="margin-bottom: 2rem; font-size: 1.25rem;">Join thousands of professionals using Converso to manage their business</p>
      <a href="https://app.converso.pro/auth" class="btn" style="background: white; color: #333; padding: 1rem 2.5rem; font-size: 1.125rem;">
        Start Free Trial - No Credit Card Required
      </a>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 Converso.pro Library. Part of <a href="https://converso.pro" style="color: #3b82f6;">converso.pro</a></p>
    <p style="margin-top: 1rem; color: #9ca3af;">297 resources and growing | Updated daily</p>
  </footer>

  <script>
    // Simple search functionality
    document.getElementById('searchInput').addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase();
      const allLinks = document.querySelectorAll('.page-link');
      
      allLinks.forEach(link => {
        const text = link.textContent.toLowerCase();
        const listItem = link.parentElement;
        
        if (text.includes(searchTerm)) {
          listItem.style.display = 'block';
        } else {
          listItem.style.display = 'none';
        }
      });
      
      // Show/hide category cards if empty
      document.querySelectorAll('.category-card').forEach(card => {
        const visibleItems = card.querySelectorAll('.page-list li[style="display: block;"], .page-list li:not([style])');
        if (visibleItems.length === 0 && !card.querySelector('.btn-primary')) {
          card.style.display = 'none';
        } else {
          card.style.display = 'block';
        }
      });
    });
  </script>
</body>
</html>`;

// Write the custom index.html to output directory
const outputPath = path.join(__dirname, 'output', 'index.html');
fs.writeFileSync(outputPath, customIndexHTML);

console.log('✓ Custom index.html copied to output directory');

// Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://seo.converso.pro/sitemap.xml`;

fs.writeFileSync(path.join(__dirname, 'output', 'robots.txt'), robotsTxt);
console.log('✓ robots.txt created');

// Create sitemap.xml
const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Priority 1.0: Homepage -->
  <url>
    <loc>https://seo.converso.pro/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Priority 0.9: Main language indexes -->
  <url>
    <loc>https://seo.converso.pro/es/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Priority 0.8: Feature pages -->
  <url>
    <loc>https://seo.converso.pro/about/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/apps/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/apps/e-commerce/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/compare/converso-vs-acuity/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/compare/converso-vs-calendly/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/compare/converso-vs-square/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/privacy/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/terms/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/use-cases/barber/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/use-cases/medical-clinic-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/use-cases/personal-trainer-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/use-cases/therapist-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/about/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/apps/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/comparar/converso-vs-acuity/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/comparar/converso-vs-calendly/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/comparar/converso-vs-square/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/privacy/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/terms/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/casos-de-uso/barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/casos-de-uso/citas-medicas-clinica/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/casos-de-uso/personal-trainer-citas/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/casos-de-uso/terapeuta-citas/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/about/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/comparar/converso-vs-acuity/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/comparar/converso-vs-calendly/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/comparar/converso-vs-square/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/privacy/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/terms/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/use-cases/barber/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/use-cases/medical-clinic-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/use-cases/personal-trainer-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/use-cases/therapist-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Priority 0.7: All other content pages -->
  <url>
    <loc>https://seo.converso.pro/calendly-alternatives/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/barbershop-booking-henderson/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/barbershop-guide-henderson-nv/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/best-barbershop-software-henderson/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/barbershop-management-system/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/barbershop-online-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/barbershop-booking-software/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/best-booking-system-for-hair-salons/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/digital-queue-barbershop/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/digital-marketing-barbershop/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/best-barber-app-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/free-barber-app-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/open-barbershop-guide/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Adding all Spanish pages with priority 0.7 -->
  <url>
    <loc>https://seo.converso.pro/es/alternativas-calendly/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/app-gratis-barberia-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/barbershop-booking-henderson/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/barbershop-guide-henderson-nv/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/barbershop-management-system/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/barbershop-online-booking/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/best-barber-app-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/best-barbershop-software-henderson/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/best-booking-system-for-hair-salons/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/calendly-alternatives/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/agendamento-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/sistema-gestao-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/guia-abrir-barberia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/marketing-digital-barberia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/fila-digital-barberia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/uso-barberia-moderna/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/sistema-gestion-barberia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/melhor-aplicativo-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/mejor-app-barberia-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/mejor-sistema-citas-salones/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/como-captar-clientes-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/como-fidelizar-clientes-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/como-administrar-dinheiro-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/como-montar-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/es/como-atrair-clientes-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Adding Portuguese pages with priority 0.7 -->
  <url>
    <loc>https://seo.converso.pro/pt-BR/agendamento-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/alternativas-calendly/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/app-gratis-barberia-clark-county/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/melhor-plataforma-ecommerce/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/sistema-gestao-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/guia-abrir-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/marketing-digital-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/fila-digital-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-captar-clientes-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-fidelizar-clientes-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-montar-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-atrair-clientes-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-comecar-negocio-online/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-abrir-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-app-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-cobrar-corte-cabelo/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/preco-sistema-agendamento-online/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-site-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/melhor-aplicativo-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/melhor-aplicativo-agendamento/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/melhor-programa-gratuito-cadastro-clientes/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/melhor-sistema-agendamento-saloes/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/fresha-gratuita/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/shopify-gratuita/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-paga-mes-shopify/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-criar-site-shopify/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-manter-site/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-criar-loja-pouco-dinheiro/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-abrir-loja/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/o-que-necessario-loja-online/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-ser-revendedor-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-iphone-revender/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/onde-achar-fornecedores-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/margem-lucro-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-ganha-revendedor-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-ganha-tecnico-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-cobrar-restaurar-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-reparo-placa-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-curso-manutencao-iphone/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/sistema-gestao-loja-celular/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/ordem-servico-assistencia-tecnica-celular/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/guia-completo-revenda-celulares/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/uso-revendedor-celulares/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-curso-cabeleireiro/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-comecar-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-ter-sucesso-cabeleireira/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-ganhar-dinheiro-cabeleireira/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-comecar-salao-beleza-pequeno/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/qual-area-beleza-da-mais-lucro/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/o-que-nao-pode-faltar-salao-beleza/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/mercado-beleza-estetica-brasil/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/uso-barbearia-moderna/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/modern-barbershop-use-case/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/como-administrar-dinheiro-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/quanto-custa-site-barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/barbearia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/barberia/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/clinica-medica/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/citas-medicas-clinica/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/personal-trainer/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/personal-trainer-citas/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/terapeutas/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://seo.converso.pro/pt-BR/casos-de-uso/terapeuta-citas/</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'output', 'sitemap.xml'), sitemapXML);
console.log('✓ sitemap.xml created with 297 URLs');

// Copy styles.css to output directory
const stylesPath = path.join(__dirname, 'static', 'styles.css');
const outputStylesPath = path.join(__dirname, 'output', 'styles.css');

if (fs.existsSync(stylesPath)) {
  fs.copyFileSync(stylesPath, outputStylesPath);
  console.log('✓ styles.css copied to output directory');
} else {
  console.error('⚠️  Warning: styles.css not found in static directory');
}

// Restore custom pages
const { restoreCustomPages } = require('./preserve-custom-pages');
console.log('Post-build: Restoring custom pages...');
restoreCustomPages();
console.log('✓ Custom pages restored');