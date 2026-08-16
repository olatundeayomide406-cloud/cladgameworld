# CLADGAMEWORLD —Gaming Hub

A premium gaming-services marketplace for boosting, modding, recovery, top-ups, leveling, rank progression, item farming, unlocks, and game accounts. The experience includes a conversion-focused storefront, searchable game directory, configurable product pages, cart and checkout, customer order tracking, editorial content, support and policy pages, plus an operations dashboard.

## Technology

- TanStack Start, React 19, TypeScript, and Tailwind CSS 4
- Netlify deployment and Netlify Functions
- Netlify Database managed Postgres with Drizzle ORM
- Stripe-hosted secure checkout
- Lucide icon system and a custom responsive esports design system

## Local Development

1. Install dependencies with `pnpm install`.
2. Configure `STRIPE_SECRET_KEY`, `SITE_URL`, and `ADMIN_API_KEY` in a local Netlify environment.
3. Run `netlify dev --port 8889`.
4. Open `http://localhost:8889`.

Netlify applies migrations from `netlify/database/migrations` automatically. Do not run migrations directly against the managed database.

## Main Routes

- `/` — premium marketplace homepage
- `/catalog` — services, search, and complete game directory
- `/games/:gameSlug` — individual game storefronts
- `/services/:serviceSlug` — service category pages
- `/products/:productId` — configurable product pages
- `/cart` and `/checkout` — purchase flow
- `/account` — customer dashboard and order history
- `/admin` — operations and analytics dashboard
- `/blog` and `/info/:page` — editorial, support, FAQ, and legal content

## Production Integrations

Stripe checkout works when its server-side credential is present. PayPal and cryptocurrency choices are represented in the checkout experience and require their production provider credentials and server callbacks before accepting live payments. Customer authentication, transactional email, invoice rendering, and Cloudinary uploads should likewise be connected to production provider accounts before launch.
