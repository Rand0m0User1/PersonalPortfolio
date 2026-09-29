# Aleksander Kurgan Portfolio

Source for my personal portfolio. Live site: https://aleksanderkurgan.vercel.app/

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Editing content

All content lives in plain data files under `data/`. Adding something is
almost always a matter of appending one object to one array.

### Setting a project image

1. Put the image file in `public/`, e.g. `public/fintelligent.png`.
2. In `data/projects.ts`, set `image` to the path with a leading slash and
   no `public`:

```ts
image: "/fintelligent.png",
```

Omit `image` and the card falls back to a grey placeholder icon. Cards crop
to 16:10, so landscape images around 800px wide or wider look best. `.png`,
`.jpg`, `.jpeg` and `.webp` all work.

### Editing tags

Both `data/projects.ts` and `data/experience.ts` take an optional `tags`
array. It is for technology actually used, nothing else:

```ts
tags: ["Flask", "PostgreSQL", "nginx"],   // shows three pills
tags: [],                                  // shows nothing
// field omitted entirely               -> shows nothing
```

Roles and responsibilities do not belong in `tags`; they go in `role` (for
experience) or in the description. Several projects currently ship with
`tags: []` on purpose, because the tech stack is not recorded anywhere yet.

### Adding a recording

Append to `recordings` in `data/recordings.ts`. `ytlink` must be a YouTube
**embed** URL (`https://www.youtube.com/embed/VIDEO_ID`). The section renders
only `RECORDINGS_PAGE_SIZE` entries at a time.

### Adding a CAD model

Drop the `.glb` into `public/` and append an entry to `data/cadModels.ts`.
Each model's `<Canvas>` mounts only while it is scrolled into view.

## Contact form

The Reach Out form posts to Formspree via `fetch` -- no backend and no extra
dependency. The form ID lives in `formspreeId` in `data/site.ts`; the endpoint
is derived from it. If a submission fails, the form shows a fallback pointing
at the email address in the same file.

The form also sends two Formspree special fields: `_subject` (the subject line
of the email you receive) and `_gotcha` (a hidden honeypot that silently drops
bot submissions).

## Local development

```bash
npm install
npm run dev
```

Deployed automatically via Vercel.
