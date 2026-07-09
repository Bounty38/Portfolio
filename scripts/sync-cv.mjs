import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outDir = join(root, "public/cv");

const copies = [
  {
    from: join(root, "src/assets/EN_CV_Sam_Kislitcyn.pdf"),
    to: join(outDir, "en.pdf"),
  },
  {
    from: join(root, "src/assets/RU_CV_Semyon_Kislitcyn.pdf"),
    to: join(outDir, "ru.pdf"),
  },
];

mkdirSync(outDir, { recursive: true });

for (const { from, to } of copies) {
  if (!existsSync(from)) {
    console.error(`Missing CV source file: ${from}`);
    process.exit(1);
  }

  copyFileSync(from, to);
  console.log(`Synced ${to}`);
}

console.log("CV files synced.");
