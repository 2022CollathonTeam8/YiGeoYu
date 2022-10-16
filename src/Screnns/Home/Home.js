import React, { useState, useEffect, useLayoutEffect } from "react";
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
} from "react-native";
import { Banner, CategoryItem, LostCard, FloatingBtn } from "../../Components";
import Rank from "./Rank";
import { MaterialIcons } from "@expo/vector-icons";
import images from "../../../assets";

const Home = ({ navigation, route }) => {
  const [isRank, setIsRank] = useState(false);

  var Gu = "";
  var Dong = "";
  var Category = {};
  if (route.params == undefined) {
    Gu = "전체";
    Dong = "전체";
    Category = { id: 0, type: "전체보기", img: images.bag };
  } else {
    Gu = route.params.PassingData.gu;
    Dong = route.params.PassingData.dong;
    Category = route.params.PassingData.category;
  }
  console.log(Gu, Dong, Category); //확인용

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/*헤더*/}
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <Image source={images.Icon2} style={styles.logo} />
        </View>
        {/*  */}
        <View style={styles.MiddleMenuBox}>
          <View style={styles.MiddleMenuBoxTextBox}>
            <TouchableOpacity
              style={[
                styles.MiddleMenuBoxTextBoxTouch,
                {
                  borderBottomColor: isRank ? "transparent" : "#5F7A61",
                },
              ]}
              onPress={() => setIsRank(false)}
            >
              <Text
                style={[
                  styles.MiddleMenuBoxText,
                  {
                    fontWeight: !isRank ? "700" : "400",
                  },
                ]}
              >
                게시판
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.MiddleMenuBoxTextBoxTouch,
                {
                  borderBottomColor: !isRank ? "transparent" : "#5F7A61",
                },
              ]}
              onPress={() => setIsRank(true)}
            >
              <Text
                style={[
                  styles.MiddleMenuBoxText,
                  {
                    fontWeight: isRank ? "700" : "400",
                  },
                ]}
              >
                습득자랭킹
              </Text>
            </TouchableOpacity>
          </View>
          {!isRank && (
            <TouchableOpacity style={styles.CategoryBox} onPress={() => {}}>
              <MaterialIcons name="search" size={25} color="#5F7A61" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/*  */}
      {/* FloationgBtn */}
      {!isRank && (
        <FloatingBtn
          navigation={() => navigation.navigate("MakeItem", { testing: false })}
        />
      )}
      {/*  */}
      {!isRank ? (
        <ScrollView>
          <View style={styles.Banner}>
            <Banner />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Event");
            }}
            style={styles.BannerTouchArea}
          ></TouchableOpacity>

          <View
            style={{
              paddingHorizontal: 15,
              paddingTop: 15,
              backgroundColor: "white",
            }}
          >
            <View style={styles.SelectCategoryBox}>
              <Image
                source={Category.img}
                alt=""
                style={styles.SelectCategoryImg}
              />
              <Text style={styles.SelectCategoryText}>이거유?</Text>
            </View>

            {/* 예시 */}
            <LostCard />
            <LostCard />
            <LostCard />
            <LostCard />
            <LostCard />
            <LostCard />
          </View>
        </ScrollView>
      ) : (
        <ScrollView>
          <Rank />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 85,
    backgroundColor: "#ECEDDD",
  },
  LogoBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3,
    height: 37,
  },

  logo: {
    width: 34,
    height: 34,
    marginTop: 8,
  },
  ////////////////////
  MiddleMenuBox: {
    flexDirection: "row",
  },
  MiddleMenuBoxTextBox: {
    flexDirection: "row",
    alignItems: "center",
    flex: 9,
    paddingHorizontal: 15,
  },
  MiddleMenuBoxTextBoxTouch: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 3,
  },
  MiddleMenuBoxText: {
    fontSize: 15,
    lineHeight: 20,
    color: "#5F7A61",
  },

  CategoryBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  /////////////
  SelectCategoryBox: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },
  SelectCategoryImg: {
    paddingLeft: 15,
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  SelectCategoryText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#5F7A61",
  },

  ///////////
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    height: 176,
    marginTop: 10,
    // backgroundColor: "blue",
    // opacity: 0.6,
  },

  Banner: {
    backgroundColor: "#ECEDDD",
    height: 227,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 10,
    // paddingBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export default Home;
