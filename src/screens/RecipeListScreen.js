// RecipeListScreen.js

import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Linking, TextInput } from "react-native";
import Header from "../components/Header";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { categories } from "../Constant";
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
  const navigation = useNavigation();

  const navigateToDetails = () => {
    navigation.navigate('AboutUs');
  };
  const [searchQuery, setSearchQuery] = useState('');

  const categoriesArray = categories.map((category) => {
    let selected = category.id === "01" ? true : false;
    return {
      ...category,
      isSelected: selected
    };
  });

  const handlePress = () => {
    const url = "https://forms.gle/wEgP6xjeMunncHfY9";
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const [categoriesState, setCategoriesState] = useState(categoriesArray);
  const getSelectedCategoryName = () => {
    const selectedCategory = categoriesState.find(category => category.isSelected);
    return selectedCategory ? selectedCategory.category : 'Places';
  };
  
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      {/* render header */}
      <Header headerText="Mission Inclusion's" />
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Westfield, NJ Guide</Text>

        {/* About Us button on the same level */}
        <TouchableOpacity
          style={styles.aboutUsButton}
          onPress={navigateToDetails}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>

      {/* Add a decorative line below "Hello" */}
      <View style={{ borderBottomWidth: 2, borderBottomColor: '#ccc', marginTop: 10 }} />
     
      {/* Categories header */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Share your observations or suggest changes!</Text>
      </TouchableOpacity>

      {/* Categories filter */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {/* Categories list */}
        <CategoriesFilter categoriesState={categoriesState} setCategoriesState={setCategoriesState}/>
      </View>
      <TextInput
  placeholder={`Search ${getSelectedCategoryName()}`}
  value={searchQuery}
  onChangeText={setSearchQuery}
  style={styles.searchBar}
/>
      {/* Recipe List Filter */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Places</Text>
        {/* Recipes list */}
        <RecipeCard categoriesState={categoriesState} searchQuery={searchQuery}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  buttonStyle: {
    backgroundColor: '#87bfd7',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutUsButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchBar: {
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  
});

export default RecipeListScreen;