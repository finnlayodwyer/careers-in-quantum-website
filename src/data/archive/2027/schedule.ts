// src/data/archive/2027/schedule.ts
// Schedule shown on /schedule. Leave empty until the programme is confirmed;
// see src/data/archive/2026/schedule.ts for a filled-in example.
import logoMeta from "../../../content/attending/2027attending.json";
import { buildLogoMap, type LogoMetaMap } from "../../../lib/buildLogos";
import type { ImageMetadata } from "astro";

const logoMetaMap = logoMeta as LogoMetaMap;

// companyLogo values refer to logo filenames (without extension) in src/assets/2027/talks/.
const logoModules = import.meta.glob<ImageMetadata>("../../../assets/2027/talks/*.{avif,webp,png,jpg,jpeg,svg}", {
  eager: true,
  import: "default",
});

const logos = buildLogoMap(logoModules, logoMetaMap);

function attachLogos(days: any[]) {
  return days.map((day) => ({
    ...day,
    items: day.items.map((item: any) => {
      if (!item.companyLogo) return item;

      const key = item.companyLogo.toLowerCase();
      const logoObj = logos[key];
      return {
        ...item,
        companyLogo: logoObj ?? { src: "", alt: item.companyLogo },
      };
    }),
  }));
}

export const schedule2027 = attachLogos([
  // {
  //   dateLabel: "Weekday Nth Month 2027",
  //   items: [
  //     {
  //       start: "10:20",
  //       end: "10:40",
  //       title: "Talk title",
  //       location: "Panel Room",
  //       speakers: "Jane Doe (Company)",
  //       companyLogo: "company",
  //       description: "Talk abstract.",
  //     },
  //     {
  //       start: "11:20",
  //       end: "12:10",
  //       title: "Panel: Panel title",
  //       location: "Panel Room",
  //       links: [{ label: "Panel details", href: "../panels?from=schedule#panel1" }],
  //     },
  //   ],
  // },
]);
