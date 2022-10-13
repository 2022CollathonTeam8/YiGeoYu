import React from "react";
import { SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, ListUp, Event, Login, Profile } from "../Screnns";
import { MaterialIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListUp" component={ListUp} />
      <Stack.Screen name="Event" component={Event} />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="홈"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen
            name="홈"
            component={HomeStack}
            options={{
              tabBarIcon: () => {
                return <MaterialIcons name="home" size={24} color="black" />;
              },
            }}
          />
          <Tab.Screen
            name="프로필"
            component={ProfileStack}
            options={{
              tabBarIcon: () => {
                return <MaterialIcons name="person" size={24} color="black" />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;
