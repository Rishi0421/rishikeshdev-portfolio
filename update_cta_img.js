const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

const oldUrl = 'https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/693fbb7c6a81b0964539f3bc_Frame%201321314730.avif';
const newUrl = 'https://res.cloudinary.com/dzc9q1ubw/image/upload/v1784554596/copy_of_gemini_generated_image_dq9z2ddq9z2ddq9z_yrsszy.png';

html = html.replaceAll(oldUrl, newUrl);

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
