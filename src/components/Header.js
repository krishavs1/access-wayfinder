import { StyleSheet, Text, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const Header = ({ headerText, headerIcon, onAboutPress}) => {
	return (
		<View style={{ flexDirection: "row" }}>
			<Text style={{ flex: 1, fontSize: 24, fontWeight: "700" }}>
				{headerText}
			</Text>
			{onAboutPress && (
				<TouchableOpacity onPress={onAboutPress} style={styles.aboutButton}>
					<Text style={styles.aboutButtonText}>About</Text>
				</TouchableOpacity>
			)}
			<FontAwesome name={headerIcon} size={24} color="#87bfd7" />
		</View>
	);
};

export default Header;
const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		// Add other styles for your header container
	},
	headerText: {
		fontSize: 24,
		fontWeight: "700",
		// Add other styles for your header text
	},
	aboutButton: {
		// Add styles for your about button (optional)
	},
	aboutButtonText: {
		// Add styles for your about button text (optional)
	},
	// ... other styles
});