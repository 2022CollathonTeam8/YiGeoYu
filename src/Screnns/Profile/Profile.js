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
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
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
    <>
      {/* //////HEADER////// */}
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>마이페이지</Text>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => {
            navigation.navigate("설정");
          }}
        >
          <SimpleLineIcons name="settings" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      {/*  */}
      <ScrollView style={{ flex: 1, backgroundColor: "#F8F8FA" }}>
        <View style={styles.ProfileTop}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <View style={styles.ProfileTopImgBox}>
              <Image source={images.profile} alt="" />
              <Text style={styles.ProfileTopText}>"이름"님</Text>
            </View>
            <Image source={images.heart} />
            <Text style={styles.ProfileHeartText1}>온정부피</Text>
            <Text style={styles.ProfileHeartText2}>8oz</Text>
          </View>

          <View style={styles.ProfileTopStateBox}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("습득 물건");
              }}
              style={styles.ProfileTopStateBoxInner}
            >
              <Text style={styles.ProfileTopStateBoxInnerTitle}>습득물건</Text>
              <Text style={styles.ProfileTopStateBoxInnerNum}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("매칭 완료");
              }}
              style={styles.ProfileTopStateBoxInner}
            >
              <Text style={styles.ProfileTopStateBoxInnerTitle}>매칭완료</Text>
              <Text style={styles.ProfileTopStateBoxInnerNum}>5</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

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
                    color="#767676"
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
            <View style={{ width: 28 }}></View>

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
                    color="#767676"
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
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 65,
  },
  Title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    // color: "#5F7A61",
  },
  CategoryBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  HeaderCircle: {
    width: "100%",
    reiszeMode: "stretch",
  },

  ////////////
  ProfileTop: {
    paddingVertical: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  ProfileTopImgBox: {
    alignItems: "center",
  },

  ProfileTopText: {
    fontSize: 15,
    fontWeight: "bold",
  },

  ProfileHeartText1: {
    paddingHorizontal: 15,
    fontSize: 16,
    fontWeight: "500",
    color: "#767676",
    marginBottom: 10,
  },
  ProfileHeartText2: {
    fontSize: 20,
    fontWeight: "700",
    color: "#56C596",
    marginBottom: 10,
  },
  ProfileTopStateBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  ProfileTopStateBoxInner: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EBEBEB",
    backgroundColor: "#EDEDED",
    height: 77,
    width: 111,
    borderRadius: 10,
    padding: 10,
  },
  ProfileTopStateBoxInnerTitle: {
    color: "#767676",
    fontWeight: "800",
    fontSize: 16,
  },
  ProfileTopStateBoxInnerNum: {
    color: "#56C596",
    fontWeight: "800",
    fontSize: 20,
  },
  ProfileMid: {
    width: Dimensions.get("screen").width - 48,
    marginLeft: 24,
    height: 99,
    justifyContent: "space-evenly",
    borderBottomColor: "#EBEBEB",
    borderBottomWidth: 1,
  },
  ProfileMidText: {
    fontSize: 15,
    color: "#56C596",
    fontWeight: "bold",
  },
  ProfileMidSelectBox: {
    flexDirection: "row",
    width: "100%",
  },

  ///////////////
  dropdown1BtnStyle: {
    width: 100,
    height: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    borderColor: "#D9D9D9",
  },
  dropdown1BtnTxtStyle: { color: "#767676", textAlign: "left", fontSize: 15 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  //////////////
  ProfileBot: {
    paddingLeft: 24,
  },
  ProfileBotTitleBox: {
    height: 52,
    justifyContent: "center",
  },
  ProfileBotTitle: {
    fontSize: 15,
    color: "#56C596",
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
