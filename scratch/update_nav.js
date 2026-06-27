const fs = require('fs');

const files = [
  'index.html',
  'about.html',
  'brands.html',
  'services.html',
  'projects.html',
  'contact.html',
  'departments.html',
  'leadership.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Update navigation links (after About)
  // We'll replace the nav block.
  content = content.replace(
    /(<nav class="nav-links" id="navLinks">[\s\S]*?<a href="about.html".*?>About<\/a>)/i,
    `$1\n      <a href="leadership.html">Leadership</a>\n      <a href="departments.html">Departments</a>`
  );
  
  // 2. Add to footer Explore section
  content = content.replace(
    /(<div class="footer-col">\s*<h4>Explore<\/h4>[\s\S]*?<a href="about.html">About Us<\/a>)/i,
    `$1\n        <a href="leadership.html">Leadership</a>\n        <a href="departments.html">Departments</a>`
  );

  fs.writeFileSync(file, content);
  console.log(`Updated nav and footer in ${file}`);
}
