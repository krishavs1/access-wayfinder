import {
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	Pressable,
	Dimensions,
	ScrollView,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import MapView, { Marker } from 'react-native-maps';

const RecipeDetailsScreen = ({ navigation, route }) => {
	const { item } = route.params;

	return (
		<View style={{ backgroundColor: item.color, flex: 1 }}>
			<SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				
			</SafeAreaView>
			<View
				style={{
					backgroundColor: "#fff",
					flex: 1,
					marginTop: 140,
					borderTopLeftRadius: 56,
					borderTopRightRadius: 56,
					alignItems: "center",
					paddingHorizontal: 16,
				}}
			>
				<View
					style={{
						// backgroundColor: "red",
						height: 299,
						width: 300,
						position: "absolute",
						top: -150,
						// marginBottom: 130,
					}}
				>
					<Image
						source={item.image}
						resizeMode={"contain"}
						style={{
							resizeMode: "contain",
							width: "100%",
							height: "100%",
							borderRadius: 300/5,	
							resizeMode: "contain",
						}}
					/>
				</View>

				{/* Recipe Name */}
				<Text style={{ marginTop: 150, fontSize: 28, fontWeight: "bold" }}>
					{item.name}
				</Text>

				<View style={{ flex: 1 }}>
					<ScrollView showsVerticalScrollIndicator={false}>
						{/* Recipe Description */}
						<Text style={{ fontSize: 20, marginVertical: 16 }}>
							{item.description}
						</Text>

						{/* Recipe Extra Details */}

						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								// width: "100%",
								// backgroundColor: "green",
							}}
						>
							<View
								style={{
									backgroundColor: "rgba(255, 1, 0, 0.38)",
									// paddtal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
								<Text style={{ fontSize: 40, fontWeight: 400 }}>
									{item.time}
								</Text>
								<Text style={{ fontSize: 20 }}>Entrance</Text>
								
							</View>
							<View
								style={{
									backgroundColor: "rgba(135, 206, 235, 0.8)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
									// marginHorizontal: 24,
								}}
							>
								<Text style={{ fontSize: 40, fontWeight: 400 }}>
									{item.difficulty}
								</Text>
								<Text style={{ fontSize: 20 }}>Interior</Text>
							</View>
							<View
								style={{
									backgroundColor: "rgba(255, 165, 0, 0.48)",
									// paddingHorizontal: 16,
									paddingVertical: 26,
									borderRadius: 8,
									alignItems: "center",
									width: 100,
								}}
							>
							<Text style={{ fontSize: 40, fontWeight: 400 }}>
									{item.calories}
								</Text>
								<Text style={{ fontSize: 20 }}>Parking</Text>
							</View>
						</View>

						{/* Recipe Ingredients  */}

						<View style={{ alignSelf: "flex-start", marginVertical: 15 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Entrance:
							</Text>

							{item.ingredients.map((ingredient, index) => {
								return (
									<View
										style=	{{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "#87bfd7",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{ingredient}
										</Text>
									</View>
								);
							})}
						</View>


						{/* Recipe Steps */}

						<View style={{ alignSelf: "flex-start", marginVertical: 15 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Interior:
							</Text>

							{item.interior.map((interior, index) => {
								return (
									<View
										style=	{{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "#87bfd7",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{interior}
										</Text>
									</View>
								);
							})}
						</View>

						<View style={{ alignSelf: "flex-start", marginVertical: 15 }}>
							<Text
								style={{ fontSize: 22, fontWeight: "600", marginBottom: 6 }}
							>
								Parking:
							</Text>

							{item.parking.map((parking, index) => {
								return (
									<View
										style=	{{
											flexDirection: "row",
											alignItems: "center",
											marginVertical: 4,
										}}
										key={index}
									>
										<View
											style={{
												backgroundColor: "#87bfd7",
												height: 10,
												width: 10,
												borderRadius: 5,
											}}
										></View>
										<Text style={{ fontSize: 18, marginLeft: 6 }}>
											{parking}
										</Text>
									</View>
								);
							})}
							<View style={{ alignSelf: "flex-start", marginVertical: 5 }}>
    {/* ... Other content */}

   
</View>
						</View>
						<View style={{ alignSelf: "flex-start", marginVertical: 10 }}>
							<Text style={{ fontSize: 20, marginVertical: 5 }}>
								{item.bathroom}
							</Text>
							<Text style={{ fontSize: 20, marginVertical: 15 }}>
								{item.seating}
							</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		</View>
	);
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({});