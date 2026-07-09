import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const projectsPath = join(root, "src/data/projects.json");
const outDir = join(root, "public/project-previews");
const LOCALES = ["en", "ru"];

const projects = JSON.parse(readFileSync(projectsPath, "utf8"));

function parseGithubRepo(link) {
  const match = link.match(/github\.com\/([^/]+)\/([^/?#]+)/);
  if (!match) {
    return null;
  }

  return {
    owner: match[1],
    repo: match[2].replace(/\.git$/, ""),
  };
}

async function fetchImageWithRetries(imageUrl, label) {
  const maxAttempts = 6;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const response = await fetch(imageUrl, {
      headers: { "User-Agent": "portfolio-snapshot-script" },
    });

    if (response.ok) {
      return Buffer.from(await response.arrayBuffer());
    }

    if (response.status === 429 && attempt < maxAttempts) {
      const delayMs = attempt * 5000;
      console.warn(`Rate limited for ${label}, retrying in ${delayMs}ms...`);
      await delay(delayMs);
      continue;
    }

    throw new Error(`Image fetch failed (${response.status}) for ${label}`);
  }

  throw new Error(`Image fetch failed for ${label}`);
}

async function captureGithubOg(owner, repo, outPath) {
  const url = `https://opengraph.githubassets.com/${Date.now()}/${owner}/${repo}`;
  const buffer = await fetchImageWithRetries(url, `${owner}/${repo}`);
  writeFileSync(outPath, buffer);
}

async function captureScreenshot(browser, { url, storage }, outPath) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
  });

  try {
    if (storage) {
      await page.addInitScript(
        ({ key, value }) => {
          localStorage.setItem(key, value);
        },
        { key: storage.key, value: storage.value }
      );
    }

    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.screenshot({ path: outPath, fullPage: false });
  } finally {
    await page.close();
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureProject(browser, project) {
  const captured = [];

  // Live site with i18n: capture per locale
  if (project.liveUrl && project.i18n) {
    for (const locale of LOCALES) {
      const localeConfig = project.i18n[locale];
      if (!localeConfig) {
        throw new Error(`Missing i18n config for locale: ${locale}`);
      }

      const url = localeConfig.url ?? project.liveUrl;
      const outPath = join(outDir, `${project.id}-${locale}.png`);

      await captureScreenshot(
        browser,
        { url, storage: localeConfig.storage },
        outPath
      );
      captured.push(`${project.id}-${locale}.png (${url})`);
      await delay(1000);
    }

    return captured;
  }

  // Live site without i18n: capture once and copy for other locales
  if (project.liveUrl) {
    const outPath = join(outDir, `${project.id}-en.png`);
    await captureScreenshot(browser, { url: project.liveUrl }, outPath);

    for (const locale of LOCALES.slice(1)) {
      copyFileSync(outPath, join(outDir, `${project.id}-${locale}.png`));
    }

    captured.push(`${project.id}-en.png (${project.liveUrl})`);
    captured.push(`${project.id}-ru.png (copy)`);
    return captured;
  }

  // No live site: keep GitHub OG banners (download once and copy)
  const github = parseGithubRepo(project.link);
  if (!github) {
    throw new Error(`Cannot parse GitHub URL: ${project.link}`);
  }

  const outPath = join(outDir, `${project.id}-en.png`);
  await captureGithubOg(github.owner, github.repo, outPath);
  copyFileSync(outPath, join(outDir, `${project.id}-ru.png`));
  captured.push(`${project.id}-en.png (github-og ${github.owner}/${github.repo})`);
  captured.push(`${project.id}-ru.png (copy)`);
  return captured;
}

async function main() {
  mkdirSync(outDir, { recursive: true });

  for (const file of readdirSync(outDir)) {
    if (/\.png$/.test(file)) {
      unlinkSync(join(outDir, file));
    }
  }

  const browser = await chromium.launch();
  const errors = [];

  for (const project of projects) {
    try {
      const captured = await captureProject(browser, project);
      for (const entry of captured) {
        console.log(`Screenshot captured: ${entry}`);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push({ id: project.id, message });
      console.error(`Failed: ${project.id} — ${message}`);
    }
  }

  await browser.close();

  if (errors.length > 0) {
    process.exit(1);
  }

  console.log(`Captured previews for ${projects.length} projects.`);
}

main();
