# yasantha.me

Personal academic portfolio, built with [Astro](https://astro.build). Deployed to GitHub Pages at [yasantha.me](https://yasantha.me) on every push to `main`.

## Updating content

| What | Where |
| --- | --- |
| Add / edit a project | [`src/data/projects.ts`](src/data/projects.ts) — paste one object into the array |
| Add a publication | [`src/data/publications.ts`](src/data/publications.ts) — newest first, BibTeX optional |
| Bio, education, experience, awards | [`src/pages/index.astro`](src/pages/index.astro) |
| Nav / footer / meta tags | [`src/layouts/Base.astro`](src/layouts/Base.astro) |
| Styling | [`src/styles/global.css`](src/styles/global.css) |

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
```

The blog lives separately at [blog.yasantha.me](https://blog.yasantha.me) (Quartz).
