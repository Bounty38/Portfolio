import LogoImg from "@/assets/images/logo.png";
import ZakrivayuschiyTegPreview from "@/assets/images/preview1.png";
import E_X_E from "@/assets/images/E_X_E.png";

import Image from 'next/image';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Freelance",
    year: "2024-2026",
    title: "Frontend & Backend Development Projects",
    results: [
      { title: "Developed various web applications" },
    ],
    link: "https://github.com/Bounty38/Portfolio",
    //image: LogoImg,
  },
  {
    company: "Ya.Praktikum",
    year: "2025",
    title: "Zakrivayuschiy Teg - Frontend Project",
    link: "https://bounty38.github.io/zakrivayuschiy-teg-f",
    results: [
      { title: "Simple web page built in accordance with Figma source. Some extra features like theme selector and custom animations." },
    ],
    image: ZakrivayuschiyTegPreview,
  },
  {
    company: "E_X_E",
    year: "2025-2026",
    title: "Enforce Script Developer",
    link: "https://dayzexe.store/",
    results: [
      { title: "From editing simple configs to 3D development in Blender and Texturing in Substance." },
    ],
    image: E_X_E,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader 
          eyebrow="Real-world Results" 
          title="All My Projects" 
          description="See how I transformed concepts into reality with my projects, covering the full Data lifecycle, 
                        as well as and web development." 
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
              <Card 
                key={project.title} 
                className="h-72 md:h-80 lg:h-96 px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
                style={{
                  top: `64px`,
                  transform: `translateY(${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 h-full">
                  <div className={project.image ? "lg:pb-16 h-full flex flex-col justify-center" : "lg:pb-16 lg:col-span-2 h-full flex flex-col justify-center"}>
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5"/>
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}                
                  </ul>
                  <a href={project.link} target='_blank' rel="noopener noreferrer">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                {project.image ? (
                    <div className="relative w-full h-full overflow-hidden rounded-xl p-4 lg:max-w-[320px] lg:ml-auto">
                      <Image src={project.image} alt={project.title} fill className="object-contain object-bottom" />
                    </div>
                  ) : null}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};