const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

// 1. Change Testimonial Images to ui-avatars
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da98bd68220e4f1d95_Danette%20Beal.avif', 'https://ui-avatars.com/api/?name=Aditi+Sharma&background=random&size=150');
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6985e810b5401268eec901f2_petar_s.jpeg', 'https://ui-avatars.com/api/?name=Rohan+Desai&background=random&size=150');
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da275434728f43945b_Klemen%20Vute.avif', 'https://ui-avatars.com/api/?name=Karan+Verma&background=random&size=150');
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/6942a06175766f34258d7ba2_testimonial.avif', 'https://ui-avatars.com/api/?name=Neha+Kapoor&background=random&size=150');
html = html.replace('https://cdn.prod.website-files.com/691d7c9f14d0280ebe2d4108/694ea7da5c13ee5098356e14_Marko%20Ivanvoic.avif', 'https://ui-avatars.com/api/?name=Sameer+Patil&background=random&size=150');
// Also remove srcset for Petar so it doesn't override the src
html = html.replace(/srcset="[^"]*petar_s[^"]*"/g, '');

// 2. Journey texts
html = html.replace('7years ago</p>', '3years ago</p>');
html = html.replace('6years ago</p>', '2years ago</p>');
html = html.replace('5years ago</p>', '1years ago</p>');
html = html.replace('4years ago</p>', 'Present</p>');

// Also update the big text in the hero section if there is "Seven years ago"
html = html.replace('Seven years ago I started coding', 'Four years ago I started coding');

// 3. Hide cards ac-5, ac-6, ac-7
html = html.replace(/id="ac-5"(.*?)class="about-card-wrap ac-5"/g, 'id="ac-5"$1class="about-card-wrap ac-5" style="display:none !important;"');
html = html.replace(/id="ac-6"(.*?)class="about-card-wrap ac-6"/g, 'id="ac-6"$1class="about-card-wrap ac-6" style="display:none !important;"');
html = html.replace(/id="ac-7"(.*?)class="about-card-wrap ac-7"/g, 'id="ac-7"$1class="about-card-wrap ac-7" style="display:none !important;"');

// 4. Reduce delays in the about cards to make animation snappier
// The delays are in data-tl-to and data-tl-from attributes inside the about-wrap.
// We'll just extract the about-wrap and replace delays inside it.
let aboutWrapMatch = html.match(/<div class="about-wrap">([\s\S]*?)<div class="popup-wrap">/);
if (aboutWrapMatch) {
    let aboutWrap = aboutWrapMatch[1];
    
    // Reduce delays
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.8', '&#x27;delay&#x27;: 0.1');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.6', '&#x27;delay&#x27;: 0.1');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.55', '&#x27;delay&#x27;: 0.1');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.45', '&#x27;delay&#x27;: 0.05');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.4', '&#x27;delay&#x27;: 0.05');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.3', '&#x27;delay&#x27;: 0.0');
    aboutWrap = aboutWrap.replaceAll('&#x27;delay&#x27;: 0.2', '&#x27;delay&#x27;: 0.0');
    
    // Also speed up durations slightly
    aboutWrap = aboutWrap.replaceAll('&#x27;duration&#x27;: 1.4', '&#x27;duration&#x27;: 0.8');
    aboutWrap = aboutWrap.replaceAll('&#x27;duration&#x27;: 1.5', '&#x27;duration&#x27;: 0.8');
    aboutWrap = aboutWrap.replaceAll('&#x27;duration&#x27;: 1.1', '&#x27;duration&#x27;: 0.6');
    aboutWrap = aboutWrap.replaceAll('&#x27;duration&#x27;: 0.6', '&#x27;duration&#x27;: 0.4');

    html = html.replace(aboutWrapMatch[1], aboutWrap);
}

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
