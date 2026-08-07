# NikolaGostovikj.github.io

My personal portfolio site — projects, research, and writing.

Live at: https://nikolagostovikj.github.io

## Stack

Plain HTML, CSS, and vanilla JS. No build step, no framework, no dependencies. Deploys automatically via GitHub Pages on push to `main`.

## Structure

```
index.html          Home
about.html           About / bio / skills
projects.html        Projects listing (add individual project pages under projects/ as you add entries)
research.html        Research listing (add individual writeups under research/ as you add entries)
blog/                Blog listing (blog/index.html) — add individual posts here as you write them
contact.html         Contact page
404.html             Custom not-found page
css/style.css         Single stylesheet (theming via CSS custom properties, light/dark mode)
js/main.js            Theme toggle, mobile nav, active-link highlighting
favicon.svg           Site icon
assets/images/profile.svg   Placeholder profile photo — replace with a real photo (keep the same filename, or update the <img src> on index.html/about.html)
robots.txt / sitemap.xml   Basic SEO plumbing
```

All pages use root-relative asset paths (`/css/style.css`, `/js/main.js`, `/about.html`, etc.) so the same header/nav/footer markup works unchanged regardless of a page's folder depth.

## Local preview

Because paths are root-relative, opening `index.html` directly via `file://` will not resolve them correctly. Serve the repo root with a simple static server instead, e.g.:

```
python -m http.server
```

then open `http://localhost:8000`.

## Content status

Projects, Research, and Blog sections are currently empty ("coming soon") pending real entries. Other pages contain placeholder text (in `[brackets]`) — replace with real bio/copy. Email in the footer/contact page is still a placeholder (`your-email@example.com`); GitHub and LinkedIn links are already live.

## License

MIT — see [LICENSE](LICENSE).
