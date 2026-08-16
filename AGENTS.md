# ADME Apex Gaming Hub

## Architecture

- `src/routes` contains TanStack Start file-based storefront, catalog, account, checkout, content, and admin routes.
- `src/components` contains shared marketplace UI, including the global shell and product cards.
- `src/data/catalog.ts` is the curated presentation catalog used as the deploy-safe storefront seed.
- `db/schema.ts` defines the persistent Netlify Database schema with Drizzle ORM.
- `netlify/functions` contains server-side API endpoints.
- `netlify/database/migrations` contains generated migrations applied by Netlify during deployment.

## Conventions

- Use TypeScript and functional React components.
- Keep shared catalog types and slugs in `src/data/catalog.ts`.
- Preserve the dark esports design system and CSS custom properties in `src/styles.css`.
- Add persistent business data to Netlify Database; do not use JSON files or in-memory stores as a database.
- Generate a named Drizzle migration after every schema change.
- Keep payment and administrator credentials server-only and access them through environment variables.

## Key Decisions

- Dynamic game routes provide an individual landing page for every supported title without duplicating components.
- The static catalog is a polished fallback and seed layer; the database schema supports moving all management into the admin API.
- Stripe checkout is enabled only when `STRIPE_SECRET_KEY` is configured.
- Admin write requests require the server-side `ADMIN_API_KEY` header.
- The admin route intentionally renders without the storefront navigation shell.
