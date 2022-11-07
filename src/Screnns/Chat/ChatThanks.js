import React, { useState, useEffect, useCallback } from "react";
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
  TextInput,
} from "react-native";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import images from "../../../assets";
import { LostCard } from "../../Components";
import { CategoryData, Daejeon } from "../../DBTEMP";

const ChatThanks = ({ navigation }) => {
  return (
    <>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>감사인사</Text>
        <View style={styles.CategoryBox}>
          <Fontisto name="bell" size={30} color="white" />
        </View>
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <ScrollView>
        <View style={{ marginTop: 25 }}>
          <Image source={images.profile} style={styles.ModalImg} />
          <View style={styles.ModalBackBox}>
            <View style={styles.ModalInBox}>
              <View style={styles.ModalInBoxTop}>
                <Text style={{ fontSize: 16, fontWeight: "500" }}>
                  <Text style={{ fontSize: 16, fontWeight: "700" }}>
                    '습득자 닉네임'
                  </Text>
                  님
                </Text>
              </View>
              <View style={styles.ModalInBoxBottom}>
                <View style={styles.ModalInBoxBottomLeft}>
                  <Image source={images.sampleBox} />
                </View>
                <View style={styles.ModalInBoxBottomRight}>
                  <Text style={{ fontSize: 15 }}>mlb 모자</Text>
                  <Text style={{ color: "#878B93", fontSize: 13 }}>
                    어은동 1일전
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "80%",
            marginLeft: "10%",
            paddingBottom: 20,
            borderBottomColor: "#EBEBEB",
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>
            감사인사
          </Text>
          <View
            style={{
              backgroundColor: "rgba(189, 189, 189,0.3)",
              height: 140,
              width: "100%",
              borderRadius: 5,
            }}
          >
            <TextInput
              multiline
              textAlignVertical={"top"}
              placeholder="습득자에게 진심이 담긴 감사인사를 적어주세요."
              style={{
                height: 130,
                backgroundColor: "white",
                paddingVertical: 5,
                paddingHorizontal: 10,
                width: "98%",
                alignSelf: "center",
                borderRadius: 5,
              }}
            />
          </View>
        </View>

        <View
          style={{
            width: "60%",
            marginLeft: "20%",
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 14, color: "#56C596" }}>
            당신의 소중한 물건을 찾아준 이웃에게 고마운 만큼 하트를 눌러 주세요
            :)
          </Text>
        </View>

        <TouchableOpacity
          style={{
            zIndex: 3,
            alignSelf: "center",
            position: "absolute",
            bottom: 120,
          }}
        >
          <Image source={images.thankheart} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            zIndex: 2,
            alignSelf: "center",
            bottom: -150,
          }}
          onPress={() => {
            navigation.navigate("ChatList");
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#56C596",
            }}
          >
            완료
          </Text>
        </TouchableOpacity>
        <Image source={images.thanksBottom} style={styles.HeaderCircle2} />
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
  HeaderCircle2: {
    width: "100%",
    height: 200,
    reiszeMode: "stretch",
  },
  /////////
  ///////////////
  ModalContainer: {
    position: "absolute",
    bottom: 0,
    borderRadius: 30,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    // opacity: 1,
    paddingBottom: 50,
  },
  ModalClose: {
    flex: 1,
    backgroundColor: "#929394",
    opacity: 0.9,
  },
  ModalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ModalHeaderTitle: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  //////////////////////
  ModalBackBox: {
    backgroundColor: "rgba(189, 189, 189,0.3)",
    height: 190,
    width: "80%",
    marginLeft: "10%",
    marginVertical: 20,
    borderRadius: 5,
  },
  ModalInBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 180,
    width: "98%",
    alignSelf: "center",
    borderRadius: 5,
    paddingVertical: 20,
  },
  ModalImg: {
    position: "absolute",
    zIndex: 1,
    left: 50,
    top: -20,
  },
  ModalInBoxTop: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  ModalInBoxBottom: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  ModalInBoxBottomLeft: {},
  ModalInBoxBottomRight: {
    marginLeft: 10,
  },
});

export default ChatThanks;
