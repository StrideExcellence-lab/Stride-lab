// ── NAV ──
function renderNav(activePage) {
  const pages = [
    { href: 'index.html',        label: 'Home' },
    { href: 'research.html',     label: 'Research' },
    { href: 'publications.html', label: 'Publications' },
    { href: 'people.html',       label: 'People' },
    { href: 'teaching.html',     label: 'Teaching' },
    { href: 'news.html',         label: 'News' },
  ];

  const links = pages.map(p =>
    `<a href="${p.href}" class="${p.label === activePage ? 'active' : ''}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-bars">
            <span style="background:#1a3a5c;height:20px"></span>
            <span style="background:#1a4f2a;height:16px;margin-top:4px"></span>
            <span style="background:#d4991a;height:18px;margin-top:2px"></span>
            <span style="background:#c0392b;height:13px;margin-top:7px"></span>
          </div>
          <span class="nav-logo-text">
            <span class="st">ST</span><span class="r">R</span>I<span class="ide">DE</span><span class="lab">Lab</span>
          </span>
        </a>
        <div class="nav-links" id="nav-links">
          ${links}
          <a href="contact.html" class="btn-cta ${activePage === 'Contact' ? 'active' : ''}">Contact</a>
        </div>
        <div class="nav-hamburger" id="hamburger" onclick="toggleNav()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  `;
}

function toggleNav() {
  document.getElementById('nav-links').classList.toggle('open');
}

// ── FOOTER ──
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer class="footer">
      <div class="footer-inner">
        <div>
          <div class="footer-logo">STRIDE Lab</div>
          <p class="footer-tagline">Smart Technologies for Robust Intelligence &amp; Decision Engineering</p>
          <p style="margin-top:14px;font-size:12px;">University of Michigan – Dearborn<br>Dept. of Computer &amp; Information Science</p>
        </div>
        <div class="footer-col">
          <h4>Lab</h4>
          <a href="index.html">Home</a>
          <a href="research.html">Research</a>
          <a href="people.html">People</a>
          <a href="news.html">News</a>
        </div>
        <div class="footer-col">
          <h4>Work</h4>
          <a href="publications.html">Publications</a>
          <a href="teaching.html">Teaching</a>
          <a href="research.html#projects">Projects</a>
          <a href="people.html#join">Join Us</a>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <a href="contact.html">Contact</a>
          <a href="https://scholar.google.com" target="_blank">Google Scholar</a>
          <a href="https://github.com" target="_blank">GitHub</a>
          <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 STRIDE Lab · University of Michigan–Dearborn. All rights reserved.</span>
        <span>Built with ♡ for open science.</span>
      </div>
    </footer>
  `;
}

// ── STRIPE ──
function renderStripe() {
  const el = document.getElementById('stripe-placeholder');
  if (el) el.innerHTML = `
    <div class="stripe">
      <div style="background:#1a3a5c"></div>
      <div style="background:#1a4f2a"></div>
      <div style="background:#d4991a"></div>
      <div style="background:#c0392b"></div>
    </div>`;
}
