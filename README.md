# Naseeha

Clean **Next.js 15** + **Payload CMS** project.

## Setup

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Environment**

   Copy `.env.example` to `.env` and set:

   - `PAYLOAD_SECRET` – long random string for auth/sessions
   - `DATABASE_URL` – MongoDB connection string (e.g. `mongodb://localhost:27017/naseeha`)

3. **Run**

   ```bash
   pnpm dev
   ```

- **App:** [http://localhost:3000](http://localhost:3000)
- **Admin:** [http://localhost:3000/admin](http://localhost:3000/admin) — create your first user here

## Scripts

- `pnpm dev` – start dev server
- `pnpm build` – production build
- `pnpm start` – run production server
- `pnpm generate:types` – regenerate Payload TypeScript types

## Stack

- **Next.js 15** (App Router)
- **Payload 3** (admin, REST + GraphQL API)
- **MongoDB** (via `@payloadcms/db-mongodb`)
- **Lexical** rich text, **Sharp** for images

Add collections and fields in `src/collections/` and `src/payload.config.ts`.
# dr.-naseeha-s-homoeopathic-clinic-melattur
