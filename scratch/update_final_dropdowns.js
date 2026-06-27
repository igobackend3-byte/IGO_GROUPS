const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'brands.html',
  'services.html',
  'projects.html',
  'contact.html',
  'departments.html',
  'leadership.html',
  'teams.html',
  'awards.html',
  'gallery.html',
  'careers.html',
  'news.html',
  'products.html',
  'csr.html',
  'testimonials.html',
  'faqs.html'
];

const newNav = `
    <nav class="nav-links" id="navLinks">
      <a href="index.html">Home</a>
      
      <div class="dropdown" tabindex="0">
        <a href="javascript:void(0)">Company ▾</a>
        <div class="dropdown-menu">
          <a href="about.html">About Us</a>
          <a href="leadership.html">Leadership</a>
          <a href="departments.html">Departments</a>
          <a href="teams.html">Teams</a>
          <a href="csr.html">CSR & Sustainability</a>
        </div>
      </div>
      
      <div class="dropdown" tabindex="0">
        <a href="javascript:void(0)">Business ▾</a>
        <div class="dropdown-menu">
          <a href="brands.html">Business Divisions</a>
          <a href="services.html">Services</a>
          <a href="projects.html">Projects</a>
          <a href="products.html">Products</a>
        </div>
      </div>

      <div class="dropdown" tabindex="0">
        <a href="javascript:void(0)">Media ▾</a>
        <div class="dropdown-menu">
          <a href="news.html">News & Events</a>
          <a href="gallery.html">Media Gallery</a>
          <a href="awards.html">Awards</a>
          <a href="testimonials.html">Testimonials</a>
        </div>
      </div>
      
      <a href="careers.html">Careers</a>
      <a href="faqs.html">FAQs</a>
      <a href="contact.html">Contact Us</a>
    </nav>`;

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  const navRegex = /<nav class="nav-links" id="navLinks">[\s\S]*?<\/nav>/i;
  content = content.replace(navRegex, newNav);
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
}
