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
  TextInput,
  ScrollView,
} from "react-native";
import ImageModal from "react-native-image-modal";
import images from "../../../assets/images";
import { CategoryData, Daejeon } from "../../DBTEMP";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

const temp_trash = new Date();
const temp_mon = temp_trash.getMonth() + 1;
const temp_day = temp_trash.getDate();
const ListUpSin2 = ({ navigation }) => {
  // const [image, isImage] = useState(null);
  const [image, isImage] = useState("a");

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
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.Title}>
          검정 가방 주인 찾습니다.
        </Text>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => {
            navigation.navigate("설정");
          }}
        >
          <SimpleLineIcons name="settings" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        bounces={false}
        style={{ flex: 1, backgroundColor: "#F8F8FA" }}
      >
        <View style={styles.TopArea}>
          <View>
            {image != null ? (
              <ImageModal
                swipeToDismiss={false}
                resizeMode="contain"
                imageBackgroundColor="white"
                source={images.lostbag}
                style={styles.ImgBox}
              />
            ) : (
              <View style={styles.ImgBoxError}></View>
            )}
          </View>
        </View>
        <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

        <View style={styles.MidArea}>
          <View style={styles.ProfileBox}>
            <Image source={images.profile} alt="" style={styles.profile} />
            <View style={styles.ProfileText}>
              <Text
                style={{ paddingBottom: 5, fontSize: 18, fontWeight: "bold" }}
              >
                타몽
              </Text>
              <Text style={{ color: "#767676", fontSize: 15 }}>
                온천1동 {temp_day - 11}일전
              </Text>
            </View>
          </View>
          <View style={styles.InfoArea}>
            <Text style={styles.InfoText}>
              작성 답변은 습득자에게 전달됩니다.
            </Text>
            <Text style={styles.InfoText}>
              채팅 연결은 답변을 본 습득자의 판단에 따라 결정됩니다.
            </Text>
          </View>

          <View style={styles.QuesBox}>
            <View
              style={{
                height: 52,
                justifyContent: "center",
              }}
            >
              <Text style={styles.QuesTitle}>자세한 분실장소</Text>
            </View>

            <TextInput
              multiline
              textAlignVertical={"top"}
              placeholder="습득자가 판단할 수 있도록 가능한 자세하게 적어주세요."
              style={styles.Input}
            />
          </View>

          <View style={styles.QuesBox}>
            <View
              style={{
                height: 52,
                justifyContent: "center",
              }}
            >
              <Text style={styles.QuesTitle}>분실한 날의 동선?</Text>
            </View>

            <TextInput
              multiline
              textAlignVertical={"top"}
              placeholder="자세한 분실장소를 작성하셨다면 넘어가셔도 좋습니다."
              style={styles.Input}
            />
          </View>

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
              placeholder="위 질문은 습득자가 작성한 질문입니다."
              style={styles.Input}
            />
          </View>
        </View>
        <View style={styles.SubmitBox}>
          <TouchableOpacity
            style={styles.Btn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.BtnText}>보내기</Text>
          </TouchableOpacity>
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

  //////////////

  TopArea: {
    backgroundColor: "white",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  ImgBoxError: {
    backgroundColor: "#D9D9D9",
    width: 293,
    height: 226,
  },
  ImgBox: {
    width: Dimensions.get("window").width * 0.8,
    height: 226,
    resizeMode: "contain",
  },

  ItemTitle: {
    marginTop: 16,
    width: 288,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 2,
  },
  ItemInfo: {
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
  /////////////

  MidArea: { paddingHorizontal: 24 },
  ProfileBox: {
    marginTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    flexDirection: "row",
    alignItems: "center",
  },

  profile: {
    width: 50,
    height: 50,
    // alignSelf: "center",
    justifyContent: "center",
  },
  ProfileText: {
    marginLeft: 20,
  },

  InfoArea: {
    marginVertical: 34,
  },
  InfoText: {
    color: "#56C596",
  },
  QuesBox: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  QuesTitle: {
    fontSize: 15,
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
  //////////

  SubmitBox: {
    height: 100,
    justifyContent: "center",
  },
  Btn: {
    backgroundColor: "#56C596",
    width: 75,
    // height: 28,
    paddingVertical: 10,
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
});
export default ListUpSin2;
