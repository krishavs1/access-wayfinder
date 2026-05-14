/**
 * Writes src/venueImageManifest.json for runtime Supabase image URLs.
 * Keys venues by (city, name) — must be unique in recipeList.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
	addStoragePaths,
	parseVenueImageRows,
} from "./lib/venueImagePaths.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const constantPath = path.join(root, "src", "Constant.js");
const outPath = path.join(root, "src", "venueImageManifest.json");

const rows = addStoragePaths(parseVenueImageRows(constantPath));

const seen = new Map();
for (const r of rows) {
	const k = `${r.city}\n${r.categoryId}\n${r.name}`;
	if (seen.has(k)) {
		console.error(
			`Duplicate city+category+name (manifest key collision):\n  ${k.replace(/\n/g, " / ")}\n  paths: ${seen.get(k)} vs ${r.storagePath}`,
		);
		process.exit(1);
	}
	seen.set(k, r.storagePath);
}

const manifest = rows.map(({ city, categoryId, name, storagePath, file }) => ({
	city,
	categoryId,
	name,
	storagePath,
	sourceFile: file,
}));

fs.writeFileSync(outPath, JSON.stringify(manifest, null, "\t") + "\n");
console.log(`Wrote ${manifest.length} rows → ${outPath}`);
