# danhtran8989.github.io

A personal portfolio and GitHub Pages site built with [Astro](https://astro.build). The layouts are based on the seven Figma templates in `figma_template/` — About, Blog, CV, Resume, Projects, Certificates, and Certifications — restyled after the Free Portfolio landing template in `figma_template/others/`.

## Visual system

The style is near-black violet gradients, oversized centered display type, thin hairline rules, small uppercase labels, and image-led cards. Corners stay close to square (`2px`–`6px`), not pill-shaped.

| Role | Light | Dark |
| --- | --- | --- |
| Background | `#F7F3FF` | `#0B0712` |
| Ink / text | `#1A1029` | `#F4EFFF` |
| Accent (amethyst / violet) | `#7C3AED` | `#A78BFA` |
| Soft surface | `#F2EBFD` | `#1C1529` |
| Deep panel | `#241040` | `#1A1128` |

Typography is **Syne** for headings and **Rubik** for body copy, loaded from Google Fonts in `src/layouts/Layout.astro`.

The same system lives in Figma: [Dan Tran Portfolio — Design System](https://www.figma.com/design/mlOVrrBJkLuXVxZ3iPkxY4) has a `Palette` variable collection, the Syne/Rubik text styles, a style guide frame (`01 · Style Guide`), and a dark home page frame (`02 · Home`).

All tokens live in `src/styles/global.css`. The theme follows the visitor's system preference on first visit, can be toggled in the header, and is remembered in `localStorage`. Append `?theme=dark` or `?theme=light` to any URL to force a theme.

## Search

The header has a site search palette. Open it with the search button, `Ctrl K` (`⌘ K` on macOS), or `/`, then filter pages, writing, projects, credentials, and links by keyword. Use the arrow keys to move, `Enter` to open a result, and `Esc` to close. The index is defined in `src/data/search.ts` and the interface lives in `src/components/SearchDialog.astro`.

## Pages

| Route | Page |
| --- | --- |
| `/` | Landing page (hero, about preview, featured projects, recent notes) |
| `/about` | About |
| `/blog` | Blog index |
| `/blog/[slug]` | Article layout |
| `/cv` | Curriculum vitae |
| `/resume` | Resume |
| `/projects` | Projects |
| `/certificates` | Certificates |
| `/certifications` | Certifications |

## Commands

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # preview the production build
```

## Editing content

All page content is configured in YAML files under `src/config/`:

- `site.yaml` — name, domain, email, navigation, social links, and footer labels (`eyebrow`, `note`, `linksLabel`, `contactLabel`).
- `home.yaml` — landing page copy: hero, about preview, sections, and principles heading.
- `about.yaml`, `cv.yaml`, `resume.yaml` — page copy and sections.
- `projects.yaml`, `certificates.yaml`, `certifications.yaml`, `notfound.yaml` — lists and page copy. `projects.yaml` also holds the card labels (`labels.scope`, `labels.stack`).
- `blog.yaml` — posts and article content.

`src/data/config.ts` parses the YAML and `src/data/site.ts` re-exports it, so pages and the search index keep importing from one place.

- Search index and keywords: `src/data/search.ts`.
- Shared layout, theme toggle, and print behavior: `src/layouts/Layout.astro`.
- Header, search palette, and footer: `src/components/Header.astro`, `src/components/SearchDialog.astro`, `src/components/Footer.astro`.
- Project cards: `src/components/ProjectCard.astro` (gradient art panels, no stock photos).
- Per-page styles: `src/pages/` and `src/styles/global.css`.

The "Download full CV" and "Download resume" buttons open the browser print dialog, so the pages can be saved as a PDF without maintaining a separate file. Print styles are included in `src/styles/global.css` and each page.

## Deployment

The site is configured for GitHub Pages in `astro.config.mjs` with the `https://danhtran8989.github.io` site URL and a `/` base path.
