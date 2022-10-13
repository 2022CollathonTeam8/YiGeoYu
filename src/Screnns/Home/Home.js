import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Banner } from "../../Components";
import { MaterialIcons } from "@expo/vector-icons";

// console.log(Dimensions.get("window").height);
// console.log(Dimensions.get("screen").height);
const part_banner = Dimensions.get("screen").height * 0.19;

console.log(part_banner);
const Home = ({ navigation }) => {
  return (
    <View>
      <Banner />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Event");
          // Alert.alert("dd");
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: part_banner,
          backgroundColor: "red",
          opacity: 0.5,
        }}
      >
        {/* <Text>asasdfasdf</Text> */}
      </TouchableOpacity>
      <Text>
        <MaterialIcons name="home" size={24} color="black" />
      </Text>
      <Text>
        <MaterialIcons name="home" size={24} color="black" />
      </Text>
    </View>
  );
};

export default Home;
