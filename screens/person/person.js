import React, { useState, useEffect } from "react";
import { Pressable, Text, View, Image, ScrollView } from "react-native";
import styles from "./style";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import constant from "../../utils/constant";
import axios from "axios";
import storage from "../../utils/local_storage";

const Person = () => {
  const navigation = useNavigation();
  const [isFavorite, setisFavorite] = useState(false);

  const { params } = useRoute();
  console.log("Person data => ", params);
  const [actor, setactor] = useState([]);
  const addFavoriteAndSaveLocal = () => {
    setisFavorite(!isFavorite);
    addRemoveFavorite(params);
  };

  const addRemoveFavorite = async (newactor) => {
    try {
      const myActors = await storage.load({
        key: "actor",
      });
      const isExist = myActors.find((item) => item.id === newactor.id);
      let newActors;
      if (isExist) {
        newActors = myActors.filter((item) => item.id !== newactor.id);
      } else {
        newActors = [...myActors, newactor];
      }
      await storage.save({
        key: "actor",
        data: newActors,
      });
    } catch (error) {
      await storage.save({
        key: "actor",
        data: [newactor],
      });
    }
  };

  const isFavoriteMovie = async (id) => {
    const myActors = await storage.load({
      key: "actor",
    });
    const isExist = myActors.find((item) => item.id === id);
    if (isExist) {
      setisFavorite(true);
    } else {
      setisFavorite(false);
    }
  };

  useEffect(() => {
    isFavoriteMovie(params.id);
    axios
      .get(`${constant.baseUrl}/person/${params.id}?api_key=${constant.apiKey}`)
      .then((res) => {
        console.log("person data => ", res.data);
        setactor(res.data);
      });
  }, []);
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
        <Pressable onPress={() => addFavoriteAndSaveLocal()}>
          <HeartIcon size={40} color={isFavorite ? "red" : "white"}></HeartIcon>
        </Pressable>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: `${constant.imageUrl}/${params.profile_path}` }}
        ></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{params.name}</Text>
        <Text style={{ color: "gray", fontSize: 16, paddingTop: 10 }}>
          {params.character}
        </Text>
      </View>
      <View style={styles.overviewContainer}>
        <View style={styles.overviewItem}>
          <Text style={{ fontSize: 15, color: "orange" }}>birthday : </Text>
          <Text style={{ fontSize: 16, color: "white" }}>
            {" "}
            {actor.birthday}
          </Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={{ fontSize: 11.5, color: "orange" }}>
            Place Of Birthday :{" "}
          </Text>
          <Text style={{ fontSize: 11.5, color: "white" }}>
            {" "}
            {actor.place_of_birth}
          </Text>
        </View>
        <View style={styles.overviewItem}>
          <Text style={{ fontSize: 15, color: "orange" }}>popularity : </Text>
          <Text style={{ fontSize: 16, color: "white" }}>
            {" "}
            {actor.popularity?.toFixed(2)}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.overviewContainer,
          {
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 80,
          },
        ]}
      >
        <Text style={{ fontSize: 18, color: "orange", marginBottom: 16 }}>
          biography :{" "}
        </Text>
        <Text style={{ fontSize: 16, color: "white" }}> {actor.biography}</Text>
      </View>
    </ScrollView>
  );
};

export default Person;
