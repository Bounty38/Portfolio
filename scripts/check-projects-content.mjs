import { existsSync, readFileSync } from "node:fs";

const projectsSource = readFileSync("src/data/projects.json", "utf8");
const projects = JSON.parse(projectsSource);
const enSource = readFileSync("src/i18n/locales/en.ts", "utf8");
const ruSource = readFileSync("src/i18n/locales/ru.ts", "utf8");

const requiredInProjects = [
  '"id": "survivor-tool"',
  '"id": "stellar-burgers"',
  '"id": "blog-customizer"',
  '"id": "weblarek"',
  '"id": "portfolio"',
  '"id": "zakrivayuschiy-teg"',
  '"link": "https://bounty.best"',
  '"link": "https://github.com/Bounty38/stellar-burgers"',
  '"link": "https://github.com/Bounty38/blog-customizer"',
  '"link": "https://github.com/Bounty38/weblarek"',
  '"link": "https://github.com/Bounty38/Portfolio"',
  '"link": "https://bounty38.github.io/zakrivayuschiy-teg-f"',
  '"liveUrl": "https://bounty.best"',
  '"liveUrl": "https://bounty38.github.io/zakrivayuschiy-teg-f"',
];

const requiredInEn = [
  'company: "Survivor Tool"',
  'title: "DayZ Community Administration Platform"',
  'title: "Stellar Burgers"',
  'title: "Blog Customizer"',
  'title: "WebLarek"',
  'title: "Portfolio Website"',
  'title: "Zakrivayuschiy Teg - Frontend Project"',
];

const requiredInRu = [
  'company: "Survivor Tool"',
  'id: "survivor-tool"',
  'id: "stellar-burgers"',
  'id: "blog-customizer"',
  'id: "weblarek"',
  'id: "portfolio"',
  'id: "zakrivayuschiy-teg"',
];

const forbiddenSnippets = [
  'company: "E_X_E"',
  'title: "Enforce Script Developer"',
  "https://dayzexe.store/",
  "E_X_E.png",
];

const missingProjects = requiredInProjects.filter(
  (snippet) => !projectsSource.includes(snippet)
);
const missingEn = requiredInEn.filter((snippet) => !enSource.includes(snippet));
const missingRu = requiredInRu.filter((snippet) => !ruSource.includes(snippet));
const forbidden = forbiddenSnippets.filter(
  (snippet) =>
    projectsSource.includes(snippet) ||
    enSource.includes(snippet) ||
    ruSource.includes(snippet)
);

const requiredCvSources = [
  "src/assets/EN_CV_Sam_Kislitcyn.pdf",
  "src/assets/RU_CV_Semyon_Kislitcyn.pdf",
];

const missingCvSources = requiredCvSources.filter((path) => !existsSync(path));

const localeProjectIds = [...enSource.matchAll(/id: "([^"]+)"/g)].map(
  (match) => match[1]
);
const configProjectIds = projects.map((project) => project.id);
const missingConfigIds = localeProjectIds.filter(
  (id) => !configProjectIds.includes(id)
);
const extraConfigIds = configProjectIds.filter(
  (id) => !localeProjectIds.includes(id)
);

if (
  missingProjects.length > 0 ||
  missingEn.length > 0 ||
  missingRu.length > 0 ||
  forbidden.length > 0 ||
  missingCvSources.length > 0 ||
  missingConfigIds.length > 0 ||
  extraConfigIds.length > 0
) {
  console.error("Project content check failed.");

  if (missingProjects.length > 0) {
    console.error("Missing required snippets in src/data/projects.json:");
    for (const snippet of missingProjects) {
      console.error(`- ${snippet}`);
    }
  }

  if (missingEn.length > 0) {
    console.error("Missing required snippets in en.ts:");
    for (const snippet of missingEn) {
      console.error(`- ${snippet}`);
    }
  }

  if (missingRu.length > 0) {
    console.error("Missing required snippets in ru.ts:");
    for (const snippet of missingRu) {
      console.error(`- ${snippet}`);
    }
  }

  if (forbidden.length > 0) {
    console.error("Forbidden snippets still present:");
    for (const snippet of forbidden) {
      console.error(`- ${snippet}`);
    }
  }

  if (missingCvSources.length > 0) {
    console.error("Missing CV source files:");
    for (const path of missingCvSources) {
      console.error(`- ${path}`);
    }
  }

  if (missingConfigIds.length > 0 || extraConfigIds.length > 0) {
    console.error("Project id mismatch between locales and projects.json:");
    for (const id of missingConfigIds) {
      console.error(`- missing in projects.json: ${id}`);
    }
    for (const id of extraConfigIds) {
      console.error(`- extra in projects.json: ${id}`);
    }
  }

  process.exit(1);
}

console.log("Project content check passed.");
