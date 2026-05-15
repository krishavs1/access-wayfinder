import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { recipeList } from '../Constant';

const CitySelectionScreen = () => {
  const navigation = useNavigation();

  const cities = useMemo(() => {
    const unique = [...new Set(recipeList.map((r) => r.city))];
    unique.sort((a, b) => a.localeCompare(b));
    return unique;
  }, []);

  const navigateToRecipeList = (city) => {
    navigation.navigate('RecipeList', { city });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select City</Text>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {cities.map((city) => (
          <TouchableOpacity
            key={city}
            style={styles.button}
            onPress={() => navigateToRecipeList(city)}
          >
            <Text style={styles.buttonText}>{`${city}, NJ`}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  scroll: {
    width: '100%',
    flexGrow: 0,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  button: {
    backgroundColor: '#87bfd7',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CitySelectionScreen;
