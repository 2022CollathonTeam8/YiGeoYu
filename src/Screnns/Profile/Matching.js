import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import {
  AntDesign,
  FontAwesome,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { LostCard } from "../../Components";
import images from "../../../assets/images";

const Loster = () => {
  return (
    <View style={styles.Box}>
      <View style={styles.InBox}>
        <View style={styles.InBoxLeft}>
          <Text style={styles.LosterText}>분실자</Text>
          <Image source={images.profile} style={styles.InBoxImg} />
          <Text style={styles.LosterText}>'닉네임님'</Text>
        </View>
        <View style={styles.InBoxRight}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={3}
            style={styles.LosterContext}
          >
            너무 친절하세요! 감사합니다. 덕분에 저의 소중한 모자를 찾았어요
          </Text>
        </View>
      </View>
    </View>
  );
};

const Getter = () => {
  return (
    <View style={styles.Box}>
      <View style={styles.InBox}>
        <View style={styles.InBoxLeft}>
          <Text style={styles.GetterText}>습득자</Text>
          <Image source={images.getter} style={styles.InBoxImg} />
          <Text style={styles.GetterText}>'닉네임님'</Text>
        </View>
        <View style={styles.InBoxRight}>
          <Text style={styles.GetterTitle}>mlb 모자</Text>
          <Text style={styles.GetterSub}>어은동 2022.10.1</Text>
        </View>
      </View>
    </View>
  );
};

const Matching = ({ navigation }) => {
  //리프레쉬
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [isShow, setIsShow] = useState(false);

  return (
    <>
      {/* //////HEADER////// */}
      <View style={styles.Header}>
        <View style={styles.HeaderBox}>
          <TouchableOpacity
            style={styles.CategoryBox}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="left" size={30} color="black" />
          </TouchableOpacity>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={styles.HeaderTitle}
          >
            매칭완료
          </Text>
          {/* 영역용 */}
          <View style={styles.CategoryBox}>
            <AntDesign name="left" size={30} color="white" />
          </View>
          {/* 영역용 */}
        </View>
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <ScrollView
        overScrollMode="never"
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            style={{ backgroundColor: "#F8F8FA" }}
          />
        }
        style={{ backgroundColor: "#F8F8FA" }}
      >
        <TouchableOpacity onPress={() => setIsShow(true)}>
          <Loster />
        </TouchableOpacity>
        <Getter />
        <Loster />
        <Loster />
        <Getter />
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
            <TouchableOpacity
              style={styles.ModalHeaderTitle}
              onPress={() => setIsShow(false)}
            >
              <AntDesign name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Image source={images.profile} style={styles.ModalImg} />
            <View style={styles.ModalBackBox}>
              <View style={styles.ModalInBox}>
                <View style={styles.ModalInBoxTop}>
                  <Text style={{ fontSize: 16, fontWeight: "500" }}>
                    <Text style={{ fontSize: 16, fontWeight: "700" }}>
                      '습득자 닉네임'
                    </Text>
                    님
                  </Text>
                </View>
                <View style={styles.ModalInBoxBottom}>
                  <View style={styles.ModalInBoxBottomLeft}>
                    <Image source={images.sampleBox} />
                  </View>
                  <View style={styles.ModalInBoxBottomRight}>
                    <Text style={{ fontSize: 15 }}>mlb 모자</Text>
                    <Text style={{ color: "#878B93", fontSize: 13 }}>
                      어은동 1일전
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Text
            style={{ textAlign: "center", fontSize: 18, fontWeight: "700" }}
          >
            감사 인사
          </Text>

          <ScrollView style={styles.ModalBottomContent}>
            <Text>
              너무 친절하세요! 감사합니다. 덕분의 저의 소중한 모자를 찾았어요.
              새해복 많이 받으시고 항상 건강한 하루 되세요! 너무 친절하세요!
              감사합니다. 덕분의 저의 소중한 모자를 찾았어요. 새해복 많이
              받으시고 항상 건강한 하루 되세요! 너무 친절하세요! 감사합니다.
              덕분의 저의 소중한 모자를 찾았어요. 새해복 많이 받으시고 항상
              건강한 하루 되세요! 너무 친절하세요! 감사합니다. 덕분의 저의
              소중한 모자를 찾았어요. 새해복 많이 받으시고 항상 건강한 하루
              되세요! 너무 친절하세요! 감사합니다. 덕분의 저의 소중한 모자를
              찾았어요. 새해복 많이 받으시고 항상 건강한 하루 되세요!
            </Text>
          </ScrollView>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => setIsShow(false)}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#56C596",
                  fontWeight: "700",
                }}
              >
                완료
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  HeaderBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 8,
    textAlign: "center",
  },

  CategoryBox: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    // backgroundColor: "red",
  },
  HeaderCircle: {
    width: "100%",
    reiszeMode: "stretch",
  },
  //////////////

  Box: {
    backgroundColor: "rgba(189, 189, 189,0.8)",
    height: 125,
    width: "80%",
    marginLeft: "10%",
    marginVertical: 20,
    borderRadius: 5,
  },
  InBox: {
    position: "absolute",
    backgroundColor: "#EDEDED",
    height: 120,
    width: "100%",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  InBoxLeft: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  InBoxImg: {
    resizeMode: "contain",
    width: 41,
  },
  InBoxRight: {
    flex: 6,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  LosterText: {
    color: "#56C596",
    fontSize: 15,
    fontWeight: "600",
  },
  LosterContext: {
    fontWeight: "500",
  },
  GetterText: {
    color: "#767676",
    fontSize: 15,
    fontWeight: "600",
  },

  GetterTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  GetterSub: {
    fontWeight: "500",
    fontSize: 13,
    color: "#767676",
  },
  ///////////////
  ModalContainer: {
    position: "absolute",
    bottom: 0,
    borderRadius: 30,
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    // opacity: 1,
    paddingBottom: 50,
  },
  ModalClose: {
    flex: 1,
    backgroundColor: "#929394",
    opacity: 0.9,
  },
  ModalHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  ModalHeaderTitle: {
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  ModalBackBox: {
    backgroundColor: "rgba(189, 189, 189,0.3)",
    height: 190,
    width: "80%",
    marginLeft: "10%",
    marginVertical: 20,
    borderRadius: 5,
  },
  ModalInBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 180,
    width: "98%",
    alignSelf: "center",
    borderRadius: 5,
    paddingVertical: 20,
  },
  ModalImg: {
    position: "absolute",
    zIndex: 1,
    left: 50,
    top: -20,
  },
  ModalInBoxTop: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  ModalInBoxBottom: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  ModalInBoxBottomLeft: {},
  ModalInBoxBottomRight: {
    marginLeft: 10,
  },

  ModalBottomContent: {
    // width: "100%",
    paddingHorizontal: "10%",
    paddingVertical: 20,
    height: 100,
    marginBottom: 20,
  },

  ModalBottomFin: {
    backgroundColor: "red",
  },
});
export default Matching;
