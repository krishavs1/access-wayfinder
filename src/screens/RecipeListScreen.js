
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Linking, Dimensions } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { categories } from "../Constant";
import { colors } from "../Constant";

const windowWidth = Dimensions.get('window').width;

// You can set the base width of the card for a standard iPhone size
const baseCardWidth = 160; // base card width for iPhone
const baseScreenWidth = 375; // base screen width for iPhone
const cardScaleFactor = windowWidth / baseScreenWidth; // scale factor for different screen sizes
const cardWidth = baseCardWidth * cardScaleFactor; // card width adjusted for screen size


const RecipeListScreen = () => {


    const categoriesArray = []


    categories.map((category) => {




        let selected = category.id === "01" ? true : false


       


        return categoriesArray.push({
            ...category,
            isSelected: selected
        })
    })


    const handlePress = () => {
        const url = "https://forms.gle/wEgP6xjeMunncHfY9";
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };
    
    const [categoriesState, setCategoriesState] = useState(categoriesArray)


    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
            {/* render header */}
            <Header headerText="Mission Inclusion's" />
             <Text style={{ fontSize: 16, fontWeight: "bold" }}>Westfield, NJ Accessibility Guide</Text>
             
    {/* Add a decorative line below "Hello" */}
    
    <View style={{ borderBottomWidth: 2, borderBottomColor: '#ccc', marginTop: 10 }} />

            {/* Categories header */}


            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={handlePress}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>Click here to share your own observations or suggest changes!</Text>
            </TouchableOpacity>




            {/* Categories filter */}


            <View style={{ marginTop: 22 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                {/* Categories list */}
                <CategoriesFilter categoriesState={categoriesState} setCategoriesState={setCategoriesState}/>
            </View>


            {/* Recipe List Filter */}


            <View style={{ marginTop: 22, flex: 1 }}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Places</Text>
                {/* Recipes list */}


                <RecipeCard categoriesState={categoriesState}/>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: colors.COLOR_PRIMARY, // Use the primary color defined in your Constant file
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: colors.COLOR_LIGHT, // Assuming this is your light color for text, adjust if needed
        fontSize: 16,
        fontWeight: "bold",
    },
    // ... any other styles you want to include ...
});


export default RecipeListScreen;