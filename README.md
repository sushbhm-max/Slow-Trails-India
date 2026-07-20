# Slow Trails India — Website

A React + Vite platform for Slow Trails India, a slow-luxury experiential
travel company. The site is built to hold multiple itineraries over time;
**Bundelkhand Slow Trails** (Jhansi · Orchha · Chanderi · Lalitpur ·
Khajuraho) is the first.

## Project structure

```
bst-site/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json                          # enables client-side routing on Vercel
├── .gitignore
└── src/
    ├── main.jsx                         # React entry point
    ├── App.jsx                          # Route definitions
    ├── SlowTrailsIndia.jsx              # Platform homepage ("/") — itinerary card grid
    ├── ItineraryCard.jsx                # Reusable card component for the homepage grid
    ├── PageShell.jsx                    # Shared nav/footer used by Bundelkhand sub-pages
    ├── itineraries/
    │   ├── BundelkhandPage.jsx          # Full Bundelkhand product page ("/bundelkhand")
    │   └── bundelkhand/
    │       ├── ItineraryPage.jsx        # "/bundelkhand/itinerary"
    │       ├── AccommodationPage.jsx    # "/bundelkhand/accommodation"
    │       └── BediaPledgePage.jsx      # "/bundelkhand/bedia-pledge"
    └── pages/
        ├── PrivacyPolicyPage.jsx        # "/privacy-policy" (platform-level, shared)
        └── CommunityCharterPage.jsx     # "/community-charter" (platform-level, shared)
```

**Adding a second itinerary later:** create a new folder under `src/itineraries/`
(e.g. `src/itineraries/rajasthan/`) following the same pattern as `bundelkhand/`,
add its routes to `App.jsx`, and add a new `ItineraryCard` entry to the array
in `SlowTrailsIndia.jsx`. The card grid and routing are built to support this
without further restructuring.

The Bundelkhand product page ("/bundelkhand") has three in-page anchor sections
that footer/nav links jump to directly: `#route-map`, `#experiences`,
`#community-impact`.

**Important:** `vercel.json` contains a rewrite rule that's required for
client-side routing to work correctly on Vercel — without it, refreshing a
page like `/itinerary` directly (or sharing that URL) would 404. Make sure
this file is included when you push to GitHub.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. This is what gets deployed.

---

## Deploying: GitHub → Vercel → GoDaddy domain

### 1. Push this project to GitHub

```bash
cd bst-site
git init
git add .
git commit -m "Initial commit"
```

Create a new repository on [github.com](https://github.com) (e.g. `bundelkhand-slow-trails`),
then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/bundelkhand-slow-trails.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel (free)

1. Go to [vercel.com](https://vercel.com) → sign up with **Continue with GitHub**
2. Click **Add New → Project**
3. Select the `bundelkhand-slow-trails` repo — Vercel auto-detects Vite/React
4. Click **Deploy**
5. You'll get a live URL like `bundelkhand-slow-trails.vercel.app` within about a minute

### 3. Buy your domain on GoDaddy

- Search and purchase `bundelkhandslowtrails.com` (or `.in`)
- Skip GoDaddy's hosting/email upsells — not needed

### 4. Connect the GoDaddy domain to Vercel

In **Vercel**: Project → **Settings → Domains** → add `bundelkhandslowtrails.com`
Vercel will show you DNS records to add:
- **A record** → `76.76.21.21`
- **CNAME** (for `www`) → `cname.vercel-dns.com`

In **GoDaddy**: **My Products → DNS → Manage DNS**
- Delete the default parked-page A record
- Add the A and CNAME records exactly as Vercel specified
- Save

### 5. Wait for propagation

Usually live within 15–60 minutes (up to 48 hours max). Vercel auto-issues
free SSL (HTTPS) once DNS verifies — no action needed.

### 6. Confirm

Visit `bundelkhandslowtrails.com` — it should load the live site.
Every future `git push` to `main` automatically redeploys on Vercel.

---

## Content notes for future edits

- **Pricing** lives in the `Pricing` section of `itineraries/BundelkhandPage.jsx` —
  search for `"Couple"` to find the tier array.
- **Testimonials** are structured as an array (search for `From Our Guests`)
  — append new testimonial objects to the array to add more without touching
  the layout.
- **Contact email** (`sushilagarwalbhm@gmail.com`) appears in several places
  across `SlowTrailsIndia.jsx`, `BundelkhandPage.jsx`, `PageShell.jsx`, and
  each sub-page. Search-and-replace across the whole `src/` folder if the
  email ever changes.
- **Signature Experiences** are in an array (search for `Signature Experiences`)
  in `itineraries/BundelkhandPage.jsx`.
- **Privacy Policy** (`src/pages/PrivacyPolicyPage.jsx`) contains placeholder
  legal text clearly flagged as such — have it reviewed by a lawyer before
  relying on it, especially before collecting payment or personal data through
  the site.
- **Itinerary, Accommodation, and Bedia Pledge pages** (under
  `src/itineraries/bundelkhand/`) are editable directly — each is a
  self-contained array or block of content near the top of its file.
- **Adding a second itinerary:** see the "Adding a second itinerary later"
  note in the Project Structure section above.

## Imagery — real photos and remaining placeholders

Five real photos are currently integrated (all in `src/assets/`):
`orchha-riverside.jpg` (homepage card + hero context), `khajuraho-temple.jpg`
(pre-dawn yoga experience card), `homemakers-kitchen.jpg` (Orchha cooking
class), `handloom-weaving.jpg` (Chanderi silk experience), and
`fay-campbell.jpg` (guest testimonial).

The remaining Signature Experience cards and the two Raw-to-Refined contrast
panels (Bedia household / MPT Khajuraho) still show labeled gradient
placeholders — a gradient block with a compass icon, a caption describing
what should go there, and the words "Photo pending" — so nobody mistakes an
empty slot for a finished photo.

**Why placeholders and not stock/AI images for the rest:** these slots
represent real, specific places and moments from the actual itinerary (Garh
Kundar Fort at golden hour, the Bedia household, Bhimkund). Using generic
stock or AI-generated images here would risk being mistaken for real trip
photography. Better to launch honest and swap in genuine photos as they
become available.

**To replace a placeholder once you have a real photo**, in
`itineraries/BundelkhandPage.jsx`:

1. Add the image file to `src/assets/` (e.g. `src/assets/garh-kundar.jpg`)
2. Import it near the top of the file:
   ```js
   import garhKundarPhoto from "../assets/garh-kundar.jpg";
   ```
3. Find the matching card in the Signature Experiences array (search for its
   `imgLabel`, e.g. `"Garh Kundar Fort, en route"`) and add an `image` field:
   ```js
   { icon: Mountain, ..., imgLabel: "Garh Kundar Fort, en route", image: garhKundarPhoto },
   ```
   The `PlaceholderImage` component automatically renders the real photo
   instead of the gradient once an `image` value is present — no other
   changes needed.
4. Repeat for each card/panel as real photos become available — no need to
   do them all at once.

The hero section's video is also a placeholder (see the comment directly
above the `<video>` tag in `BundelkhandPage.jsx`) — it currently falls back
to a gradient + grain texture that looks intentional on its own, so there's
no rush to replace it.

