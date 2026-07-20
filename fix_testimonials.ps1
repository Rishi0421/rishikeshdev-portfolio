$html = [System.IO.File]::ReadAllText('c:\Users\hp\Downloads\heynesh.com\heynesh.com\index.html', [System.Text.Encoding]::UTF8)

# 1. Restore drag-wrap
$html = $html.Replace('<div class="drag-wrap" style="display:none !important;">', '<div class="drag-wrap">')

# 2. Fix Mojibake in testimonials
$html = $html.Replace('Ã¢â‚¬â€', '—')
$html = $html.Replace('Ã¢â€šÂ¬Ã¢â€žÂ¢', "'")
$html = $html.Replace('Ã¢â€šÂ¬Ã¢â‚¬Â ', '—')

# 3. Indianize Testimonial Names and Companies
# Testimonial 1
$html = $html.Replace('Danette Beal', 'Aditi Sharma')
$html = $html.Replace('Alosant.com', 'TechVedas.in')
$html = $html.Replace('VP of Marketing Alosant', 'VP of Marketing TechVedas')

# Testimonial 2
$html = $html.Replace('Petar Stojakovic', 'Rohan Desai')
$html = $html.Replace('fiftyseven.co', 'Studio57.in')

# Testimonial 3
$html = $html.Replace('Klemen Vute', 'Karan Verma')
$html = $html.Replace('PM from Povio', 'PM from PeakScale')
$html = $html.Replace('Povio.com', 'PeakScale.in')

# Testimonial 4
$html = $html.Replace('Johanna Dahlroos', 'Neha Kapoor')
$html = $html.Replace('Moat agency', 'Canvas Agency')
$html = $html.Replace('Moat Agency', 'Canvas Agency')

# Testimonial 5
$html = $html.Replace('Marko Ivanovic', 'Sameer Patil')
$html = $html.Replace('Legacy Agency', 'Legacy Studio')

[System.IO.File]::WriteAllText('c:\Users\hp\Downloads\heynesh.com\heynesh.com\index.html', $html, [System.Text.Encoding]::UTF8)
