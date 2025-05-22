import styles from "./style";
import { Image, Pressable, View, Dimensions } from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

const MoviePage = () => {
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
      <Image
        style={styles.imageStyle}
        source={require("../../assets/demo.jpg")}
      ></Image>
    </View>
  );
};

export default MoviePage;
