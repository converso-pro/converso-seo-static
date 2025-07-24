# SEO.CONVERSO.PRO - Nova Estrutura Simples

## 🎯 Objetivo
Site estático simples para artigos SEO, sem necessidade de build process ou frameworks.

## 📁 Estrutura
```
output/
├── index.html              # Página principal da biblioteca
├── assets/
│   └── styles.css         # CSS compartilhado
├── robots.txt             # Instruções para bots
├── sitemap.xml            # Mapa do site
├── article-template.html  # Template para novos artigos
│
├── artigos/               # Artigos em português
│   ├── como-abrir-barbearia-guia-completo.html
│   ├── quanto-cobrar-corte-cabelo.html
│   └── [outros-artigos].html
│
├── articles/              # Artigos em inglês
│   └── [articles].html
│
└── articulos/             # Artigos em espanhol
    └── [articulos].html
```

## 🚀 Como Usar

### 1. Criar Novo Artigo
1. Copie o `article-template.html`
2. Renomeie para o slug do artigo (ex: `como-abrir-barbearia.html`)
3. Coloque na pasta apropriada (`artigos/`, `articles/`, ou `articulos/`)
4. Substitua todos os placeholders `[TEXTO]` com o conteúdo real
5. Salve o arquivo

### 2. Publicar
```bash
cd converso-seo-static
git add .
git commit -m "Adicionar artigo: [nome do artigo]"
git push
```

O deploy é automático via Vercel.

### 3. Atualizar Sitemap
Adicione a URL do novo artigo no `sitemap.xml`:
```xml
<url>
    <loc>https://seo.converso.pro/artigos/seu-novo-artigo.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
    <lastmod>2025-01-24</lastmod>
</url>
```

## 📝 Diretrizes de Conteúdo

### Títulos
- H1: Apenas um por página (título principal)
- H2: Seções principais
- H3: Subseções

### Meta Tags
- Title: Máximo 60 caracteres
- Description: Máximo 160 caracteres
- Sempre incluir palavras-chave relevantes

### URLs
- Use hífens para separar palavras
- Evite acentos e caracteres especiais
- Mantenha URLs curtas e descritivas

### Imagens
- Use alt text descritivo
- Otimize o tamanho (max 200KB)
- Prefira formatos WebP ou JPG otimizado

## 🔗 Links Importantes
- **Produção**: https://seo.converso.pro
- **App Principal**: https://app.converso.pro
- **Site Institucional**: https://converso.pro

## ⚠️ IMPORTANTE
- **NÃO USE** nenhum sistema de build
- **NÃO USE** frameworks JavaScript
- **EDITE** diretamente os arquivos HTML
- **COMMIT** direto na branch main para deploy automático

## 🎨 Customização CSS
O arquivo `/assets/styles.css` contém todos os estilos. Para adicionar novos estilos:
1. Edite o arquivo CSS diretamente
2. Use classes semânticas
3. Mantenha a consistência visual

## 📊 Analytics
Adicione o código do Google Analytics em cada página antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

**Criado em**: 24 de Janeiro de 2025  
**Mantido por**: Equipe Converso.pro