#!/usr/bin/env python3
import re

def extract_header_section(html_content):
    """Extract header CSS and HTML from the Portuguese version"""
    # Extract CSS styles from <style> tags
    style_match = re.search(r'<!-- Universal Header Styles -->\s*<style>(.*?)</style>', html_content, re.DOTALL)
    header_css = style_match.group(1) if style_match else ""
    
    # Extract header HTML (from <!-- Universal Header --> to </header>)
    header_match = re.search(r'(<!-- Universal Header -->.*?</header>)', html_content, re.DOTALL)
    header_html = header_match.group(1) if header_match else ""
    
    # Extract script
    script_match = re.search(r'<script>\s*// Universal Header JavaScript(.*?)</script>', html_content, re.DOTALL)
    header_script = script_match.group(1) if script_match else ""
    
    return header_css, header_html, header_script

def update_english_version():
    # Read Portuguese version (template)
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/artigos/goconverso-e-confiavel.html', 'r', encoding='utf-8') as f:
        pt_content = f.read()
    
    # Extract header components
    header_css, header_html, header_script = extract_header_section(pt_content)
    
    # Adapt header for English
    english_header = header_html
    english_header = english_header.replace('data-lang="pt"', 'data-lang="en"')
    english_header = english_header.replace('Fila Digital', 'Digital Queue')
    english_header = english_header.replace('Gestão inteligente de filas', 'Smart queue management')
    english_header = english_header.replace('Recursos', 'Resources')
    english_header = english_header.replace('Aprenda e cresça', 'Learn and grow')
    english_header = english_header.replace('Novo', 'New')
    english_header = english_header.replace('Biblioteca', 'Library')
    english_header = english_header.replace('Artigos e guias', 'Articles and guides')
    english_header = english_header.replace('Preços', 'Pricing')
    english_header = english_header.replace('🇧🇷</span>\n              <span class="lang-name">Português', '🇺🇸</span>\n              <span class="lang-name">English')
    english_header = english_header.replace('Começar Grátis', 'Start Free')
    english_header = english_header.replace('>Login</a>', '>Login</a>')
    english_header = english_header.replace('mobile-btn-start">Começar Grátis', 'mobile-btn-start">Start Free')
    
    # Read current English version
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/articles/is-goconverso-reliable.html', 'r', encoding='utf-8') as f:
        en_content = f.read()
    
    # Replace the old header styles
    en_content = re.sub(r'/\* Universal Header Styles \*/.*?</style>', 
                        f'/* Universal Header Styles - Inline to avoid path issues */\n{header_css}\n    </style>', 
                        en_content, flags=re.DOTALL)
    
    # Replace the header HTML
    en_content = re.sub(r'<!-- Universal Header -->.*?</header>', 
                        english_header, 
                        en_content, flags=re.DOTALL)
    
    # Add the script after the header if not present
    if 'Universal Header JavaScript' not in en_content:
        en_content = en_content.replace('</header>', 
                                      f'</header>\n    \n    <script>\n    // Universal Header JavaScript{header_script}\n    </script>')
    
    # Write updated English version
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/articles/is-goconverso-reliable.html', 'w', encoding='utf-8') as f:
        f.write(en_content)
    
    print("✅ English version updated successfully!")

def update_spanish_version():
    # Read Portuguese version (template)
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/artigos/goconverso-e-confiavel.html', 'r', encoding='utf-8') as f:
        pt_content = f.read()
    
    # Extract header components
    header_css, header_html, header_script = extract_header_section(pt_content)
    
    # Adapt header for Spanish
    spanish_header = header_html
    spanish_header = spanish_header.replace('data-lang="pt"', 'data-lang="es"')
    spanish_header = spanish_header.replace('Fila Digital', 'Fila Digital')
    spanish_header = spanish_header.replace('Gestão inteligente de filas', 'Gestión inteligente de filas')
    spanish_header = spanish_header.replace('Recursos', 'Recursos')
    spanish_header = spanish_header.replace('Aprenda e cresça', 'Aprende y crece')
    spanish_header = spanish_header.replace('Novo', 'Nuevo')
    spanish_header = spanish_header.replace('biblioteca', 'libreria')
    spanish_header = spanish_header.replace('Biblioteca', 'Biblioteca')
    spanish_header = spanish_header.replace('Artigos e guias', 'Artículos y guías')
    spanish_header = spanish_header.replace('Preços', 'Precios')
    spanish_header = spanish_header.replace('🇧🇷</span>\n              <span class="lang-name">Português', '🇪🇸</span>\n              <span class="lang-name">Español')
    spanish_header = spanish_header.replace('Começar Grátis', 'Comenzar Gratis')
    spanish_header = spanish_header.replace('>Login</a>', '>Iniciar Sesión</a>')
    spanish_header = spanish_header.replace('mobile-btn-login">Login', 'mobile-btn-login">Iniciar Sesión')
    spanish_header = spanish_header.replace('mobile-btn-start">Começar Grátis', 'mobile-btn-start">Comenzar Gratis')
    spanish_header = spanish_header.replace('Templates', 'Plantillas')
    spanish_header = spanish_header.replace('Academy', 'Academia')
    
    # Read current Spanish version
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/articulos/goconverso-es-confiable.html', 'r', encoding='utf-8') as f:
        es_content = f.read()
    
    # Replace the old header styles
    es_content = re.sub(r'/\* Universal Header Styles \*/.*?</style>', 
                        f'/* Universal Header Styles - Inline to avoid path issues */\n{header_css}\n    </style>', 
                        es_content, flags=re.DOTALL)
    
    # Replace the header HTML
    es_content = re.sub(r'<!-- Universal Header -->.*?</header>', 
                        spanish_header, 
                        es_content, flags=re.DOTALL)
    
    # Add the script after the header if not present
    if 'Universal Header JavaScript' not in es_content:
        es_content = es_content.replace('</header>', 
                                       f'</header>\n    \n    <script>\n    // Universal Header JavaScript{header_script}\n    </script>')
    
    # Write updated Spanish version
    with open('/Users/junioresteves32/Desktop/claudemax200/conversov006/converso-seo-static/output/articulos/goconverso-es-confiable.html', 'w', encoding='utf-8') as f:
        f.write(es_content)
    
    print("✅ Spanish version updated successfully!")

if __name__ == "__main__":
    update_english_version()
    update_spanish_version()
    print("\n✨ All headers updated successfully!")