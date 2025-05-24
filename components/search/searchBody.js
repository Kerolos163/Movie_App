import { FlatList, StyleSheet, View, Text, Image } from "react-native";
import SearchItem from "./searchItem";

const SearchBody = ({ data }) => {
  return data.length > 0 ? (
    <FlatList
      style={styles.constiner}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingVertical: 16 }}
      data={data}
      renderItem={(item) => <SearchItem key={item} data={item}></SearchItem>}
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

export default SearchBody;
