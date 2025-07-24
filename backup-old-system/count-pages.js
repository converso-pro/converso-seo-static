const { SEO_PAGES } = require('./seo-pages');
const { PAGE_CONTENTS } = require('./page-contents-complete');

console.log('=== SEO Pages Analysis ===\n');

// Count total pages
console.log(`Total pages in SEO_PAGES: ${SEO_PAGES.length}`);

// Count pages with content
const pagesWithContent = Object.keys(PAGE_CONTENTS);
console.log(`Pages with rich content: ${pagesWithContent.length}`);

// Find missing pages
const missingPages = SEO_PAGES.filter(page => !PAGE_CONTENTS[page.slug]);
console.log(`Pages MISSING content: ${missingPages.length}`);

console.log('\n=== Missing Pages List ===');
missingPages.forEach(page => {
  console.log(`- ${page.slug}`);
});

console.log('\n=== Pages WITH Content ===');
pagesWithContent.forEach(slug => {
  const languages = Object.keys(PAGE_CONTENTS[slug]);
  console.log(`- ${slug} (${languages.join(', ')})`);
});