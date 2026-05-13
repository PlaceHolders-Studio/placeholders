# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Create React App single-page site for [PlaceHolders Studio](https://placeholdersstudio.github.io/placeholders/), deployed to GitHub Pages. The repo root **is** the React app — `package.json`, `src/`, `public/`, and `deploy.js` all live here. The top-level `README.md` is bootstrap documentation (the steps used to scaffold the project from scratch), not architectural docs.

## Commands

```bash
npm start                    # dev server at http://localhost:3000
npm run build                # production build into build/
npm test                     # CRA/Jest interactive watch
npm test -- App.test.js      # single test file (note the `--` to pass through)
CI=true npm test             # one-shot run (non-watch)
npm run deploy               # build + publish to gh-pages (see below)
```

Stock Create React App (`react-scripts` 5.0.1) — no separate `lint` script; ESLint runs via the `react-app` / `react-app/jest` config in `package.json` and surfaces in the dev-server console and at build time.

## Deployment (`deploy.js`)

`npm run deploy` does **not** call `gh-pages` directly. It runs [`deploy.js`](deploy.js) with a target argument (default `placeholders`). The script:

1. Looks the target up in the `homepages` and `remotes` maps at the top of the file.
2. Writes that target's `homepage` URL into `package.json` (CRA needs it baked in for asset paths to resolve under the GitHub Pages subpath).
3. Runs `npm run build`.
4. Calls `npx gh-pages -d build -r <remote>` to push `build/` to the target repo's `gh-pages` branch.
5. **Deletes** the `homepage` field from `package.json` again so it doesn't get committed.

There is a dormant `knotfun` target commented out in both maps — if you re-enable it, uncomment the matching `deploy('knotfun')` and CLI-arg branches at the bottom of the file too. When adding a new target, you must edit `homepages`, `remotes`, and the argv dispatch together.

The `homepage`-field churn is intentional: never commit `package.json` with `homepage` set. There is deliberately no `predeploy` script — adding one would re-run the build with the wrong `homepage` before `deploy.js` runs its own correctly-configured build.

## Architecture notes

- **Single-page, no router.** [src/App.js](src/App.js) renders one stacked layout (`Header` → `main` containing `Hero` / `Projects` / `Team` / `Contact` → `Footer`). Navigation between sections is anchor-based (`id` attributes on each `<section>`).
- **Asset paths use `process.env.PUBLIC_URL`.** Images, pitch decks, etc. live under `public/img/`, `public/pitch/`, `public/logo/`, `public/favicon/` and are referenced as `process.env.PUBLIC_URL + '/img/foo.png'`. This is required because the site is hosted under a GitHub Pages subpath (`/placeholders`), not at the domain root — bare `/img/...` paths will 404 in production.
- **Project list is hardcoded in [src/components/Projects.js](src/components/Projects.js).** Each entry has a `pitchDeckExists` flag: `true` opens the PDF in a new tab, `false` opens an in-component "coming soon" modal. The modal owns its own ESC handler and body-scroll lock via `useEffect`. To add a project, append to the `games` array and drop the image into `public/img/` and (if applicable) the PDF into `public/pitch/`.
- **[public/404.html](public/404.html) is a custom GitHub Pages SPA-redirect page**, not the CRA default. It is self-contained (inline CSS, dark theme, brand color `#ff5722`). Edit it directly if 404 behavior needs to change — it is not generated from React.
- **Styling is plain CSS, one file per component** (`Header.css` next to `Header.js`, etc.) plus global `index.css` / `styles.css` / `App.css`. No CSS modules, Tailwind, or styled-components.
- **[src/setupTests.js](src/setupTests.js) polyfills `window.matchMedia`** because jsdom doesn't ship it and `Header.js` reads it during initial theme detection. Without the polyfill, any test that renders `<App />` crashes.

## Conventions

- **Commit messages:** never append a `Co-Authored-By: Claude ...` (or any AI-attribution) trailer. The repo owner handles attribution themselves and will reject commits that include it.
