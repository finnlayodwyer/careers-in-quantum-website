# Handover Guide: Archiving 2026 and Preparing for 2027

This document explains how to archive the 2026 event and set the site up ready for 2027. It is written for someone with no prior experience working with Astro.

If you haven't already, read [README.md](README.md) first — it explains the project layout and how to run the site locally.

---

## Before you start

1. Install [Node.js](https://nodejs.org/) (v18 or later) if you haven't already.
2. Open a terminal in the root of this repository.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` and open `http://localhost:4321` in a browser. You should see the live site running locally. Keep this open — it auto-refreshes as you make changes.

---

## Overview of what needs to happen

| Task | What it involves |
|---|---|
| 1. Create archive pages for 2026 | Copy the pattern from 2025: add 3 pages under `src/pages/archive/2026/` |
| 2. Add 2026 to the site navigation | Edit `src/components/Header.astro` |
| 3. Update `ArchiveSponsorsPage` | Teach the sponsors component about 2026 assets |
| 4. Add post-event gallery photos | Drop photos into `src/assets/2026/gallery/` |
| 5. Clear the current-year pages for 2027 | Reset homepage, schedule, panels, and sponsorship |
| 6. Create placeholder data files for 2027 | New schedule file and JSON metadata files |

Work through the tasks in order. Each one builds on the last.

---

## Task 1 — Create the 2026 archive pages

The archive lives under `src/pages/archive/`. Look at the existing `2025/` folder for reference — you will create an identical structure for `2026/`.

### 1a. Create `src/pages/archive/2026/index.astro`

Create a new file at that path with this content:

```astro
---
import ArchiveYearPage from "../../../components/archive/ArchiveYearPage.astro";
---

<ArchiveYearPage
  year="2026"
  title="CiQ 2026 Archive"
  description="Highlights and photos from CiQ 2026."
/>
```

### 1b. Create `src/pages/archive/2026/schedule.astro`

```astro
---
import ArchiveSchedulePage from "../../../components/archive/ArchiveSchedulePage.astro";
import { schedule2026 } from "../../../data/archive/2026/schedule.ts";
---
<ArchiveSchedulePage
  year="2026"
  heading="CiQ 2026 Schedule"
  locationLine="Location: Richmond Building, Queen's Road, Bristol, BS8 1LN"
  days={schedule2026 as unknown as any}
/>
```

### 1c. Create `src/pages/archive/2026/sponsors.astro`

```astro
---
import ArchiveSponsorsPage from "../../../components/archive/ArchiveSponsorsPage.astro";
---

<ArchiveSponsorsPage year="2026" />
```

### 1d. (Optional) Create panel archive pages

If you want to archive the 2026 panel discussions, create a `panels/` folder inside `src/pages/archive/2026/` and copy the structure from `src/pages/archive/2025/panels/`. Update the speaker details to match the 2026 panelists currently listed in `src/pages/panels.astro`.

---

## Task 2 — Add 2026 to the site navigation

Open `src/components/Header.astro`. Find the `archiveLinks` array and add a 2026 entry:

```ts
const archiveLinks = [
  { label: 'CiQ 2024', href: '/archive/2024', year: '2024' },
  { label: 'CiQ 2025', href: '/archive/2025', year: '2025' },
  { label: 'CiQ 2026', href: '/archive/2026', year: '2026' },   // ← add this line
];
```

Save the file and check the navigation in your browser — you should see "CiQ 2026" appear in the archive dropdown.

---

## Task 3 — Update `ArchiveSponsorsPage` to support 2026

The sponsors archive component (`src/components/archive/ArchiveSponsorsPage.astro`) currently only knows about 2024 and 2025. You need to add 2026 support.

Open `src/components/archive/ArchiveSponsorsPage.astro` and make the following changes:

### 3a. Update the Props type

Find this line near the top of the file:

```ts
type Props = { year: "2024" | "2025" };
```

Change it to:

```ts
type Props = { year: "2024" | "2025" | "2026" };
```

### 3b. Import 2026 JSON metadata

After the existing JSON imports, add:

```ts
import spons2026 from "../../content/attending/2026spons.json";
import attending2026 from "../../content/attending/2026attending.json";
```

### 3c. Add Vite glob imports for 2026 image files

After the existing glob imports for 2025, add:

```ts
const sponModules2026 = import.meta.glob("../../assets/2026/spons/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});
const partnerModules2026 = import.meta.glob("../../assets/2026/partners/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});
const attendingModules2026 = import.meta.glob("../../assets/2026/attending/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});
```

> **Note:** If 2026 doesn't have a `partners/` folder, the glob will simply return nothing — that's fine.

### 3d. Update the variable selectors

Find these lines:

```ts
const sponsMeta = (year === "2024" ? spons2024 : spons2025) as AttendingMetaMap;
const attendingMeta = (year === "2024" ? attending2024 : attending2025) as AttendingMetaMap;
```

Replace them with:

```ts
const sponsMeta = (year === "2024" ? spons2024 : year === "2025" ? spons2025 : spons2026) as AttendingMetaMap;
const attendingMeta = (year === "2024" ? attending2024 : year === "2025" ? attending2025 : attending2026) as AttendingMetaMap;
```

Then find:

```ts
const sponModules = year === "2024" ? sponModules2024 : sponModules2025;
const attendingModules = year === "2024" ? attendingModules2024 : attendingModules2025;
const partnerModules = year === "2024" ? partnerModules2024 : partnerModules2025;
```

Replace with:

```ts
const sponModules = year === "2024" ? sponModules2024 : year === "2025" ? sponModules2025 : sponModules2026;
const attendingModules = year === "2024" ? attendingModules2024 : year === "2025" ? attendingModules2025 : attendingModules2026;
const partnerModules = year === "2024" ? partnerModules2024 : year === "2025" ? partnerModules2025 : partnerModules2026;
```

### 3e. Update `ArchiveYearPage` similarly

Open `src/components/archive/ArchiveYearPage.astro`. Its `year` prop type also needs updating from `"2024" | "2025"` to `"2024" | "2025" | "2026"`. The gallery glob inside it uses the `year` value to load photos, so it will automatically pick up images from `src/assets/2026/gallery/` once you add them.

---

## Task 4 — Add post-event gallery photos

Once you have photos from the 2026 event:

1. Optimise them (WebP or JPEG, ideally no wider than 1200px).
2. Drop them into `src/assets/2026/gallery/`.

The `ArchiveYearPage` component will automatically include them in the gallery on the `/archive/2026` page. No code changes needed.

---

## Task 5 — Clear the current-year pages for 2027

The following pages display 2026-specific information and need to be reset.

### 5a. Homepage (`src/pages/index.astro`)

Update:
- The event date (`📅 5 March 2026` → new 2027 date)
- The event location if it has changed
- The glob imports that load `../assets/2026/spons/`, `../assets/2026/exhibs/`, and `../assets/2026/talks/` — change `2026` to `2027` in each path
- The JSON metadata import at the top (`2026attending.json` → `2027attending.json`)

### 5b. Schedule page (`src/pages/schedule.astro`)

Change the import at the top from:

```ts
import { schedule2026 } from "../data/archive/2026/schedule.ts"
```

to:

```ts
import { schedule2027 } from "../data/archive/2027/schedule.ts"
```

And update the `<ScheduleGrid days={schedule2026} />` line to use `schedule2027`.

Also replace the PDF download link (`/schedule/schedule.pdf`) once you have the new programme ready, or remove it until you do.

### 5c. Panels page (`src/pages/panels.astro`)

Replace the speaker imports and `speakers1`/`speakers2` arrays with the 2027 panelists. The pattern is the same — each speaker needs a `name`, `company`, `role`, `bio`, and `photo`.

### 5d. Sponsorship and registration pages

Update any year-specific text in `src/pages/sponsorship.astro` and `src/pages/registration.astro`.

---

## Task 6 — Create data files for 2027

### 6a. Schedule data

Create a new file at `src/data/archive/2027/schedule.ts`. Copy the structure from `src/data/archive/2026/schedule.ts` and clear out the items, leaving an empty (or placeholder) schedule:

```ts
import type { ScheduleDay } from "../../../types/schedule";

export const schedule2027: ScheduleDay[] = [
  {
    dateLabel: "TBC 2027",
    items: [],
  },
];
```

You will fill this in as speakers are confirmed.

### 6b. Logo metadata

Create placeholder JSON files in `src/content/attending/`:

- `2027attending.json` — attending companies (copy structure from `2026attending.json`, clear entries)
- `2027spons.json` — sponsors
- `2027exhibs.json` — exhibitors

The format is an object where each key is the image filename (without extension) and the value is `{ "name": "...", "url": "..." }`:

```json
{
  "example_company": {
    "name": "Example Company",
    "url": "https://example.com"
  }
}
```

### 6c. Asset folders

Create the following empty folders (you can add a `.gitkeep` file to each to track them in git):

- `src/assets/2027/spons/`
- `src/assets/2027/exhibs/`
- `src/assets/2027/talks/`
- `src/assets/2027/gallery/`

---

## Checking your work

After completing all tasks, run `npm run build` in the terminal. If there are any errors, Astro will print them with the file and line number. Common issues:

- **TypeScript error on `year` prop** — you probably missed updating a `"2024" | "2025"` union type somewhere.
- **Missing export** — check the schedule file exports the right variable name (e.g. `export const schedule2027`).
- **Broken image path** — verify the image file exists in the path you referenced.

Once the build passes, run `npm run preview` and check:

- `/archive/2026` loads and shows the gallery (once photos are added)
- `/archive/2026/schedule` shows the 2026 schedule
- `/archive/2026/sponsors` shows the 2026 sponsors
- "CiQ 2026" appears in the site navigation under the archive links
- The homepage shows 2027 date and location
- `/schedule` either shows the 2027 schedule or an empty placeholder

When everything looks correct, deploy with `npm run deploy`.

---

## Quick reference: file locations

| What | File |
|---|---|
| Site navigation (header links) | `src/components/Header.astro` |
| Homepage | `src/pages/index.astro` |
| Current schedule page | `src/pages/schedule.astro` |
| Current panels page | `src/pages/panels.astro` |
| 2026 schedule data | `src/data/archive/2026/schedule.ts` |
| 2027 schedule data (to create) | `src/data/archive/2027/schedule.ts` |
| Logo metadata JSON files | `src/content/attending/` |
| Sponsor/exhibitor logo images | `src/assets/{year}/spons/`, `src/assets/{year}/exhibs/` |
| Gallery photos | `src/assets/{year}/gallery/` |
| Archive index component | `src/components/archive/ArchiveYearPage.astro` |
| Archive schedule component | `src/components/archive/ArchiveSchedulePage.astro` |
| Archive sponsors component | `src/components/archive/ArchiveSponsorsPage.astro` |
| PDF programme | `public/schedule/schedule.pdf` |
