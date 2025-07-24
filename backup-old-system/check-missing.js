const { SEO_PAGES } = require('./seo-pages'); 
const { PAGE_CONTENTS } = require('./page-contents-complete'); 

const ptBrPages = SEO_PAGES.filter(p => p.languages.includes('pt-BR')).map(p => p.slug);
const missingContent = ptBrPages.filter(slug => !PAGE_CONTENTS[slug] || !PAGE_CONTENTS[slug]['pt-BR']);

console.log('Total PT-BR pages in SEO_PAGES:', ptBrPages.length);
console.log('\nPages WITHOUT rich content (will show fallback):');
missingContent.slice(0, 30).forEach(slug => console.log('- ' + slug));
console.log(`\nTotal missing: ${missingContent.length}`);

console.log('\nFirst 10 pages WITH rich content:');
Object.keys(PAGE_CONTENTS).slice(0, 10).forEach(slug => console.log('- ' + slug));