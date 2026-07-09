import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const projectsPath = join(root, "src/data/projects.json");
const outDir = join(root, "public/project-previews");

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

async function captureLiveUrl(browser, url, outPath) {
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
  });

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
    await page.screenshot({ path: outPath, fullPage: false });
  } finally {
    await page.close();
  }
}

async function fetchImageWithRetries(imageUrl, label) {
  const maxAttempts = 6;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent": "portfolio-snapshot-script",
      },
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

async function resolveGithubOgUrl(owner, repo) {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-snapshot-script",
    },
  });

  if (response.ok) {
    const data = await response.json();
    if (typeof data.social_preview_image_url === "string") {
      return data.social_preview_image_url;
    }
  }

  return `https://opengraph.githubassets.com/1/${owner}/${repo}`;
}

async function captureGithubOg(owner, repo, outPath) {
  const imageUrl = await resolveGithubOgUrl(owner, repo);
  const buffer = await fetchImageWithRetries(imageUrl, `${owner}/${repo}`);
  writeFileSync(outPath, buffer);
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const errors = [];

  for (const project of projects) {
    const outPath = join(outDir, `${project.id}.png`);

    try {
      if (project.liveUrl) {
        await captureLiveUrl(browser, project.liveUrl, outPath);
        console.log(`Screenshot captured: ${project.id}`);
        continue;
      }

      const github = parseGithubRepo(project.link);
      if (!github) {
        throw new Error(`Cannot parse GitHub URL: ${project.link}`);
      }

      await captureGithubOg(github.owner, github.repo, outPath);
      console.log(`OG image saved: ${project.id}`);
      await delay(2000);
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

  console.log(`Captured ${projects.length} project previews.`);
}

main();
