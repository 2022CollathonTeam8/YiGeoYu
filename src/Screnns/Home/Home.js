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
import * as Location from "expo-location";

const getLoc = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // let location = await Location.getCurrentPositionAsync({ accuracy: 6 });
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      const location__ = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      console.log(location__[0]);
      setLocation(location__[0].district);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return location;
};

const Home = ({ navigation, route }) => {
  let locdata = getLoc();
  //마이페이지 카테도리에서 정보 받아오기
  var Gu = "";
  var Dong = "";
  var Category = {};
  if (route.params == undefined) {
    Gu = "전체";
    Dong = "전체";
    Category = { id: 0, type: "전체보기", img: images.all };
  } else {
    Gu = route.params.PassingData.gu;
    Dong = route.params.PassingData.dong;
    Category = route.params.PassingData.category;
  }
  console.log(Gu, Dong, Category); //확인용
  //////

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      {/*헤더*/}
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <TouchableOpacity
            style={styles.CategoryBox}
            onPress={() => navigation.navigate("ProfileStack")}
          >
            <MaterialIcons name="menu" size={25} color="white" />
          </TouchableOpacity>
          <Image source={images.Icon2} style={styles.logo} />
          <TouchableOpacity style={styles.CategoryBox} onPress={() => {}}>
            <MaterialIcons name="search" size={25} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 스크롤뷰 */}

      <ScrollView>
        <View style={styles.Banner}>
          <View style={styles.tempArea}></View>
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
            paddingHorizontal: 14,
            paddingTop: 15,
          }}
        >
          <View style={styles.SelectCategoryBox}>
            <View
              style={{
                flexDirection: "row",
                flex: 4,
              }}
            >
              <Image
                source={Category.img}
                alt=""
                style={styles.SelectCategoryImg}
              />
              <Text style={styles.SelectCategoryText}>이거유?</Text>
            </View>
            {/* {console.log(Platform, text)} */}
            <FloatingBtn
              navigation={() => navigation.navigate("Make", { loc: locdata })}
            />
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
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#5F7A61",
    // justifyContent: "center",
  },
  LogoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 34,
    height: 34,
  },
  CategoryBox: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  ////////////////////

  ///////////
  tempArea: {
    width: 119,
    height: 27,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    alignSelf: "center",
    marginVertical: 19,
  },
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    marginTop: 65,
    height: 160,
    // backgroundColor: "blue",
    // opacity: 0.6,
  },

  Banner: {
    backgroundColor: "#5F7A61",
    paddingBottom: 19,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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

  /////////////
  SelectCategoryBox: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  SelectCategoryImg: {
    width: 30,
    height: 30,
    marginRight: 5,
    resizeMode: "contain",
  },
  SelectCategoryText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#5F7A61",
    alignSelf: "center",
  },
});

export default Home;
