#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const bibliotecaPath = path.join(__dirname, 'deploy-output/biblioteca/index.html');
const libraryPath = path.join(__dirname, 'deploy-output/library/index.html');

console.log('🔧 Creating complete biblioteca/index.html...\n');

// Read the library template
const libraryContent = fs.readFileSync(libraryPath, 'utf-8');

// Create the Portuguese version based on library template
const portugueseContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Biblioteca GoCONVERSO - Recursos Completos para Profissionais e Desenvolvedores</title>
    
    <!-- Language Detection and Redirect -->
    <script>
        (function() {
            // Auto detect and redirect based on browser language
            if (!localStorage.getItem('converso-library-lang')) {
                const browserLang = navigator.language || navigator.userLanguage;
                const lang = browserLang.toLowerCase();
                
                if (lang.startsWith('en')) {
                    window.location.replace('/library/');
                } else if (lang.startsWith('es')) {
                    window.location.replace('/libreria/');
                }
            }
            localStorage.setItem('converso-library-lang', 'pt');
        })();
    </script>
    
    <meta name="description" content="Biblioteca completa com mais de 90 guias especializados: Desenvolvedores, Crescimento de Negócios, Marketing Digital, E-commerce e Sistemas de Agendamento. Recursos gratuitos em 3 idiomas.">
    
    <!-- Open Graph -->
    <meta property="og:title" content="Biblioteca GoCONVERSO - Recursos para Desenvolvedores e Profissionais">
    <meta property="og:description" content="Guias completos para desenvolvedores, barbearias, salões de beleza, clínicas e profissionais de serviços.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://goconverso.com/biblioteca/">
    <meta property="og:image" content="https://converso.pro/converso-og.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Biblioteca GoCONVERSO">
    <meta name="twitter:description" content="Recursos gratuitos para desenvolvedores e profissionais de serviços">
    
    <link rel="canonical" href="https://goconverso.com/biblioteca/">
    <link rel="icon" href="https://converso.pro/favicon.ico">
    
    <!-- Facebook Pixel Code -->
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
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=1697178904498506&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
    
    ${libraryContent.match(/<style>[\s\S]*?<\/style>/)[0]}
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <a href="/" class="logo">
                    Go<span class="logo-accent">CONVERSO</span>
                </a>
                <nav class="nav">
                    <!-- Language Selector -->
                    <div class="language-selector">
                        <button class="language-btn" onclick="toggleLanguageMenu()">
                            <span class="flag">🇧🇷</span>
                            <span class="lang-text">PT</span>
                            <svg class="chevron" width="12" height="12" viewBox="0 0 12 12">
                                <path d="M3 5L6 8L9 5" stroke="currentColor" stroke-width="2" fill="none"/>
                            </svg>
                        </button>
                        <div class="language-menu" id="languageMenu">
                            <a href="/library/" class="language-option">
                                <span class="flag">🇺🇸</span>
                                <span>English</span>
                            </a>
                            <a href="/libreria/" class="language-option">
                                <span class="flag">🇪🇸</span>
                                <span>Español</span>
                            </a>
                        </div>
                    </div>
                    <a href="https://goconverso.com" class="neumorphic-button" style="padding: 0.5rem 1.5rem; font-size: 0.9rem;">Site Principal</a>
                    <a href="https://app.converso.pro/auth" class="neumorphic-button">Começar Grátis</a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1 class="hero-title">
                Biblioteca Completa de Recursos<br>
                <span class="text-gradient">para Desenvolvedores e Profissionais</span>
            </h1>
            <p class="hero-subtitle">
                Acesse <span class="text-gradient">250+ guias</span>, tutoriais, comparações e estratégias comprovadas para crescer seu negócio de serviços.
            </p>
            
            <!-- Quick Stats -->
            <div class="stats">
                <div class="stat-card">
                    <div class="stat-number">250+</div>
                    <div class="stat-label">Guias</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Tutoriais</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">30+</div>
                    <div class="stat-label">Comparações</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">20+</div>
                    <div class="stat-label">Casos de Sucesso</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories">
        <div class="container">
            <h2 class="section-title">Recursos em Destaque</h2>
            
            <div class="category-grid">
                <!-- Barbearias -->
                <div class="category-card">
                    <div class="category-icon">💈</div>
                    <h3 class="category-title">Barbearias <span style="font-size: 0.8rem; opacity: 0.7;">(33 recursos)</span></h3>
                    <p class="category-description">
                        Sistemas de gestão, agendamento online, marketing e captação de clientes para barbearias.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/sistema-gestao-barbearia">Sistema de Gestão para Barbearia: Guia Completo</a></li>
                        <li><a href="/biblioteca/agendamento-online-barbearia">Agendamento Online para Barbearia</a></li>
                        <li><a href="/biblioteca/como-fidelizar-clientes-barbearia">Como Fidelizar Clientes da Barbearia</a></li>
                        <li><a href="/biblioteca/fila-digital-barberia">Fila Digital para Barbearia</a></li>
                    </ul>
                    <a href="/biblioteca/barbearias/" class="category-link">Ver todos →</a>
                </div>

                <!-- Salões de Beleza -->
                <div class="category-card">
                    <div class="category-icon">💇‍♀️</div>
                    <h3 class="category-title">Salões de Beleza <span style="font-size: 0.8rem; opacity: 0.7;">(12 recursos)</span></h3>
                    <p class="category-description">
                        Como montar, gerenciar e atrair clientes para seu salão de beleza.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/melhor-sistema-agendamento-saloes">Melhor Sistema de Agendamento para Salões</a></li>
                        <li><a href="/biblioteca/como-atrair-clientes-salao-beleza">Como Atrair Clientes para Salão de Beleza</a></li>
                        <li><a href="/biblioteca/como-montar-salao-beleza">Como Montar Salão de Beleza</a></li>
                    </ul>
                    <a href="/biblioteca/saloes-beleza/" class="category-link">Ver todos →</a>
                </div>

                <!-- Celulares & Tech -->
                <div class="category-card">
                    <div class="category-icon">📱</div>
                    <h3 class="category-title">Celulares & Tech <span style="font-size: 0.8rem; opacity: 0.7;">(13 recursos)</span></h3>
                    <p class="category-description">
                        Assistência técnica, revenda de iPhones e gestão de lojas de celular.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/sistema-gestao-ordens-servico-lojas-celular">Sistema de Ordem de Serviço</a></li>
                        <li><a href="/biblioteca/como-ser-revendedor-iphones-2025">Como Ser Revendedor de iPhone</a></li>
                        <li><a href="/biblioteca/quanto-ganha-tecnico-iphones">Quanto Ganha Técnico de iPhone</a></li>
                    </ul>
                    <a href="/biblioteca/assistencia-tecnica/" class="category-link">Ver todos →</a>
                </div>

                <!-- E-commerce -->
                <div class="category-card">
                    <div class="category-icon">🛍️</div>
                    <h3 class="category-title">E-commerce <span style="font-size: 0.8rem; opacity: 0.7;">(8 recursos)</span></h3>
                    <p class="category-description">
                        Como criar loja online, vender sem estoque e comparação de plataformas.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/como-criar-loja-online-pouco-dinheiro">Como Criar Loja com Pouco Dinheiro</a></li>
                        <li><a href="/biblioteca/qual-melhor-plataforma-ecommerce-gratuita">Melhor Plataforma E-commerce Gratuita</a></li>
                        <li><a href="/biblioteca/como-comecar-vender-online-sem-estoque">Vender Online Sem Estoque</a></li>
                    </ul>
                    <a href="/biblioteca/ecommerce/" class="category-link">Ver todos →</a>
                </div>

                <!-- Comparações -->
                <div class="category-card">
                    <div class="category-icon">⚖️</div>
                    <h3 class="category-title">Comparações <span style="font-size: 0.8rem; opacity: 0.7;">(8 recursos)</span></h3>
                    <p class="category-description">
                        Compare Converso com outras plataformas e descubra as diferenças.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/converso-vs-calendly">Converso vs Calendly</a></li>
                        <li><a href="/biblioteca/alternativas-ao-calendly">Alternativas ao Calendly</a></li>
                    </ul>
                </div>

                <!-- Outros -->
                <div class="category-card">
                    <div class="category-icon">📚</div>
                    <h3 class="category-title">Outros <span style="font-size: 0.8rem; opacity: 0.7;">(14 recursos)</span></h3>
                    <p class="category-description">
                        Sistemas de agendamento, cadastro de clientes e mais recursos.
                    </p>
                    <ul class="article-list">
                        <li><a href="/biblioteca/melhor-sistema-agendamento-online">Melhor Sistema de Agendamento</a></li>
                        <li><a href="/biblioteca/sistema-agendamento-gratis">Sistema de Agendamento Grátis</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
        <div class="container">
            <div class="cta-content">
                <h2>Comece Seu Teste Grátis Hoje</h2>
                <p>Junte-se a 10.000+ profissionais transformando seus negócios com Converso</p>
                <div class="cta-buttons">
                    <a href="https://app.converso.pro/auth" class="btn btn-primary btn-large">
                        Começar Teste Grátis
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-bottom">
                <p>&copy; 2025 Converso. Todos os direitos reservados.</p>
            </div>
        </div>
    </footer>
    
    <!-- Language Selector JavaScript -->
    <script>
        function toggleLanguageMenu() {
            const menu = document.getElementById('languageMenu');
            const btn = document.querySelector('.language-btn');
            
            menu.classList.toggle('active');
            btn.classList.toggle('active');
            
            // Close menu when clicking outside
            document.addEventListener('click', function closeMenu(e) {
                if (!e.target.closest('.language-selector')) {
                    menu.classList.remove('active');
                    btn.classList.remove('active');
                    document.removeEventListener('click', closeMenu);
                }
            });
        }
        
        // Language switcher
        function switchLanguage(value) {
            if (value === 'en') {
                window.location.href = '/library/';
            } else if (value === 'es') {
                window.location.href = '/libreria/';
            }
        }
        
        // Add click handlers to language options
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.language-option').forEach(function(link) {
                link.addEventListener('click', function(e) {
                    // Clear saved language preference when user manually changes language
                    localStorage.removeItem('converso-library-lang');
                });
            });
        });
    </script>
</body>
</html>`;

// Write the new content
fs.writeFileSync(bibliotecaPath, portugueseContent);

console.log('✅ Created new biblioteca/index.html successfully!');
console.log('📝 Features:');
console.log('  - GoCONVERSO branding');
console.log('  - All content in Portuguese');
console.log('  - Fixed links to /biblioteca/');
console.log('  - Language detection script');
console.log('  - Consistent with /library and /libreria templates');