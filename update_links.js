const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

html = html.replaceAll('href="#" target="_blank"', 'href="https://cal.com/rishikesh-sharma/30min" target="_blank"');

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
