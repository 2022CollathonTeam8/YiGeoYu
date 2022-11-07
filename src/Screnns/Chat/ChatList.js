import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Modal,
  Platform,
  Image,
  SafeAreaView,
  RefreshControl,
  Animated,
} from "react-native";
import { MaterialIcons, Fontisto, AntDesign } from "@expo/vector-icons";
import images from "../../../assets";

const Card = ({ nav }) => {
  return (
    <TouchableOpacity style={styles.CardBox} onPress={nav}>
      <Image source={images.profile} />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={styles.CardTitle}>mlb 모자</Text>
        <Text style={styles.CardSub}>어은동 1일전</Text>
      </View>
    </TouchableOpacity>
  );
};

const ChatList = ({ navigation }) => {
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
      {/*헤더*/}

      <View style={styles.Header}>
        {/* <View style={styles.LogoBox}> */}
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>채팅</Text>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.navigate("ChatAll")}
        >
          <Fontisto name="bell" size={30} color="black" />
        </TouchableOpacity>
        {/* </View> */}
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <ScrollView
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={{ backgroundColor: "#F8F8FA" }}
          />
        }
        style={{ backgroundColor: "#F8F8FA" }}
      >
        <Card nav={() => navigation.navigate("ChatRoom")} />

        <Card nav={() => navigation.navigate("ChatRoomSample")} />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    // backgroundColor: "#F8F8FA",
    backgroundColor: "white",
    height: 65,
    alignItems: "center",
    justifyContent: "space-between",
  },
  LogoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },

  Title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    // color: "#5F7A61",
  },
  CategoryBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  HeaderCircle: {
    width: "100%",
    reiszeMode: "stretch",
  },

  CardBox: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    width: "90%",
    marginLeft: "5%",
  },

  CardTitle: {
    fontWeight: "700",
    fontSize: 15,
    marginBottom: 5,
  },
  CardSub: {
    fontWeight: "500",
    fontSize: 15,
    color: "#878B93",
  },
});

export default ChatList;
