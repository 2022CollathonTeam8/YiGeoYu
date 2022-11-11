import React, { useState, useEffect, useCallback } from "react";
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
  Ionicons,
} from "@expo/vector-icons";
import images from "../../../assets";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";

const temp_trash = new Date();
const temp_mon = temp_trash.getMonth() + 1;
const temp_day = temp_trash.getDate();

const ChatRoomSample = ({ navigation }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "안녕하세요",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: images.profile,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#56C596",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
        }}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <Ionicons
            name="send"
            size={30}
            color="#56C596"
            style={{ padding: 10 }}
          />
        </View>
      </Send>
    );
  };
  const [isShow, setIsShow] = useState(false);
  const [isFin, setIsFIn] = useState(true);
  return (
    <View style={{ backgroundColor: "#F8F8FA", flex: 1 }}>
      <View style={styles.Header}>
        <TouchableOpacity
          style={styles.CategoryBox}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.Title}>'나영나영'</Text>
        <View style={styles.CategoryBox}>
          <Fontisto name="bell" size={30} color="white" />
        </View>
      </View>
      <Image source={images.HeaderBottomCircle} style={styles.HeaderCircle} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: 20,
          paddingBottom: 20,
          borderBottomColor: "#EBEBEB",
          borderBottomWidth: 1,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Image source={images.lostbuds} style={styles.cardImg} />
          <View
            style={{
              justifyContent: "center",
              marginLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                marginBottom: 5,
              }}
            >
              디지털기기
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "#878B93",
              }}
            >
              온천1동 {temp_day - 10}일전
            </Text>
          </View>
        </View>

        {isFin ? (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("ChatThanks");
            }}
          >
            <View
              style={{
                justifyContent: "center",
                backgroundColor: "#56C596",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                감사인사
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setIsShow(true);
            }}
          >
            <View
              style={{
                justifyContent: "center",
                backgroundColor: "#56C596",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                감사인사
              </Text>
            </View>
          </TouchableOpacity>
        )}

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
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={images.profile} />
              <Text>'나영나영'님께서</Text>
              <Text style={{ fontSize: 18 }}>
                아직 거래 완료를 하지 않으셨습니다.
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: "#56C596",
                  borderRadius: 20,
                  marginVertical: 20,
                  paddingVertical: 15,
                  paddingHorizontal: 40,
                }}
                onPress={() => setIsShow(false)}
              >
                <Text style={{ fontSize: 18, color: "white" }}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        placeholder="메세지 입력"
      />
    </View>
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
  /////////
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
  cardImg: {
    width: 58,
    height: 58,
    borderRadius: 5,
    resizeMode: "contain",
  },
});

export default ChatRoomSample;
