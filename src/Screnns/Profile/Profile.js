import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import images from "../../../assets/images";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { CategoryData, Daejeon } from "../../DBTEMP";

const Item = ({ type, img }) => {
  return (
    <View style={styles.ItemBox}>
      <Image style={styles.ItemBoxImg} source={img} alt="" />
      <Text style={styles.ItemBoxTitle}>{type}</Text>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const DaejeonDB = Daejeon;
  const DumpData = CategoryData;
  const [GoDong, setGoDong] = useState(DaejeonDB[1].Array); //name :"동" Array :["전체"]
  var SelectGu = "";
  var SelectDong = "";

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.ProfileTop}>
        <View style={styles.ProfileTopImgBox}>
          <Image source={images.profile} alt="" style={styles.ProfileTopImg} />
          <View style={styles.ProfileTopTextBox}>
            <Text style={styles.ProfileTopText}>"이름"님</Text>
            <Text style={styles.ProfileTopText}>(습득등급)</Text>
          </View>
        </View>
        <View style={styles.ProfileTopStateBox}>
          <View
            style={[
              styles.ProfileTopStateBoxInner,
              { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
            ]}
          >
            <Text style={styles.ProfileTopStateBoxInnerTitle}>습득물건</Text>
            <Text style={styles.ProfileTopStateBoxInnerNum}>8</Text>
          </View>

          <View style={styles.ProfileTopStateBoxInner}>
            <Text style={styles.ProfileTopStateBoxInnerTitle}>매칭완료</Text>
            <Text style={styles.ProfileTopStateBoxInnerNum}>5</Text>
          </View>

          <View
            style={[
              styles.ProfileTopStateBoxInner,
              { borderTopRightRadius: 20, borderBottomRightRadius: 20 },
            ]}
          >
            <Text style={styles.ProfileTopStateBoxInnerTitle}>거래후기</Text>
            <Text style={styles.ProfileTopStateBoxInnerNum}>3</Text>
          </View>
        </View>
      </View>

      <View style={styles.ProfileMid}>
        <Text style={styles.ProfileMidText}>위치설정</Text>
        <View style={styles.ProfileMidSelectBox}>
          <SelectDropdown
            data={DaejeonDB[0].Array}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);

              console.log(selectedItem);
              DaejeonDB.map((temp) => {
                if (temp.name == selectedItem) {
                  return setGoDong(temp.Array);
                }
              });
            }}
            defaultButtonText={"구"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return (SelectGu = selectedItem);
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "caretup" : "caretdown"}
                  size={10}
                  color="#859B7B"
                />
              );
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
          <View style={{ width: 14 }}></View>

          <View style={{ width: 14 }}></View>

          <SelectDropdown
            data={GoDong}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              SelectDong = selectedItem;
            }}
            defaultButtonText={"동"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            renderDropdownIcon={(isOpened) => {
              return (
                <AntDesign
                  name={isOpened ? "caretup" : "caretdown"}
                  size={10}
                  color="#859B7B"
                />
              );
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>
      </View>
      <View style={styles.ProfileBot}>
        <View style={styles.ProfileBotTitleBox}>
          <Text style={styles.ProfileBotTitle}>카테고리</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            {DumpData.map((data) => {
              if (data.id % 2 == 0) {
                return (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() =>
                      navigation.navigate("Home", {
                        PassingData: {
                          gu: SelectGu,
                          dong: SelectDong,
                          category: data,
                        },
                      })
                    }
                  >
                    <Item type={data.type} img={data.img} />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <View style={{ flex: 1 }}>
            {DumpData.map((data) => {
              if (data.id % 2 == 1) {
                return (
                  <TouchableOpacity
                    key={data.id}
                    onPress={() =>
                      navigation.navigate("Home", {
                        PassingData: {
                          gu: SelectGu,
                          dong: SelectDong,
                          category: data,
                        },
                      })
                    }
                  >
                    <Item type={data.type} img={data.img} />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ProfileTop: {
    width: "100%",
    height: 282,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    backgroundColor: "white",
    alignItems: "center",
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
  ProfileTopImgBox: {
    paddingTop: 13,
    height: 156,
    justifyContent: "center",
    alignItems: "center",
  },
  ProfileTopImg: {
    width: 62,
    height: 62,
  },
  ProfileTopTextBox: {
    width: 133,
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  ProfileTopText: {
    color: "#5F7A61",
    fontSize: 15,
    fontWeight: "bold",
  },
  ProfileTopStateBox: {
    width: 345,
    height: 87,
    backgroundColor: "white",
    borderRadius: 20,
    borderColor: "#EBEBEB",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
  ProfileTopStateBoxInner: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 1,
    borderWidth: 1,
    borderColor: "#EBEBEB",
  },
  ProfileTopStateBoxInnerTitle: {
    color: "#c9c9c9",
    fontWeight: "800",
    fontSize: 17,
  },
  ProfileTopStateBoxInnerNum: {
    color: "#859B7B",
    fontWeight: "800",
    fontSize: 17,
  },
  ProfileMid: {
    width: Dimensions.get("screen").width - 30,
    marginLeft: 15,
    height: 99,
    justifyContent: "space-evenly",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
  ProfileMidText: {
    fontSize: 15,
    color: "#5F7A61",
    fontWeight: "bold",
  },
  ProfileMidSelectBox: {
    flexDirection: "row",
    width: "100%",
  },
  ProfileMidSaveBtn: {
    marginLeft: 70,
    width: 74,
    height: 30,
    backgroundColor: "#5F7A61",
    justifyContent: "center",
    borderRadius: 30,
  },
  ProfileMidSaveBtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  ///////////////
  dropdown1BtnStyle: {
    width: 100,
    height: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    borderColor: "#D9D9D9",
  },
  dropdown1BtnTxtStyle: { color: "#859B7B", textAlign: "left", fontSize: 13 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  //////////////
  ProfileBot: {
    paddingLeft: 15,
  },
  ProfileBotTitleBox: {
    height: 52,
    justifyContent: "center",
  },
  ProfileBotTitle: {
    fontSize: 15,
    color: "#5F7A61",
    fontWeight: "bold",
  },

  ItemBox: {
    width: 109,
    height: 24,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 21,
  },
  ItemBoxImg: {
    width: 24,
    height: 24,
  },
  ItemBoxTitle: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Profile;
