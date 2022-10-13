import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const Event = ({ props }) => {
  const aa = props;
  return (
    <View>
      <Text>Event, {aa}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default Event;
