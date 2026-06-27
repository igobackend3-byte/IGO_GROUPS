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

// 1. TEAMS.HTML
createPage(
  'teams.html', 
  'Operational Teams',
  'OUR PEOPLE',
  'Operational Teams',
  'The specialized groups driving execution and innovation across our 25 verticals.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <div class="card service-card" data-reveal>
        <h3>Agri-Engineering Execution</h3>
        <p>Lead: Arjun Krishnamurthy</p>
        <span class="service-brand">Constructing polyhouses & hydroponic setups</span>
        <div class="mt-4"><small><strong>Awards:</strong> Best Execution Team 2024</small></div>
      </div>
      <div class="card service-card" data-reveal>
        <h3>Farm Operations</h3>
        <p>Lead: Lakshmi Venkataraman</p>
        <span class="service-brand">Managing 5,000+ acres of open cultivation</span>
        <div class="mt-4"><small><strong>Awards:</strong> Zero-Defect Harvest 2023</small></div>
      </div>
      <div class="card service-card" data-reveal>
        <h3>Digital Fintech</h3>
        <p>Lead: Praveen Kumar</p>
        <span class="service-brand">Processing farm loans and subsidies</span>
        <div class="mt-4"><small><strong>Awards:</strong> Fastest Loan Disbursal 2025</small></div>
      </div>
      <div class="card service-card" data-reveal>
        <h3>Export & Trade Logistics</h3>
        <p>Lead: Selvakumar M.</p>
        <span class="service-brand">Managing cold chain & shipping to 18+ countries</span>
      </div>
    </div>
  </div>
</section>
  `
);

// 2. AWARDS.HTML
createPage(
  'awards.html', 
  'Awards & Achievements',
  'RECOGNITION',
  'Awards & Achievements',
  'Industry recognition, certifications, and milestones achieved by IGO Groups.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <div class="card" data-reveal>
        <span class="trust-badge" style="display:inline-block;margin-bottom:1rem;">ISO 9001:2015</span>
        <h3>Quality Management</h3>
        <p>Certified for maintaining strict quality control across crop care and agri-inputs.</p>
      </div>
      <div class="card" data-reveal>
        <span class="trust-badge" style="display:inline-block;margin-bottom:1rem;">Best Agritech Startup 2024</span>
        <h3>Startup India</h3>
        <p>Recognised by Startup India for pioneering AI-assisted crop diagnostics.</p>
      </div>
      <div class="card" data-reveal>
        <span class="trust-badge" style="display:inline-block;margin-bottom:1rem;">Top Export House</span>
        <h3>APEDA Excellence</h3>
        <p>Awarded for excellence in agricultural export promotion and logistics.</p>
      </div>
    </div>
  </div>
</section>
  `
);

// 3. GALLERY.HTML
createPage(
  'gallery.html', 
  'Media Gallery',
  'OUR WORK IN PICTURES',
  'Media Gallery',
  'Explore our farm projects, corporate events, and operational facilities.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <img src="https://igocropcare.com/brands/8.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
      <img src="https://igocropcare.com/brands/11.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
      <img src="https://igocropcare.com/brands/20.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
      <img src="https://igocropcare.com/brands/7.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
      <img src="https://igocropcare.com/brands/12.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
      <img src="https://igocropcare.com/brands/21.jpg" alt="Gallery" style="width:100%; border-radius:12px;" data-reveal>
    </div>
  </div>
</section>
  `
);

// 4. CAREERS.HTML
createPage(
  'careers.html', 
  'Careers',
  'JOIN OUR MISSION',
  'Careers at IGO',
  'Build the future of Indian agriculture with us. Explore openings and internship opportunities.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid two-grid">
      <div class="card" data-reveal>
        <h3>Senior Agronomist</h3>
        <p><strong>Location:</strong> Chennai | <strong>Experience:</strong> 5+ Years</p>
        <p>Lead soil testing and crop diagnostics for IGO CropCare.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">Apply Now</button>
      </div>
      <div class="card" data-reveal>
        <h3>Fintech Loan Officer</h3>
        <p><strong>Location:</strong> Hybrid | <strong>Experience:</strong> 2+ Years</p>
        <p>Process NABARD and KCC loans for our farming network.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">Apply Now</button>
      </div>
      <div class="card" data-reveal>
        <h3>Agri-Engineering Intern</h3>
        <p><strong>Location:</strong> On-Site | <strong>Experience:</strong> Fresher</p>
        <p>Learn polyhouse construction and hydroponic setups.</p>
        <button class="btn btn-primary" style="margin-top:1rem;">Apply Now</button>
      </div>
    </div>
  </div>
</section>
  `
);

// 5. NEWS.HTML
createPage(
  'news.html', 
  'News & Events',
  'STAY UPDATED',
  'News & Events',
  'Press releases, corporate blogs, and upcoming agricultural events.',
  `
<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
      <div class="card" data-reveal>
        <span class="cat-label">Press Release</span>
        <h3>IGO Groups expands to 18 Export Countries</h3>
        <p>Our trade division has successfully opened new corridors in the Middle East and Europe for organic produce.</p>
      </div>
      <div class="card" data-reveal>
        <span class="cat-label">Event</span>
        <h3>Annual Farmer Summit 2026</h3>
        <p>Join over 5,000 farmers in Chennai for our annual training and subsidy awareness camp.</p>
      </div>
      <div class="card" data-reveal>
        <span class="cat-label">Blog</span>
        <h3>The Future of Hydroponics in Urban India</h3>
        <p>An in-depth look at how vertical farming is changing the landscape of urban agriculture.</p>
      </div>
    </div>
  </div>
</section>
  `
);
