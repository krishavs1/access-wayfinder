import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Platform } from "react-native";
import React from "react";

const window = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/images/Logo-removebg-preview.png")}
				style={styles.logo}
			/>
<Text style={styles.subtitle}>
				Demystifying Accessibility
			</Text>
			<Text style={styles.title}>
				Access Wayfinder
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("CitySelection")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>
					Let's Go
				</Text>
			</TouchableOpacity>

			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		paddingVertical: Platform.OS === 'ios' ? 20 : 15,
	},
	logo: {
		width: '120%', // Increased width
		height: window.height * 1.5, // Set height to 30% of screen height
		resizeMode: 'contain',
		maxHeight: 500, // Maximum height for very large screens
		minHeight: 200, // Minimum height for very small screens
	},
	title: {
		fontSize: window.height * 0.05,
		fontWeight: 'bold',
		color: '#000',
		textAlign: 'center',
	},
	button: {
		width: '80%',
		paddingVertical: 12,
		borderRadius: 18,
		alignItems: 'center',
		backgroundColor: '#87bfd7',
	},
	buttonText: {
		fontSize: 18,
		color: '#000',
		fontWeight: '700',
	},
	subtitle: {
		fontSize: window.height * 0.02,
		fontWeight: 'bold',
		color: '#000',
		textAlign: 'center',
	},
});

export default WelcomeScreen;
