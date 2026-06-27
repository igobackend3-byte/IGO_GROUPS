const fs = require('fs');

const cssToAdd = `
/* ==========================================================================
   DROPDOWN NAVIGATION
   ========================================================================== */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.dropdown {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The parent text link (e.g. "Company ▾") */
.dropdown > a {
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 220px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  padding: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.dropdown:hover .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 10px 16px;
  border-radius: 8px;
  color: var(--text-body) !important;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background: var(--soft-gray);
  color: var(--primary) !important;
}

/* Mobile Adjustments for Dropdowns */
@media (max-width: 900px) {
  .nav-links {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  
  .dropdown {
    width: 100%;
  }
  
  .dropdown > a {
    padding: 16px 0;
    width: 100%;
    border-bottom: 1px solid var(--border);
  }
  
  .dropdown-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border: none;
    background: transparent;
    padding: 0 0 0 16px;
    display: none; /* Hide by default on mobile */
  }
  
  /* On hover/focus (tap on mobile), show the dropdown block */
  .dropdown:hover .dropdown-menu,
  .dropdown:focus-within .dropdown-menu {
    display: flex;
  }
  
  .dropdown-menu a {
    border-bottom: 1px solid var(--border);
    border-radius: 0;
    padding: 14px 0;
  }
}
`;

fs.appendFileSync('assets/css/style.css', cssToAdd);
console.log('Appended dropdown CSS to style.css');
