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
  TextInput,
} from "react-native";
import {
  MaterialIcons,
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  Feather,
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

const Card = ({ click }) => {
  return (
    <>
      <TouchableOpacity style={styles.CardBox} onPress={click}>
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
  const [isShow2, setIsShow2] = useState(false);
  const [addQuiz, setAddQuiz] = useState(false);

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
            <Card click={() => setIsShow2(true)} />
            {/* <Card />
            <Card />
            <Card />
            <Card />
            <Card /> */}
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

      {/* 채팅모달 */}
      <Modal
        visible={isShow2}
        animationType={"slide"}
        transparent={true}
        onRequestClose={isShow2}
      >
        <TouchableOpacity
          style={styless.ModalClose}
          onPress={() => {
            setIsShow2(false);
            setAddQuiz(false);
          }}
        ></TouchableOpacity>
        <View
          // bounces={false}
          // overScrollMode="never"
          style={styless.ModalContainer}
        >
          <ScrollView>
            <View style={styless.ModalHeader}>
              <TouchableOpacity
                style={styless.ModalHeaderTitle}
                onPress={() => {
                  setIsShow2(false);
                  setAddQuiz(false);
                }}
              >
                <AntDesign name="close" size={25} color="black" />
              </TouchableOpacity>
            </View>

            <View style={{ width: "90%", marginLeft: "5%" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image source={images.profile} style={styless.ModalImg} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "700" }}>
                    mlb 모자
                  </Text>
                  <Text>분실자 닉네임님</Text>
                </View>
              </View>
              <View style={styless.ModalBackBox}>
                <View style={styless.ModalInBox}>
                  <ScrollView
                    style={{
                      flex: 1,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                    }}
                  >
                    <View style={styless.ModalInBoxTop}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          marginBottom: 10,
                        }}
                      >
                        자세한 분실 장소
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginBottom: 20,
                        }}
                      >
                        충남대 이디아 앞 벤치
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          marginBottom: 10,
                        }}
                      >
                        분실한 날의 동선?
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginBottom: 20,
                        }}
                      >
                        이디야카페에서 나와서 잠시 짐정리를 하다가 도서관을
                        갔습니다.
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          marginBottom: 10,
                        }}
                      >
                        추가질문
                      </Text>
                      <Text
                        style={{
                          fontSize: 14,
                          marginBottom: 10,
                        }}
                      ></Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                style={styless.OKCancelBtn}
                onPress={() => {
                  setIsShow2(false);
                  setAddQuiz(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  수락
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styless.OKCancelBtn}
                onPress={() => setAddQuiz(true)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  질문추가
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styless.OKCancelBtn}
                onPress={() => {
                  setIsShow2(false);
                  setAddQuiz(false);
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                  }}
                >
                  거절
                </Text>
              </TouchableOpacity>
            </View>

            {addQuiz && (
              <View
                style={{
                  width: "90%",
                  marginLeft: "5%",
                }}
              >
                <View style={styless.ModalBackBox}>
                  <View style={styless.ModalInBox}>
                    <View style={styless.ModalInBoxTop}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <View
                          style={{
                            alignSelf: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: "700",
                            }}
                          >
                            추가질문
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            alignSelf: "center",
                          }}
                          onPress={() => {
                            setIsShow2(false);
                            setAddQuiz(false);
                          }}
                        >
                          <Feather name="send" size={24} color="#56C596" />
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          fontSize: 14,
                          marginBottom: 10,
                        }}
                      ></Text>
                      <TextInput
                        style={{ height: 130 }}
                        multiline
                        textAlignVertical={"top"}
                        placeholder="악용을 막기위해 분실자에게 추가적으로 질문해보세요."
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      </Modal>

      {/* 키워드모달 */}
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

const styless = StyleSheet.create({
  ModalContainer: {
    position: "absolute",
    bottom: 0,
    borderRadius: 30,
    width: "100%",
    maxHeight: Dimensions.get("screen").height * 0.8,
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
    height: 244,
    width: "100%",
    marginVertical: 20,
    borderRadius: 40,
  },
  ModalInBox: {
    position: "absolute",
    backgroundColor: "white",
    height: 234,
    width: "98%",
    alignSelf: "center",
    borderRadius: 35,
    paddingVertical: 20,
  },
  ModalImg: {
    // zIndex: 1,
  },
  ModalInBoxTop: {
    paddingHorizontal: 20,
    paddingTop: 10,
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

  OKCancelBtn: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: "#56C596",
    borderRadius: 30,
    alignItems: "center",
  },
});

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
