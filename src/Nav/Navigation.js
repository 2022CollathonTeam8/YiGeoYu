import React, { useState, useEffect } from "react";
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
import { FloatingBtn } from "../Components";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import * as Location from "expo-location";

const getLoc = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      const location__ = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      console.log(location__[0]);
      setLocation(location__[0].district);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return location;
};

const HomeStack = () => {
  let locdae = getLoc();
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
        // options={({ navigation }) => ({
        //   headerTitleAlign: "center",
        // })}
      />
      <Stack.Screen
        name="ListUp"
        component={ListUp}
        // options={{
        //   headerTitleAlign: "center",
        //   headerShown: true,
        // }}
      />
      <Stack.Screen
        name="Event"
        component={Event}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerShown: true,
          // headerTransparent: true,
          // headerRight: () => {
          //   return (
          //     <TouchableOpacity onPress={() => navigation.navigate("Modals")}>
          //       <Image
          //         source={require("../../assets/icon.png")}
          //         style={styles.logo}
          //       />
          //     </TouchableOpacity>
          //   );
          // },
        })}
      />

      <Stack.Screen name="ProfileStack" component={ProfileStack} />

      <Stack.Screen
        name="Make"
        component={MakeItem}
        // options={({ navigation }) => ({
        //   headerTitleAlign: "center",
        // })}
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
  let locdae = getLoc();
  return (
    <SafeAreaView style={styles.SafeAreaViewAnd}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="홈"
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              // height: 55,
              // backgroundColor: "red",
            },
          }}
        >
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

          {/* <Tab.Screen
            name="MakeItem"
            children={() => <MakeItem data={locdae} />}
            // component={MakeItem}
            // data={locdae}
            options={{
              presentation: "transparentModal",
              // headerTitleAlign: "center",
              // headerShown: true,
              tabBarIcon: () => {
                return <FloatingBtn />;
              },
            }}
          /> */}
          <Tab.Screen
            name="채팅"
            component={ChatStack}
            options={{
              tabBarIcon: () => {
                return (
                  <View
                  // style={{
                  //   marginRight: Dimensions.get("screen").width * 0.2,
                  // }}
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
