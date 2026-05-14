/**
 * Removes image: require("../assets/images/...") lines from src/Constant.js recipeList.
 * Run after venue images live on Supabase and venueImageManifest.json is generated.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, "..", "src", "Constant.js");

let t = fs.readFileSync(p, "utf8");
const before = (t.match(/\bimage:\s*require\(/g) || []).length;
t = t.replace(
	/\r?\n\t*image:\s*require\("\.\.\/assets\/images\/[^"]+"\),?/g,
	"",
);
const after = (t.match(/\bimage:\s*require\(/g) || []).length;

if (after > 0) {
	console.error(`Still ${after} image: require(...) lines left — aborting`);
	process.exit(1);
}

fs.writeFileSync(p, t);
console.log(`Removed ${before} bundled image lines from Constant.js`);
