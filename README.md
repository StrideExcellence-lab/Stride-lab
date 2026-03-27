# STRIDE Lab Website

**Smart Technologies for Robust Intelligence & Decision Engineering**
University of Michigan – Dearborn

---

## 📁 File Structure

```
stride-lab/
├── index.html          ← Homepage
├── research.html       ← Research areas & projects
├── publications.html   ← Full publications list (filterable)
├── people.html         ← Team members & join info
├── news.html           ← Lab news & updates
├── teaching.html       ← Courses & teaching philosophy
├── contact.html        ← Contact form & info
├── css/
│   └── style.css       ← All styles (shared across pages)
├── js/
│   └── components.js   ← Shared nav + footer
└── assets/             ← Add your images/files here
    ├── img/            ← Photo files (jaimini.jpg, etc.)
    ├── favicon.png     ← Lab favicon (use logo)
    └── cv.pdf          ← Link target in nav
```

---

## 🚀 Hosting Option 1: GitHub Pages (FREE — Recommended)

### Step-by-step:

1. **Create a GitHub repository**
   - Go to https://github.com and sign in
   - Click **New Repository**
   - Name it: `stride-lab` (or any name you prefer)
   - Set it to **Public**
   - Click **Create Repository**

2. **Upload all files**
   - Click **Add file → Upload files**
   - Drag and drop ALL files and folders (index.html, research.html, css/, js/, assets/)
   - Keep the folder structure exactly as shown above
   - Commit the files

3. **Enable GitHub Pages**
   - Go to repository **Settings → Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main branch → / (root)**
   - Click **Save**

4. **Your site will be live at:**
   `https://YOUR-USERNAME.github.io/stride-lab/`

   > **Tip:** If you name the repo `YOUR-USERNAME.github.io`, the site will be at `https://YOUR-USERNAME.github.io/` (no subfolder).

5. **Custom domain** (optional — if you have `stridelab.org` etc.)
   - In Settings → Pages → Custom domain, add your domain
   - Add a CNAME DNS record at your domain registrar pointing to `YOUR-USERNAME.github.io`

---

## 🌐 Hosting Option 2: Netlify (FREE — Easiest drag-and-drop)

1. Go to https://netlify.com and sign up (free)
2. Click **Add new site → Deploy manually**
3. **Drag and drop** the entire `stride-lab/` folder into the drop zone
4. Done! You get a URL like `random-name.netlify.app`
5. In **Site settings → Domain management**, set a custom subdomain like `stride-lab.netlify.app`
6. Connect a custom domain if you have one

✅ Netlify auto-deploys when you drag new files — no GitHub required.

---

## ☁️ Hosting Option 3: Cloudflare Pages (FREE — Fastest CDN)

1. Go to https://pages.cloudflare.com
2. Connect your GitHub repo (or drag-and-drop files)
3. Build settings: **none needed** (pure HTML/CSS/JS)
4. Deploy — get a `*.pages.dev` URL instantly
5. Add your custom domain for free SSL

---

## ✏️ How to Customize

### Add your photo
- Add `assets/img/jaimini.jpg` (your headshot)
- In `people.html`, replace the avatar div with:
  ```html
  <img src="assets/img/jaimini.jpg" alt="Dr. Utkarshani Jaimini"
       style="width:130px;height:130px;border-radius:50%;object-fit:cover;margin:0 auto 12px;display:block;">
  ```

### Add student photos & info
- In `people.html`, replace placeholder names/text with real student info
- Add student photos using the same `<img>` pattern above

### Add a new publication
- Copy one `<div class="pub-item">` block in `publications.html`
- Update title, authors, venue, links, and `data-type` attribute
  - Types: `journal`, `conference`, `workshop`, `demo`

### Add a news item
- Copy one `<div class="news-full-item">` block in `news.html`
- Update the date, title, body, and badge type

### Update stats on homepage
- In `index.html`, find the `stat-card` divs and update the numbers

### Add CV and assets
- Place `cv.pdf` in `assets/` — it's already linked from nav/people pages
- Place your favicon as `assets/favicon.png`

### Update social links
- In `js/components.js`, update the Google Scholar, GitHub, LinkedIn URLs in the footer
- In `contact.html`, update all social profile links

### Change colors
- All colors are CSS variables in `css/style.css` under `:root {}`
- Primary brand colors: `--navy`, `--forest`, `--gold`, `--red`

---

## 📬 Contact Form

The contact form uses a `mailto:` link — no server required. When a visitor clicks
"Send Message," their default email app opens with the message pre-filled.

For a **real form backend** (optional, still free):
- **Formspree** (https://formspree.io) — replace `<form onsubmit="handleSubmit(event)">` with `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **Netlify Forms** — add `netlify` attribute to `<form>` if hosted on Netlify

---

## 🔧 No build step required

This is pure HTML/CSS/JavaScript — no Node.js, no npm, no framework.
Just upload the files and it works.
