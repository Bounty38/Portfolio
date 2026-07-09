"use client";

import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useLanguage } from "@/i18n";
import { projectMetaById, projectPreviewSrc } from "@/data/projects";

export const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {t.projects.items.map((project, projectIndex) => {
            const meta = projectMetaById[project.id];
            const ctaLabel =
              meta?.cta === "live" ? t.projects.visitLive : t.projects.viewGithub;

            return (
              <Card
                key={project.id}
                className="h-[34rem] md:h-[30rem] lg:h-[32rem] px-8 pt-8 pb-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                  zIndex: projectIndex + 1,
                }}
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 h-full min-h-0">
                  <div className="flex flex-col flex-1 min-h-0 lg:justify-center">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text shrink-0">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 shrink-0">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5 shrink-0" />
                    <ul className="flex flex-col gap-3 md:gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result}
                          className="flex gap-2 text-sm md:text-base text-white/50"
                        >
                          <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={meta?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 lg:mt-auto lg:pt-6 shrink-0"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                        <span>{ctaLabel}</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative shrink-0 w-full mt-4 aspect-[16/10] lg:mt-0 lg:self-center overflow-hidden rounded-xl lg:max-w-[320px] lg:ml-auto">
                    <Image
                      src={projectPreviewSrc(project.id)}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
