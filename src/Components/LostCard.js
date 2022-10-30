import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const sampleImg = "https://source.unsplash.com/1024x768/?nature";

const LostCard = () => {
  return (
    <View style={{ paddingHorizontal: 24 }}>
      <View style={styles.Container}>
        <View style={styles.ImgBox}>
          <Image source={{ uri: sampleImg }} alt="" style={styles.Img} />
        </View>
        <View style={styles.ContentBox}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.Title}>
            분실물 이름
          </Text>
          <Text style={styles.When}>00월00일 00시</Text>
          <Text style={styles.Where}>유성구 궁동</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    height: 110,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    flexDirection: "row",
    flex: 1,
  },
  ImgBox: {
    flex: 3,
  },
  Img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  ContentBox: {
    flex: 7,
    paddingLeft: 20,
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  When: {
    fontSize: 10,
    color: "grey",
    paddingBottom: 5,
  },
  Where: { fontSize: 15, fontWeight: "bold", paddingBottom: 5 },
});

export default LostCard;
