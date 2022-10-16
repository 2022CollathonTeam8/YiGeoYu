import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { Banner, CategoryList, LostCard, FloatingBtn } from "../../Components";
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
    // img: "https://source.unsplash.com/1024x768/?nature",
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
    <>
      {/*헤더*/}
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <Image
            source={require("../../../assets/Logo.png")}
            style={styles.logo}
          />
        </View>
        {/*  */}
        <View style={styles.MiddleMenuBox}>
          <View style={styles.MiddleMenuBoxTextBox}>
            <TouchableOpacity
              style={[
                styles.MiddleMenuBoxTextBoxTouch,
                {
                  borderBottomColor: isRank ? "transparent" : "black",
                },
              ]}
              onPress={() => setIsRank(false)}
            >
              <Text
                style={[
                  styles.MiddleMenuBoxText,
                  {
                    fontWeight: !isRank ? "700" : "400",
                    color: !isRank ? "black" : "#5E5B5B",
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
                  borderBottomColor: !isRank ? "transparent" : "black",
                },
              ]}
              onPress={() => setIsRank(true)}
            >
              <Text
                style={[
                  styles.MiddleMenuBoxText,
                  {
                    fontWeight: isRank ? "700" : "400",
                    color: isRank ? "black" : "#5E5B5B",
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
              <MaterialIcons name="menu" size={25} color="black" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/*  */}
      {/* FloationgBtn */}
      {!isRank && (
        <FloatingBtn navigation={() => navigation.navigate("MakeItem")} />
      )}
      {!isRank ? (
        <ScrollView>
          <View style={{ paddingTop: 25, backgroundColor: "white" }}>
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
        {/* 닫기영역 */}
        <TouchableOpacity
          style={styles.ModalClose}
          onPress={back}
        ></TouchableOpacity>
        {/* 닫기영역 */}

        <View style={styles.ModalContainer}>
          <View style={styles.ModalTitleBox}>
            <Text style={styles.ModalTitle}>카테고리</Text>
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
                      <CategoryList type={data.type} img={data.img} />
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
                      <CategoryList type={data.type} img={data.img} />
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          </View>
        </View>
        {/* 닫기영역 */}
        <TouchableOpacity
          style={styles.ModalClose}
          onPress={back}
        ></TouchableOpacity>
        {/* 닫기영역 */}
      </Modal>
      {/*모달  */}
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 85,
    backgroundColor: "white",
  },
  LogoBox: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 3,
    height: 37,
  },

  logo: {
    width: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
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
  },
  SelectCategoryImg: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode: "contain",
  },
  SelectCategoryText: {
    fontWeight: "700",
    fontSize: 15,
  },

  ///////////
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    height: 173,
    marginTop: 25,
    // backgroundColor: "blue",
    // opacity: 0.6,
  },
  ////////////////
  ModalClose: {
    flex: 3,
    backgroundColor: "#929394",
    opacity: 0.9,
  },
  ModalContainer: {
    flex: 4,
    backgroundColor: "white",
  },
  ModalTitleBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ModalTitle: {
    ontSize: 20,
    fontWeight: "bold",
  },
  ModalCategoryBox: {
    flex: 9,
    justifyContent: "space-around",
    alignItems: "center",
  },

  ModalCategoryItemTouchBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
