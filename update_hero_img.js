const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

const newImgUrl = 'https://res.cloudinary.com/dzc9q1ubw/image/upload/v1784554596/copy_of_gemini_generated_image_dq9z2ddq9z2ddq9z_yrsszy.png';

// 1. Desktop hero image
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6926f8e053a878c5f61cc622_nenad_edit-photo_final%201.avif', newImgUrl);

// Remove srcset for desktop hero image
html = html.replace(/srcset="[^"]*6926f8e053a878c5f61cc622_nenad_edit-photo_final[^"]*"/g, '');

// 2. Mobile hero image
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/69708b99545c57d03ebb5cd9_Frame%202147258154.avif', newImgUrl);

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
