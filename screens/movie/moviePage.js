import styles from "./style";
import { Image, Pressable, View, Dimensions, Text } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const MoviePage = () => {
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const [isFavorite, setisFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ChevronLeftIcon
            size={30}
            color={"white"}
            style={styles.backArrowStyle}
          ></ChevronLeftIcon>
        </Pressable>
        <Pressable onPress={() => setisFavorite(!isFavorite)}>
          <HeartIcon size={40} color={isFavorite ? "red" : "white"}></HeartIcon>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/demo.jpg")}
        ></Image>
        <LinearGradient
          colors={["transparent", "rgba(23,23,23,0.55)", "rgba(23,23,23,1)"]}
          style={{
            width: screenWidth,
            height: screenHeight * 0.55,
            position: "absolute",
            bottom: 0,
          }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleStyle}>Movie Title</Text>
        </View>
        
      </View>
    </View>
  );
};

export default MoviePage;
