# Naseeha – Performance Report

**Last check:** Feb 2026 (Next.js 15, production build)

## Build summary

| Metric | Value |
|--------|--------|
| Home page JS | ~4.2 kB page + **115 kB** First Load |
| Shared JS | **102 kB** (all routes) |
| Static pages | 26 routes, SSG where used |

First Load JS is in a good range for a content site.

---

## Changes made in code

1. **ParallaxLayer** – Scroll handler now uses `requestAnimationFrame` so we only update state once per frame (smoother scroll, fewer re-renders).
2. **ExpertiseSection** – Treatment icons use `next/image` instead of `<img>` so they get optimized formats and sizing.
3. **Review videos** – YouTube iframes use `loading="lazy"` so they load when near the viewport instead of on initial page load.

---

## Recommendations (manual / assets)

### 1. Compress treatment and results images

Many PNGs in `public/` are **2–3 MB** each (e.g. `skilltreatments.png`, `hairloss.png`, `backpain.png`, `tyroid.png`). That slows initial load and data usage.

- **Option A:** Export or convert to **WebP** (same quality, much smaller). Next.js `Image` can serve WebP when the browser supports it.
- **Option B:** Use a tool like [Squoosh](https://squoosh.app) or `sharp` to compress PNGs (e.g. 80–85% quality) and replace originals.

Target: under ~200–400 kB per icon if possible.

### 2. Hero video (~1.9 MB)

`142528-780232204_small.mp4` is already a “small” version. For slower networks you could:

- Add a **poster** image so something shows before the video plays.
- Consider an even shorter or lower-resolution variant for mobile (e.g. with `media` attributes or a separate mobile `source`).

### 3. RESULTS folder

Screenshots in `public/RESULTS/` are ~1–2 MB each. Compressing or converting them to WebP will reduce weight; `next/image` will then serve optimized sizes.

### 4. Optional: Lazy load below-the-fold sections

Sections like “Know Us Better”, “Patient Stories”, “Review Videos”, and “Treatment Results” could be wrapped in a small lazy component so their JS runs when they enter the viewport. This would slightly reduce initial JS execution; only worth it if you add more client interactivity there.

---

## Quick audit commands

```bash
# Production build (see bundle sizes)
npm run build

# Local production server
npm run build && npm run start
```

Then run **Lighthouse** (Chrome DevTools → Lighthouse) on the production build for Performance, LCP, and CLS scores.
