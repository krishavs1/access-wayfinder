import Constants from "expo-constants";
import venueImageManifest from "../venueImageManifest.json";

const BUCKET = "venue-images";

const lookup = new Map();
for (const row of venueImageManifest) {
	lookup.set(
		`${row.city}\0${row.categoryId}\0${row.name}`,
		row.storagePath,
	);
}

function supabaseBaseUrl() {
	return (
		Constants.expoConfig?.extra?.supabaseUrl ||
		process.env.EXPO_PUBLIC_SUPABASE_URL ||
		""
	).replace(/\/$/, "");
}

/**
 * Public Storage URL for a venue hero image, or null if unknown / not configured.
 * @param {string} city
 * @param {string} categoryId
 * @param {string} name
 */
export function getVenueImageUrl(city, categoryId, name) {
	const base = supabaseBaseUrl();
	if (!base) return null;
	const storagePath = lookup.get(`${city}\0${categoryId}\0${name}`);
	if (!storagePath) return null;
	const encodedPath = storagePath
		.split("/")
		.map((seg) => encodeURIComponent(seg))
		.join("/");
	return `${base}/storage/v1/object/public/${BUCKET}/${encodedPath}`;
}
