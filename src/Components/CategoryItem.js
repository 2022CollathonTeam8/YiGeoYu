import React from "react";
import { Text, Image, StyleSheet } from "react-native";

const CategoryList = (props) => {
  return (
    <>
      <Image source={props.img} alt="" style={styles.c_img} />
      <Text style={styles.font}>{props.type}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 20,
    fontWeight: "bold",
  },
  c_img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
});

export default CategoryList;
