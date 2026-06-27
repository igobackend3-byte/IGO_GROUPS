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
  
  // We need to reorder the nav links inside <nav class="nav-links" id="navLinks">
  // Current order might be: Home, About, Leadership, Departments, Our Brands, Services, Projects, Contact
  // We want: Home, About, Our Brands, Services, Projects, Departments, Leadership, Contact
  
  // Let's just find the nav block and replace it manually using a regex that captures all links.
  const navRegex = /(<nav class="nav-links" id="navLinks">)([\s\S]*?)(<\/nav>)/i;
  
  content = content.replace(navRegex, (match, openTag, linksContent, closeTag) => {
    // Extract each link
    const linkRegex = /<a href="([^"]+)"([^>]*)>(.*?)<\/a>/gi;
    let links = [];
    let matchLink;
    while ((matchLink = linkRegex.exec(linksContent)) !== null) {
      links.push({
        href: matchLink[1],
        attrs: matchLink[2],
        text: matchLink[3],
        full: matchLink[0]
      });
    }
    
    // Sort links based on desired order
    const desiredOrder = [
      'index.html',
      'about.html',
      'brands.html',
      'services.html',
      'projects.html',
      'departments.html',
      'leadership.html',
      'contact.html'
    ];
    
    links.sort((a, b) => {
      let indexA = desiredOrder.indexOf(a.href);
      let indexB = desiredOrder.indexOf(b.href);
      if (indexA === -1) indexA = 99;
      if (indexB === -1) indexB = 99;
      return indexA - indexB;
    });
    
    const newLinksContent = '\n      ' + links.map(l => l.full).join('\n      ') + '\n    ';
    return openTag + newLinksContent + closeTag;
  });

  // Also do the same for the footer "Explore" section
  const footerRegex = /(<div class="footer-col">\s*<h4>Explore<\/h4>)([\s\S]*?)(<\/div>)/i;
  
  content = content.replace(footerRegex, (match, openTag, linksContent, closeTag) => {
    // Extract each link
    const linkRegex = /<a href="([^"]+)"([^>]*)>(.*?)<\/a>/gi;
    let links = [];
    let matchLink;
    while ((matchLink = linkRegex.exec(linksContent)) !== null) {
      links.push({
        href: matchLink[1],
        attrs: matchLink[2],
        text: matchLink[3],
        full: matchLink[0]
      });
    }
    
    const desiredOrder = [
      'about.html',
      'brands.html',
      'services.html',
      'projects.html',
      'departments.html',
      'leadership.html'
    ];
    
    links.sort((a, b) => {
      let indexA = desiredOrder.indexOf(a.href);
      let indexB = desiredOrder.indexOf(b.href);
      if (indexA === -1) indexA = 99;
      if (indexB === -1) indexB = 99;
      return indexA - indexB;
    });
    
    const newLinksContent = '\n        ' + links.map(l => l.full).join('\n        ') + '\n      ';
    return openTag + newLinksContent + closeTag;
  });

  fs.writeFileSync(file, content);
  console.log(`Reordered nav and footer in ${file}`);
}
