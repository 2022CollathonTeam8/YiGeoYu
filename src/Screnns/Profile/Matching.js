import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
const Matching = ({ navigation }) => {
  return (
    <>
      {/* //////HEADER////// */}
      <View style={styles.Header}>
        <View style={styles.HeaderBox}>
          <TouchableOpacity
            style={styles.CategoryBox}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={25} color="#5F7A61" />
          </TouchableOpacity>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.HeaderTitle}
          >
            매칭 완료
          </Text>
          {/* 영역용 */}
          <View style={styles.CategoryBox}>
            {/* <View style={{ width: 25, height: 25 }}></View> */}
          </View>
          {/* 영역용 */}
        </View>
      </View>

      <View>
        <Text>Matching</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
  },
  HeaderBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderTitle: {
    color: "#5F7A61",
    fontSize: 20,
    fontWeight: "bold",
    flex: 8,
    textAlign: "center",
  },

  CategoryBox: {
    // width: 100,
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  //////////////
});
export default Matching;
