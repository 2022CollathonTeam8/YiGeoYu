import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import images from "../../../assets/images";
const MakeItem = ({ navigation, data }) => {
  console.log(data);
  const [image, setImage] = useState(null);
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <>
      {/* //////HEADER////// */}
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="close" size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>습득물 신고</Text>
        <View style={styles.CategoryBox}>
          <View style={{ width: 24 }}></View>
        </View>
      </View>

      {/* /////////////////// */}

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.TopArea}>
          <TouchableOpacity onPress={pickImage}>
            {image ? (
              <>
                <Image
                  source={{ uri: image }}
                  style={{ width: 79, height: 79, resizeMode: "stretch" }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity onPress={pickImage}>
                    <AntDesign name="camera" size={20} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setImage(null)}>
                    <FontAwesome name="undo" size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Image source={images.IMGBtn} alt="" style={styles.IMGBtn} />
            )}
          </TouchableOpacity>
          <TextInput placeholder="글 제목" style={styles.TIT} />
          <Text>{data}</Text>
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
  },
  Title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#5F7A61",
  },
  CategoryBox: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  ////////////
  TopArea: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 29,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
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

  IMGBtn: {
    width: 79,
  },
  TIT: {
    marginVertical: 34,
    width: 288,
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
});

export default MakeItem;
