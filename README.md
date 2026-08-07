# NikolaGostovikj.github.io

My personal portfolio site — a single scrolling page with About, Projects, Research, and Contact.

Live at: https://nikolagostovikj.github.io

## Stack

Plain HTML, CSS, and vanilla JS. No build step, no framework, no dependencies. Deploys automatically via GitHub Pages on push to `main`.

## Structure

```
index.html          The whole site — hero + #about, #projects, #research, #contact sections
404.html             Custom not-found page
css/style.css         Single stylesheet (theming via CSS custom properties, light/dark mode)
js/main.js            Theme toggle, mobile nav, scroll-spy nav highlighting
favicon.svg           Site icon
assets/images/profile.svg   Placeholder profile photo — replace with a real photo (keep the same filename, or update the <img src> in index.html)
robots.txt / sitemap.xml   Basic SEO plumbing
```

Nav links are anchors (`#about`, `#projects`, etc.) that scroll to sections within `index.html`. The active section is highlighted via `IntersectionObserver` as you scroll.

## Local preview

Open `index.html` directly in a browser, or serve the repo root with a simple static server:

```
python -m http.server
```

then open `http://localhost:8000`.

## Content status

Projects and Research sections are currently empty ("coming soon") pending real entries. The About bio and skills are still placeholder text (in `[brackets]`). Email in the footer/contact section is still a placeholder (`your-email@example.com`); GitHub and LinkedIn links are already live.

## License

MIT — see [LICENSE](LICENSE).
