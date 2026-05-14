/**
 * Copies venue images from assets/images into venue-images-for-supabase/
 * using paths from src/venueImageManifest.json (same layout as Supabase).
 * Run: npm run generate:venue-manifest (while Constant.js still has requires), then this script.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const manifestPath = path.join(root, "src", "venueImageManifest.json");
const imagesDir = path.join(root, "assets", "images");
const outRoot = path.join(root, "venue-images-for-supabase");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

if (fs.existsSync(outRoot)) {
	fs.rmSync(outRoot, { recursive: true });
}
fs.mkdirSync(outRoot, { recursive: true });

let copied = 0;
const missing = [];

for (const row of manifest) {
	const src = path.join(imagesDir, row.sourceFile);
	const dest = path.join(outRoot, row.storagePath);
	if (!fs.existsSync(src)) {
		missing.push({ ...row, src });
		continue;
	}
	fs.mkdirSync(path.dirname(dest), { recursive: true });
	fs.copyFileSync(src, dest);
	copied++;
}

console.log(`From manifest: ${manifest.length} rows`);
console.log(`Copied ${copied} files → ${outRoot}`);
if (missing.length) {
	console.error(`Missing ${missing.length} source files:`);
	for (const x of missing) {
		console.error(`  ${x.storagePath} ← ${x.sourceFile}`);
	}
	process.exit(1);
}
