# GRAYDOVE — Independent AI Agency

A gallery-led digital experience for an independent AI agency. Built with Next.js 16, React 19, TypeScript, Framer Motion, GSAP/ScrollTrigger, Lenis and a dynamically loaded React Three Fiber scene.

## Run locally

- Node.js 24 (see .nvmrc)
- npm install
- npm run dev

## Quality checks

- npm run lint
- npm run typecheck
- npm run build

## Browser smoke test

Start the production server with npm run start, then run npm run test:smoke in another terminal. The smoke suite checks the main routes, eight-project Index view, category filtering, mobile navigation and horizontal overflow.

## Structure

- src/app — homepage, Research, Studio, Contact, legal and project routes
- src/components — navigation, gallery, motion, scroll and 3D components
- src/data/projects.ts — structured portfolio demonstration content
- public/work — replaceable full-colour project interface artwork
- docs/implementation.md — reference study and nine-phase implementation record
- .github/workflows/quality.yml — lint, typecheck and production build checks

## Project content

All eight portfolio entries are fictional demonstration concepts. They are labelled as concept studies and must not be presented as client engagements or deployed products. Project content, category, system flow, capabilities and image paths are maintained in src/data/projects.ts.

## Design system

The interface uses a restrained monochromatic palette defined in src/app/globals.css. Project visuals remain full-colour and are maintained as independent SVG assets. The gallery supports Overview and Index modes, category filtering, pointer-responsive panel movement and responsive layouts.

## Motion and accessibility

- Framer Motion handles interface and panel transitions.
- GSAP/ScrollTrigger handles gallery entrance choreography.
- Lenis provides optional smooth scrolling.
- React Three Fiber is dynamically loaded for the homepage orbital scene.
- Reduced-motion preferences disable smooth scrolling and pointer parallax; all navigation and gallery controls remain usable without motion.

## Replace before public launch

- Confirm the public contact email and social destinations.
- Replace the privacy, cookie and legal placeholders with approved legal copy.
- Replace fictional concept imagery and copy when real demonstrations are ready.
- Confirm the final canonical domain before launch.
