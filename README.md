# GRAYDOVE — Independent AI Agency

A gallery-led digital experience for GRAYDOVE, an independent AI agency focused on AI agents, process automation, intelligent systems, document intelligence and generative AI.

## Run locally

- Node.js 24 (see .nvmrc)
- `npm install`
- `npm run dev`

## Quality checks

- `npm run lint`
- `npm run typecheck`
- `npm run build`

## Browser smoke test

Start the production server with `npm run start`, then run `npm run test:smoke` in another terminal. The smoke suite checks the main routes, eight-project Index view, category filtering, mobile navigation and horizontal overflow.

## Structure

- `src/app` — homepage, Research, Studio, Contact, legal and project routes
- `src/components` — navigation, gallery, motion, scroll and 3D components
- `src/data/projects.ts` — structured portfolio demonstration content
- `public/work` — replaceable full-colour project interface artwork
- `docs/implementation.md` — reference study and execution record
- `.github/workflows/quality.yml` — lint, typecheck and production build checks

## Design direction

The interface uses a restrained black-and-white palette. The project visuals are intentionally full-colour and depict AI agents, document intelligence, process automation, dashboards, connected systems, knowledge and generative experimentation.

The homepage is gallery-led, with layered project panels, category filtering, Overview and Index modes, pointer-responsive movement and a central React Three Fiber scene.

## Motion and creative technology

- Framer Motion handles interface and panel transitions.
- GSAP/ScrollTrigger handles gallery entrance choreography.
- Lenis provides optional smooth scrolling.
- React Three Fiber and Three.js power the homepage's interactive orbital system.
- A custom WebGL shader provides the central 3D core's animated colour treatment.
- Reduced-motion preferences disable smooth scrolling and pointer parallax; navigation and gallery controls remain usable without motion.

## Project content

All eight portfolio entries are fictional demonstration concepts, not client engagements or deployed products. Project content, category, system flow, capabilities and image paths are maintained in `src/data/projects.ts`.

## Replace before public launch

- Confirm the public contact email and social destinations.
- Replace the privacy, cookie and legal placeholders with approved legal copy.
- Replace fictional concept imagery and copy when real demonstrations are ready.
- Confirm the final canonical domain before launch.
