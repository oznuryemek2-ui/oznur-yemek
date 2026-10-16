# Visual refresh — 16 October 2026

## Changes

- Rebuilt the homepage with a cream, charcoal green and brand red palette, restrained typography, a clearer service hierarchy and consistent calls to action.
- Replaced all synthetic photos rendered on public pages with four self-hosted, licensed real photographs. Representative stock use is stated in captions/footer; photographs are not presented as the company's premises or team. Sources are recorded in public/images/editorial/PHOTO-CREDITS.md.
- Applied shared spacing, typography, buttons and responsive layouts across interior pages. Removed repeated decorative service photos from the service index.
- Retained the slideshow, with manual slide selection, pause control and reduced-motion support.
- Added skip links, compact-screen logo treatment and keyboard-focusable horizontally scrolling menu tables.
- Retained all 18 public page URLs, their metadata/canonicals, Google verification, service/breadcrumb schema and sitemap. Existing quote form, submission API, analytics, telephone and WhatsApp destinations are retained.
- Removed an unqualified nationwide availability phrase from the corporate overview in favor of project-specific service planning.

## Verification before production

- Production build and TypeScript checks pass on Next.js 15.5.27.
- Checked all 18 generated public pages for a single H1, canonical URL and valid JSON-LD; no generated/brand-responsive photo URL remains in rendered images.
- Vercel preview deployed successfully; browser checked desktop and iframe viewports 320, 390 and 768 pixels. Main page had no horizontal document overflow (content widths 305/375/753 pixels after scrollbar).
- Inspected homepage sections, services page, quote form layout and sample menu layout. Mobile navigation opens and closes with Escape.
- Menu overflow stays inside scroll containers (335px viewport vs 1120px/860px table content). Added an explicit scroll hint and keyboard focus.
- Quote form and API source are unchanged. No production quote request was submitted as a test.
- Source verification documents baseline backup branch, commit, deployment and screenshot in README.md.
