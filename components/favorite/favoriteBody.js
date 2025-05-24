import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import storage from "../../utils/local_storage";
import FavoriteItem from "./favoriteItem";

const FavoriteBody = () => {
  const [favoriteItems, setfavoriteItems] = useState([]);

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

  return (
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
});

export default FavoriteBody;
