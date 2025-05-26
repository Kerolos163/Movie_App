import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import router from "../../utils/router";
import constant from "../../utils/constant";
import React, { useEffect, useState } from "react";

const screenWidth = Dimensions.get("window").width;
const MoviesList = ({ data, header }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.upComingStyle}>
        <Text style={styles.upComingTextStyle}>{header}</Text>
        <Pressable
          style={({ pressed }) => [
            styles.Pressable,
            { opacity: pressed ? 0.9 : 1 },
          ]}
          onPress={() => navigation.navigate(router.SeeAll, header)}
        >
          <Text style={styles.seeAllStyle}>See All</Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => navigation.navigate(router.Movie, item)}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <View style={styles.styleItem}>
                <Image
                  style={styles.image}
                  source={{ uri: `${constant.imageUrl}/${item.poster_path}` }}
                />
                <Text
                  style={{
                    color: "white",
                    fontSize: 13,
                    marginTop: 5,
                    textAlign: "center",
                    width: 150,
                    textovverflow: "ellipsis",
                  }}
                >
                  {item.title}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 40,
    height: 300,
    marginTop: 10,
    alignSelf: "center",
  },
  styleItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  upComingStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  upComingTextStyle: { color: "white", fontSize: 20, fontWeight: "bold" },
  seeAllStyle: {
    color: "orange",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default MoviesList;
