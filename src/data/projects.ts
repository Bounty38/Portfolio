import raw from "./projects.json";

export type ProjectMeta = {
  id: string;
  link: string;
  cta: "live" | "github";
  /** When set, build captures a Playwright screenshot. Otherwise GitHub OG is used. */
  liveUrl?: string;
};

export const projects = raw as ProjectMeta[];

export const projectMetaById: Record<string, ProjectMeta> = Object.fromEntries(
  projects.map((project) => [project.id, project])
);

export function projectPreviewSrc(id: string) {
  return `/project-previews/${id}.png`;
}
