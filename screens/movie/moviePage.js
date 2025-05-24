import styles from "./style";
import {
  Image,
  Pressable,
  View,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Cast from "./../../components/movies/cast";
import SilmilarMovies from "../../components/movies/silmilarMovies";
import constant from "../../utils/constant";
import axios from "axios";
import storage from "../../utils/local_storage";

const MoviePage = () => {
  const { params } = useRoute();
  console.log("MoviePage data => ", params);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const [isFavorite, setisFavorite] = useState(false);

  useEffect(() => {
    isFavoriteMovie(params.id);
  }, []);

  const addFavoriteAndSaveLocal = () => {
    setisFavorite(!isFavorite);
    addRemoveFavorite(params);
  };

  const addRemoveFavorite = async (newmovie) => {
    try {
      const myMovies = await storage.load({
        key: "favorite",
      });
      const isExist = myMovies.find((item) => item.id === newmovie.id);
      let newMovies;
      if (isExist) {
        newMovies = myMovies.filter((item) => item.id !== newmovie.id);
      } else {
        newMovies = [...myMovies, newmovie];
      }
      await storage.save({
        key: "favorite",
        data: newMovies,
      });
    } catch (error) {
      await storage.save({
        key: "favorite",
        data: [newmovie],
      });
    }
  };

  const isFavoriteMovie = async (id) => {
    const myMovies = await storage.load({
      key: "favorite",
    });
    const isExist = myMovies.find((item) => item.id === id);
    if (isExist) {
      setisFavorite(true);
    } else {
      setisFavorite(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.backArrowContainer}>
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
            <HeartIcon
              size={40}
              color={isFavorite ? "red" : "white"}
            ></HeartIcon>
          </Pressable>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            source={{ uri: `${constant.imageUrl}/${params.poster_path}` }}
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
          <View style={styles.infoContainer}>
            <Text style={styles.titleStyle}>{params.title}</Text>
            <Text style={styles.releaseStyle}>
              Release {params.release_date}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.discripctionContainer}>
        <Text style={styles.discripctionStyle}>{params.overview}</Text>
        <Text
          style={[styles.releaseStyle, { color: "orange", marginLeft: 10 }]}
        >
          Top Cast
        </Text>
        <Cast id={params.id}></Cast>
        <Text
          style={[styles.releaseStyle, { color: "orange", marginLeft: 10 }]}
        >
          Similar Movies
        </Text>
        <SilmilarMovies id={params.id}></SilmilarMovies>
      </View>
    </ScrollView>
  );
};

export default MoviePage;
