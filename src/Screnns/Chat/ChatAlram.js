import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StyleSheet,
  Modal,
  Platform,
  Image,
  SafeAreaView,
  RefreshControl,
  Animated,
} from "react-native";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import images from "../../../assets";
import { LostCard } from "../../Components";
import { CategoryData, Daejeon } from "../../DBTEMP";

const Item = ({ type, img, isfous }) => {
  return (
    <View style={styles.ItemBox}>
      <Image style={styles.ItemBoxImg} source={img} alt="" />
      {isfous ? (
        <Text style={styles.ItemBoxTitleFocus}>{type}</Text>
      ) : (
        <Text style={styles.ItemBoxTitle}>{type}</Text>
      )}
    </View>
  );
};

const Card = () => {
  return (
    <>
      <TouchableOpacity style={styles.CardBox}>
        <Image source={images.profile} />
        <View style={{ justifyContent: "center", marginLeft: 10 }}>
          <Text style={styles.CardTitle}>mlb 모자</Text>
          <Text style={styles.CardSub}>어은동 1일전</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const ChatAlram = ({ navigation }) => {
  //리프레쉬
  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [isChat, setIsChat] = useState(true);

  const [isCheck, setIsCheck] = useState(0);

  const DumpData = CategoryData;
  const [isShow, setIsShow] = useState(false);

  const [isChoice, setIsChoice] = useState(DumpData);

  const reset = () => {
    setIsCheck(0);
    setIsShow(true);
  };

  return (
    <>
      {/*헤더 */}

      <View style={styles.Header}>
        {/* <View style={styles.LogoBox}> */}
        <View
          style={styles.CategoryBox}
          onPress={() => navigation.navigate("ProfileStack")}
        >
          <MaterialIcons name="menu" size={30} color="white" />
        </View>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setIsChat(true)}
        >
          {isChat ? (
            <Text style={styles.Title}>채팅알림</Text>
          ) : (
            <Text style={styles.UnTitle}>채팅알림</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => setIsChat(false)}
        >
          {isChat ? (
            <Text style={styles.UnTitle}>키워드 알림</Text>
          ) : (
            <Text style={styles.Title}>키워드 알림</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="window-close" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={images.BottomCircle} style={styles.HeaderCircle} />

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
        {isChat ? (
          <>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </>
        ) : (
          <>
            <View style={styles.KeyWordBox}>
              <Text style={styles.KeyWordText}>알림 키워드 {isCheck}개</Text>
              <TouchableOpacity style={styles.KeyWordSetBox} onPress={reset}>
                <Text style={styles.KeyWordSetText}>설정</Text>
              </TouchableOpacity>
            </View>
            <LostCard />
            <LostCard />
            <LostCard />
          </>
        )}
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
        {/* 모달 닫기 */}

        <View style={styles.ModalContainer}>
          <View style={styles.ModalHeader}>
            <View style={styles.CategoryBox}>
              <View style={{ width: 24 }}></View>
            </View>
            <Text style={styles.ModalHeaderTitle}>알림 키워드 설정</Text>
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
                {isChoice.map((data) => {
                  //   if (data.id % 2 == 0) {
                  return (
                    <TouchableOpacity
                      key={data.id}
                      style={styles.ItemBox}
                      onPress={() => {
                        {
                          console.log("변경 전 :", isChoice[data.id].focus),
                            (isChoice[data.id].focus =
                              !isChoice[data.id].focus),
                            console.log("변경 후 :", isChoice[data.id].focus);
                        }
                      }}
                    >
                      <Image
                        style={styles.ItemBoxImg}
                        source={data.img}
                        alt=""
                      />
                      {isChoice[data.id].focus ? (
                        <Text style={styles.ItemBoxTitleFocus}>
                          {data.type}
                        </Text>
                      ) : (
                        <Text style={styles.ItemBoxTitle}>{data.type}</Text>
                      )}
                    </TouchableOpacity>
                  );
                  //   }
                })}
              </View>
              {/* <View style={{ flex: 1, alignItems: "center" }}>
                {DumpData.map((data) => {
                  if (data.id % 2 == 1) {
                    return (
                      <TouchableOpacity key={data.id}>
                        <Item type={data.type} img={data.img} />
                      </TouchableOpacity>
                    );
                  }
                })}
              </View> */}
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
    // backgroundColor: "#F8F8FA",
    backgroundColor: "white",
    height: 65,
    alignItems: "center",
    justifyContent: "space-between",
  },
  LogoBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "blue",
  },

  Title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    // color: "#5F7A61",
  },
  UnTitle: {
    textAlign: "center",
    fontWeight: "400",
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

  CardBox: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
    width: "90%",
    marginLeft: "5%",
  },

  CardTitle: {
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 5,
  },
  CardSub: {
    fontWeight: "500",
    fontSize: 15,
    color: "#878B93",
  },

  KeyWordBox: {
    flexDirection: "row",
    paddingVertical: 20,
    width: "80%",
    marginLeft: "10%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  KeyWordText: {
    fontWeight: "700",
    fontSize: 18,
    color: "#56C596",
  },
  KeyWordSetBox: {
    borderRadius: 30,
    backgroundColor: "#56C596",
    paddingVertical: 10,
    paddingHorizontal: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  KeyWordSetText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  ///////////////////
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
    color: "#56C596",
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
  ItemBoxTitleFocus: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#56C596",
  },
});

export default ChatAlram;
