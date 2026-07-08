# Holding-page mode

While the new site is being finished, **the only publicly reachable route is the
holding page at `/`.** Everything else redirects back to it.

This is enforced by [`proxy.ts`](proxy.ts) in the repo root — Next 16's
replacement for the old `middleware.ts` convention.

---

## What visitors see

| Route | Public visitor | You (with preview cookie) |
| --- | --- | --- |
| `/` — holding page | ✅ 200 | ✅ 200 |
| `/home`, `/about`, `/services`, `/book`, `/contact`, `/faq`, `/terms`, `/privacy`, `/design` | ↪️ 307 → `/` | ✅ 200 |
| `/admin` | ↪️ 307 → `/` | ✅ 200 (still behind `ADMIN_PASSWORD`) |
| `/api/*` | ↪️ 307 → `/` | ✅ 200 |
| `/cancel/<token>` | ✅ **200 — deliberately open** | ✅ 200 |
| `robots.txt`, `sitemap.xml`, images, `_next/*` | ✅ 200 | ✅ 200 |

### Why `/cancel/<token>` stays open

Booking confirmation emails contain a `/cancel/<token>` link (see
[`lib/booking/email.ts`](lib/booking/email.ts)). Those links are already sitting
in real customers' inboxes. Blocking the route would strand a live booking with
no way to cancel it. The token is unguessable and the path is already
`disallow`ed in [`app/robots.ts`](app/robots.ts), so leaving it open costs
nothing.

### Why `307` and not `308`

A `308` permanent redirect gets cached by browsers. It would keep bouncing
visitors to `/` for weeks *after* launch, from their local cache, with no way
for us to clear it. `307` is temporary and safe.

---

## Viewing the real site

### Locally

Nothing to do. The gate is **off** in local dev:

```bash
npm run dev     # everything visible, no secret needed
```

### On the live site

Visit any page once with the `?preview=` query param:

```
https://www.layanthaimassage.com.au/home?preview=<PREVIEW_SECRET>
```

This sets an `HttpOnly` cookie and unlocks the full site in that browser for 30
days. The secret is stripped from the URL immediately, so it never lingers in
your address bar, history, or an outbound `Referer` header.

> **The real secret is NOT in this repo — this repository is public.**
> It is stored encrypted in Vercel (Production + Preview scopes). Retrieve it
> with `vercel env pull`, or read it from the Vercel dashboard under
> Settings → Environment Variables. Keep a copy in your password manager:
> without it you cannot view your own site on the live domain.

Preview deployments are gated too, because Vercel sets `NODE_ENV=production` on
them. `PREVIEW_SECRET` is set on the Preview scope as well, so the same
`?preview=` link works there.

---

## Environment variables

| Variable | Purpose |
| --- | --- |
| `HOLDING_MODE` | Unset → on in production, off in local dev. `1` forces on (handy for testing the gate locally), `0` forces off. |
| `PREVIEW_SECRET` | The value that `?preview=` must match to unlock the site. If unset in production, **there is no way in.** |

Generate a new secret with `openssl rand -hex 16`.

---

## Going live

Three places to change, all cross-referenced by comments:

1. **Delete [`proxy.ts`](proxy.ts).**
2. **Remove** `HOLDING_MODE` and `PREVIEW_SECRET` from Vercel and
   [`.env.example`](.env.example).
3. **Restore the full route list** in [`app/sitemap.ts`](app/sitemap.ts) — it
   currently emits only `/`.
4. **Drop the `robots` metadata block** in
   [`app/(site)/layout.tsx`](<app/(site)/layout.tsx>), which currently sets
   `index: false, follow: false` on every page under `(site)`.

Step 1 alone makes the site public. Steps 3 and 4 are what get it *indexed* —
easy to forget, and the site will quietly stay invisible to Google without them.
