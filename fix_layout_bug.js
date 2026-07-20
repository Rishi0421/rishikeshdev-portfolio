const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

const badCSS = `  /* Ensure badges and text stay above */
  .hero-content-layout, .hero-cards-wrap, .hero-heading, .hero-text-bottom {
    position: relative;
    z-index: 10;
  }`;

html = html.replace(badCSS, '');

fs.writeFileSync(path, html, 'utf8');
console.log('Fixed mobile CSS!');
