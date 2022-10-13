import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

const Banner = ({ height }) => {
  const [images, setImages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?tree",
    "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
  ]);

  const [state, setState] = useState(1);
  return (
    <View style={{ width: "100%" }}>
      <SliderBox
        autoplay
        circleLoop
        sliderBoxHeight={height}
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

      <View
        style={{
          position: "absolute",
          bottom: 5,
          right: -10,
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
    width: "90%",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
});

export default Banner;
