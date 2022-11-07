import React, { useState } from "react";
import Swiper from "react-native-swiper";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import imagesDB from "../../assets/images";

const Banner = () => {
  const images = [
    // "https://source.unsplash.com/1024x768/?nature",
    // "https://source.unsplash.com/1024x768/?water",
    // "https://source.unsplash.com/1024x768/?tree",
    // "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
    imagesDB.banner1,
    imagesDB.banner2,
  ];

  const [state, setState] = useState(1);
  return (
    <View
      style={{
        height: 160,
      }}
    >
      <SliderBox
        autoplay={false}
        circleLoop={false}
        sliderBoxHeight={160}
        resizeMethod={"resize"}
        resizeMode="stretch" // 이미지 사이즈 조절값
        //   cover , contain, stretch, repeat, center
        images={images} // 이미지 주소 리스트
        dotColor="rgba(0,0,0,0)" // 아래 점 투명으로 안보이게 가림
        inactiveDotColor="rgba(0,0,0,0)"
        ImageComponentStyle={styles.banner} // 이미지 Style 적용
        currentImageEmitter={(index) => {
          // 이미지가 바뀔때 어떤 동작을 할지 설정
          setState(index + 1);
        }}
      />
      <View style={styles.test}></View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 50,
          paddingTop: 4,
          paddingBottom: 4,
          paddingHorizontal: 10,
          borderRadius: 14,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <Text style={{ fontSize: 10, color: "#ffffff" }}>
          {state}/{images.length}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "80%",
    height: "100%",
    resizeMode: "stretch",
  },
  test: {
    // backgroundColor: "blue",
    backgroundColor: "#c2c2c2",
    opacity: 0.2,
    marginHorizontal: "10%",
    // borderBottomStartRadius: 20,
    // borderBottomEndRadius: 20,
    borderRadius: 20,
    zIndex: -1,
    position: "absolute",
    bottom: -5,
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // alignSelf: "center",
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#000",
    //     shadowOffset: {
    //       width: 0,
    //       height: 10,
    //     },
    //     shadowOpacity: 0.6,
    //     // shadowRadius: 3.84,
    //     shadowRadius: 5,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },
});

export default Banner;
