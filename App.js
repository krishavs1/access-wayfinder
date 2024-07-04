import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native"; // Ensure this import is correct

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
