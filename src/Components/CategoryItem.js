import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CategoryList = (props) => {
  return (
    <View style={styles.Container}>
      <Image source={{ url: props.img }} alt="" style={styles.c_img} />
      <Text style={styles.font}>{props.type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  font: {
    color: "white",
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
