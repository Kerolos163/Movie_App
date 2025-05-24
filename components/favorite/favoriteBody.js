import React, { useCallback, useContext, useState } from "react";
import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import storage from "../../utils/local_storage";
import FavoriteItem from "./favoriteItem";
import { FavoriteContext } from "../../context/favoriteContextProvider";

const FavoriteBody = () => {
  const { favoriteItems, setfavoriteItems } = useContext(FavoriteContext);

  useFocusEffect(
    useCallback(() => {
      storage
        .load({
          key: "favorite",
        })
        .then((res) => {
          setfavoriteItems(res);
        });
    }, [])
  );

  return favoriteItems.length > 0 ? (
    <FlatList
      style={styles.constiner}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      data={favoriteItems}
      renderItem={(item) => (
        <FavoriteItem key={item} data={item}></FavoriteItem>
      )}
      numColumns={2}
      columnWrapperStyle={styles.column}
    ></FlatList>
  ) : (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../../assets/customSplash.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  constiner: {
    flex: 1,
  },
  column: {
    gap: 6,
    justifyContent: "flex-start",
    marginBottom: 6,
  },
  emptyContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoriteBody;
