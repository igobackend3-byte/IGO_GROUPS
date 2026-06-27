const fs = require('fs');

// Read the template (services.html) to get the header and footer structure
let template = fs.readFileSync('services.html', 'utf8');

// We need to extract everything before `<section class="page-hero">`
// and everything after `<footer class="footer">`

const headerMatch = template.match(/([\s\S]*?)<section class="page-hero">/);
const footerMatch = template.match(/(<footer class="footer">[\s\S]*)/);

let headerHtml = headerMatch ? headerMatch[1] : '';
let footerHtml = footerMatch ? footerMatch[1] : '';

// Update title in header
headerHtml = headerHtml.replace(/<title>.*?<\/title>/, '<title>Departments | IGO Groups</title>');

// Read departments.js
let deptJs = fs.readFileSync('scratch/IGO-GROUP-PROFILE/apps/web/src/data/departments.js', 'utf8');
deptJs = deptJs.replace('export const departments = ', 'module.exports = ');
fs.writeFileSync('scratch/departments_node.js', deptJs);
const departments = require('./departments_node.js');

let deptCards = departments.map(d => {
  let safeFocus = d.focus.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  return `
        <div class="card service-card" style="cursor: pointer;" onclick="openModal('${d.name}', 'Department Profile', '${safeFocus}', [], null, null)" data-reveal>
          <h3>${d.icon} ${d.name}</h3>
          <p>${d.focus}</p>
          <span class="service-brand">Head: ${d.head}</span>
        </div>`;
}).join('\n');

const deptPageHtml = `${headerHtml}
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">OUR STRUCTURE</span>
    <h1>18 Integrated Departments</h1>
    <p>A seamless, vertically integrated ecosystem driving excellence across all IGO operations.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="grid three-grid">
${deptCards}
    </div>
  </div>
</section>
${footerHtml}
`;

fs.writeFileSync('departments.html', deptPageHtml);
console.log('departments.html created');

// Do the same for leadership
let headerHtmlLeader = headerMatch[1].replace(/<title>.*?<\/title>/, '<title>Leadership | IGO Groups</title>');

let teamJs = fs.readFileSync('scratch/IGO-GROUP-PROFILE/apps/web/src/data/team.js', 'utf8');
// team.js has multiple exports, we just want the managers array
const managersMatch = teamJs.match(/export const managers = (\[[\s\S]*?\]);/);
let managers = [];
if (managersMatch) {
  // Use a Function constructor to safely evaluate the JS object string
  managers = (new Function(`return ${managersMatch[1]};`))();
}

let teamCards = managers.map(m => {
  let safeBio = m.bio.replace(/'/g, "\\'").replace(/"/g, '&quot;');
  let features = [];
  if (m.experience) features.push(`Experience: ${m.experience}`);
  if (m.education) features.push(`Education: ${m.education}`);
  let featsStr = JSON.stringify(features);
  
  return `
        <div class="card person-card" style="cursor: pointer;" onclick="openModal('${m.name}', '${m.title} - ${m.department}', '${safeBio}', ${featsStr}, null, null)" data-reveal>
          <div class="avatar-ph">${m.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
          <h3>${m.name}</h3>
          <span class="cat-label">${m.title}</span>
          <p>${m.department}</p>
        </div>`;
}).join('\n');

const leaderPageHtml = `${headerHtmlLeader}
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">OUR LEADERSHIP</span>
    <h1>The Minds Behind IGO</h1>
    <p>Meet the 32 core leaders, general managers, and department heads driving India's fastest-growing agribusiness ecosystem.</p>
  </div>
</section>

<section class="content-section alt">
  <div class="container">
    <div class="grid four-grid">
${teamCards}
    </div>
  </div>
</section>
${footerHtml}
`;

fs.writeFileSync('leadership.html', leaderPageHtml);
console.log('leadership.html created');
