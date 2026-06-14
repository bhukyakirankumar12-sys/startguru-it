# StarGuru IT — Enterprise Website (Angular 20)

Premium consulting-style marketing site: standalone components, SCSS design tokens, SSR/prerender, and accessibility-first patterns.

## Quick start

```bash
npm install
npm start
```

Open `http://localhost:4200/`.

## Production

```bash
npm run build
npm run serve:ssr:starguru-it
```

## Structure

- `src/styles/` — global tokens, base typography, scroll-reveal utilities
- `src/app/models/site.models.ts` — typed content contracts
- `src/app/data/site-content.ts` — navigation, services, industries, case studies, testimonials, footer
- `src/app/directives/reveal.directive.ts` — intersection-observer reveal
- `src/app/layout/` — sticky enterprise header + multi-column footer
- `src/app/pages/home/` — routed home shell composing section components under `sections/`

## Notes

- Case study and testimonial imagery uses remote URLs (Unsplash). Replace with licensed assets for production.
- Contact form is front-end only (success message); wire to your API or marketing automation as needed.
