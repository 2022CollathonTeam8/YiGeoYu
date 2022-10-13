import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Banner } from "../../Components";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>

      <Banner />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Event");
          // Alert.alert("dd");
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "30%",
          // backgroundColor: "red",
        }}
      >
        {/* <Text>asasdfasdf</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default Home;
