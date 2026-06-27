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
  'news.html'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Update nav block
  const navRegex = /(<nav class="nav-links" id="navLinks">)([\s\S]*?)(<\/nav>)/i;
  
  content = content.replace(navRegex, (match, openTag, linksContent, closeTag) => {
    // Current desired order:
    const desiredOrder = [
      'index.html',
      'about.html',
      'brands.html',
      'services.html',
      'projects.html',
      'departments.html',
      'leadership.html',
      'teams.html',
      'awards.html',
      'gallery.html',
      'careers.html',
      'news.html',
      'contact.html'
    ];
    
    const titles = {
      'index.html': 'Home',
      'about.html': 'About',
      'brands.html': 'Our Brands',
      'services.html': 'Services',
      'projects.html': 'Projects',
      'departments.html': 'Departments',
      'leadership.html': 'Leadership',
      'teams.html': 'Teams',
      'awards.html': 'Awards',
      'gallery.html': 'Gallery',
      'careers.html': 'Careers',
      'news.html': 'News',
      'contact.html': 'Contact'
    };
    
    // We'll just replace the entire links content with fresh links to ensure everything is perfect.
    const newLinksContent = '\n      ' + desiredOrder.map(href => {
      // mark active if href matches the current file
      const activeStr = href === file ? ' class="active"' : '';
      return `<a href="${href}"${activeStr}>${titles[href]}</a>`;
    }).join('\n      ') + '\n    ';
    
    return openTag + newLinksContent + closeTag;
  });

  // Update Footer (Explore Column)
  const footerRegex = /(<div class="footer-col">\s*<h4>Explore<\/h4>)([\s\S]*?)(<\/div>)/i;
  content = content.replace(footerRegex, (match, openTag, linksContent, closeTag) => {
    const desiredOrder = [
      'about.html',
      'brands.html',
      'services.html',
      'projects.html',
      'departments.html',
      'leadership.html',
      'teams.html',
      'awards.html',
      'gallery.html',
      'careers.html',
      'news.html'
    ];
    
    const titles = {
      'about.html': 'About Us',
      'brands.html': 'Our Brands',
      'services.html': 'Services',
      'projects.html': 'Projects',
      'departments.html': 'Departments',
      'leadership.html': 'Leadership',
      'teams.html': 'Teams',
      'awards.html': 'Awards',
      'gallery.html': 'Gallery',
      'careers.html': 'Careers',
      'news.html': 'News'
    };
    
    const newLinksContent = '\n        ' + desiredOrder.map(href => `<a href="${href}">${titles[href]}</a>`).join('\n        ') + '\n      ';
    return openTag + newLinksContent + closeTag;
  });

  fs.writeFileSync(file, content);
  console.log(`Updated nav/footer for ${file}`);
}
