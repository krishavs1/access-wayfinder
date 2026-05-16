const fs = require("fs");
const path = require("path");

// Must be quiet: dotenv v17 logs to stdout and breaks iOS Podfile JSON parsing on EAS.
require("dotenv").config({
	path: path.join(__dirname, ".env"),
	quiet: true,
});

const appJson = JSON.parse(
	fs.readFileSync(path.join(__dirname, "app.json"), "utf8"),
);

module.exports = {
	expo: {
		...appJson.expo,
		ios: {
			...appJson.expo.ios,
			infoPlist: {
				ITSAppUsesNonExemptEncryption: false,
			},
		},
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
