# portfolio-v5

Personal portfolio website for Mohammed Sanaullah — distributed systems engineer. Built with React 18, TypeScript, Tailwind CSS, and shadcn/ui. Deployed to GitHub Pages.

Live: [sanaullahmohammed.github.io/portfolio-v5](https://sanaullahmohammed.github.io/portfolio-v5)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite 5 (SWC) |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| Data fetching | TanStack Query v5 |
| SEO | react-helmet-async |
| Icons | lucide-react |
| Deployment | GitHub Actions → GitHub Pages |

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero landing with animated intro and featured projects |
| `/work` | Full project gallery |
| `/work/:slug` | Individual project detail (challenges, stack, features) |
| `/about` | Professional experience, skills matrix, tech stack |
| `/contact` | Contact form |
| `/styleguide` | UI component showcase (dev reference) |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:8080)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── pages/          # Route-level page components
├── components/
│   ├── layout/     # Header, Footer, Layout wrapper
│   ├── ui/         # shadcn/ui primitives (auto-generated)
│   └── icons/      # Custom icon components
├── data/
│   └── projects.ts # Project metadata and content
├── hooks/          # Custom React hooks
├── lib/
│   ├── utils.ts    # cn() utility (clsx + tailwind-merge)
│   └── seo.ts      # SEO constants and URL helpers
└── main.tsx        # Entry point
```

---

## Adding a Project

Edit [src/data/projects.ts](src/data/projects.ts). Each entry follows this shape:

```ts
{
  name: "Project Name",
  slug: "project-slug",           // used in /work/:slug route
  description: "Short tagline",
  fullDescription: "Long description...",
  stack: ["TypeScript", "React"],
  impact: "What it achieved",
  challenges: ["Challenge 1", "Challenge 2"],
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/...",
  demo: "https://...",            // optional
  status: "WIP"                   // optional badge
}
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

Vite is configured with `base: '/portfolio-v5/'` so all asset paths resolve correctly under the GitHub Pages subdirectory.

The `index.html` includes the [spa-github-pages](https://github.com/rafgraph/spa-github-pages) redirect script so deep links (e.g. `/work/nexusops`) survive hard refreshes and direct navigation.

---

## Design Tokens

The visual identity uses CSS custom properties defined in [src/index.css](src/index.css):

- **Background:** Deep dark graphite `hsl(240, 43%, 7%)`
- **Primary accent:** Neon green `hsl(130, 100%, 50%)`
- **Fonts:** Inter (body/headings), JetBrains Mono (code/labels)
- **Dark mode:** Class-based (`dark`), supports system preference

---

## License

MIT
