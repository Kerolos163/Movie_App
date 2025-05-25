import React from "react";
import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import SeeAllItem from "./seeAllItem";

const SeeAllBody = ({ data, loadMore }) => {
  return data.length > 0 ? (
    <FlatList
      style={styles.constiner}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      data={data}
      renderItem={(item) => (
        <SeeAllItem key={data.length} data={item}></SeeAllItem>
      )}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
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
    margin: 10,
    marginHorizontal: 16,
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

export default SeeAllBody;
