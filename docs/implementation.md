# GRAYDOVE implementation record

## Reference study

The reference was inspected directly at desktop and mobile viewports. The observable structure includes a minimal project-led navigation, a gallery with Overview and Index modes, Research and Studio pages, a concise contact/footer system, and restrained editorial typography. The desktop navigation exposes Projects, Research, Studio and Contact; the mobile navigation condenses the same destinations. The reference font is NB International Pro. GRAYDOVE uses Manrope and DM Sans as close, readily available alternatives.

The implementation reproduces the gallery-led structure and interaction logic using original code, original brand language and original project artwork. No UNVEIL source code, branding or imagery is reused.

## Nine execution phases

1. **Reference research — complete.** Inspected the reference website, its navigation, Research and Studio pages, Index route, and a project detail page. Checked desktop and mobile layouts.
2. **Codebase inspection — complete.** Confirmed the target GitHub repository was empty; preserved the repository and its main default branch.
3. **Design system — complete.** Established monochromatic interface tokens, typography, spacing, breakpoints, responsive rules and motion conventions in the global stylesheet.
4. **Homepage — complete.** Built the staggered, layered gallery with eight full-colour, replaceable SVG interface concepts, category filters, Overview and Index modes, and pointer-responsive movement.
5. **Remaining pages — complete.** Added Research, Studio, Contact, eight project detail routes, and Privacy, Cookies and Legal placeholder pages.
6. **Advanced motion and 3D — complete.** Added Framer Motion transitions, GSAP/ScrollTrigger gallery choreography, Lenis scrolling, and a dynamically loaded React Three Fiber orbital scene. Reduced-motion preferences are respected.
7. **Testing — complete.** Ran ESLint, TypeScript, production builds, browser smoke tests, route checks, gallery mode/filter checks, mobile navigation checks, responsive-width checks and browser runtime-error checks.
8. **Visual refinement — complete.** Compared the implementation against the reference's navigation, typography, gallery structure and desktop/mobile behaviour. Refined navigation, responsive layout, footer and loading of the 3D experience.
9. **Deployment preparation — complete.** Added Vercel Git integration, Node version pinning, metadata, sitemap, robots rules, GitHub quality workflow and replaceable assets. Production deployment remains subject to the Vercel build result after the GitHub push.

## Acceptance notes

- All project concepts are fictional demonstration work, not client engagements or deployed products.
- No industries-served page or industry directory is present.
- Interface surfaces remain monochromatic; all project artwork is full-colour.
- Contact email, legal operator details and social destinations remain replaceable placeholders.
- Production dependency audit: zero vulnerabilities at the final pre-push check.
