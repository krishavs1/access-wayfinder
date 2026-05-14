const fs = require("fs");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const appJson = JSON.parse(
	fs.readFileSync(path.join(__dirname, "app.json"), "utf8"),
);

module.exports = {
	expo: {
		...appJson.expo,
		extra: {
			...appJson.expo.extra,
			supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL || "",
		},
		assetBundlePatterns: [
			"./assets/icon.png",
			"./assets/splash.png",
			"./assets/adaptive-icon.png",
			"./assets/favicon.png",
			"./assets/images/Logo-removebg-preview.png",
		],
	},
};
