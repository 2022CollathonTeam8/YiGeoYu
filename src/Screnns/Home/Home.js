import React, { useState, useEffect } from "react";
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
import BannerData from "../../DBTEMP/BannerData";
import images from "../../../assets";

const Home = ({ navigation }) => {
  const categoryList = BannerData; //임시데이터
  const [isShow, setIsShow] = useState(false);
  const [isData, setIsData] = useState({
    id: 0,
    type: "전체",
    img: images.bag,
  });

  const back = () => {
    setIsShow(false);
  };

  const chooseCategory = (key) => {
    setIsData({
      id: key,
      type: categoryList[key].type,
      img: categoryList[key].img,
    });
    back();
  };
  const [isRank, setIsRank] = useState(false);

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
            <TouchableOpacity
              style={styles.CategoryBox}
              onPress={() => {
                setIsShow(!isShow);
              }}
            >
              <MaterialIcons name="menu" size={25} color="#5F7A61" />
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
                source={isData.img}
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

      {/*모달  */}
      <Modal
        visible={isShow}
        animationType={"slide"}
        transparent={true}
        onRequestClose={isShow}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.ModalContainer}>
          <View style={styles.ModalTopBox}>
            <Text>dddd</Text>
          </View>
          <View style={styles.ModalMidBox}>
            <Text style={styles.ModalMidBoxText}>카테고리</Text>
          </View>

          <View style={styles.ModalCategoryBox}>
            <View style={{ flexDirection: "row" }}>
              {categoryList.map((data, i) => {
                if (i < 3) {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.ModalCategoryItemTouchBox}
                      onPress={() => chooseCategory(i)}
                    >
                      <CategoryItem type={data.type} img={data.img} />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>

            <View style={{ flexDirection: "row" }}>
              {categoryList.map((data, i) => {
                if (i >= 3) {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={styles.ModalCategoryItemTouchBox}
                      onPress={() => chooseCategory(i)}
                    >
                      <CategoryItem type={data.type} img={data.img} />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </View>
        </SafeAreaView>
        {/* 닫기영역 */}

        {/* 닫기영역 */}
      </Modal>
      {/*모달  */}
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 85,

    // backgroundColor: "red",
    backgroundColor: "#ECEDDD",
  },
  LogoBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3,
    height: 37,
  },

  logo: {
    // width: Dimensions.get("window").width * 0.1,
    // resizeMode: "contain",
    width: 34,
    height: 34,
    marginTop: 8,
    // width: "100%",
    // resizeMode: "cover",
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
    backgroundColor: "blue",
    opacity: 0.6,
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
  ////////////////
  ModalClose: {
    backgroundColor: "#929394",
    opacity: 0.9,
  },
  ModalContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  ModalTopBox: {
    width: "100%",
    height: 273,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "#AACC93",
  },
  ModalMidBox: {
    paddingLeft: 15,
    height: 50,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  ModalMidBoxText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#5F7A61",
  },

  ModalCategoryBox: {
    justifyContent: "space-around",
    alignItems: "center",
  },

  ModalCategoryItemTouchBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
