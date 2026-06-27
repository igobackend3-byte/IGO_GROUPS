const fs = require('fs');

const urls = [
  'https://igocropcare.com/',
  'https://igoagriestate.com/',
  'https://igoproteincuts.com/',
  'https://famersfactory.com/',
  'https://igonursery.com/',
  'https://farmgatemandi.com/',
  'https://igoacademy.in/',
  'https://igoagritechfarms.in/',
  'https://igoagritechfarms.com/',
  'https://valluvamproducts.com/',
  'https://ceodrjohnyesudhas.com/',
  'https://igofarmloans.com/',
  'https://igo-tech-farming-experts.vercel.app/',
  'https://igo-green-enargy.vercel.app/',
  'https://palmcafe-landingpage.vercel.app/',
  'https://igo-import-export-website.vercel.app/',
  'https://igoagri-mart-website.vercel.app/'
];

async function audit() {
  const results = [];
  for (const url of urls) {
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      const text = await res.text();
      
      const titleMatch = text.match(/<title>(.*?)<\/title>/is);
      const title = titleMatch ? titleMatch[1].trim() : 'No title';
      
      const metaMatch = text.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/is) || 
                        text.match(/<meta[^>]*content=["'](.*?)["'][^>]*name=["']description["']/is);
      const desc = metaMatch ? metaMatch[1].trim() : 'No description';

      const h1Match = text.match(/<h1[^>]*>(.*?)<\/h1>/is);
      const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'No H1';
      
      const imgMatch = text.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/gi);
      const imgs = imgMatch ? imgMatch.slice(0, 3).map(i => {
          let m = i.match(/src=["']([^"']+)["']/i);
          return m ? m[1] : '';
      }) : [];

      results.push({ url, title, desc, h1, imgs });
    } catch (e) {
      console.log(`Failed ${url}: ${e.message}`);
      results.push({ url, error: e.message });
    }
  }
  
  fs.writeFileSync('audit_results.json', JSON.stringify(results, null, 2));
  console.log('Audit complete, saved to audit_results.json');
}

audit();
