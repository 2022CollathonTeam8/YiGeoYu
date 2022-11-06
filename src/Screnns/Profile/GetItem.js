import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LostCard } from "../../Components";
import images from "../../../assets/images";

const GetItem = ({ navigation }) => {
  //리프레쉬
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
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
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.HeaderTitle}
          >
            습득 물건
          </Text>
          {/* 영역용 */}
          <View style={styles.CategoryBox}>
            <AntDesign name="left" size={30} color="white" />
          </View>
          {/* 영역용 */}
        </View>
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <ScrollView
        overScrollMode="never"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        style={styles.MidArea}
      >
        <LostCard />
        <LostCard />
        <LostCard />
        <LostCard />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 65,
  },
  HeaderBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 8,
    textAlign: "center",
  },

  CategoryBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  HeaderCircle: {
    width: "100%",
    reiszeMode: "stretch",
  },
  //////////////

  MidArea: {
    backgroundColor: "white",
  },
});
export default GetItem;
