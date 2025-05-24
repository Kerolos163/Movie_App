import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import constant from "../../utils/constant";

const FavoriteItem = ({ data }) => {
  // console.log(data);
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={{ uri: `${constant.imageUrl}/${data.item.poster_path}` }}
      ></Image>
      <View style={styles.blurStyle}></View>
      <Text style={styles.title}>{data.item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "49.3%",
    aspectRatio: 3 / 4,
    borderRadius: 10,
    position: "relative",
  },
  imageStyle: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  blurStyle: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.45,
    position: "absolute",
    borderRadius: 10,
  },
  title: {
    zIndex: 2,
    fontSize: 16,
    fontWeight: "bold",
    color: "orange",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }],
  },
});

export default FavoriteItem;
