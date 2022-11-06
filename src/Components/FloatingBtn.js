import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import images from "../../assets";
const FloatingBtn = (props) => {
  return (
    // <TouchableOpacity style={styles.Main} onPress={props.navigation}>
    //   {/* <Text style={styles.Plus}>+</Text> */}
    //   <Image source={images.addBtn} style={styles.Plus} alt="" />
    // </TouchableOpacity>
    // <TouchableOpacity style={styles.Main} onPress={props.navigation}>
    //   <Image source={images.pencil} style={styles.Plus} alt="" />

    //   <Text style={{ alignSelf: "center" }}> 글쓰기</Text>
    // </TouchableOpacity>
    <View style={styles.Container}>
      <Image source={images.addBtn} style={styles.Plus} alt="" />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    alignSelf: "center",
  },
  // Main: {
  //   backgroundColor: "white",
  //   borderColor: "#5F7A61",
  //   borderWidth: 2,
  //   borderRadius: 50,
  //   paddingHorizontal: 10,
  //   paddingVertical: 5,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   flex: 1,
  // },
  Plus: {
    // width: 15,
    // height: 15,

    // alignSelf: "center",
    width: 80,
    height: 80,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 0,
    //       height: 2,
    //     },
    //     shadowOpacity: 0.25,
    //     shadowRadius: 3.84,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
});

export default FloatingBtn;
