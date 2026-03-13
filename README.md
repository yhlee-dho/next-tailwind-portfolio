# Next.js Tailwind Portfolio

A personal portfolio built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), configured for deployment on Vercel with an optional HubSpot reverse proxy for serving HubSpot CMS content on a custom domain.

## Tech stack

- **Next.js** 14 (Pages Router)
- **React** 18
- **Tailwind CSS** 3
- **Node.js** 18+
- **@headlessui/react** – accessible UI components
- **@heroicons/react** – icons
- **Vercel** – hosting and rewrites

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later  
- npm (or yarn/pnpm)

If you use [nvm](https://github.com/nvm-sh/nvm), run `nvm use` in the project root to switch to the version in `.nvmrc`.

## Getting started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start dev server         |
| `npm run build` | Production build       |
| `npm run start` | Start production server |
| `npm run lint`  | Run ESLint              |

## HubSpot reverse proxy

The project can act as a reverse proxy for HubSpot CMS so that HubSpot content is served under your own domain (e.g. `yhlee.io`).

### How it works

1. **`vercel.json`** – Rewrites these paths to an internal API route:
   - `/_hcms/*`
   - `/hs/*`
   - `/hubfs/*`
   - `/hs-fs/*`
   - `/cs/c/*`
   - `/e3t/*`

2. **`pages/api/hubspot/[...path].js`** – Proxies requests to the HubSpot CDN and adds the headers HubSpot expects:
   - `X-HubSpot-Trust-Forwarded-For: true`
   - `X-HS-Public-Host` (your public domain, e.g. `yhlee.io`)
   - `X-Client-IP` (end user IP)
   - `X-Forwarded-For`, `X-Forwarded-Proto`, `Host`

The HubSpot origin is set to `50818869.sites-proxy.hscoscdn10.net`. To use a different Hub or region, change `HUBSPOT_ORIGIN` and `HUBSPOT_PUBLIC_HOST` in `pages/api/hubspot/[...path].js` (or move them to environment variables).

### HubSpot setup

1. In HubSpot: **Settings → Website → Domains & URLs** → add your domain with “Connect with HubSpot’s built-in CDN” **off**.
2. Verify the proxy: **Verify Reverse Proxy Connection** for the domain, and visit `https://yourdomain.com/_hcms/diagnostics` and `https://yourdomain.com/_hcms/_worker/headers` to confirm headers.

See [HubSpot’s reverse proxy setup guide](https://developers.hubspot.com/docs/cms/best-practices/testing-staging-performance/reverse-proxies/setup) for full details.

## Deployment (Vercel)

1. Push the repo to GitHub and [import it in Vercel](https://vercel.com/new).
2. Vercel will use the `engines.node` field in `package.json` (Node 18+).
3. Deploy; the `vercel.json` rewrites and HubSpot proxy will apply in production.

To use a custom domain (e.g. `yhlee.io`), add it in the Vercel project’s **Settings → Domains** and ensure `HUBSPOT_PUBLIC_HOST` in the API route matches that domain.

## Project structure

```
├── components/       # React components (header, footer, Intro, Feature, etc.)
├── lib/              # Data and icon helpers (websiteData, icons)
├── pages/            # Next.js pages and API routes
│   ├── api/hubspot/  # HubSpot proxy handler
│   ├── _app.js
│   ├── index.js
│   └── about.js
├── public/           # Static assets
├── css/              # Global styles (Tailwind)
├── next.config.js    # Next.js config (images, etc.)
├── tailwind.config.js
├── vercel.json       # Rewrites for HubSpot paths
└── .nvmrc            # Node 18 for nvm
```

## License

MIT. See [LICENSE](LICENSE) in this repo.

## Links

- [Repository](https://github.com/yhlee-dho/next-tailwind-portfolio)
- [Issues](https://github.com/yhlee-dho/next-tailwind-portfolio/issues)
