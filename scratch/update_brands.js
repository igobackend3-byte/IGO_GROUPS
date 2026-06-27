const fs = require('fs');

let html = fs.readFileSync('brands.html', 'utf8');
const auditData = require('../audit_results.json');

const brandInfo = {
  'India Green': { desc: 'The founding identity and umbrella brand of the IGO ecosystem.', link: '#' },
  'Farm Automation': { desc: 'Automation and robotics for modern farm operations.', link: '#' },
  'Farm Land Estates': { desc: 'Verified agricultural land, plantations and managed farmland for investors.', link: 'https://igoagriestate.com/' },
  'Natural Cosmetics': { desc: 'Farm-sourced natural and herbal personal care products.', link: '#' },
  'India Green Organics': { desc: 'Certified organic produce and packaged foods.', link: '#' },
  'IGO Agri Mart': { desc: 'Online marketplace for seeds, fertilizers, hydroponics and farm tools.', link: 'https://igoagri-mart-website.vercel.app/' },
  'Valluvam': { desc: 'Cold-pressed oils, spices, dry fruits and millets — pure taste, honest tradition.', link: 'https://valluvamproducts.com/' },
  'IGO Agritech Farms': { desc: 'India agri-engineering & consulting brand — polyhouse, hydroponics, vertical farming.', link: 'https://igoagritechfarms.com/' },
  'IGO Green Energies': { desc: 'Solar, wind and biogas energy solutions for Tamil Nadu farmers.', link: 'https://igo-green-enargy.vercel.app/' },
  'IGO Protein Cuts': { desc: 'Fresh, never-frozen meat, fish and seafood delivered farm-to-fork.', link: 'https://igoproteincuts.com/' },
  'Exports & Imports': { desc: 'Sourced, inspected, shipped — India agri-commodity trade desk.', link: 'https://igo-import-export-website.vercel.app/' },
  'Palm Cafe': { desc: 'Chennai healthy food joint — fresh juices, smoothies and bowls.', link: 'https://palmcafe-landingpage.vercel.app/' },
  'IGO Academy': { desc: 'Agri training hub building skills for the next generation of farmers.', link: 'https://igoacademy.in/' },
  'IGO Nursery': { desc: 'Premium indoor, outdoor and agricultural plants & saplings.', link: 'https://igonursery.com/' },
  'IGO Mart': { desc: 'General retail marketplace under the IGO ecosystem.', link: '#' },
  'IGO Farm Loans': { desc: 'Loans & subsidy facilitation — KCC, PMEGP, MSME, NABARD, PM-KUSUM.', link: 'https://igofarmloans.com/' },
  'IGO Fintech': { desc: 'Credit, payments and financial services for agriculture.', link: '#' },
  'IGO Franchise': { desc: 'Franchise partnership opportunities across the IGO network.', link: '#' },
  'Farm Factories': { desc: 'Processing units turning farm produce into packaged goods.', link: '#' },
  'Farmers Factory': { desc: 'Purely organic — fresh farm produce delivered to your doorstep.', link: 'https://famersfactory.com/' },
  'IGO CropCare': { desc: 'Genuine pesticides, seeds & fertilizers online, plus AI Crop Doctor.', link: 'https://igocropcare.com/' },
  'Organic Pharmacy': { desc: 'Natural and organic wellness products.', link: '#' },
  'Tech Farming Foundation': { desc: 'Precision agritech — IoT soil sensors, satellite NDVI, APMC market linkage.', link: 'https://igo-tech-farming-experts.vercel.app/' },
  'Farmgate Mandi': { desc: 'Direct farm-to-buyer marketplace connecting farmers, FPOs and mandis.', link: 'https://farmgatemandi.com/' },
  'IGO Wealth Management': { desc: 'Investment and wealth advisory for the agri-investor community.', link: '#' }
};

html = html.replace(/<div class="brand-card dir-card".*?<h4>(.*?)<\/h4>\s*<p>(.*?)<\/p>\s*<a href="([^"]+)" class="card-link".*?>(.*?)<\/a>/gs, (match, title, pDesc, href, linkText) => {
  if (href === 'javascript:void(0)') return match;
  const info = brandInfo[title];
  if (!info) return match;
  
  let features = [];
  let audit = auditData.find(a => a.url === info.link || a.url + '/' === info.link);
  let longDesc = info.desc;
  if (audit) {
    longDesc = audit.desc && audit.desc !== 'No description' ? audit.desc : longDesc;
  }
  
  // Strip quotes
  longDesc = longDesc.replace(/'/g, "").replace(/"/g, "");
  
  const featsStr = JSON.stringify(features);
  
  const replacement = match.replace(/<a href="([^"]+)" class="card-link"([^>]*)>(.*?)<\/a>/, 
    `<a href="javascript:void(0)" class="card-link" onclick="openModal('${title}', 'Brand Profile', '${longDesc}', ${featsStr}, 'Visit Website', '${info.link}')">${linkText}</a>`);
    
  return replacement;
});

fs.writeFileSync('brands.html', html);
console.log('brands.html updated');
