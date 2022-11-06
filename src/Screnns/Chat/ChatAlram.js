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
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import images from "../../../assets";
import { LostCard } from "../../Components";

const Card = () => {
  return (
    <>
      <TouchableOpacity style={styles.CardBox}>
        <Image source={images.profile} />
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text style={styles.CardTitle}>mlb 모자</Text>
          <Text style={styles.CardSub}>어은동 1일전</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const ChatAlram = ({ navigation }) => {
  //리프레쉬
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [isChat, setIsChat] = useState(true);

  const [isCheck, setIsCheck] = useState(0);

  return (
    <>
      {/*헤더 */}

      <View style={styles.Header}>
        {/* <View style={styles.LogoBox}> */}
        <View
          style={styles.CategoryBox}
          onPress={() => navigation.navigate("ProfileStack")}
        >
          <MaterialIcons name="menu" size={30} color="white" />
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setIsChat(true)}
        >
          {isChat ? (
            <Text style={styles.Title}>채팅알림</Text>
          ) : (
            <Text style={styles.UnTitle}>채팅알림</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setIsChat(false)}
        >
          {isChat ? (
            <Text style={styles.UnTitle}>키워드 알림</Text>
          ) : (
            <Text style={styles.Title}>키워드 알림</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="window-close" size={30} color="black" />
        </TouchableOpacity>
        {/* </View> */}
      </View>
      <Image source={images.BottomCircle} style={styles.HeaderCircle} />

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
        {isChat ? (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        ) : (
          <>
            <View style={styles.KeyWordBox}>
              <Text style={styles.KeyWordText}>알림 키워드 {isCheck}개</Text>
              <TouchableOpacity style={styles.KeyWordSetBox}>
                <Text style={styles.KeyWordSetText}>설정</Text>
              </TouchableOpacity>
            </View>
            <LostCard />
            <LostCard />
            <LostCard />
          </>
        )}
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
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    // color: "#5F7A61",
  },
  UnTitle: {
    textAlign: "center",
    fontWeight: "400",
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
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 5,
  },
  CardSub: {
    fontWeight: "500",
    fontSize: 15,
    color: "#878B93",
  },

  KeyWordBox: {
    flexDirection: "row",
    paddingVertical: 20,
    width: "80%",
    marginLeft: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  KeyWordText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#56C596",
  },
  KeyWordSetBox: {
    borderRadius: 30,
    backgroundColor: "#56C596",
    paddingVertical: 10,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  KeyWordSetText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default ChatAlram;
