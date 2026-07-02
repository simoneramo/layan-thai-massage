# Plan — Layan Traditional Thai Massage website

## Context

Greenfield, empty directory. We're building a single-page marketing website for **Layan Traditional Thai Massage** (Frankston, Melbourne 3199), strategic focus = brand awareness. The deliverable is one self-contained `index.html` styled to match the existing flyer's calm, feminine plum/blush/cream brand, while reserving `red-800` for the dominant "Book Now" CTA per the brief.

### Locked decisions

- **Colours:** Blend — plum/mauve + blush-rose + cream base (from flyer); `red-800` reserved exclusively for the primary "Book Now" CTA so it dominates.
- **Phone (Call Now CTA):** 0451 250 064
- **Brand name:** "Layan Traditional Thai Massage"
- **Structure:** Single scrolling `index.html` with anchor-nav.
- **CTAs (only these two):** Primary "Book Now" (red-800, dominant, appears in hero + 2 more sections). Secondary "Call Now (0451 250 064)" (ghost/outline, subordinate).

## Tech approach

- **Tailwind CSS v4** via browser CDN (`@tailwindcss/browser@4`) — no build step.
- `darkMode: class` via `@custom-variant dark` in an inline `@theme`/tailwindcss style block. 3-state toggle (Light → Dark → Auto) in header, persisted to `localStorage['theme']`, with `matchMedia` listener for Auto.
- **Alpine.js** (CDN) for: mobile nav, FAQ accordion, theme toggle state, testimonial behaviour.
- **Lucide icons** (CDN, `lucide.createIcons()`) — no emoji/FA/Heroicons.
- **Google Fonts:** 2 sans families — `Plus Jakarta Sans` (headings) + `Inter` (body).
- **Scroll reveals:** Intersection Observer, `once`, fade + translate-y, staggered; all motion wrapped in `@media (prefers-reduced-motion: no-preference)`. Hero entrance via CSS `@keyframes` fade-up.
- Semantic HTML5 (`header/nav/main/section/article/footer`); smooth scroll; hover + focus states on all interactive elements; descriptive alt text.

## Design system applied

- **Palette (tints of brand only):** plum/mauve primary brand colour, blush-rose (`rose-100/200`) + cream (`amber-50/100`) neutrals (70–80%), soft cyan (`cyan-100/200`) as supporting accent (15–20%), `red-800` for primary CTA only (5–10%). Dark mode uses `gray-900/800` surfaces with `gray-100/300` text. All text meets WCAG AA (4.5:1 / 3:1).
- **Shape:** one consistent radius (rounded-2xl) + one subtle shadow scale (cards L1 → buttons L2 → dropdown L3 → modal/none L4).
- **Image treatment (ONE, applied to ALL):** rounded-2xl with subtle plum overlay. Hero `aspect-[16/10]`, cards `aspect-[4/3]`, gallery alternating `[4/3]`/`[3/4]`, testimonial avatars `aspect-square rounded-full`. Unsplash spa/Thai-massage queries.
- **Layout rhythm:** alternating light/tinted/dark section backgrounds (never two same in a row); vary column structure section-to-section (60/40, centered, offset grid); vary section padding. Mobile: px-5 min, 44px touch targets, full-width stacked buttons, text-before-image stacking.
- **Card layouts must each differ** — services (image-top card) ≠ benefits (icon+heading+text, used once) ≠ testimonials (avatar+quote). No repeated icon→heading→text.

## Section outline (single index.html)

1. **Header / nav** — logo wordmark, anchor links, theme toggle, Book Now button. Mobile hamburger (Alpine).
2. **Hero** — asymmetric 60/40, left copy + both CTAs, right arched/rounded image. Fade-up entrance. Headline ≤8 words, one accent keyword.
3. **Trust strip** — tinted bg; small stats / reassurance row (different layout).
4. **Services** — image-top cards: Oil & Foot Massage, Traditional Thai, Remedial/Sport, Stress Relief, Aromatherapy (from flyer: oil & foot, reduce stress, sport pains). `aspect-[4/3]`.
5. **About / Why us** — 40/60 image-left text-right on tinted or dark panel; reassuring copy. Repeat Book Now CTA.
6. **Benefits** — icon + heading + text layout (used ONCE here), Lucide feature icons.
7. **Gallery** — offset grid, alternating aspect ratios.
8. **Testimonials** — avatar (round) + quote cards; local Frankston voices.
9. **FAQ** — Alpine accordion.
10. **Contact** — split: lead form (name, email, phone, preferred service, message) + business info (address, phone, hours, FB). Repeat Book Now / Call Now. Form matches radius/shadow system.
11. **Footer** — brand, nav, hours, phone, FB link. No animation.

## Build order (delivered in parts per brief, then combined)

- **Part 1:** Document head (Tailwind config, fonts, keyframes, theme-toggle + reveal scripts), header/nav, hero, trust strip.
- **Part 2:** Services, about, benefits, gallery.
- **Part 3:** Testimonials, FAQ, contact form, footer + final assembly into single `index.html`.

## Anti-patterns guarded against

No center-alignment everywhere; no repeated card layout; no generic gradients/blobs; no Lorem ipsum; ≤2 fonts; motion limited to hero/scroll/hover; no extra UI (no back-to-top/cookie/chat); varied spacing; only the two specified CTAs.

## Verification

- Open `index.html` in a browser (e.g. `open index.html`); check at 375 / 768 / 1280px.
- Confirm: theme toggle cycles Light→Dark→Auto and persists on reload; mobile nav opens/closes; FAQ accordion works; anchor links smooth-scroll; scroll reveals fire once; hover + focus visible on all buttons/links; Book Now is visually dominant and appears in hero + 2 sections; Call Now shows 0451 250 064; all images load with alt text; reduced-motion disables animations.

old copy

home page

The Origin of Thai Massage
Traditional Thai Massage is an ancient system of healing with its roots in Yoga, Ayurvedic medicine and Buddhist spiritual practice. This unique and complete system of Yoga therapy combines rhythmic massage, acupressure, gentle twisting, deep stretching and meditation. Thai Massage releases tension, increases vitality and creates wholeness of mind, body and spirit.

“Flowing” and “rhythmical” describes exactly the sequence of unhurried presses, stretches and twists that make up a complete Thai massage. The sheer number and variety of techniques used in a typical routine is somewhat bewildering to the learner.

There are over one hundred of them! At all times the position of the masseur/ masseuse relative to the receiver is just as important as the way the particular technique is applied.

Within a full massage sequence there seems to be endless nuances of tempo and pressure. There are no sharp discontinuities or sudden changes of form – one movement melts into another smoothly and harmoniously. There is never a suggestion of haste.

Thai traditional massage basics
Thai massage is an ancient art of body therapy for healing, health, and transformation. It is an interactive manipulation of the body using passive stretching and gentle pressure along energy lines. These movements help to:

Adjust the skeletal structure
Increase flexibility
Relieve muscular and joint tension
Stimulate internal organs
Balance the body’s energy system

Thai Traditional Massage

Thai Traditional Massage

what-is-thay-massage

We perform this massage on a traditional thai massage table. It is a fully clothed massage (no oil is used) and the technique consists of placing gentle but firm pressure on the body with the palms and thumbs, which relaxes and stretches the limbs and back. It works on the skin, muscles, organs and the skeletal structure. Blood and lymph circulation is increased and toxins are removed from the tissues. It will leave you feeling relaxed and invigorated.

The purpose of Thai massage is to bring the body, mind, and spirit into a state of balance and harmony, providing an opportunity for self-healing. The practitioner always begins the session with “Puja”, a moment of centering and connection, paying attention to Promwihan Sii, the Four States of Mind: loving kindness, compassion, vicarious joy, and equanimity.

traditional-massage-room

This practice helps therapist and receiver to enter a state of meditation,to be mindful of prana (energy and breathing), creating an empty vessel to receive healing energy and to achieve freedom from attachment.

During Puja, the practitioner recognizes and asks for assistance from the lineage of teachers (God, Buddha, Dr. Jivaka, her own personal teacher). The practitioner checks in with herself to make sure she is okay with doing the session and with working with the person on her mat. She asks for healing for the receiver, herself, anyone else she knows who needs healing, the world and the earth.

Traditional Thai Massage

The Ancient art of applying pressure on to specific areas of the body. Thai massage works on the tendons to relax the muscles, improve blood circulation and combined with specific stretching, will greatly improve energy levels. Especially beneficial for sports or work related pain.
60 mins. $70
90 mins $110

Essential oil Massage

An ancient Thai remedy using the healing power of essential oils, and massage, to stimulate blood flow, thereby relieving sore and tired muscles, and leaving your body feeling calm and relaxed
60 mins. $70

Thai Foot Massage and Reflexology

The ancient traditional art of applying pressure to specific points in your feet and lower legs, and massage the pressure point in your feet. This will improve blood circulation and release tension
30 mins. $35
60 mins. $60

Full Back Massage

Traditional Thai Massage is concentrated on your back area, from neck down, and ideal for lower back and or neck pain. (inc. Sciatica)
30 mins $40

Shoulder and Neck Massage

When you are feeling tension and stiffness in this area, our trained masseurs will apply traditional massage to ease pain and soreness. Again we concentrate on your pressure points to relax your muscles.
30 mins. $35

Shoulder, Neck & Head Massage

This is similar to shoulder and neck, and includes all of your head and face areas, and is designed to relieve tension and head pai
45 mins. $50

Head Massage

Our trained masseurs will concentrate on your head neck and face, massaging pressure points to relieve tension and head pains, and improve blood circulation
15 mins. $15

 The Benefits – How Thai Massage May Help

Unlike Western massage styles, the Thai version focuses on circulation and pressure points, promoting internal health as well as muscular flexibility. Treatment often begins with the feet and gradually moves upwards towards the head. The body is gently arranged into four positions (face-down, face-up, side, and sitting position), which enables the masseur to perform a variety of exercises that would be otherwise unworkable.

Rhythmic compressions, rolling of limbs, and gentle rocking are Thai massage methods employed in order to relax and realign energies in the body. Varying amounts of pressure are applied to energy lines (or ‘Sen’) along the body in accordance with the Ayurvedic principles of balancing one’s energy.

Elbows, feet, knees, and forearms are used to execute certain strokes and manipulations, making the experience quite physical for both parties. Finding oneself in the lap of a masseur, though occasionally surprising, is not uncommon and serves to augment a deep stretch.

Traditional Thai Massage technique is known as the most holistic type of therapy. It combines modern scientific knowledge of anatomy of physiology with the disciplines of traditional oriental medicine. It employs combinations of rhythmic acupressure, body rocking and deep assisted stretches to relieve muscular tension and enables more blood to be carried throughout the body.

A number of gentle techniques are carried out on the floor using the feet, knees, elbows, palms, forearms and thumbs. Treatment generally falls into one of two categories; full body routines and localised therapy and may last between 30 minutes to 2 hours.

Thai Massage is a therapeutic massage and a traditional treatment for relieving stress and tension, and for the treatment of back pain, stiff neck, shoulder pain, and sports injuries including muscle and tendon strain.

Thai Massage vigorously treats many areas of the body, using hand pressure and the masseur’s own body to apply forces that aim to work pressure points, and re-align energy lines in the body. Ideally, this process takes at least one to two hours and can be a little uncomfortable at times, but leaves you feeling very relaxed.

Phone: 0451 250 064
Please call to book an appointment

Layan Traditional Thai Massage
3/459 Nepean Hwy, Frankston VIC 3199
email: <info@layanthaimassage.com.au>
Opening hours:
Mon to Fri 9:30am to 6.00pm
Sat 9:30am to 5:00pm.
Sun Closed

Layan Traditional Thai Massage
3/459 Nepean Hwy, Frankston VIC 3199, Australia
4.5
24 reviews
All
friendly staff7
massages4
Sort by
Most relevant
Newest
Highest rating
Lowest rating
Chris Nichols
Local Guide·14 reviews·2 photos
3 months ago
Had my first time here today as a walk in as a friend highly recommended going to see Annie. Thankfully she had space for a 90-minute session. It was the best massage l have had in a while she was very thorough and polite and targeted all …More
❤️1
Matias Aquino
Local Guide·15 reviews·2 photos
a year ago
Hands down one of the best massages I've ever had. Precise, honest and value for money. Will be a weekly occurrence coming to see Annie. Thank you very much
❤️2
joanne garan
3 reviews
3 years ago
I have to say that this is the best massage place ….I always book an ‘essential oil massage’….it is relaxing and yet the ladies smooth out all of my aches and pains…i have been there 3 times now and have booked again….I always walk away feeling great and always look forward to the next massage 👌
🙏1
Christine Tyler
6 reviews
6 years ago
Love this place and love the lovely ladies that work hard there.
Best massages ever and I just happen to be going there tomorrow.
Can't wait 🤗🤗😀😁
🙏1
Kristian Lambrecht
14 reviews·3 photos
3 years ago
Excellent,girls are happy friendly,made feel comfortable,left feeling brand new,if you work hard ,give yourself a treat,you won’t regret it 👍
🙏2
Kerry Stueven
8 reviews
6 years ago
Every time I've been here for a massage it has always been exceptional with very professional staff
🙏1
Jacqui Collie
15 reviews·1 photo
3 years ago
Anna, her staff and the place is amazing, very good value
🙏1
steven davey
Local Guide·205 reviews·43 photos
7 years ago
Best thai massage on Peninsula.
Very welcoming and professional staff.
🙏1
Cherie Ann
Local Guide·58 reviews·174 photos
3 years ago
Clean, friendly and great massages
TFF
Local Guide·234 reviews
8 years ago
Value for price and good service.
🙏1
iFonehaven “iFone Haven” IFonerepairs
Local Guide·40 reviews·14 photos
6 years ago
Always the best thanks apple
❤️1
The Rhodesyez
Local Guide·83 reviews·9 photos
4 years ago
Great friendly service
🙏2
Ashleigh Bryce
8 reviews
4 years ago
Always polite and professional!
🙏2
Robbie Brent
Local Guide·30 reviews
7 years ago
Proper massage! Feel amazing!
🙏1
Shae Wheeler
Local Guide·38 reviews·7 photos
3 weeks ago
New
Brilliant, relaxing & technically talented.
Maddie Healey
5 reviews·5 photos
a year ago
Amr Farghali
Local Guide·36 reviews·19 photos
5 years ago
Kelly McKenzie
Local Guide·30 reviews
5 years ago
Rodney Slow
Local Guide·24 reviews
6 years ago
Rachael Scholler
Local Guide·51 reviews·14 photos
6 years ago
Fran Gaffney
Local Guide·38 reviews·132 photos
7 years ago
Melissa Haddon
2 reviews
7 years ago
Jim Y
7 years ago
Aor Srikueaklin
9 years ago

---

## Online booking — production persistence (Neon Postgres)

_Added 2026-06-09. Done and deployed to production (verified live)._

### Problem

The online booking feature (`/book`, `/admin`, `/cancel/[token]`) persisted to a
JSON file on disk (`data/bookings.json`) via `lib/booking/store.ts`. That cannot
work on Vercel: serverless filesystems are ephemeral and read-only outside
`/tmp`, instances aren't shared, and the in-process mutex only serialised calls
within a single instance — so writes would fail and concurrent requests could
double-book. This is an architecture issue, not a plan-tier one (Pro doesn't
change it).

### What was done

Swapped the file store for **Neon Postgres**, keeping a zero-config local
fallback. The rest of the app is unchanged — every caller still imports the same
store functions.

- **`lib/booking/schema.sql`** — `bookings` table. Times stored as naive
  `timestamp` (the app works in one fixed studio wall-clock). A generated
  half-open `tsrange` column `during`, plus the key guard:
  `CONSTRAINT bookings_no_overlap EXCLUDE USING gist (during WITH &&) WHERE (status = 'confirmed')`.
  The **database itself** now refuses any overlapping confirmed booking — this
  replaces the fragile in-process lock and holds across multiple serverless
  instances. A conflicting insert raises SQLSTATE `23P01`, mapped to a 409.
- **`lib/booking/store-types.ts`** — shared `BookingStore` interface.
- **`lib/booking/store-pg.ts`** — Postgres backend via `@neondatabase/serverless`
  (`sql.query(text, params)`), lazily connected so importing it without
  `DATABASE_URL` never throws. Maps rows back to the app's `Booking` shape and
  formats timestamps back to `"YYYY-MM-DDTHH:mm"`.
- **`lib/booking/store-file.ts`** — the original JSON-file logic, unchanged
  behaviour, kept for local dev.
- **`lib/booking/store.ts`** — now a selector: Postgres when `DATABASE_URL` is
  set (prod/preview), else the JSON file. The local file-store fallback means dev
  keeps working with zero setup whenever `DATABASE_URL` is unset.
- **`scripts/migrate.mjs`** + `npm run db:migrate` — applies the schema
  (idempotent); `npm run db:migrate -- --import` optionally imports
  `data/bookings.json`.
- **`.env.example`** — documented `DATABASE_URL` (use the pooled Neon string).
- Added dependency `@neondatabase/serverless` (`^1.1.0`).

### Provisioning (done)

- Neon project `layan-thai-massage`, region AWS Sydney (`ap-southeast-2`),
  account `wemakesmall+layan-thai-massage@gmail.com`.
- Pooled connection string set as `DATABASE_URL` locally and in Vercel
  (Production + Preview), alongside the existing `RESEND_API_KEY`,
  `BOOKING_FROM_EMAIL` (verified domain), `BOOKING_TO_EMAIL`, `ADMIN_PASSWORD`.
- `npm run db:migrate` applied the schema to Neon (table + constraint + indexes
  verified present).

### Verification (booking persistence)

- Typecheck + production build green.
- **Live double-booking test:** two concurrent POSTs to `/api/bookings` for the
  same slot returned one `200 {ok:true}` and one `409 "That time was just
  taken."`; exactly one row was written (the loser never inserted). Test rows
  then deleted. **Overlapping bookings are now physically impossible** even
  across concurrent serverless instances.
- Production deploy smoke-tested — confirmed working.

### Optional follow-up (not scheduled)

- **`NEXT_PUBLIC_BASE_URL`** — cancel links currently use the live request
  origin, which is fine. If a custom domain is later put in front, set this to
  the canonical URL so cancel links always point at the primary domain. Not
  urgent; set it whenever the domain lands.

---

## Pre-launch — what's needed from the client

_Added 2026-06-09. Site + online booking are built and live on a temporary
Vercel URL. These are the blockers before public launch — most need client
input rather than dev work._

### Needs client input

1. **Domain** — confirm ownership of `layanthaimassage.com.au` (or chosen
   address) and get DNS access to point it at Vercel. Until then the site is on
   the temporary `*.vercel.app` URL. After the domain lands, also set
   `NEXT_PUBLIC_BASE_URL` (see above) so cancel links use the canonical host.
2. **Real photos** — replace Unsplash placeholders with: shop front / signage,
   treatment rooms + reception, and (optional) the team. Phone photos are fine.
3. **Facebook page link** — get the real page URL. `site.facebook` in
   [lib/site.ts](lib/site.ts) is still the placeholder `https://www.facebook.com/`.
4. **Confirm details** — services / durations / prices
   ([lib/booking/config.ts](lib/booking/config.ts)), opening hours, phone
   `0451 250 064`, address `3/459 Nepean Hwy, Frankston VIC 3199`.
5. **Booking inbox** — confirm `BOOKING_TO_EMAIL` (currently
   `info@layanthaimassage.com.au`) is the right destination.
   _[Superseded 2026-07-01 — see "Go-live" below: client is dropping domain
   email, so `info@…` will bounce. Booking destination still to be decided.]_
6. **Admin password** — client picks a password (or we set a secure one and
   share it) for `ADMIN_PASSWORD` / the `/admin` bookings dashboard.

### Dev tasks gated on the above

- Set real `facebook` URL in [lib/site.ts](lib/site.ts) once provided.
- Swap stock images for client photos.
- Set production `ADMIN_PASSWORD` (not `change-me`) in Vercel env.
- Confirm `BOOKING_FROM_EMAIL` uses the verified domain sender (not the
  `onboarding@resend.dev` fallback).
- Connect domain in Vercel + set `NEXT_PUBLIC_BASE_URL`.

---

## Go-live — holding-page launch (2026-07-01)

_The client wants the domain live now, before the full site is finished, so the
homepage was swapped for a standalone holding page. The real site stays built
but hidden until they're ready to reveal it._

### What changed in the code

- **`/` is a standalone "coming soon" holding page** ([app/page.tsx](app/page.tsx)) —
  no header/footer nav, so visitors can't reach the rest of the site.
- **Real homepage moved to `/home`** ([app/(site)/home/page.tsx](<app/(site)/home/page.tsx>)),
  unchanged content.
- **All site pages live in an `(site)` route group** with its own layout
  ([app/(site)/layout.tsx](<app/(site)/layout.tsx>)) carrying the Header/Footer
  chrome. URLs are unchanged (route groups don't affect paths).
- **Root layout** ([app/layout.tsx](app/layout.tsx)) stripped of chrome so `/`
  renders standalone.
- **Full site is `noindex`'d** (robots meta in the `(site)` layout) and the
  **sitemap trimmed to just `/`** ([app/sitemap.ts](app/sitemap.ts)) — only the
  holding page is crawlable while in this mode.
- Internal `/` and `/#…` links repointed to `/home` (Header logo, nav,
  Footer, breadcrumbs).
- Committed + pushed to `main` (`a21e6d9`) → Vercel auto-deploys production.

### Go-live steps (mechanical)

1. ✅ Code on `main`, pushed → Vercel builds production automatically.
2. ✅ Domain (`layanthaimassage.com.au` + `www`) added in the Vercel project.
3. 🔄 **Point DNS at Vercel** — the VentraIP zone already holds the correct
   records (`A @ = 216.198.79.1`, `CNAME www = 20912264852fcddb.vercel-dns-017.com`,
   **no MX** since email is being dropped). Switch the domain's nameservers **at
   the registrar** to `ns1/ns2/ns3.nameserver.net.au`.
4. ⏳ Wait for propagation — Vercel flips "Invalid Configuration" → "Valid" on
   its own (minutes to a few hours).
5. ⬜ Verify: `https://layanthaimassage.com.au` loads the holding page and `www`
   redirects to it. Check with `dig +short layanthaimassage.com.au NS` (should
   show `nameserver.net.au`) and `... A` (should show `216.198.79.1`).

### Email decision (2026-07-01)

- Client is **dropping domain email entirely** — no mailbox, no MX record.
- Old email was self-hosted on the previous host (`supercp.com` nameservers,
  `68.66.216.29`); switching nameservers away ends it. Save any wanted mail
  from the old host first.
- ⚠️ **Booking-form trap:** the contact/booking form ([app/actions.ts](app/actions.ts))
  sends via Resend to `BOOKING_TO_EMAIL` (defaults to `info@…`). With no MX
  that address bounces, but the customer still sees "success" → **requests are
  lost silently.** Before/at nameserver switch, either (a) point
  `BOOKING_TO_EMAIL` at an inbox the client checks (a personal Gmail is fine —
  no domain mailbox needed), or (b) flip the form to "please call us" mode so
  nothing is silently lost. **Decision deferred by client ("do later").**

### When ready to reveal the full site (reverse the holding page)

- Remove the `robots: { index: false }` metadata from
  [app/(site)/layout.tsx](<app/(site)/layout.tsx>).
- Restore the full route list in [app/sitemap.ts](app/sitemap.ts).
- Promote `/home` back to `/` and repoint the `/home` links back to `/`.
- Resolve the booking-form destination (above).

### Minor cleanup (non-blocking)

- Remove the stray root-level `layan-logo.jpg` duplicate (the served copy is
  `public/layan-logo.jpg`).
- Set `NEXT_PUBLIC_BASE_URL` to the canonical domain once live (cancel links).
