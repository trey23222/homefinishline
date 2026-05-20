/* shared.js, injects nav and footer into every page */

const NAV_HTML = `
<nav>
  <a class="nav-brand" href="index.html">Home <span>Finish Line</span></a>
  <ul class="nav-links" id="navLinks">
    <li><a href="loan-programs.html">Loan Programs</a></li>
    <li><a href="dpa.html">Down Payment Help</a></li>
    <li><a href="process.html">The Process</a></li>
    <li><a href="faq.html">FAQ</a></li>
    <li><a href="calculator.html">Calculator</a></li>
    <li><a href="https://treygarza.floify.com/apply" class="nav-cta">Get Pre-Approved →</a></li>
  </ul>
  <button class="nav-hamburger" onclick="document.getElementById('navLinks').classList.toggle('open')" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-col">
      <h4>Home Finish Line</h4>
      <a href="index.html">Home</a>
      <a href="loan-programs.html">Loan Programs</a>
      <a href="dpa.html">Down Payment Assistance</a>
      <a href="process.html">The Home Buying Process</a>
      <a href="faq.html">FAQ</a>
      <a href="calculator.html">Mortgage Calculator</a>
    </div>
    <div class="footer-col">
      <h4>Loan Programs</h4>
      <a href="loan-programs.html#fha">FHA Loans</a>
      <a href="loan-programs.html#va">VA Loans</a>
      <a href="loan-programs.html#usda">USDA Loans</a>
      <a href="loan-programs.html#conventional">Conventional Loans</a>
      <a href="dpa.html">Down Payment Assistance</a>
    </div>
    <div class="footer-col">
      <h4>Get Started</h4>
      <a href="https://www.homefinishline.com/start">Get My Free Buyer Guide</a>
      <a href="https://www.homefinishline.com/start">Join My Free Zoom Class</a>
      <a href="https://calendly.com/trey-garza-efinitymortgage/30min">Book a Call with Trey</a>
      <a href="https://treygarza.floify.com/apply">Start Loan Application</a>
      <a href="mailto:trey.garza@homefinishline.com">trey.garza@homefinishline.com</a>
    </div>
    <div class="footer-col">
      <h4>Follow Trey</h4>
      <a href="https://www.facebook.com/profile.php?id=61578618664880" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.instagram.com/mortgageguytrey/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.tiktok.com/@mortgage.guy.trey" target="_blank" rel="noopener">TikTok</a>
      <a href="https://youtube.com/@mortgageguytrey" target="_blank" rel="noopener">YouTube</a>
      <a href="https://www.facebook.com/share/g/15cqQTdjeNu/" target="_blank" rel="noopener">Facebook Group</a>
    </div>
  </div>
  <div class="footer-bottom">
    <strong>Trey Garza</strong> | Licensed Mortgage Loan Officer | Efinity Mortgage (NMLS# 1043983) | Trey Garza NMLS# 2700813<br>
    San Antonio, Texas<br><br>
    Licensed by the Texas Department of Savings and Mortgage Lending. This is not a commitment to lend. All loans are subject to credit approval and property appraisal. Terms and Conditions apply. Down payment assistance programs have eligibility requirements, contact us to verify availability. Equal Housing Opportunity.<br><br>
    © 2026 Home Finish Line · All Rights Reserved
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Inject footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Mark active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});
