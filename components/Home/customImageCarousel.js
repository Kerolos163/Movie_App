import React from "react";
import { ScrollView, StyleSheet, Image, Dimensions } from "react-native";
// import Animated, { useSharedValue ,useAnimationStyle} from "react-native-reanimated";

const CustomImageCarousel = ({ data }) => {
  const screenWidth = Dimensions.get("window").width;
  const size = screenWidth * 0.75;
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={size}
      decelerationRate="fast"
    >
      {data.map((item, index) => (
        <Image
          key={index}
          style={styles.ImageStyle}
          source={require("../../assets/customSplash.png")}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    width: 150,
    height: 160,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default CustomImageCarousel;
