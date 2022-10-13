import React, { useState } from "react";
import {
  SafeAreaView,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home, ListUp, Event, Modals, Login, Profile } from "../Screnns";
import { MaterialIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          // headerShown: true,
          // headerTitle: "",
          // headerTransparent: true,
          // headerLeft: () => {
          //   return (
          //     <Image
          //       source={require("../../assets/icon.png")}
          //       style={styles.logo}
          //     />
          //   );
          // },

          // headerRight: () => {
          //   return (
          //     <TouchableOpacity
          //       onPress={() => {
          //         navigation.navigate("Modals");
          //       }}
          //     >
          //       <Image
          //         source={require("../../assets/icon.png")}
          //         style={styles.logo}
          //       />
          //     </TouchableOpacity>
          //   );
          // },
        })}
      />
      <Stack.Screen
        name="ListUp"
        component={ListUp}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerShown: true,
          // headerTransparent: true,
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("Modals")}>
                <Image
                  source={require("../../assets/icon.png")}
                  style={styles.logo}
                />
              </TouchableOpacity>
            );
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

//탭바
const Navigation = () => {
  return (
    <SafeAreaView style={styles.SafeAreaViewAnd}>
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

const styles = StyleSheet.create({
  SafeAreaViewAnd: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
  },
});

export default Navigation;
