import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  View,
  Pressable,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
} from "react-native-reanimated";
import constant from "../../utils/constant";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import router from "../../utils/router";

const CustomImageCarousel = () => {
  const [newData, setnewData] = useState([]);
  const screenWidth = Dimensions.get("window").width;
  const size = screenWidth * 0.85;
  const spacer = (screenWidth - size) / 2;
  const x = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    axios
      .get(`${constant.baseUrl}/movie/popular?api_key=${constant.apiKey}`)
      .then((response) => {
        console.log("response => ", response.data.results);
        setnewData([...response.data.results]);
      });
  }, []);
  return (
    <View>
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToInterval={size}
        decelerationRate="fast"
        onScroll={onScroll}
      >
        {newData.map((item, index) => (
          <CarouselItem
            key={index}
            item={item}
            index={index}
            size={size}
            x={x}
          />
        ))}
      </Animated.ScrollView>
    </View>
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

const CarouselItem = ({ item, index, size, x }) => {
  const navigation = useNavigation();
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

  return (
    <View style={{ width: size }}>
      <Animated.View style={[styles.imageContainer, style]}>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          onPress={() => navigation.navigate(router.Movie, item)}
        >
          <Image
            style={styles.image}
            source={{ uri: `${constant.imageUrl}/${item.poster_path}` }}
          />
        </Pressable>
      </Animated.View>
    </View>
  );
};
