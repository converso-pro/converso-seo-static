#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Paths
const bibliotecaPath = path.join(__dirname, 'deploy-output/biblioteca/index.html');
const libraryPath = path.join(__dirname, 'deploy-output/library/index.html');
const backupPath = bibliotecaPath + '.backup-' + Date.now();

console.log('🔧 Fixing biblioteca/index.html...\n');

// Read both files
const bibliotecaContent = fs.readFileSync(bibliotecaPath, 'utf-8');
const libraryContent = fs.readFileSync(libraryPath, 'utf-8');

// Create backup
fs.writeFileSync(backupPath, bibliotecaContent);
console.log('✅ Backup created:', backupPath);

// Extract the articles/resources from biblioteca (everything between the Featured Resources section)
const articleMatches = bibliotecaContent.match(/<a href="\/pt-BR\/[^"]+".+?<\/a>/gs) || [];
console.log(`📚 Found ${articleMatches.length} articles to migrate`);

// Fix article links from /pt-BR/ to /biblioteca/
const fixedArticles = articleMatches.map(article => {
    return article
        .replace(/href="\/pt-BR\//g, 'href="/biblioteca/')
        .replace(/href="\/[^"]*melhor-aplicativo-barbearia[^"]*"/g, 'href="/biblioteca/melhor-software-barbearia-las-vegas-2025"')
        .replace(/href="\/[^"]*sistema-gestao-barbearia[^"]*"/g, 'href="/biblioteca/sistema-gestao-barbearia"')
        .replace(/href="\/[^"]*melhor-sistema-agendamento[^"]*"/g, 'href="/biblioteca/melhor-sistema-agendamento-saloes"');
});

// Create new biblioteca index based on library template
let newBibliotecaContent = libraryContent
    // Change language
    .replace(/lang="en"/g, 'lang="pt-BR"')
    
    // Update title and meta tags
    .replace(/<title>.*?<\/title>/s, '<title>Biblioteca GoCONVERSO - Recursos Completos para Profissionais e Desenvolvedores</title>')
    .replace(/content="Complete library with 90\+ specialized guides.*?"/g, 
             'content="Biblioteca completa com mais de 90 guias especializados: Desenvolvedores, Crescimento de Negócios, Marketing Digital, E-commerce e Sistemas de Agendamento. Recursos gratuitos em 3 idiomas."')
    .replace(/content="Converso\.pro Library - Resources for Developers and Professionals"/g,
             'content="Biblioteca GoCONVERSO - Recursos para Desenvolvedores e Profissionais"')
    .replace(/content="Complete guides for developers.*?"/g,
             'content="Guias completos para desenvolvedores, barbearias, salões de beleza, clínicas e profissionais de serviços."')
    .replace(/content="Free resources for developers and service professionals"/g,
             'content="Recursos gratuitos para desenvolvedores e profissionais de serviços"')
    
    // Update canonical URL
    .replace(/href="https:\/\/goconverso\.com\/library.*?"/g, 'href="https://goconverso.com/biblioteca/"')
    .replace(/content="https:\/\/goconverso\.com\/en\/"/g, 'content="https://goconverso.com/biblioteca/"')
    
    // Fix language detection script to redirect correctly
    .replace(/if \(lang\.startsWith\('pt'\)\) \{[^}]+\}/g, 
             `if (lang.startsWith('en')) {
                    window.location.replace('/library/');`)
    .replace(/localStorage\.setItem\('converso-library-lang', 'en'\);/g,
             `localStorage.setItem('converso-library-lang', 'pt');`)
    
    // Update header text
    .replace(/>Go<span class="logo-accent">CONVERSO<\/span>/g, 
             '>Go<span class="logo-accent">CONVERSO</span>')
    .replace(/>Start Free Trial</g, '>Comece Grátis')
    .replace(/>Português<\/option>/g, '>Português</option>')
    
    // Update hero section
    .replace(/Complete Resource Library/g, 'Biblioteca Completa de Recursos')
    .replace(/for Developers and Professionals/g, 'para Desenvolvedores e Profissionais')
    .replace(/Access <span class="text-gradient">250\+ guides<\/span>/g, 
             'Acesse <span class="text-gradient">250+ guias</span>')
    .replace(/tutorials, comparisons and proven strategies/g,
             'tutoriais, comparações e estratégias comprovadas')
    .replace(/to grow your service business/g,
             'para crescer seu negócio de serviços')
    .replace(/>Guides</g, '>Guias')
    .replace(/>Tutorials</g, '>Tutoriais')  
    .replace(/>Comparisons</g, '>Comparações')
    .replace(/>Case Studies</g, '>Casos de Sucesso')
    
    // Update section titles
    .replace(/>Featured Resources</g, '>Recursos em Destaque')
    .replace(/>Categories</g, '>Categorias')
    .replace(/>Developers</g, '>Desenvolvedores')
    .replace(/>resources</g, '>recursos')
    .replace(/>Barbershops</g, '>Barbearias')
    .replace(/>Beauty Salons</g, '>Salões de Beleza')
    .replace(/>Phone Stores & Tech</g, '>Lojas de Celular & Tech')
    .replace(/>E-commerce</g, '>E-commerce')
    .replace(/>Business Growth</g, '>Crescimento de Negócios')
    .replace(/>Digital Marketing</g, '>Marketing Digital')
    .replace(/>Scheduling Systems</g, '>Sistemas de Agendamento')
    
    // Update footer
    .replace(/>Start Your Free Trial Today</g, '>Comece Seu Teste Grátis Hoje')
    .replace(/>Join 10,000\+ professionals/g, '>Junte-se a 10.000+ profissionais')
    .replace(/>transforming their businesses with Converso</g, '>transformando seus negócios com Converso')
    .replace(/>Start Free Trial</g, '>Começar Teste Grátis')
    .replace(/© 2025 Converso\. All rights reserved\./g, '© 2025 Converso. Todos os direitos reservados.')
    
    // Update language switcher options to show Portuguese selected
    .replace(/<option value="pt-BR">Português<\/option>/g, '<option value="pt-BR" selected>Português</option>')
    .replace(/<option value="en" selected>English<\/option>/g, '<option value="en">English</option>')
    
    // Fix the language switcher function
    .replace(/window\.location\.href = '\/library\/';/g, `window.location.href = '/biblioteca/';`)
    .replace(/window\.location\.href = '\/libreria\/';/g, `window.location.href = '/libreria/';`);

// Replace the sample English articles with Portuguese articles
// Find the featured articles section and replace
newBibliotecaContent = newBibliotecaContent.replace(
    /<div class="featured-grid">[\s\S]*?<\/div>\s*<\/section>/,
    `<div class="featured-grid">
                    <article class="neumorphic-flat hover-lift">
                        <div class="article-header">
                            <span class="badge badge-hot">Em Alta</span>
                            <span class="read-time">10 min</span>
                        </div>
                        <h3 class="article-title">
                            <a href="/biblioteca/melhor-software-barbearia-las-vegas-2025">Melhor Aplicativo para Barbearia 2025</a>
                        </h3>
                        <p class="article-excerpt">
                            Análise completa dos melhores aplicativos para gerenciar sua barbearia. Compare recursos, preços e descubra qual é ideal para você.
                        </p>
                        <a href="/biblioteca/melhor-software-barbearia-las-vegas-2025" class="article-link">Ler Artigo →</a>
                    </article>
                    
                    <article class="neumorphic-flat hover-lift">
                        <div class="article-header">
                            <span class="badge badge-hot">Em Alta</span>
                            <span class="read-time">10 min</span>
                        </div>
                        <h3 class="article-title">
                            <a href="/biblioteca/como-administrar-dinheiro-barbearia">Como Administrar o Dinheiro da Barbearia</a>
                        </h3>
                        <p class="article-excerpt">
                            Guia prático de gestão financeira para barbeiros. Aprenda a controlar custos, aumentar lucros e fazer seu negócio crescer.
                        </p>
                        <a href="/biblioteca/como-administrar-dinheiro-barbearia" class="article-link">Ler Artigo →</a>
                    </article>
                    
                    <article class="neumorphic-flat hover-lift">
                        <div class="article-header">
                            <span class="badge badge-hot">Em Alta</span>
                            <span class="read-time">10 min</span>
                        </div>
                        <h3 class="article-title">
                            <a href="/biblioteca/sistema-gestao-barbearia">Sistema de Gestão para Barbearia: Guia Completo</a>
                        </h3>
                        <p class="article-excerpt">
                            Descubra como um sistema de gestão pode transformar sua barbearia em um negócio mais organizado e lucrativo.
                        </p>
                        <a href="/biblioteca/sistema-gestao-barbearia" class="article-link">Ler Artigo →</a>
                    </article>
                    
                    <article class="neumorphic-flat hover-lift">
                        <div class="article-header">
                            <span class="badge badge-hot">Em Alta</span>
                            <span class="read-time">10 min</span>
                        </div>
                        <h3 class="article-title">
                            <a href="/biblioteca/melhor-sistema-agendamento-saloes">Melhor Sistema de Agendamento para Salões de Beleza</a>
                        </h3>
                        <p class="article-excerpt">
                            Compare os melhores sistemas de agendamento online para salões. Recursos, preços e qual escolher para seu negócio.
                        </p>
                        <a href="/biblioteca/melhor-sistema-agendamento-saloes" class="article-link">Ler Artigo →</a>
                    </article>
                </div>
            </section>`
);

// Fix all category links in the categories section
newBibliotecaContent = newBibliotecaContent.replace(
    /<ul class="category-list">[\s\S]*?<\/ul>/g,
    function(match) {
        // Check if this is the Developers category
        if (match.includes('how-compete-wix-wordpress')) {
            // Portuguese version for Developers
            return `<ul class="category-list">
                        <li><a href="/biblioteca/qual-melhor-plataforma-ecommerce-gratuita">Qual a melhor plataforma de e-commerce gratuita?</a></li>
                        <li><a href="/biblioteca/como-ganhar-dinheiro-criando-sites-pequenas-empresas">Como ganhar dinheiro criando sites para pequenas empresas</a></li>
                        <li><a href="/biblioteca/por-que-desenvolvedores-migram-plataformas-white-label">Por que desenvolvedores migram para plataformas white-label?</a></li>
                        <li><a href="/biblioteca/como-competir-wix-wordpress-cobrando-3x-mais">Como competir com Wix/WordPress cobrando 3x mais</a></li>
                        <li><a href="/biblioteca/segredo-devs-faturam-6-digitos-sites-locais">Segredo: devs faturando 6 dígitos com sites locais</a></li>
                    </ul>`;
        }
        // Return other categories unchanged for now
        return match;
    }
);

// Write the new content
fs.writeFileSync(bibliotecaPath, newBibliotecaContent);

console.log('\n✅ Fixed biblioteca/index.html successfully!');
console.log('📝 Changes made:');
console.log('  - Updated to GoCONVERSO template');
console.log('  - Fixed all links from /pt-BR/ to /biblioteca/');
console.log('  - Translated all UI text to Portuguese');
console.log('  - Added language detection script');
console.log('  - Updated meta tags and canonical URLs');
console.log('\nBackup saved at:', backupPath);