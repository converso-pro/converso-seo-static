# Converso SEO Static Pages

Sistema simples de geração de páginas HTML estáticas para SEO do Converso.

## Estrutura

- `build.js` - Script principal que gera as páginas
- `templates/` - Templates HTML
- `static/` - Arquivos estáticos (CSS)
- `output/` - Páginas HTML geradas

## Comandos

```bash
# Instalar dependências
npm install

# Compilar CSS (Tailwind)
npm run build:css

# Gerar páginas HTML
npm run build

# Servir localmente para teste
npm run serve
```

## Deploy no Vercel

1. Fazer push do código para GitHub
2. Conectar repositório no Vercel
3. Configurar domínio `seo.converso.pro`
4. Deploy automático a cada push

## Adicionar Novas Páginas

1. Editar `seo-pages.js`
2. Adicionar nova página com template apropriado
3. Rodar `npm run build`
4. Commit e push para deploy automático

## Templates Disponíveis

- `comparison` - Páginas de comparação (vs Calendly, etc)
- `use-case` - Casos de uso específicos
- `local` - SEO local (cidade + serviço)
- `apps-directory` - Listagem de apps
- `app-detail` - Detalhes de um app
- `blog-post` - Posts de blog
- `default` - Template genérico