const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. Update Title
html = html.replace(/<title>.*?<\/title>/g, '<title>Rishikesh portfolio</title>');

// 2. Update Favicon and Apple Touch Icon
const newFavicon = 'https://ui-avatars.com/api/?name=R&background=FFFF23&color=000&size=256&font-size=0.65&bold=true';
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69839f2955d4ddfd746742eb_favicon.png', newFavicon);
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69839ce86f570a04cf39e5db_webclip.png', newFavicon);

// 3. Update Social Links & Replace X Icon with Instagram
// X link -> Instagram
html = html.replace(/href="[^"]*"([^>]*aria-label="x")/g, 'href="https://www.instagram.com/webscape_lobby/"$1');

// Replace the X paths with Instagram SVG paths. 
// We know the X svg has this specific path: M5.86448 3.09766H3.13116L6.30703 7.60993...
const xPath = '<path fill-rule="evenodd" clip-rule="evenodd" d="M5.86448 3.09766H3.13116L6.30703 7.60993L3.10156 11.3622H3.96245L6.69578 8.16211L8.94822 11.3622H11.6809L8.19427 6.40805L11.0218 3.09766H10.1609L7.80552 5.85587L5.86448 3.09766ZM4.44939 3.78637L9.30737 10.6735H10.3626L5.50466 3.78637H4.44939Z" fill="currentColor" class="social-path-white"></path>';
const instagramPaths = `<path d="M5.5 3H9.5C10.8807 3 12 4.11929 12 5.5V9.5C12 10.8807 10.8807 12 9.5 12H5.5C4.11929 12 3 10.8807 3 9.5V5.5C3 4.11929 4.11929 3 5.5 3ZM5.5 4C4.67157 4 4 4.67157 4 5.5V9.5C4 10.3284 4.67157 11 5.5 11H9.5C10.3284 11 11 10.3284 11 9.5V5.5C11 4.67157 10.3284 4 9.5 4H5.5Z" fill="currentColor" class="social-path-white"></path>
<path d="M7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5ZM6.5 7.5C6.5 6.94772 6.94772 6.5 7.5 6.5C8.05228 6.5 8.5 6.94772 8.5 7.5C8.5 8.05228 8.05228 8.5 7.5 8.5C6.94772 8.5 6.5 8.05228 6.5 7.5Z" fill="currentColor" class="social-path-white"></path>
<circle cx="9.8" cy="5.2" r="0.75" fill="currentColor" class="social-path-white"></circle>`;

html = html.replace(xPath, instagramPaths);

// LinkedIn link
html = html.replace(/href="[^"]*"([^>]*aria-label="linkedin")/g, 'href="https://www.linkedin.com/in/rishikesh-sharma-a8b842287/"$1');

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
