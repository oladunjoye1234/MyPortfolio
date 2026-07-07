# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint over the project

There is no test setup in this project (no test runner configured).

## Architecture

This is a personal portfolio site: React 19 + Vite, styled with Tailwind CSS, routed with `react-router-dom`. Deployed on Vercel (`vercel.json` rewrites all paths to `/` for client-side routing).

- `src/main.jsx` mounts `App` into `#root`.
- `src/App.jsx` sets up `BrowserRouter` with two routes: `/` → `Home`, `/work` → `Work`. `Navbar` is rendered outside `Routes` so it's present on every page.
- Pages live under `src/pages`, split into two conceptual groups:
  - `src/pages/public-pages/Home/home.jsx` — the composed landing page.
  - `src/pages/private-pages/*` — individual section components (`ProfileCard`, `AboutMe`, `ProjectCallToAction`, `skillTiles`, `exprencienceBadges`, `socialLinks`, `contact`, `work`) that `Home` (or the router, for `Work`) assembles. Despite the directory name, these aren't access-controlled — "private" here just means "not directly routed," i.e. composed into a page rather than mounted at a URL.
  - Component/directory naming is inconsistent (mixed case, one misspelling: `exprencienceBadges`) — match the existing file's casing exactly when importing rather than assuming a convention.
- `src/components/layout/` holds `Navbar` and `Footer` (shared chrome, imported directly into pages/`App`, not via routing).
- Styling is Tailwind utility classes directly in JSX (dark theme: `bg-gray-900`/`bg-gray-800` panels), no CSS modules or styled-components. `src/App.css` and `src/index.css` carry only the Vite/Tailwind boilerplate.
- Some imports/components are commented out mid-refactor (e.g. `AuthContext`, a `Contact` route in `App.jsx`) — check whether commented code should be wired in or removed rather than assuming it's dead.
