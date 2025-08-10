# Guia de Correções para Problemas de Indexação SEO

## 🚨 Problemas Identificados e Soluções

### 1. **Redirect Errors (converso.pro → seo.converso.pro)**

**Problema**: Google está tentando indexar páginas SEO em converso.pro ao invés de seo.converso.pro

**Solução**: 
- Adicione os redirecionamentos do arquivo `vercel-redirects-seo.json` ao seu `vercel.json` principal
- Atualize o `robots.txt` de converso.pro com o conteúdo de `robots-converso-pro.txt`

### 2. **Alternate page with proper canonical tag**

**Problema**: Páginas com canonical tags apontando para outras versões

**URLs afetadas**:
- www.converso.pro/* (devem ter canonical para converso.pro sem www)
- /demo/* páginas (conteúdo duplicado)
- /apps/* páginas individuais

**Soluções**:

#### A. Configurar redirecionamento www → non-www no Vercel:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "www.converso.pro"
        }
      ],
      "destination": "https://converso.pro/:path*",
      "permanent": true
    }
  ]
}
```

#### B. Para páginas /demo/* e /apps/*:
Adicione canonical tags corretas no código React:

```jsx
// Em cada página demo
<Helmet>
  <link rel="canonical" href="https://converso.pro/pricing" />
  <meta name="robots" content="noindex, follow" />
</Helmet>
```

### 3. **Crawled - currently not indexed**

**URLs problemáticas**:
- blog.converso.pro/sitemap.xml
- /template-preview/*
- /support, /template-showcase, /phone-sales

**Soluções**:

#### A. Para blog.converso.pro/sitemap.xml:
- Verifique se o sitemap está acessível
- Adicione ao robots.txt do blog: `Sitemap: https://blog.converso.pro/sitemap.xml`

#### B. Para páginas obsoletas/internas:
- Retorne status 410 (Gone) ou 404
- Ou redirecione para páginas relevantes:

```json
{
  "redirects": [
    {
      "source": "/support",
      "destination": "/contact",
      "permanent": true
    },
    {
      "source": "/template-showcase",
      "destination": "/",
      "permanent": true
    },
    {
      "source": "/phone-sales",
      "destination": "/pricing",
      "permanent": true
    }
  ]
}
```

## 📋 Ações Imediatas no Google Search Console

### 1. **Remover URLs temporariamente**:
- Vá em "Remoções" → "Nova solicitação"
- Adicione todas as URLs de converso.pro que deveriam estar em seo.converso.pro
- Adicione URLs obsoletas (/support, /template-showcase, etc.)

### 2. **Validar correções**:
- Após implementar redirecionamentos, use "Validar correção" no relatório de cobertura
- Solicite reindexação das páginas corrigidas

### 3. **Sitemaps**:
- Remova sitemaps antigos/incorretos
- Mantenha apenas:
  - https://converso.pro/sitemap.xml (para páginas principais)
  - https://seo.converso.pro/sitemap.xml (para conteúdo SEO)
  - https://blog.converso.pro/sitemap.xml (para blog)

## 🔧 Implementação Técnica

### 1. **No projeto principal (converso.pro)**:

Adicione ao `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/robots.txt", "destination": "/api/robots" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Robots-Tag",
          "value": "all"
        }
      ]
    }
  ]
}
```

### 2. **Canonical Tags no React**:

Para páginas com conteúdo duplicado:
```jsx
// Componente CanonicalTag
const CanonicalTag = ({ url }) => (
  <Helmet>
    <link rel="canonical" href={url} />
  </Helmet>
);

// Uso em páginas demo
<CanonicalTag url="https://converso.pro/pricing" />
```

### 3. **Meta robots para páginas não indexáveis**:

```jsx
// Para demos, previews, etc.
<Helmet>
  <meta name="robots" content="noindex, follow" />
</Helmet>
```

## 📊 Monitoramento

Após implementar:
1. Aguarde 1-2 semanas para o Google processar
2. Monitore o relatório de cobertura no Search Console
3. Verifique se os erros estão diminuindo
4. Use a ferramenta de inspeção de URL para testar páginas específicas

## ⚠️ Importante

- **NÃO delete** páginas sem configurar redirecionamentos apropriados
- **SEMPRE** use redirecionamentos 301 (permanent: true) para mudanças permanentes
- **TESTE** todos os redirecionamentos antes de ir para produção
- **MANTENHA** um registro de todos os redirecionamentos implementados