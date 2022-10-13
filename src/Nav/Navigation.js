import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, ListUp, Event } from "../Screnns";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="HHome">
      <Stack.Screen name="HHome" component={Home} />
      <Stack.Screen name="ListUp" component={ListUp} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
