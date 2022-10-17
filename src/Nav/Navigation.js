import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  Home,
  ListUp,
  Event,
  MakeItem,
  Login,
  SignUp,
  Profile,
  ChatList,
  ChatRoom,
} from "../Screnns";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
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
        name="MakeItem"
        component={MakeItem}
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

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerBackTitleVisible: false,
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

const ChatStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="ChatList"
        component={ChatList}
        options={{
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoom}
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
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
          }}
        >
          <Tab.Screen
            name="프로필"
            component={ProfileStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View
                    style={{
                      marginLeft: Dimensions.get("screen").width * 0.2,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="menu"
                      size={30}
                      color="black"
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="홈"
            component={HomeStack}
            options={{
              tabBarIcon: () => {
                return (
                  <MaterialCommunityIcons
                    name="home-outline"
                    size={30}
                    color="black"
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="채팅"
            component={ChatStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View
                    style={{
                      marginRight: Dimensions.get("screen").width * 0.2,
                    }}
                  >
                    <MaterialCommunityIcons
                      name="message-processing-outline"
                      size={30}
                      color="black"
                    />
                  </View>
                );
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
