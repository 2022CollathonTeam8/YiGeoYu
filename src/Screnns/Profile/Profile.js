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
import categoryList from "../../DBTEMP/categoryList";

const Item = ({ type, img }) => {
  return (
    <View style={styles.ItemBox}>
      <Image style={styles.ItemBoxImg} source={img} alt="" />
      <Text style={styles.ItemBoxTitle}>{type}</Text>
    </View>
  );
};

const Profile = ({ navigation }) => {
  const GU = ["전체", "동구", "대덕구", "서구", "유성구", "중구"];

  const Dong = ["전체"];
  const Dong_Dong = [
    "전체_동구",
    "중앙동",
    "신인동",
    "효동",
    "판암1동",
    "판암2동",
    "용운동",
    "대동",
    "자양동",
    "가양1동",
    "가양2동",
    "용전동",
    "성남동",
    "홍도동",
    "삼성동",
    "대청동",
    "산내동",
  ];

  const Dong_DeDuck = [
    "전체_대덕구",
    "오정동",
    "대화동",
    "화덕동",
    "비래동",
    "송촌동",
    "중리동",
    "법1동",
    "법2동",
    "신탄진동",
    "석봉동",
    "덕암동",
    "목상동",
  ];
  const Dong_Seo = [
    "전체_서구",
    "복수동",
    "도마1동",
    "도마2동",
    "정림동",
    "변동",
    "용문동",
    "탄방동",
    "둔산1동",
    "둔산2동",
    "둔산3동",
    "괴정동",
    "가장동",
    "내동",
    "갈마1동",
    "갈마2동",
    "월평1동",
    "월평2동",
    "월평3동",
    "만년동",
    "가수원동",
    "도안동",
    "관저1동",
    "관저2동",
    "기성동",
  ];
  const Dong_U = [
    "전체_유성구",
    "진잠동",
    "학하동",
    "원신흥동",
    "상대동",
    "온천1동",
    "온천2동",
    "노은1동",
    "노은2동",
    "노은3동",
    "신성동",
    "전민동",
    "구죽동",
    "관평동",
  ];
  const Dong_Jong = [
    "전체_중구",
    "은행선화동",
    "목동",
    "종촌동",
    "대흥동",
    "문창동",
    "석교동",
    "대사동",
    "부사동",
    "용두동",
    "오류동",
    "태평1동",
    "태평2동",
    "유천1동",
    "유천2동",
    "문화1동",
    "문화2동",
    "산성동",
  ];
  var SelectGu = "";
  var SelectDong = "";
  const [GoDong, setGoDong] = useState(Dong);

  const Sample = [
    {
      GG: "동구",
      Array: Dong_Dong,
    },
    {
      GG: "대덕구",
      Array: Dong_DeDuck,
    },
    {
      GG: "유성구",
      Array: Dong_U,
    },
    {
      GG: "중구",
      Array: Dong_Jong,
    },
    {
      GG: "서구",
      Array: Dong_Seo,
    },
    {
      GG: "전체",
      Array: Dong,
    },
  ];

  const DumpData = categoryList;
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
            data={GU}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              SelectGu = selectedItem;
              console.log(SelectGu);
              Sample.map((temp) => {
                if (temp.GG == SelectGu) {
                  return setGoDong(temp.Array);
                }
              });
            }}
            defaultButtonText={"구"}
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

          {/* <TouchableOpacity style={styles.ProfileMidSaveBtn}>
            <Text style={styles.ProfileMidSaveBtnText}>저장</Text>
          </TouchableOpacity> */}
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
