import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Profile from "../screens/Profile";
import SearchBar from "../screens/SearchBar";

const Stack = createStackNavigator();
const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="SearchBar" component={SearchBar} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 50 }}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
