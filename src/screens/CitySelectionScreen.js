import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CitySelectionScreen = () => {
  const navigation = useNavigation();

  const navigateToRecipeList = (city) => {
    navigation.navigate('RecipeList', { city });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select a City</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToRecipeList('Westfield')}
      >
        <Text style={styles.buttonText}>Westfield, NJ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToRecipeList('Summit')}
      >
        <Text style={styles.buttonText}>Summit, NJ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToRecipeList('Millburn')}
      >
        <Text style={styles.buttonText}>Millburn, NJ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
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
