import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Banner } from "../../Components";
import { MaterialIcons } from "@expo/vector-icons";

const part_banner = Dimensions.get("screen").height * 0.19;

console.log(part_banner);
const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <Banner height={part_banner} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Event");
        }}
        style={styles.BannerTouchArea}
      ></TouchableOpacity>
      <Text>
        <MaterialIcons name="home" size={24} color="black" />
      </Text>
      <Text>
        <MaterialIcons name="home" size={24} color="black" />
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    height: part_banner,
    backgroundColor: "red", //터치영역
    opacity: 0.5,
  },
});

export default Home;
