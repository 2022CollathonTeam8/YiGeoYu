import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
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
import { Banner, CategoryItem, LostCard, FloatingBtn } from "../../Components";
import * as Progress from "react-native-progress";
import { MaterialIcons, Fontisto } from "@expo/vector-icons";
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
  // let locdata = getLoc();
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
          onPress={() => navigation.navigate("ProfileStack")}
        >
          <MaterialIcons name="menu" size={30} color="black" />
        </TouchableOpacity>
        <Image source={images.Icon2} style={styles.logo} />
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.navigate("ChatAl")}
        >
          <Fontisto name="bell" size={30} color="black" />
        </TouchableOpacity>
        {/* </View> */}
      </View>
      {/* 스크롤뷰 */}

      <ScrollView
        // bounces={false}
        // bouncesZoom={false}
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
        <View style={styles.Banner}>
          <View style={styles.ProgressBarBox}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.ProgressBarText}>17건 성사</Text>
              <Text style={styles.ProgressBarText}>90oz</Text>
            </View>
            <Progress.Bar
              progress={70 / 100}
              width={null}
              height={8}
              color="#3BCD9E"
              backgroundColor="#81DABB"
            />
          </View>
          <Banner />
          <Image source={images.BottomCircle} style={styles.BottomCircle} />
        </View>

        <View
          style={{
            paddingHorizontal: 14,
            paddingTop: 15,
          }}
        >
          <View style={styles.SelectCategoryBox}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileStack")}
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={Category.img}
                alt=""
                style={styles.SelectCategoryImg}
              />
              <Text style={styles.SelectCategoryText}>이거유?</Text>
            </TouchableOpacity>
          </View>
          {/* 예시 */}
          <TouchableOpacity onPress={() => navigation.navigate("ListUp")}>
            <LostCard />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
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

  logo: {
    width: 29,
    height: 45,
  },
  CategoryBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },

  ////////////////////

  ///////////

  Banner: {
    // backgroundColor: "#F8F8FA",
    backgroundColor: "white",
    paddingTop: 20,
  },

  ProgressBarBox: {
    alignSelf: "center",
    justifyContent: "center",
    width: "60%",
    marginBottom: 10,
  },
  ProgressBarText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
    color: "#56C596",
    marginBottom: 5,
  },
  BottomCircle: {
    marginTop: 20,
    width: "100%",
    reiszeMode: "stretch",
  },

  // BannerTouchArea: {
  //   position: "absolute",
  //   width: "21%",
  //   marginTop: 155,
  //   right: 70,
  //   height: 30,
  //   backgroundColor: "blue",
  //   opacity: 0.6,
  // },

  /////////////
  SelectCategoryBox: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  SelectCategoryImg: {
    width: 32,
    height: 32,
    marginRight: 5,
    alignSelf: "center",
  },
  SelectCategoryText: {
    fontWeight: "700",
    fontSize: 32,
    color: "#56C596",
    alignSelf: "center",
  },
});

export default Home;
