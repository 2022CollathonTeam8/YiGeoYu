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
  Dimensions,
  Modal,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import SelectDropdown from "react-native-select-dropdown";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import images from "../../../assets/images";
import { CategoryData, Daejeon } from "../../DBTEMP";
import DateTimePicker from "@react-native-community/datetimepicker";

const Item = ({ type, img }) => {
  return (
    <View style={styles.ItemBox}>
      <Image style={styles.ItemBoxImg} source={img} alt="" />
      <Text style={styles.ItemBoxTitle}>{type}</Text>
    </View>
  );
};

const temp_trash = new Date();
const temp_year = temp_trash.getFullYear();
const temp_mon = temp_trash.getMonth() + 1;
const temp_day = temp_trash.getDate();

// console.log(temp_trash);

const MakeItem = ({ navigation, route }) => {
  const [image, setImage] = useState(null);
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
  const DaejeonDB = Daejeon;
  const DumpData = CategoryData;
  var SelectGu = "";
  var SelectDong = "";
  const [GoDong, setGoDong] = useState(DaejeonDB[1].Array); //name :"동" Array :["전체"]

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState(temp_year + "/" + temp_mon + "/" + temp_day);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getDate();

    setText(fDate);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const [isShow, setIsShow] = useState(false);
  const back = () => {
    setIsShow(false);
  };

  const [ischoice, setIsChoice] = useState({
    type: "전체",
    img: images.all,
  });

  const func_choice = (data) => {
    setIsChoice({
      type: data.type,
      img: data.img,
    });
    setIsShow(false);
  };

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
        <Text style={styles.Title}>습득물 신고</Text>
        <View style={styles.CategoryBox}>
          <AntDesign name="close" size={30} color="white" />
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
          {/* <Text>{route.params.loc}</Text> */}
        </View>
        <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />
        <View style={styles.MakeMid}>
          <View style={styles.MakeMidFilterBox}>
            <TouchableOpacity
              style={styles.MakeMidFilter}
              onPress={() => setIsShow(true)}
            >
              <Text style={styles.MakeMidFilterText}>물건분류</Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="black"
              />
            </TouchableOpacity>
            <View style={styles.MakeMidFiltered}>
              {/* <Text>전체보기</Text> */}
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Image
                  source={ischoice.img}
                  alt=""
                  style={styles.SelectCategoryImg}
                />
                <Text style={styles.SelectCategoryText}>{ischoice.type}</Text>
              </View>
            </View>
          </View>
          {/* ////// */}
          <View style={styles.GetBox}>
            <View style={styles.GetBoxTitle}>
              <Text style={styles.ProfileMidText}>습득위치</Text>
            </View>
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
            {/* /// */}
            <View style={styles.GetBoxTitle}>
              <Text style={styles.ProfileMidText}>습득날짜</Text>
            </View>
            <View style={styles.GetDateBox}>
              {show ? (
                <View
                  style={{
                    position: "relative",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <DateTimePicker
                    testID="dateTimePicekr"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                    style={{
                      width: 90,
                      borderWidth: 2,
                      borderRadius: 15,
                    }}
                  />
                  {Platform.OS === "ios" && (
                    <TouchableOpacity
                      onPress={() => setShow(false)}
                      style={{ marginLeft: 10 }}
                    >
                      <FontAwesome name="check" size={24} color="green" />
                    </TouchableOpacity>
                  )}
                </View>
              ) : (
                <View
                  style={{
                    position: "relative",
                    flexDirection: "row",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => showMode("date")}
                    style={styles.DateSelectBox}
                  >
                    {/* <FontAwesome name="calendar-o" size={24} color="black" /> */}
                    <Text style={styles.DateSelectBoxText}>{text}</Text>
                  </TouchableOpacity>
                </View>
              )}
              {console.log(show)}
            </View>
          </View>
          {/* // */}
          <View style={styles.QuesBox}>
            <View
              style={{
                height: 52,
                justifyContent: "center",
              }}
            >
              <Text style={styles.QuesTitle}>자세한 습득장소/습득상태</Text>
            </View>

            <TextInput
              multiline
              textAlignVertical={"top"}
              placeholder="자세한 습득장소와 상태를 작성해주세요.(이 정보는 분실자에게 게시되지 않고 기본 질문으로 제시됩니다.)"
              style={styles.Input}
            />
          </View>
          {/* // */}
          <View style={styles.QuesBox}>
            <View
              style={{
                height: 52,
                justifyContent: "center",
              }}
            >
              <Text style={styles.QuesTitle}>추가질문</Text>
            </View>

            <TextInput
              multiline
              textAlignVertical={"top"}
              placeholder="악용을 막기위해 분실자에게 추가적으로 질문해보세요."
              style={styles.Input}
            />
          </View>
        </View>

        <View style={styles.SubmitBox}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.BtnText}>제출</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        visible={isShow}
        animationType={"slide"}
        transparent={true}
        onRequestClose={isShow}
      >
        <TouchableOpacity
          style={styles.ModalClose}
          onPress={() => setIsShow(false)}
        ></TouchableOpacity>

        <View style={styles.ModalContainer}>
          <View style={styles.ModalHeader}>
            <View style={styles.CategoryBox}>
              <View style={{ width: 24 }}></View>
            </View>
            <Text style={styles.ModalHeaderTitle}>카테고리 선택</Text>
            <TouchableOpacity
              style={styles.CategoryBox}
              onPress={() => setIsShow(false)}
            >
              <AntDesign name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>
          {/* // */}
          <View style={styles.Type}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, alignItems: "center" }}>
                {DumpData.map((data) => {
                  if (data.id % 2 == 0) {
                    return (
                      <TouchableOpacity
                        key={data.id}
                        onPress={() => func_choice(data)}
                      >
                        <Item type={data.type} img={data.img} />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                {DumpData.map((data) => {
                  if (data.id % 2 == 1) {
                    return (
                      <TouchableOpacity
                        key={data.id}
                        onPress={() => func_choice(data)}
                      >
                        <Item type={data.type} img={data.img} />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View>
            </View>
          </View>
        </View>
      </Modal>
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
  Title: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
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
  TopArea: {
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 29,
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
  ///////////////
  MakeMid: {
    paddingHorizontal: 24,
  },
  MakeMidFilterBox: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  MakeMidFilter: {
    flexDirection: "row",
    alignItems: "center",
    height: 61,
    flex: 2,
  },
  MakeMidFilterText: {
    fontSize: 20,
    color: "#56C596",
    fontWeight: "bold",
  },
  MakeMidFiltered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 61,
  },
  SelectCategoryImg: {
    width: 30,
    height: 30,
    marginRight: 5,
    resizeMode: "contain",
  },
  SelectCategoryText: {
    fontWeight: "700",
    fontSize: 15,
    // color: "#5F7A61",
    alignSelf: "center",
  },
  //////////////
  GetBox: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  GetBoxTitle: { height: 45, justifyContent: "center" },
  /////////////////

  //날짜구역
  GetDateBox: {
    height: 45,
    justifyContent: "center",
  },
  DateSelectBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    borderColor: "#D9D9D9",
  },
  DateSelectBoxText: {
    // marginLeft: 10,
    fontSize: 15,
    color: "#767676",
    fontWeight: "bold",
  },
  ///////////
  ProfileMidText: {
    fontSize: 15,
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
  dropdown1BtnTxtStyle: { color: "#767676", textAlign: "left", fontSize: 13 },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  /////////////////////////

  QuesBox: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  QuesTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  Input: {
    height: 130,
    backgroundColor: "#F5F5F5",
    padding: 10,
    justifyContent: "flex-start",
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
  SubmitBox: {
    height: 100,
    justifyContent: "center",
  },
  Btn: {
    backgroundColor: "#56C596",
    width: 75,
    height: 28,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  BtnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  ///////////////
  ModalContainer: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.2,
    right: 30,
    borderRadius: 30,
    width: "80%",
    padding: 10,
    backgroundColor: "white",
    opacity: 1,
  },
  ModalClose: {
    flex: 1,
    backgroundColor: "#929394",
    opacity: 0.9,
  },
  ModalHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  ModalHeaderTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "#5F7A61",
  },

  //////////
  Type: {
    marginTop: 10,
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

export default MakeItem;
