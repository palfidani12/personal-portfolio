# Personal Portfolio

My personal portfolio website: a responsive single-page site with light and dark themes, showing my experience, projects, education and skills.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) with the React Compiler
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) and [Simple Icons](https://simpleicons.org) for icons

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev
```

The site runs at http://localhost:5173.

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the development server          |
| `npm run build`   | Type-check and build to `dist/`       |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint                            |

## Project structure

```text
src/
├── components/   # Page sections (Hero, Experience, Projects, ...) and shared UI
├── data/data.ts  # All site content: text, experience, projects, education, skills
├── hooks/        # Theme, scroll and in-view hooks
├── assets/       # Images
├── style.css     # Theme colors (light/dark) and global styles
└── animations.css
```

## Editing content

All text and data shown on the site lives in `src/data/data.ts`, so most updates (a new job, project, skill or certificate) only need a change there.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/main.yml`, which builds the site and deploys `dist/` to the web server over SSH.
