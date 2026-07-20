const fs = require('fs');
const path = 'c:/Users/hp/Downloads/heynesh.com/heynesh.com/index.html';
let html = fs.readFileSync(path, 'utf8');

const customCSS = `
<style>
/* Fix mobile hero image responsiveness */
@media screen and (max-width: 991px) {
  .mobile-hero-image-wrap {
    width: 100% !important;
  }
  .hero-image {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover !important;
    object-position: center bottom !important;
  }
  /* Add gradient fade to blend the cutout image into the background */
  .mobile-hero-image-wrap::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to bottom, transparent, #d5cfbe 90%);
    z-index: 2;
    pointer-events: none;
  }
  /* Ensure badges and text stay above */
  .hero-content-layout, .hero-cards-wrap, .hero-heading, .hero-text-bottom {
    position: relative;
    z-index: 10;
  }
}
</style>
</head>
`;

html = html.replace('</head>', customCSS);

fs.writeFileSync(path, html, 'utf8');
console.log('Mobile hero CSS fix applied!');
