const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

const oldHeroCta = `<div class="hero-cta-button">
                                            <p class="button-text">Book a Call</p>
                                        </div>`;
const newHeroCta = `<a href="https://cal.com/rishikesh-sharma/30min" target="_blank" class="hero-cta-button w-inline-block" style="text-decoration: none;">
                                            <p class="button-text">Book a Call</p>
                                        </a>`;

html = html.replace(oldHeroCta, newHeroCta);

fs.writeFileSync(path, html, 'utf8');
console.log('Update complete!');
