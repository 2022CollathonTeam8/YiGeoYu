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
import { Banner } from "../../Components";
import { MaterialIcons } from "@expo/vector-icons";

const part_banner = Dimensions.get("screen").height * 0.15;

const Home = ({ navigation }) => {
  const [isShow, setIsShow] = useState(false);
  const back = () => {
    setIsShow(false);
  };

  return (
    <View>
      <View style={styles.Header}>
        <View style={styles.LogoBox}>
          <Image
            source={require("../../../assets/icon.png")}
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

        <Modal
          visible={isShow}
          animationType={"slide"}
          transparent={true}
          onRequestClose={isShow}
        >
          <TouchableOpacity
            style={styles.ModalClose}
            onPress={back}
          ></TouchableOpacity>
          <View style={styles.ModalContainer}>
            <Text>Modal</Text>
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
    height: "25%",
    backgroundColor: "#929394",
    opacity: 0.7,
  },
  ModalContainer: {
    backgroundColor: "blue",
    height: "50%",
  },
});

export default Home;
