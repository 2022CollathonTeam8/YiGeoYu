import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FloatingBtn = (props) => {
  return (
    <TouchableOpacity style={styles.Main} onPress={props.navigation}>
      <Text style={styles.Plus}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Main: {
    width: 53,
    height: 53,
    borderRadius: 100,
    backgroundColor: "#CCF6C8",
    position: "absolute",
    right: 30,
    bottom: 20,
    zIndex: 1,
  },
  Plus: {
    fontSize: 53,
    color: "white",
    fontWeight: "bold",
  },
});

export default FloatingBtn;
