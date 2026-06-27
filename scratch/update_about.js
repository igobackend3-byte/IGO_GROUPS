const fs = require('fs');

let about = fs.readFileSync('about.html', 'utf8');

const newAboutContent = `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">ABOUT IGO GROUPS</span>
    <h1>Our Story, Vision & Mission</h1>
    <p>Established in 2016. Building India's most trusted, technology-led agribusiness ecosystem.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="grid two-grid" style="align-items: center; gap: 4rem;">
      <div data-reveal="left">
        <h2>Company Overview</h2>
        <p>IGO Groups is a vertically integrated agribusiness conglomerate spanning crop care, agri-engineering, organic retail, fintech, trade, and technology. Operating 25 business divisions, we provide an accountable, technology-led ecosystem rather than a loose collection of companies.</p>
        <br>
        <h2>Vision & Mission</h2>
        <div class="card" style="margin-bottom: 1rem;">
          <h4><svg class="icon-svg sm"><use href="#icon-target"></use></svg> Vision</h4>
          <p>To build India's most trusted, technology-led agribusiness ecosystem.</p>
        </div>
        <div class="card">
          <h4><svg class="icon-svg sm"><use href="#icon-compass"></use></svg> Mission</h4>
          <p>Connect every farmer, dealer, and investor to genuine products, fair markets, and modern tools.</p>
        </div>
      </div>
      <div data-reveal="right">
        <img src="https://igocropcare.com/brands/8.jpg" alt="IGO Overview" style="width:100%; border-radius:12px;">
      </div>
    </div>
  </div>
</section>

<section class="stats" style="padding: 4rem 0;">
  <div class="container grid stats-grid">
    <div class="stat" data-reveal><span class="num">2016</span><span class="label">Year Established</span></div>
    <div class="stat" data-reveal><span class="num">25</span><span class="label">Business Divisions</span></div>
    <div class="stat" data-reveal><span class="num">50,000+</span><span class="label">Farmers Served</span></div>
    <div class="stat" data-reveal><span class="num">200%</span><span class="label">YoY Growth</span></div>
  </div>
</section>

<section class="content-section alt">
  <div class="container text-center">
    <h2>Messages from Leadership</h2>
    <div class="grid two-grid" style="margin-top: 3rem; text-align: left;">
      <div class="card" data-reveal>
        <p><em>"Our foundation was built on the belief that Indian agriculture can be globally competitive if we empower our farmers with the right tools, knowledge, and genuine inputs."</em></p>
        <h4 style="margin-top: 1rem;">Dr. John Yesudhas</h4>
        <span class="service-brand">Founder & Group CEO</span>
      </div>
      <div class="card" data-reveal>
        <p><em>"By integrating fintech, engineering, and organic retail under one roof, we are eliminating inefficiencies and ensuring maximum value reaches the people who grow our food."</em></p>
        <h4 style="margin-top: 1rem;">Priya Sharma</h4>
        <span class="service-brand">Chief Operating Officer</span>
      </div>
    </div>
  </div>
</section>

<section class="content-section">
  <div class="container text-center">
    <h2>Company Timeline</h2>
    <div class="grid three-grid" style="margin-top: 3rem; text-align: left;">
      <div class="card" data-reveal>
        <span class="trust-badge">2016</span>
        <h3>Foundation</h3>
        <p>IGO CropCare is founded in Chennai, launching our first line of genuine crop inputs.</p>
      </div>
      <div class="card" data-reveal>
        <span class="trust-badge">2020</span>
        <h3>Expansion</h3>
        <p>Launch of Valluvam and Farmers Factory to connect organic produce directly to consumers.</p>
      </div>
      <div class="card" data-reveal>
        <span class="trust-badge">2024</span>
        <h3>Ecosystem</h3>
        <p>Group consolidation into 25 verticals including Agri-Engineering, Fintech, and Export Trade.</p>
      </div>
    </div>
  </div>
</section>
`;

// Replace everything between header and footer
about = about.replace(/(<\/header>\s*)([\s\S]*?)(\s*<footer class="footer">)/, `$1\n${newAboutContent}\n$3`);
fs.writeFileSync('about.html', about);
console.log('about.html updated');
