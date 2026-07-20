$html = [System.IO.File]::ReadAllText('c:\Users\hp\Downloads\heynesh.com\heynesh.com\index.html', [System.Text.Encoding]::UTF8)

$html = [regex]::Replace($html, '(?s)<clipPath id="nesh-clip">.*?</clipPath>', '<clipPath id="nesh-clip">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="currentColor" font-size="338" font-family="sans-serif" font-weight="900" letter-spacing="-10px">RISHI</text>
      <text x="96%" y="20%" dominant-baseline="middle" text-anchor="middle" fill="currentColor" font-size="60" font-family="sans-serif" font-weight="900">®</text>
    </clipPath>')

$html = $html -replace 'hello@rishikesh\.com', 'rishikeshsharma016@gmail.com'
$html = $html -replace 'hello@nesh\.com', 'rishikeshsharma016@gmail.com'

$faqs = @(
    @('I give you the best of both worlds\. A platform your team can manage after launch.*?worth\s+it\.', 'As a developer and designer with 4+ years of experience, I bring a unique blend of creativity and technical expertise to the table. I craft engaging digital experiences that are fast, visually appealing, and tailored to your goals. I ensure seamless communication and reliable delivery.'),
    @('That\&#x27;s a big part of what I do\. Whether your site needs a structural cleanup.*?manage\.', 'Absolutely. Whether your site needs a structural cleanup, better performance, new sections, or a complete design overhaul, I can step in and improve what\&#x27;s already there. I\&#x27;ll audit your current setup and build a clear plan to make it faster, cleaner, and more impactful.'),
    @('It starts with a conversation about your goals.*?use\.', 'It starts with a conversation about your goals, timeline, and what success looks like. From there I put together a clear scope and plan. Once we align, I design and build in stages, sharing progress as I go so feedback stays easy. The goal is always a smooth handoff with a site you actually know how to manage.'),
    @('Yes\. I\&#x27;ve worked on projects that required strict confidentiality.*?information\.', 'Yes, of course. I\&#x27;ve worked on various projects that required strict confidentiality, from pre-launch products to internal tools. I treat every client\&#x27;s work with the utmost discretion and am fully comfortable signing an NDA before we dive into the details.'),
    @('Development is my core strength, but I\&#x27;m not the kind of developer who needs every pixel handed to them.*?needed\.', 'I handle both! With a strong eye for design and solid development skills, I can take your project from a blank canvas to a fully functioning website. Whether you need a fresh brand identity, UI/UX design, or just pixel-perfect development from an existing Figma file, I\&#x27;ve got you covered.'),
    @('You get a dedicated block of development hours each month.*?launch\.', 'I offer flexible ongoing support to keep your website performing at its best. Whether it\&#x27;s adding new features, optimizing performance, or updating content, I\&#x27;m available to help your site evolve. We can work out a monthly retainer or simply engage on an as-needed basis.'),
    @('Revisions are built into the process.*?proud of\.', 'Revisions are built directly into my process. I share progress at key milestones so you can provide feedback while it\&#x27;s easy to adjust. I prefer maintaining a tight feedback loop through email or WhatsApp, ensuring the final product perfectly aligns with your vision.'),
    @('No stress\. Just reach out at.*?option\.', 'No stress. Just reach out at <a href="mailto:rishikeshsharma016@gmail.com" class="faq-link">rishikeshsharma016@gmail.com</a> and tell me what you have in mind. I\&#x27;ll help you figure out the best approach and timeline for your specific needs.')
)

foreach ($faq in $faqs) {
    $html = [regex]::Replace($html, '(?s)' + $faq[0], $faq[1])
}

[System.IO.File]::WriteAllText('c:\Users\hp\Downloads\heynesh.com\heynesh.com\index.html', $html, [System.Text.Encoding]::UTF8)
