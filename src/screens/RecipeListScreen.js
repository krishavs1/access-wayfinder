import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Linking, TextInput } from "react-native";
import Header from "../components/Header";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { categories, recipeList } from "../Constant";
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";

const RecipeListScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { city } = route.params;

  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesState, setCategoriesState] = useState([]);

  useEffect(() => {
    const categoriesArray = categories.map((category) => {
      let selected = category.id === "01" ? true : false;
      return {
        ...category,
        isSelected: selected
      };
    });
    setCategoriesState(categoriesArray);
  }, []);

  const handlePress = () => {
    const url = "https://forms.gle/wEgP6xjeMunncHfY9";
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const navigateToDetails = () => {
    navigation.navigate('AboutUs');
  };

  const getSelectedCategoryName = () => {
    const selectedCategory = categoriesState.find(category => category.isSelected);
    return selectedCategory ? selectedCategory.category : 'Places';
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextWrapper}>
          <Text style={styles.headerText}>Mission Inclusion's</Text>
          <Text style={styles.cityGuide}>{city}, NJ Guide</Text>
        </View>
        <TouchableOpacity
          style={styles.aboutUsButton}
          onPress={navigateToDetails}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ borderBottomWidth: 2, borderBottomColor: '#ccc', marginTop: 10 }} />

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text style={styles.buttonText}>Share your observations or suggest changes!</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        {categoriesState.length > 0 && (
          <CategoriesFilter categoriesState={categoriesState} setCategoriesState={setCategoriesState} />
        )}
      </View>
      
      <TextInput
        placeholder={`Search ${getSelectedCategoryName()}`}
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchBar}
      />

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Places</Text>
        <RecipeCard categoriesState={categoriesState} searchQuery={searchQuery} city={city} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  backButton: {
    padding: 10,
  },
  headerTextWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22, // Increased font size
    fontWeight: 'bold',
  },
  cityGuide: {
    fontSize: 18, // Increased font size for city guide
    fontWeight: 'bold',
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
