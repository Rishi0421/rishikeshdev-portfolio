const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. Restore drag-wrap
html = html.replace('<div class="drag-wrap" style="display:none !important;">', '<div class="drag-wrap">');

// 2. Fix Mojibake in testimonials
html = html.replaceAll('Ã¢â‚¬â€', '—');
html = html.replaceAll('Ã¢â€šÂ¬Ã¢â€žÂ¢', '\'');
html = html.replaceAll('Ã¢â€šÂ¬Ã¢â‚¬Â ', '—');

// 3. Indianize Testimonial Names and Companies
html = html.replaceAll('Danette Beal', 'Aditi Sharma');
html = html.replaceAll('Alosant.com', 'TechVedas.in');
html = html.replaceAll('VP of Marketing Alosant', 'VP of Marketing TechVedas');

html = html.replaceAll('Petar Stojakovic', 'Rohan Desai');
html = html.replaceAll('fiftyseven.co', 'Studio57.in');

html = html.replaceAll('Klemen Vute', 'Karan Verma');
html = html.replaceAll('PM from Povio', 'PM from PeakScale');
html = html.replaceAll('Povio.com', 'PeakScale.in');

html = html.replaceAll('Johanna Dahlroos', 'Neha Kapoor');
html = html.replaceAll('Moat agency', 'Canvas Agency');
html = html.replaceAll('Moat Agency', 'Canvas Agency');

html = html.replaceAll('Marko Ivanovic', 'Sameer Patil');
html = html.replaceAll('Legacy Agency', 'Legacy Studio');

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
