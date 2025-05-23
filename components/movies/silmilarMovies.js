import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import axios from "axios";
import constant from "../../utils/constant";
import { useNavigation } from "@react-navigation/native";
import routes from "../../utils/router";

const SilmilarMovies = ({ id }) => {
  const navigation = useNavigation();
  const [movies, setmovies] = useState();

  console.log("id => ", id);
  useEffect(() => {
    axios
      .get(`${constant.baseUrl}/movie/${id}/similar?api_key=${constant.apiKey}`)
      .then((res) => {
        console.log("silmilar movies => ", res);
        setmovies([...res.data.results]);
      });
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingBottom: 80 }}
      contentContainerStyle={{ alignItems: "end", padding: 20 }}
    >
      {movies &&
        movies.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            onPress={() => navigation.push(routes.Movie, item)}
          >
            <View
              key={index}
              style={{
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: `${constant.imageUrl}/${item.poster_path}` }}
                style={{
                  width: 160,
                  height: 170,
                  borderRadius: 10,
                  paddingBottom: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: 5,
                  width: 160,
                  fontSize: 13,
                  textAlign: "center",
                }}
              >
                {item.title}
              </Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SilmilarMovies;
