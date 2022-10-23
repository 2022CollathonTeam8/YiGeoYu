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
import images from "../../../assets/images";
import { CategoryData, Daejeon } from "../../DBTEMP";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const ListUp = ({ navigation }) => {
  const [image, isImage] = useState(null);

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
          <AntDesign name="close" size={25} color="white" />
        </TouchableOpacity>
        <View style={styles.CategoryBox}>
          <View style={{ width: 24 }}></View>
        </View>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
        <View style={styles.TopArea}>
          <View style={styles.ImgBox}>
            {image != null && (
              <Image
                source={images.book}
                style={{ width: 104, height: 104, resizeMode: "stretch" }}
              />
            )}
          </View>
          <View style={{ paddingBottom: 20 }}>
            <Text style={styles.ItemTitle}>제목</Text>
            <Text style={styles.ItemInfo}>위치 시간</Text>
          </View>
        </View>

        <View style={styles.MidArea}>
          <View style={styles.InfoArea}>
            <Text style={styles.InfoText}>
              작성 답변은 습득자에게 전달됩니다. 채팅 연결은 답변을 본 습득자의
              판단에 따라 결정됩니다.
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
            <Text style={styles.BtnText}>제출</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  Header: {
    backgroundColor: "#5F7A61",
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
  //////////////

  TopArea: {
    backgroundColor: "#5F7A61",
    alignItems: "center",
    paddingTop: 29,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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

  ImgBox: {
    width: 104,
    height: 104,
    backgroundColor: "#D9D9D9",
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

  InfoArea: {
    marginVertical: 34,
  },
  InfoText: {
    color: "#C9C9C9",
  },
  QuesBox: {
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  QuesTitle: {
    color: "#5F7A61",
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
    backgroundColor: "#5F7A61",
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
});
export default ListUp;
