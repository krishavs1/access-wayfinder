/**
 * Shared: parse recipeList from Constant.js text and compute Supabase object paths
 * (must match what build-supabase-image-staging.mjs writes under venue-images-for-supabase/).
 */
import fs from "fs";
import path from "path";

const MARKER = "export const recipeList = [";

/** @param {string} str @param {number} start */
export function sliceBalancedObject(str, start) {
	let i = start;
	let depth = 0;
	let inStr = false;
	let strQuote = "";
	let escaped = false;

	for (; i < str.length; i++) {
		const c = str[i];

		if (inStr) {
			if (escaped) {
				escaped = false;
				continue;
			}
			if (c === "\\" && strQuote !== "`") {
				escaped = true;
				continue;
			}
			if (c === strQuote) inStr = false;
			continue;
		}

		if (c === '"' || c === "'" || c === "`") {
			inStr = true;
			strQuote = c;
			continue;
		}

		if (c === "{") depth++;
		if (c === "}") {
			depth--;
			if (depth === 0) return { obj: str.slice(start, i + 1), end: i + 1 };
		}
	}
	return null;
}

/** @param {string} constantPath */
export function parseVenueImageRows(constantPath) {
	const text = fs.readFileSync(constantPath, "utf8");
	const si = text.indexOf(MARKER);
	if (si < 0) throw new Error("Could not find recipeList in Constant.js");

	const rows = [];
	let pos = si + MARKER.length;

	while (pos < text.length) {
		while (pos < text.length && /\s/.test(text[pos])) pos++;
		if (text[pos] === "]") break;
		if (text[pos] !== "{") {
			pos++;
			continue;
		}
		const parsed = sliceBalancedObject(text, pos);
		if (!parsed) break;
		const { obj, end } = parsed;
		pos = end;

		const categoryM = obj.match(/\bcategoryId:\s*"([^"]+)"/);
		const idM = obj.match(/\bid:\s*"([^"]+)"/);
		const cityM = obj.match(/\bcity:\s*"([^"]+)"/);
		const nameM = obj.match(/\bname:\s*"([^"]+)"/);
		const imgM = obj.match(
			/\bimage:\s*require\("\.\.\/assets\/images\/([^"]+)"\)/,
		);
		if (!imgM) continue;

		if (!idM || !cityM || !nameM || !categoryM) {
			throw new Error(
				`Venue object with image but missing id/category/city/name:\n${obj.slice(0, 300)}`,
			);
		}
		rows.push({
			id: idM[1],
			categoryId: categoryM[1],
			city: cityM[1],
			name: nameM[1],
			file: imgM[1],
		});
	}
	return rows;
}

export function citySlug(city) {
	return city.trim().toLowerCase().replace(/\s+/g, "-");
}

/**
 * @param {{ id: string, categoryId: string, city: string, name: string, file: string }[]} rows
 * @returns {{ id: string, categoryId: string, city: string, name: string, file: string, storagePath: string }[]}
 */
export function addStoragePaths(rows) {
	const cityIdGroups = new Map();
	for (const r of rows) {
		const k = `${citySlug(r.city)}\t${r.id}`;
		if (!cityIdGroups.has(k)) cityIdGroups.set(k, []);
		cityIdGroups.get(k).push(r);
	}

	function destStem(r, siblings) {
		const stem = path.parse(r.file).name.replace(/[^a-zA-Z0-9_-]+/g, "-");
		if (siblings.length === 1) return r.id;
		return `${r.id}-${stem}`;
	}

	return rows.map((r) => {
		const slug = citySlug(r.city);
		const key = `${slug}\t${r.id}`;
		const siblings = cityIdGroups.get(key) || [r];
		const ext = path.extname(r.file) || ".png";
		const destName = `${destStem(r, siblings)}${ext}`;
		const storagePath = `${slug}/${destName}`;
		return { ...r, storagePath };
	});
}
