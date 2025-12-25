'use client';
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
//import bookImage from "@/assets/images/book-cover.png";
import bookImage from "@/assets/images/book.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import OracleIcon from "@/assets/icons/oracle.svg";
import BlenderIcon from "@/assets/icons/blender.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import HadoopIcon from "@/assets/icons/hadoop.svg";
import JavaIcon from "@/assets/icons/java.svg";
import KeycloakIcon from "@/assets/icons/keycloak.svg";
import MongoDB from "@/assets/icons/leaf.svg";
import Python from "@/assets/icons/python.svg";
import RBACIcon from "@/assets/icons/rbac.svg";
import SQLIcon from "@/assets/icons/serveur-sql.svg";
import ShellIcon from "@/assets/icons/shell.svg";
import Neo4jIcon from "@/assets/icons/neo4j.svg";
import QlikIcon from "@/assets/icons/qlik.svg";
import ManagementIcon from "@/assets/icons/management.svg";
import GitIcon from "@/assets/icons/git.svg";
import BabylonIcon from "@/assets/icons/babylon.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import NodejsIcon from "@/assets/icons/nodejs.svg";
import AzureIcon from "@/assets/icons/azure.svg";
import AWSIcon from "@/assets/icons/aws.svg";
import DatabricksIcon from "@/assets/icons/databricks.svg";
import ApacheSparkIcon from "@/assets/icons/apacheSpark.svg";
import PowerBIIcon from "@/assets/icons/powerBI.svg";
import ConfluenceIcon from "@/assets/icons/confluence.svg";
import SynapseIcon from "@/assets/icons/synapse.svg";
import LinuxIcon from "@/assets/icons/linux.svg";

//import mapImage from "@/assets/images/map.png";
import mapImage from "@/assets/images/moscow.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems"; 
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const toolboxItems = [
  //{
  //  title: 'Azure Synapse',
  //  iconType: SynapseIcon,
  //},
  //{
  //  title: 'Databricks',
  //  iconType: DatabricksIcon,
  //},
  //{
  //  title: 'Apache Spark',
  //  iconType: ApacheSparkIcon,
  //},
  {
    title: 'SQL',
    iconType: SQLIcon,
  },
  {
    title: 'Azure',
    iconType: AzureIcon,
  },
  //{
  //  title: 'AWS',
  //  iconType: AWSIcon,
  //},
  //{
  //  title: 'Power BI',
  //  iconType: PowerBIIcon,
  //},
  //{
  //  title: 'Hadoop',
  //  iconType: HadoopIcon,
  //},
  //{
  //  title: 'Qlik',
  //  iconType: QlikIcon,
  //},
  //{
  //  title: 'Oracle',
  //  iconType: OracleIcon,
  //},
  {
    title: 'Python',
    iconType: Python,
  },
  {
    title: 'Shell',
    iconType: ShellIcon,
  },
  {
    title: 'Java',
    iconType: JavaIcon,
  },
  //{
  //  title: 'Confluence',
  //  iconType: ConfluenceIcon,
  //},
  {
    title: 'Linux',
    iconType: LinuxIcon,
  },
  {
    title: 'Git',
    iconType: GitIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'Docker',
    iconType: DockerIcon,
  },
   {
    title: 'MongoDB',
    iconType: MongoDB,
  },
  {
    title: 'Management',
    iconType: ManagementIcon,
  },  
  // {
  //   title: 'Neo4j',
  //   iconType: Neo4jIcon,
  // },
  // {
  //   title: 'Keycloak',
  //   iconType: KeycloakIcon,
  // },
  // {
  //   title: 'RBAC',
  //   iconType: RBACIcon,
  // },
  {
     title: 'TypeScript',
     iconType: TypeScriptIcon,
  },
  {
     title: 'Node.js',
     iconType: NodejsIcon,
  },
  {
     title: 'React',
     iconType: ReactIcon,
  },
  // {
  //   title: 'Babylon.js',
  //   iconType: BabylonIcon,
  // },  
  {
     title: 'Blender',
     iconType: BlenderIcon,
 },
  {
    title: 'Figma',
    iconType: FigmaIcon,
  },
]

const hobbies = [
  {
    title: 'Piano',
    emoji: '🎹',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '65%',
    top: '42%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
  },
  {
    title: 'Travel',
    emoji: '✈️',
    left: '77%',
    top: '73%',
  },
  {
    title: 'Stock market',
    emoji: '📈',
    left: '70%',
    top: '15%',
  }
]

const formations = [
  {
    title: 'Network Engineering - Bachelor\'s degree - Sheridan College (2024-2028)',
    emoji: '🧑‍💻',
    left: '5%',
    top: '-10%',
  },
]

const certifications = [
  {
    title: '<strong>Career Essentials in GitHub Professional Certificate (Feb 2025)</strong>',
    emoji: '💻',
    left: '5%',
    top: '-10%',
  },
  {
    title: 'Career Essentials in Software Development by Microsoft and LinkedIn (Feb 2025)',
    emoji: '🌐',
    left: '5%',
    top: '25%',
  },
  {
    title: 'English for the workplace, Language Assessment (Level C1-2) @ Oranim Academic College of Education (2021)',
    emoji: '⭐',
    left: '5%',
    top: '55%',
  },
]

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const hobbiesRef = useRef<HTMLDivElement | null>(null);

  const TILE_W = 160; // px
  const TILE_H = 44; // px

  const [hobbyPositions, setHobbyPositions] = useState<
    { title: string; emoji: string; x: number; y: number }[] | null
  >(null);

  useEffect(() => {
    const computeInitial = () => {
      const el = hobbiesRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      const initial = hobbies.map((hb) => {
        const left = typeof hb.left === "string" ? parseFloat(hb.left) : 0;
        const top = typeof hb.top === "string" ? parseFloat(hb.top) : 0;
        // left/top are percentages in the file (like '35%')
        const x = Math.round((left / 100) * w);
        const y = Math.round((top / 100) * h);
        return { title: hb.title, emoji: hb.emoji, x, y };
      });

      setHobbyPositions(initial);
    };

    computeInitial();
    window.addEventListener("resize", computeInitial);
    return () => window.removeEventListener("resize", computeInitial);
  }, []);

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

  const rectsOverlap = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    return (
      a.x < b.x + TILE_W &&
      a.x + TILE_W > b.x &&
      a.y < b.y + TILE_H &&
      a.y + TILE_H > b.y
    );
  };

  const pushAway = (from: { x: number; y: number }, to: { x: number; y: number }) => {
    // returns a vector to move 'to' away from 'from'
    const dx = to.x - from.x || 0.01;
    const dy = to.y - from.y || 0.01;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const overlapX = TILE_W - Math.abs(dx);
    const overlapY = TILE_H - Math.abs(dy);
    const overlap = Math.max(0, Math.min(overlapX, overlapY));
    const push = Math.max(8, overlap + 6);
    return { px: Math.round((dx / dist) * push), py: Math.round((dy / dist) * push) };
  };

  const handleDrag = (index: number, delta: { x: number; y: number }) => {
    setHobbyPositions((prev) => {
      if (!prev) return prev;
      const container = hobbiesRef.current?.getBoundingClientRect();
      const maxX = (container?.width || 800) - TILE_W;
      const maxY = (container?.height || 400) - TILE_H;

      const next = prev.map((p, i) => ({ ...p }));
      next[index].x = clamp(next[index].x + delta.x, 0, maxX);
      next[index].y = clamp(next[index].y + delta.y, 0, maxY);

      // simple collision: push overlapping items away iteratively
      for (let i = 0; i < next.length; i++) {
        if (i === index) continue;
        if (rectsOverlap(next[index], next[i])) {
          const { px, py } = pushAway(next[index], next[i]);
          next[i].x = clamp(next[i].x + px, 0, maxX);
          next[i].y = clamp(next[i].y + py, 0, maxY);
        }
      }

      return next;
    });
  };

  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader 
          eyebrow="About Me" 
          title="A Glimpse Into My World" 
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader 
                title="My reads" 
                description="Discover the book I'm immersed in right now." 
              />
              <div className="w-40 mx-auto mt-2 md:mt-0 mb-6">
                <Image src={bookImage} alt="Book cover" className="w-40 h-auto object-contain" />
              </div>
            </Card>
            <Card className="md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="My Toolbox" 
                description="Explore the technologies and tools I use to craft exceptional digital experiences." 
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:40s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:30s]" />
            </Card>
          </div>



          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-8"> 
            <Card className="p-0 flex flex-col md:col-span-3 lg:col-span-2 overflow-visible">
              <CardHeader 
                title="Education" 
                description="Have a look at my academic background."
                className="px-6 py-6" 
              />
              <div>
                <ul className="flex flex-col gap-3 px-6 pb-6">
                  {formations.map((formation) => (
                    <li key={formation.title} className="flex items-start gap-3 bg-white/3 rounded-md px-3 py-2">
                      <div className="text-xl">{formation.emoji}</div>
                      <div className="text-sm text-white/80">{formation.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
            <Card className="p-0 flex flex-col md:col-span-3 lg:col-span-2 overflow-visible">
              <CardHeader 
                title="Certifications" 
                description="Check out the certifications I've earned."
                className="px-6 py-6" 
              />
              <div>
                <ul className="flex flex-col gap-3 px-6 pb-6">
                  {certifications.map((certification) => (
                    <li key={certification.title} className="flex items-start gap-3 bg-white/3 rounded-md px-3 py-2">
                      <div className="text-xl">{certification.emoji}</div>
                      <div className="text-sm text-white/80" dangerouslySetInnerHTML={{ __html: certification.title }} />
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8"> 
            <Card className="p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
                title="Beyond the Code" 
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6" 
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }} 
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 overflow-hidden whitespace-nowrap">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="p-0 relative md:col-span-2 lg:col-span-1">
              <div className="w-full">
                <Image src={mapImage} alt="map" className="w-full object-cover object-left-top"/>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
