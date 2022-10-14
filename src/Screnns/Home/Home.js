import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { Banner, CategoryList, LostCard } from "../../Components";
import { MaterialIcons } from "@expo/vector-icons";
import BannerData from "../../DBTEMP/BannerData";

const part_banner = Dimensions.get("screen").height * 0.15;

const Home = ({ navigation }) => {
  const categoryList = BannerData; //임시데이터
  const [isShow, setIsShow] = useState(false);
  const [isData, setIsData] = useState({
    id: 0,
    type: "전체",
    img: "https://source.unsplash.com/1024x768/?nature",
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

  return (
    <View>
      {/*헤더*/}
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <Image
            source={require("../../../assets/Logo.png")}
            style={styles.logo}
          />
          <Image
            source={require("../../../assets/Title.png")}
            style={styles.title}
          />
        </View>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => {
            setIsShow(!isShow);
          }}
        >
          <MaterialIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/*  */}

      <ScrollView>
        <View style={{ marginTop: 10 }}>
          <Banner height={part_banner} />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Event");
          }}
          style={styles.BannerTouchArea}
        ></TouchableOpacity>

        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.SelectCategoryBox}>
            <Image
              source={{ uri: isData.img }}
              alt=""
              style={styles.SelectCategoryImg}
            />
            <Text style={styles.SelectCategoryTitle}>{isData.type}</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: "#f7f4e3",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  LogoBox: {
    alignItems: "center",
    flexDirection: "row",
    flex: 6,
    paddingHorizontal: 10,
  },

  logo: {
    width: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
  },
  title: {
    width: Dimensions.get("window").width * 0.5,
    resizeMode: "contain",
  },
  CategoryBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  /////////////
  SelectCategoryBox: {
    marginTop: 10,
    borderWidth: 1,
    // padding: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  SelectCategoryImg: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    borderRadius: 15,
  },
  SelectCategoryTitle: {
    paddingLeft: 20,
    fontSize: 20,
  },

  ///////////
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    height: part_banner,
    marginTop: 10,
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
