import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, TextInput, Linking } from "react-native";
import Header from "../components/Header";
import CategoriesFilter from "../components/CategoriesFilter";
import RecipeCard from "../components/RecipeCard";
import { categories, recipeList } from "../Constant";
import { useNavigation } from '@react-navigation/native';

const RecipeListScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoriesState, setCategoriesState] = useState(categories);

  const filteredRecipes = recipeList.filter(recipe =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    categoriesState.some(category => category.isSelected && category.id === recipe.categoryId)
  );

  const navigateToDetails = () => {
    navigation.navigate('AboutUs');
  };

  const handlePress = () => {
    const url = "https://forms.gle/wEgP6xjeMunncHfY9";
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText="Mission Inclusion's" />
      <View style={styles.headerContainer}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Westfield, NJ Guide</Text>
        <TouchableOpacity
          style={styles.aboutUsButton}
          onPress={navigateToDetails}
        >
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>About Us</Text>
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
      <TextInput
        style={styles.searchBar}
        placeholder="Search recipes..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <CategoriesFilter categoriesState={categoriesState} setCategoriesState={setCategoriesState}/>
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Places</Text>
        <RecipeCard filteredRecipes={filteredRecipes} />
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
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default RecipeListScreen;
