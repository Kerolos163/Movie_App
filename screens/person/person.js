import React, { useState, useEffect } from "react";
import { Pressable, Text, View, Image, ScrollView } from "react-native";
import styles from "./style";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const Person = () => {
  const navigation = useNavigation();
  const [isFavorite, setisFavorite] = useState(false);
  return (
    <ScrollView style={styles.container}>
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
          style={styles.avatar}
          source={require("../../assets/demo.jpg")}
        ></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Kerolos Essa</Text>
        <Text style={{ color: "gray", fontSize: 16, paddingTop: 10 }}>
          fayoum ,Egypt
        </Text>
      </View>
    </ScrollView>
  );
};

export default Person;
