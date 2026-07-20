const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replace('alt="My brother Stefan"', 'alt="Senior Developer"');
html = html.replace('alt="My Brother Stefan"', 'alt="Senior Developer"');
html = html.replace('@stefan', '@developer');
html = html.replace('My brother Stefan, a UX designer, showed me', 'A senior developer showed me');
html = html.replace('annoying my brother with questions later', 'annoying him with endless questions later');

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
