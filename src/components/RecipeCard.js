import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	Pressable,
	Dimensions
} from "react-native";
import React from "react";
import { colors, recipeList } from "../Constant";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = ({ categoriesState }) => {
	const navigation = useNavigation();
	const screenWidth = Dimensions.get('window').width;

    // Set the number of columns based on the screen width
    // Assuming 768 as a threshold for iPads
    const numColumns = screenWidth >= 768 ? 4 : 2;
	const listKey = `flat-list-${numColumns}-columns`;

	///get the id selected
	const selectedCategoryId = categoriesState
		.filter(category => category.isSelected)
		.map(category => category.id)
		.join(',');

		return (
			<View>
			  <FlatList
			  key={listKey} 
				data={recipeList.filter(item => item.categoryId === selectedCategoryId)}
				renderItem={({ item }) => (
				  <Pressable
					onPress={() => navigation.navigate("RecipeDetail", { item: item })}
					style={{
					  backgroundColor: colors.COLOR_LIGHT,
					  shadowColor: "#000",
					  shadowOffset: { width: 0, height: 4 },
					  shadowOpacity: 0.1,
					  shadowRadius: 7,
					  borderRadius: 16,
					  marginVertical: 16,
					  alignItems: "center",
					  paddingHorizontal: 8,
					  paddingVertical: 26,
					}}
				  >
					<Image
					  source={item.image}
					  style={{ width: 150, height: 150, resizeMode: "contain" }}
					/>
					<Text>{item.name}</Text>
					<View style={{ flexDirection: "row", marginTop: 8 }}>
					  <View style={{ flexDirection: "row" }}>
						<Text style={{ marginRight: 4 }}>{item.rating}</Text>
						<FontAwesome
						  name="star"
						  size={16}
						  color={colors.COLOR_PRIMARY}
						/>
					  </View>
					</View>
				  </Pressable>
				)}
				numColumns={numColumns}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                }}
                showsVerticalScrollIndicator={false}
			  />
			</View>
		  );
};

	// return (
	// 	<View>
	// 		<FlatList
	// 			data={recipeList}
	// 			renderItem={({ item }) => (
	// 				if (item.categoryId === selectedCategoryId) {

	// 				<Pressable
	// 					onPress={() => navigation.navigate("RecipeDetail", { item: item })}
	// 					style={{
	// 						backgroundColor: colors.COLOR_LIGHT,
	// 						shadowColor: "#000",
	// 						shadowOffset: { width: 0, height: 4 },
	// 						shadowOpacity: 0.1,
	// 						shadowRadius: 7,
	// 						borderRadius: 16,
	// 						marginVertical: 16,
	// 						alignItems: "center",
	// 						paddingHorizontal: 8,
	// 						paddingVertical: 26,
	// 					}}
	// 				>
	// 					<Image
	// 						source={item.image}
	// 						style={{ width: 150, height: 150, resizeMode: "center" }}
	// 					/>
	// 					<Text>{item.name}</Text>
	// 					<View style={{ flexDirection: "row", marginTop: 8 }}>
	// 						<Text>{item.time}</Text>
	// 						<Text> | </Text>
	// 						<View style={{ flexDirection: "row" }}>
	// 							<Text style={{ marginRight: 4 }}>{item.rating}</Text>
	// 							<FontAwesome
	// 								name="star"
	// 								size={16}
	// 								color={colors.COLOR_PRIMARY}
	// 							/>
	// 						</View>
	// 					</View>
	// 				</Pressable>
	// 			} else {

	// 			}

	// 			)}
	// 			numColumns={2}
	// 			columnWrapperStyle={{
	// 				justifyContent: "space-between",
	// 			}}
	// 			showsVerticalScrollIndicator={false}
	// 		/>
	// 	</View>
	// );

export default RecipeCard;

const styles = StyleSheet.create({});
