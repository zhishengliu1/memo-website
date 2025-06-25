# NodeJs and Npm
1. install Node Version Manager by `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
2. This project requires Node.js version specified in `.nvmrc`. Please use [nvm](https://github.com/nvm-sh/nvm) to install and use the correct version:

```sh
nvm install
nvm use
```

# Product Showcase Web App with Stripe Payments

This project is a scalable, minimal web application built with [Next.js](https://nextjs.org) for showcasing products and supporting Stripe payments.

---

## Project Structure

```
├── public
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src
│   ├── app
│   │   ├── api
│   │   │   └── stripe
│   │   │       └── route.ts
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shared
│   │   ├── components/
│   │   ├── hooks/
│   │   └── utils/
│   ├── styles
│   │   └── globals.css
│   └── types
│       └── global.d.ts
├── tests
│   └── integration/
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

**Key Points:**
- `app/page.tsx` — Main entry point for the root route (`/`).
- `app/layout.tsx` — Root layout for shared UI and providers.
- `shared/components/` — Reusable UI components.
- `shared/hooks/` — Reusable hooks.
- `shared/utils/` — Utility functions.
- `app/api/` — Next.js API routes for backend logic (e.g., Stripe webhooks).
- `styles/` — All global and modular CSS/SCSS files.
- `types/` — Global types.
- `tests/` — Integration and E2E tests.
- `public/` — All vector assets.
- `.env.example` — Document all required environment variables.
---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **(Optional) Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your Stripe keys and other secrets.
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Stripe Integration
- All payment logic and Stripe API calls should be placed in `src/config/stripe.ts`, `src/features/checkout/`, and `src/app/api/stripe/`.
- Never commit real API keys or secrets. Use environment variables only.
- Test payments using Stripe's test mode and keys.

---

## Contribution & Code Check-in Guidelines
- **Organize code by feature**: Place new features in `src/features/` and reusable components in `src/shared/components/`.
- **Type safety**: Use TypeScript for all code. Define types in `src/types/` or colocate with features.
- **Testing**: Add or update tests in the relevant feature or in `/tests/` for integration/E2E.
- **Secrets**: Never commit `.env.local` or any secrets.
- **Pull Requests**: All changes must be submitted via pull request with a clear description and linked issue (if applicable).
- **Code Review**: At least one approval is required before merging.
- **Documentation**: Update this README or add docs for any new features or significant changes.

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Stripe Docs](https://stripe.com/docs)
- [Testing Next.js](https://nextjs.org/docs/testing)

---

## Deployment

- Deploy easily on [Vercel](https://vercel.com/) or your preferred platform.
- See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
