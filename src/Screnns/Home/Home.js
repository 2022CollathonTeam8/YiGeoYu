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
import { Banner, CategoryList } from "../../Components";
import { MaterialIcons } from "@expo/vector-icons";

const part_banner = Dimensions.get("screen").height * 0.15;

const Home = ({ navigation }) => {
  const [isShow, setIsShow] = useState(true);
  const back = () => {
    setIsShow(false);
  };

  const categoryList = [
    {
      id: 0,
      type: "전체",
      img: "https://source.unsplash.com/1024x768/?nature",
    },
    {
      id: 1,
      type: "전자기기",
      img: "https://source.unsplash.com/1024x768/?water",
    },
    { id: 2, type: "의류", img: "https://source.unsplash.com/1024x768/?tree" },
    {
      id: 3,
      type: "지갑",
      img: "https://source.unsplash.com/1024x768/?nature",
    },
    { id: 4, type: "카드", img: "https://source.unsplash.com/1024x768/?water" },
    { id: 5, type: "기타", img: "https://source.unsplash.com/1024x768/?tree" },
  ];
  const [isID, setIsID] = useState(0);
  const chooseCategory = (id) => {
    setIsID(id);
    back();
    console.log(isID);
  };
  return (
    <View>
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <Image
            source={require("../../../assets/Logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.blank}></View>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => {
            setIsShow(!isShow);
          }}
        >
          <MaterialIcons name="search" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Banner height={part_banner} />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Event");
          }}
          style={styles.BannerTouchArea}
        ></TouchableOpacity>

        <Text>{isID}</Text>
        <Modal
          visible={isShow}
          animationType={"slide"}
          transparent={true}
          onRequestClose={isShow}
          style={{ flex: 1 }}
        >
          <TouchableOpacity
            style={styles.ModalClose}
            onPress={back}
          ></TouchableOpacity>
          <View style={styles.ModalContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                카테고리
              </Text>
            </View>
            <View
              style={{
                flex: 9,
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {categoryList.map((data, i) => {
                  if (i < 3) {
                    return (
                      <TouchableOpacity
                        key={i}
                        onPress={() => chooseCategory(i)}
                      >
                        <CategoryList id={i} type={data.type} img={data.img} />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>

              <View style={{ flexDirection: "row" }}>
                {categoryList.map((data, i) => {
                  if (i >= 3) {
                    return (
                      <CategoryList
                        key={i}
                        id={i}
                        type={data.type}
                        img={data.img}
                      />
                    );
                  }
                })}
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.ModalClose}
            onPress={back}
          ></TouchableOpacity>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: Dimensions.get("window").height * 0.07,
    backgroundColor: "#f7f4e3",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  LogoBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  blank: {
    flex: 4,
  },
  CategoryBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "pink",
  },
  logo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
  },
  BannerTouchArea: {
    position: "absolute",
    width: "100%",
    height: part_banner,
    backgroundColor: "red", //터치영역
    opacity: 0.3,
  },

  ModalClose: {
    // height: "25%",
    flex: 3,
    backgroundColor: "#929394",
    opacity: 0.7,
  },
  ModalContainer: {
    backgroundColor: "blue",
    // height: "50%",
    flex: 4,
  },
});

export default Home;
