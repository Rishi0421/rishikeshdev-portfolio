const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. Replace Testimonial Avatars with real photos from randomuser.me
html = html.replace('https://ui-avatars.com/api/?name=Aditi+Sharma&background=random&size=150', 'https://randomuser.me/api/portraits/women/44.jpg');
html = html.replace('https://ui-avatars.com/api/?name=Rohan+Desai&background=random&size=150', 'https://randomuser.me/api/portraits/men/32.jpg');
html = html.replace('https://ui-avatars.com/api/?name=Karan+Verma&background=random&size=150', 'https://randomuser.me/api/portraits/men/43.jpg');
html = html.replace('https://ui-avatars.com/api/?name=Neha+Kapoor&background=random&size=150', 'https://randomuser.me/api/portraits/women/68.jpg');
html = html.replace('https://ui-avatars.com/api/?name=Sameer+Patil&background=random&size=150', 'https://randomuser.me/api/portraits/men/22.jpg');

// 2. Replace Favicon with the User's provided image
const oldFavicon = 'https://ui-avatars.com/api/?name=R&background=FFFF23&color=000&size=256&font-size=0.65&bold=true';
const newFavicon = 'https://res.cloudinary.com/dzc9q1ubw/image/upload/v1784554596/copy_of_gemini_generated_image_dq9z2ddq9z2ddq9z_yrsszy.png';

html = html.replaceAll(oldFavicon, newFavicon);

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
