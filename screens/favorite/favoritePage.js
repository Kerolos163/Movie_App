import React from "react";
import { View } from "react-native";
import CustomHeader from "../../components/customHeader";
import styles from "./styles";
import FavoriteBody from "../../components/favorite/favoriteBody"

const FavoritePage = () => {
  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
      <FavoriteBody></FavoriteBody>
    </View>
  );
};

export default FavoritePage;
