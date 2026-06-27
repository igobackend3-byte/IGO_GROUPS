const fs = require('fs');

// 1. Update awards.html
let awardsHtml = fs.readFileSync('awards.html', 'utf8');

const newAwards = `
    <!-- Fetched Awards from ceodrjohnyesudhas.com -->
    <div class="grid three-grid" style="margin-top: 2rem;">
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">MSME Awards 2024</h3>
        <p>Honored as the Best Agri-Consulting Brand in India.</p>
      </div>
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">Global Business Conclave</h3>
        <p>India's Leading Farm & Agri Engineering Brand. Presented by IPS Officer Praveen Sood.</p>
      </div>
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">Innovative Entrepreneur</h3>
        <p>Recognized as the Best Innovative Entrepreneur in Agri Engineering.</p>
      </div>
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">SISI Award</h3>
        <p>For significant contributions to industrial and agricultural development.</p>
      </div>
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">Valluvam Award</h3>
        <p>For outstanding achievements and innovative solutions in agriculture.</p>
      </div>
      <div class="card" data-reveal>
        <h3 style="color:var(--forest);">National Excellence Award</h3>
        <p>For outstanding work in promoting sustainable farming and helping local farmers.</p>
      </div>
    </div>
    
    <div class="card" style="margin-top: 2rem; background: var(--soft-gray);" data-reveal>
      <h3>Reality TV Recognition</h3>
      <p>Dr. John Yesudhas serves as an esteemed judge on the entrepreneurial reality show <strong>Pitch It On</strong>, broadcasted on Star Television, evaluating young startups on innovation, scalability, and sustainability.</p>
    </div>
`;

// Insert after the existing content section
if (awardsHtml.includes('<!-- additional awards can be added here -->')) {
  awardsHtml = awardsHtml.replace('<!-- additional awards can be added here -->', newAwards + '\\n<!-- additional awards can be added here -->');
} else {
  // Just inject it before the closing section tag
  awardsHtml = awardsHtml.replace(/<\/div>\\s*<\/section>/, `</div>\\n${newAwards}\\n</section>`);
}
fs.writeFileSync('awards.html', awardsHtml);
console.log('Updated awards.html');


// 2. Update about.html
let aboutHtml = fs.readFileSync('about.html', 'utf8');

const newHistory = `
      <div class="card" data-reveal style="margin-top: 2rem;">
        <h3>Our Journey & Foundation</h3>
        <p>Founded around <strong>2016</strong> by our visionary CEO Dr. John Yesudhas, IGO Group was born out of a desire to modernize traditional Indian agriculture. With over <strong>10+ years of professional experience</strong>, we have successfully managed over 6,000+ projects across India with a dedicated network of 2,000+ team members.</p>
      </div>
`;

// Inject into the about content
aboutHtml = aboutHtml.replace(/(<section class="content-section">[\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/, `$1</div>\\n${newHistory}\\n</div>\\n</section>`);
fs.writeFileSync('about.html', aboutHtml);
console.log('Updated about.html');

