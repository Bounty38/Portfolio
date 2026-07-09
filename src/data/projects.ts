import raw from "./projects.json";
import type { Locale } from "@/i18n/types";

export type LocaleSnapshot = {
  url?: string;
  storage?: {
    key: string;
    value: string;
  };
};

export type ProjectMeta = {
  id: string;
  link: string;
  cta: "live" | "github";
  /** Base URL for Playwright when no per-locale URL is set. */
  liveUrl?: string;
  /** Per-locale capture settings for sites with i18n. */
  i18n?: Partial<Record<Locale, LocaleSnapshot>>;
};

export const projects = raw as ProjectMeta[];

export const projectMetaById: Record<string, ProjectMeta> = Object.fromEntries(
  projects.map((project) => [project.id, project])
);

export { projectPreviewPath } from "@/lib/paths";
