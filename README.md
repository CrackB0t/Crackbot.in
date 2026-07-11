# Crackbot Website

Independent Cybersecurity Research Group — Landing page & research portal.

## Stack

- **Astro** — Static site generation
- **Tailwind CSS** — Styling
- **Vercel** — Deployment

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # Reusable components (TerminalHeader, FocusCard)
├── layouts/        # Page layouts
├── pages/          # Routes (index.astro)
├── styles/         # Global styles
└── data/           # JSON data (focus-areas, site config)
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Framework preset: Astro
4. Deploy

## Roadmap

See [ROADMAP.md](ROADMAP.md) for the progressive enhancement plan.
