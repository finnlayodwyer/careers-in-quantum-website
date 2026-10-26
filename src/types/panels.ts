// src/types/panels.ts
import type { ImageMetadata } from "astro";

export type PanelSpeaker = {
  name: string;
  company: string;
  role?: string;
  bio: string;
  photo: ImageMetadata;
  alt?: string;
};

export type Panel = {
  title: string;
  description: string;
  speakers: PanelSpeaker[];
};
