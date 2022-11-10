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

const Setting = ({ navigation }) => {
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
            설정
          </Text>
          {/* 영역용 */}
          <View style={styles.CategoryBox}>
            <AntDesign name="left" size={30} color="white" />
          </View>
          {/* 영역용 */}
        </View>
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <ScrollView style={styles.MidArea}>
        <View style={styles.ProfileBox}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={images.profile} />
            <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
              "타몽"님
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#EDEDED",
              paddingVertical: 5,
              paddingHorizontal: 3,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "500", color: "#767676", fontSize: 15 }}>
              프로필 편집
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Box}>
          <Text style={styles.BoxTitle}>알림 설정</Text>
          <Text style={styles.BoxContent}>채팅 알림</Text>
          <Text style={styles.BoxContent}>키워드 알림</Text>
        </View>

        <View style={styles.Box}>
          <Text style={styles.BoxTitle}>사용자 설정</Text>
          <Text style={styles.BoxContent}>계정/정보 관리</Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.BoxTitle}>기타</Text>
          <Text style={styles.BoxContent}>공지사항</Text>
          <Text style={styles.BoxContent}>로그아웃</Text>
          <Text style={styles.BoxContent}>탈퇴</Text>
        </View>
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
    backgroundColor: "#F8F8FA",
  },
  ///////

  ProfileBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    paddingVertical: 20,
    marginLeft: "10%",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  Box: {
    width: "80%",
    paddingVertical: 20,
    marginLeft: "10%",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  BoxTitle: {
    fontWeight: "700",
    fontSize: 18,
    paddingBottom: 20,
  },
  BoxContent: {
    fontWeight: "500",
    fontSize: 18,
    color: "#767676",
    paddingBottom: 20,
  },
});
export default Setting;
