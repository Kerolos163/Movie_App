import React, { useState } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";

const CustomImageCarousel = ({ data }) => {
  const [newData, setnewData] = useState([
    { key: "spacer-left" },
    ...data,
    { key: "spacer-right" },
  ]);
  const screenWidth = Dimensions.get("window").width;
  const size = screenWidth * 0.75;
  const spacer = (screenWidth - size) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });
  return (
    <Animated.ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      snapToInterval={size}
      decelerationRate="fast"
      onScroll={onScroll}
    >
      {newData.map((item, index) => {
        const style = useAnimatedStyle(() => {
          const scale = interpolate(
            x.value,
            [(index - 2) * size, (index - 1) * size, index * size],
            [0.8, 1, 0.8]
          );
          return {
            transform: [{ scale }],
          };
        });

        // if (!item.image) {
        //   return <View style={{ width: spacer }} key={index}></View>;
        // }

        return (
          <View key={index} style={{ width: size }}>
            <Animated.View style={[styles.imageContainer, style]}>
              <Image
                style={styles.image}
                source={require("../../assets/demo.jpg")}
              />
            </Animated.View>
          </View>
        );
      })}
    </Animated.ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 34,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
});

export default CustomImageCarousel;
