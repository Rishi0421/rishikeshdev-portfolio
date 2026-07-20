const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

// 19 -> 23
html = html.replace('data-number-count="19"', 'data-number-count="23"');
html = html.replace('>19</span>', '>23</span>');
html = html.replace('<div>2019</div>', '<div>2023</div>');

// 20 -> 24
html = html.replace('data-number-count="20"', 'data-number-count="24"');
html = html.replace('>20</span>', '>24</span>');
html = html.replace('<div>2020</div>', '<div>2024</div>');

// 21 -> 25
html = html.replace('data-number-count="21"', 'data-number-count="25"');
html = html.replace('>21</span>', '>25</span>');
html = html.replace('<div>2021</div>', '<div>2025</div>');

// 22 -> 26
html = html.replace('data-number-count="22"', 'data-number-count="26"');
html = html.replace('>22</span>', '>26</span>');
html = html.replace('<div>2022</div>', '<div>2026</div>');

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
