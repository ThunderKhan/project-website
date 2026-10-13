# Kabir Kollective — Sufi & Bollywood Live Band Website

Client-oriented demonstration site for **Kabir Kollective**, a Mumbai-based Sufi/Bollywood live band.

- Portfolio structure and section layouts adapted from [hardik0924/music-portfolio](https://github.com/hardik0924/music-portfolio).
- Full-screen upward-covering section transitions and centered navigation adapted from [ThunderKhan/sanam-clone](https://github.com/ThunderKhan/sanam-clone).
- Brand/logo and booking details supplied by the client via their public Instagram profile [@kabirkollective](https://www.instagram.com/kabirkollective/). The logo in `public/brand/` is a compressed crop of the user-provided social profile screenshot; request original vector artwork for production.
- Music, events, and tour section structures are functional. Upcoming show dates are not invented. Past event links are labelled closed.
- Real enquiry CTAs open WhatsApp for the published contact number **+91 86928 98694**. The demo form is intentionally not connected to an inbox and gives an explicit preview-only message. No live booking/availability claims.

## Development

```bash
npm install
npm run dev
npm run build
```

Next.js 16, React 19, TypeScript. Slide navigation supports wheel, touch, keyboard, dot pagination, and anchor links. Taller slides scroll internally before progressing.

## Before client launch

Replace the screenshot-derived logo with client-supplied vector/transparent artwork and add approved photos and video files. Connect forms, ticket provider, actual calendars and band lineup information only with verified data. The preview is marked non-indexable.

## Source and rights

This work is an **adaptation/mockup**, not an original implementation of the two reference sites. Source-component ownership and any third-party rights remain with their respective owners. Do not treat the demonstration as a grant to reuse reference art or music commercially.


## Stock media in this demo

The preview uses stock **illustrative** photos and an optional muted hero video, not Kabir Kollective performance footage. All images are served from Unsplash `images.unsplash.com`, and source photo IDs plus URLs are kept together in `src/components/sites/ag-live/content.ts`. Video reference: `https://assets.mixkit.co/videos/preview/mixkit-mic-on-stage-in-the-dark-41551-large.mp4` (Mixkit). See [Unsplash License](https://unsplash.com/license) and [Mixkit video license](https://mixkit.co/license/). The video falls back to a concert photograph if autoplay, user preferences, or network access prevents playback.

Suggested image credits: Unsplash contributors via [Unsplash](https://unsplash.com/). Stock imagery is for conveying art direction; using recognizable performers as implied endorsements would require additional permissions. Replace with approved client-owned media before release. The website footer, hero and galleries label this as demonstration imagery.
