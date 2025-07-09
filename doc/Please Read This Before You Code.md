
# Server vs Client Logic Check-in Guideline

In Next.js App Router, components are either:

- **Server Components** (default, except public/): Run only on the **server** such as Vercel serverless functions, AWS Lambda or your own Node.js server, components won't be serve to client.
- **Client Components**: Run in the **browser**, declared with `'use client'`


> ⚠️ If a file is marked `'use client'`, then **everything it imports gets bundled and sent to the browser** — including sensitive data if you're not careful.

---

## 🚨 Example of Unsafe Import

```ts
// lib/secretLogic.ts
export const getSecretData = () => {
  return process.env.SUPER_SECRET;
};
```

```ts
// app/components/MyClientComponent.tsx
'use client'
import { getSecretData } from '@/lib/secretLogic'  // ❌ Risky: may expose secrets
```

This may result in **your secrets being included in the client bundle** — a major security risk.

---

## ✅ Safe Pattern: Import Only on the Server

```ts
// app/page.tsx (server component)
import { getSecretData } from '@/lib/secretLogic'

export default async function Page() {
  const secret = getSecretData()
  return <div>Page loaded</div>
}
```

✅ This is safe — the logic runs on the server, and only the HTML output is sent to the client.

---

## 🔒 Best Practices

| Situation | Recommendation |
|-----------|----------------|
| Component has `'use client'` | Don't import server-only code |
| Server-only logic | Keep in `app/api/` or server components |
| Shared utilities | Split into `shared/client/` and `shared/server/` folders |
| Need secrets or DB access | Do it server-side only (never in client components) |

---

## 🔍 How to Verify

Use:
- **Next.js build analyzer**
- **Browser DevTools**

Check what's included in the final bundle — if you see secret logic, it's leaking into the client.

---

## ✅ TL;DR

> Only import **safe, public code** into client components, in other words, client can only has UI div, what UI div to present is all shifted .  
> Server-only logic, secrets, and DB code must stay on the server via API routes or server components.
