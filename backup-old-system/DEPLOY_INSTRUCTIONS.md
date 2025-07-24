# Instruções de Deploy - Converso SEO Static

## ✅ Status Atual

- **112 páginas HTML geradas** com design neumórfico
- **Todas as 5 URLs solicitadas** agora existem:
  - `/pt-BR/melhor-aplicativo-barbearia`
  - `/pt-BR/preco-sistema-agendamento-online` ✅ 
  - `/pt-BR/como-montar-salao-beleza` ✅
  - `/pt-BR/quanto-cobrar-corte-cabelo` ✅
  - `/pt-BR/mercado-beleza-estetica-brasil` ✅
- **Sitemap.xml** atualizado com 112 URLs
- **Código pronto** para deploy

## 🚀 Passos para Deploy no Vercel

### 1. Criar Repositório no GitHub

Como você não tem o GitHub CLI instalado, faça manualmente:

1. Acesse https://github.com/new
2. Nome do repositório: `converso-seo-static`
3. Descrição: "Static SEO pages for Converso platform"
4. Marque como **Public**
5. Clique em "Create repository"

### 2. Fazer Push do Código

No terminal, execute:

```bash
git remote add origin https://github.com/[SEU-USUARIO]/converso-seo-static.git
git branch -M main
git push -u origin main
```

Substitua `[SEU-USUARIO]` pelo seu usuário do GitHub.

### 3. Deploy no Vercel

1. Acesse https://vercel.com
2. Clique em "Add New Project"
3. Importe o repositório `converso-seo-static`
4. Configure:
   - Framework Preset: **Other**
   - Build Command: `npm run build && npm run build:css && cp static/styles.css output/`
   - Output Directory: `output`
   - Install Command: `npm install`

### 4. Configurar Domínio

1. Após o deploy, vá em "Settings" → "Domains"
2. Adicione: `seo.converso.pro`
3. Configure o DNS no seu provedor:
   - Tipo: CNAME
   - Nome: seo
   - Valor: cname.vercel-dns.com

## 📝 URLs para Testar

Após o deploy, teste estas URLs:

1. https://seo.converso.pro/pt-BR/melhor-aplicativo-barbearia
2. https://seo.converso.pro/pt-BR/preco-sistema-agendamento-online
3. https://seo.converso.pro/pt-BR/como-montar-salao-beleza
4. https://seo.converso.pro/pt-BR/quanto-cobrar-corte-cabelo
5. https://seo.converso.pro/pt-BR/mercado-beleza-estetica-brasil

## 🔧 Manutenção

Para adicionar novas páginas:

1. Edite `seo-pages.js`
2. Execute:
   ```bash
   npm run build
   node generate-sitemap.js
   git add -A
   git commit -m "Add new pages"
   git push
   ```
3. Vercel fará deploy automático

## ⚡ Características

- HTML estático puro (carregamento instantâneo)
- Design neumórfico idêntico ao Converso
- SEO otimizado com meta tags
- Sitemap automático
- 100% responsivo
- Deploy automático no push