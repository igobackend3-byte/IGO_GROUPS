const fs = require('fs');

let contact = fs.readFileSync('contact.html', 'utf8');

const newContactContent = `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">GET IN TOUCH</span>
    <h1>Contact Our Teams</h1>
    <p>Reach out to our specific divisions for sales, support, or partnership inquiries.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="grid two-grid" style="gap: 4rem;">
      <div data-reveal="left">
        <h2>Corporate Office</h2>
        <p><strong>Address:</strong><br>No. 17, Kovalan Street, 2nd Main Road,<br>Uthandi Kanathur, Chennai &ndash; 600119, India</p>
        
        <h2 style="margin-top: 2rem;">Contact Numbers</h2>
        <p><strong>Phone:</strong> +91 73977 89803</p>
        <p><strong>WhatsApp:</strong> +91 73977 89803</p>
        
        <h2 style="margin-top: 2rem;">Department Emails</h2>
        <ul style="list-style: none; padding: 0; line-height: 1.8;">
          <li><strong>General / Business:</strong> bd2@igogroups.com</li>
          <li><strong>HR & Careers:</strong> hr@igogroups.com</li>
          <li><strong>Sales & Partnerships:</strong> sales@igogroups.com</li>
          <li><strong>Support:</strong> support@igogroups.com</li>
        </ul>
        
        <h2 style="margin-top: 2rem;">Office Hours</h2>
        <p>Monday – Saturday: 9:00 AM – 6:30 PM<br>Sunday: Closed</p>
      </div>
      
      <div data-reveal="right" class="card">
        <h3>Send us a message</h3>
        <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent to our team. We will get back to you shortly.');">
          <input type="text" placeholder="Your Name" required style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc;">
          <input type="email" placeholder="Your Email" required style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc;">
          <select required style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc;">
            <option value="">Select Department</option>
            <option value="sales">Sales & Trade</option>
            <option value="hr">Careers & HR</option>
            <option value="support">Customer Support</option>
            <option value="other">General Inquiry</option>
          </select>
          <textarea rows="5" placeholder="How can we help?" required style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border-radius: 6px; border: 1px solid #ccc; font-family: inherit;"></textarea>
          <button type="submit" class="btn btn-primary" style="width: 100%;">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</section>
`;

contact = contact.replace(/(<\/header>\s*)([\s\S]*?)(\s*<footer class="footer">)/, `$1\n${newContactContent}\n$3`);
fs.writeFileSync('contact.html', contact);
console.log('contact.html updated');
