# Careers in Quantum — Website

This is the website for **Careers in Quantum (CiQ)**, a student-led quantum careers fair run annually in Bristol. The site is built with [Astro](https://astro.build/), a static site generator, and deployed to [Cloudflare Pages](https://pages.cloudflare.com/).

Live site: **careers-in-quantum.com**

---

## What's in this repository

The website covers:

- The current year's event (homepage, schedule, panels, sponsorship, registration)
- An archive of previous years (2024, 2025, and — after each event — the year just passed)

---

## Technology stack

| Tool | Purpose |
|---|---|
| [Astro 5](https://docs.astro.build/) | Static site framework |
| TypeScript | Schedule data and type definitions |
| Cloudflare Pages | Hosting and deployment |
| `wrangler` | Cloudflare CLI for deploys |

No database, no CMS. All content lives in this repository as TypeScript files and JSON metadata.

---

## Getting started

You'll need [Node.js](https://nodejs.org/) (v18 or later). Then:

```bash
npm install       # install dependencies
npm run dev       # start local dev server at http://localhost:4321
npm run build     # build the static site into ./dist/
npm run preview   # preview the built site locally
```

To deploy to Cloudflare:

```bash
npm run deploy
```

---

## Project layout

```
src/
├── pages/              # One file = one URL route
│   ├── index.astro         → /
│   ├── schedule.astro      → /schedule
│   ├── panels.astro        → /panels
│   ├── sponsorship.astro   → /sponsorship
│   ├── registration.astro  → /registration
│   └── archive/
│       ├── 2024/           → /archive/2024, /archive/2024/schedule, etc.
│       └── 2025/           → /archive/2025, /archive/2025/schedule, etc.
│
├── components/         # Reusable UI pieces used by pages
│   ├── archive/            # Components for archive pages
│   ├── ui/                 # Generic layout/UI components
│   └── site/               # Site-wide components (header, footer, etc.)
│
├── data/
│   └── archive/
│       ├── 2024/schedule.ts    # Schedule data for 2024
│       ├── 2025/schedule.ts    # Schedule data for 2025
│       └── 2026/schedule.ts    # Schedule data for 2026 (current)
│
├── content/
│   └── attending/          # JSON files mapping logo filenames to names/URLs
│       ├── 2026attending.json
│       ├── 2026spons.json
│       ├── 2026exhibs.json
│       └── ...
│
├── assets/             # Images, organised by year and type
│   ├── 2026/
│   │   ├── spons/          # Sponsor logos
│   │   ├── exhibs/         # Exhibitor logos
│   │   ├── talks/          # Speaker/company logos used in the schedule
│   │   └── gallery/        # Post-event photos (added after the event)
│   ├── 2025/
│   └── 2024/
│
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── styles/             # Global CSS
└── consts.ts           # Site title and description

public/
└── schedule/
    └── schedule.pdf    # Downloadable programme PDF
```

---

## Key concepts

### How the schedule works

Schedule data is written as TypeScript in `src/data/archive/{year}/schedule.ts`. Each file exports a `ScheduleDay[]` array. The `ScheduleGrid` component (`src/components/Schedule.astro`) renders it as a table on desktop and cards on mobile.

### How logos are loaded

Logos for sponsors, exhibitors, and speakers are stored as image files in `src/assets/{year}/`. A companion JSON file in `src/content/attending/` maps each filename to a display name and optional URL. The `buildLogoMap()` and `buildAttendingItems()` utilities resolve these at build time.

### How the archive works

Each past year gets a folder under `src/pages/archive/{year}/` with its own index, schedule, and sponsors pages. These pages use shared components in `src/components/archive/` so the structure is consistent across years.

---

## Adding a new year

See [HANDOVER.md](HANDOVER.md) for step-by-step instructions on archiving the current year and setting up the next one.
