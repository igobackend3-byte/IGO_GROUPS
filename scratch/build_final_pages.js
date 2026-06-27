const fs = require('fs');

let template = fs.readFileSync('services.html', 'utf8');

const headerMatch = template.match(/([\s\S]*?)<section class="page-hero">/);
const footerMatch = template.match(/(<footer class="footer">[\s\S]*)/);

let headerBase = headerMatch ? headerMatch[1] : '';
let footerBase = footerMatch ? footerMatch[1] : '';

function createPage(filename, title, heroEyebrow, heroTitle, heroDesc, contentHtml) {
  let headerHtml = headerBase.replace(/<title>.*?<\/title>/, `<title>${title} | IGO Groups</title>`);
  
  const pageHtml = `${headerHtml}
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">${heroEyebrow}</span>
    <h1>${heroTitle}</h1>
    <p>${heroDesc}</p>
  </div>
</section>
${contentHtml}
${footerBase}
`;
  fs.writeFileSync(filename, pageHtml);
  console.log(`${filename} created.`);
}

// 1. PRODUCTS.HTML
createPage(
  'products.html', 
  'Products',
  'WHAT WE OFFER',
  'Products',
  'Premium organic agricultural inputs, exotic seeds, and fresh harvested produce.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <div class="card service-card" data-reveal>
        <img src="https://igocropcare.com/brands/11.jpg" style="width:100%; border-radius:8px; margin-bottom:1rem;" alt="Exotic Seeds">
        <h3>Exotic Vegetable Seeds</h3>
        <p>High-yield, disease-resistant seeds for polyhouse and open cultivation.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">View Details</button>
      </div>
      <div class="card service-card" data-reveal>
        <img src="https://igocropcare.com/brands/20.jpg" style="width:100%; border-radius:8px; margin-bottom:1rem;" alt="Bio Fertilizers">
        <h3>Organic Bio-Fertilizers</h3>
        <p>100% natural crop care inputs to enhance soil health and yield.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">View Details</button>
      </div>
      <div class="card service-card" data-reveal>
        <img src="https://igocropcare.com/brands/12.jpg" style="width:100%; border-radius:8px; margin-bottom:1rem;" alt="Fresh Produce">
        <h3>Farm Fresh Produce</h3>
        <p>Export-quality organic fruits, vegetables, and millets harvested daily.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">View Details</button>
      </div>
    </div>
  </div>
</section>
  `
);

// 2. CSR.HTML
createPage(
  'csr.html', 
  'CSR & Sustainability',
  'OUR IMPACT',
  'CSR & Sustainability',
  "Building sustainable farming communities and protecting India's agricultural heritage.",
  `
<section class="content-section">
  <div class="container">
    <div class="grid two-grid" style="align-items:center; gap:4rem;">
      <div data-reveal="left">
        <h2>Empowering the Farmer</h2>
        <p>At IGO Groups, Corporate Social Responsibility is not just an initiative—it is built into our core business model. Through our FarmGate Mandi and Farmer's Factory initiatives, we eliminate middlemen, ensuring 100% of fair market value reaches the farmer.</p>
        <br>
        <h2>Sustainable Agriculture</h2>
        <ul style="line-height:1.8;">
          <li><strong>Water Conservation:</strong> Deploying hydroponic systems that use 90% less water.</li>
          <li><strong>Soil Health:</strong> Transitioning 5,000+ acres from chemical to organic bio-fertilizers.</li>
          <li><strong>Financial Inclusion:</strong> Providing zero-collateral micro-loans via IGO Farm Loans.</li>
        </ul>
      </div>
      <div data-reveal="right">
        <img src="https://igocropcare.com/brands/8.jpg" alt="Sustainability" style="width:100%; border-radius:12px; box-shadow: var(--shadow-lg);">
      </div>
    </div>
  </div>
</section>
  `
);

// 3. TESTIMONIALS.HTML
createPage(
  'testimonials.html', 
  'Testimonials',
  'CLIENT SUCCESS',
  'Testimonials',
  'Hear directly from the farmers, vendors, and partners who work with us.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <div class="card" data-reveal>
        <div style="color:var(--gold); font-size:1.5rem; margin-bottom:1rem;">★★★★★</div>
        <p>"IGO Agritech built a 5-acre polyhouse for us in record time. Their AI Crop Doctor app saved our entire capsicum harvest."</p>
        <h4 style="margin-top:1rem;">Rajesh Kumar</h4>
        <span class="service-brand">Farmer, Tamil Nadu</span>
      </div>
      <div class="card" data-reveal>
        <div style="color:var(--gold); font-size:1.5rem; margin-bottom:1rem;">★★★★★</div>
        <p>"The export logistics division handled our cold chain shipments to Dubai flawlessly. True professionals."</p>
        <h4 style="margin-top:1rem;">Amit Patel</h4>
        <span class="service-brand">B2B Trade Partner</span>
      </div>
      <div class="card" data-reveal>
        <div style="color:var(--gold); font-size:1.5rem; margin-bottom:1rem;">★★★★★</div>
        <p>"Getting a loan through IGO Farm Loans was completely transparent with zero hidden fees. Highly recommended."</p>
        <h4 style="margin-top:1rem;">Srinivas Rao</h4>
        <span class="service-brand">Organic Cultivator</span>
      </div>
    </div>
  </div>
</section>
  `
);

// 4. FAQS.HTML
createPage(
  'faqs.html', 
  'FAQs',
  'KNOWLEDGE BASE',
  'Frequently Asked Questions',
  'Answers to common questions about our services, products, and processes.',
  `
<section class="content-section">
  <div class="container" style="max-width: 800px; margin: 0 auto;">
    <div class="card" data-reveal style="margin-bottom:1rem;">
      <h3>How do I apply for an IGO Farm Loan?</h3>
      <p style="margin-top:0.5rem; color:var(--muted);">You can apply directly through our IGO Farm Loans portal or contact our Fintech division. We require basic land records and KYC to process NABARD/KCC subsidies.</p>
    </div>
    <div class="card" data-reveal style="margin-bottom:1rem;">
      <h3>What is included in Polyhouse construction?</h3>
      <p style="margin-top:0.5rem; color:var(--muted);">Our turnkey polyhouse services include design, structural engineering, automated climate control, drip irrigation setup, and initial agronomy consulting.</p>
    </div>
    <div class="card" data-reveal style="margin-bottom:1rem;">
      <h3>Do you export organic produce globally?</h3>
      <p style="margin-top:0.5rem; color:var(--muted);">Yes, our trade division exports certified organic fruits, vegetables, and millets to over 18 countries across the Middle East, Europe, and Southeast Asia.</p>
    </div>
    <div class="card" data-reveal style="margin-bottom:1rem;">
      <h3>How can I join the IGO team?</h3>
      <p style="margin-top:0.5rem; color:var(--muted);">Check our Careers page for the latest openings! We are always looking for passionate agronomists, engineers, and supply chain experts.</p>
    </div>
  </div>
</section>
  `
);
