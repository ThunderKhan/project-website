# MEHFIL — Sufi–Bollywood Band Client Concept

**Client-facing design prototype, not an official band website.**

- [Music portfolio](https://github.com/hardik0924/music-portfolio): adapted hero, artist story, band formats, gallery, date calendar and enquiry-form components.
- [SANAM clone](https://github.com/ThunderKhan/sanam-clone): adapted centered navigation and index-driven, full-height upward-covering slide interaction.
- [Target repository](https://github.com/ThunderKhan/project-website).

## Scrolling and interactions
Slide `i+1` translates from Y=100% to 0% above the stationary slide `i` in 800ms. Reverse navigation moves the current slide downward to reveal the previous slide. Slides with overflowing content are internally scrollable; only when the user scrolls to the boundary does it advance to another slide. Keyboard, mobile swipe, nav links and section dots are supported. Reduced motion is respected.

## Run locally
```sh
npm install
npm run dev
npm run build
```
Next.js 16 / React 19 / TypeScript.

## Preview-only content
The band name **MEHFIL** is temporary. Images and video use remote **reference media** hosted by the public `music-portfolio` repository. They are not client-owned assets; license or replace before launch. Concert dates, ticketing provider connections, verified testimonials/press/clients and actual booking submission are intentionally left unconfigured rather than invented. The sample booking form displays an on-screen confirmation only; no email is sent. The reference artist's Supabase database is not contacted. Calendar dates are NOT verified availability.

This concept includes original integration code and adapted source components. Review media/branding licenses before production use.
