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

const SilmilarMovies = ({ id }) => {
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
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >
      {movies &&
        movies.map((item, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            onPress={() => console.log(item)}
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
                  width: 150,
                  height: 160,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "white",
                  marginTop: 5,
                  width: 140,
                  fontSize: 13,
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
