import { HeartIcon } from "react-native-heroicons/solid";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import constant from "../../utils/constant";
import { useNavigation } from "@react-navigation/native";
import router from "../../utils/router";
import storage from "../../utils/local_storage";
import { FavoriteContext } from "../../context/favoriteContextProvider";
import { useContext } from "react";

const SearchItem = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(router.Movie, data.item)}
      style={({ pressed }) => [
        styles.Pressable,
        { opacity: pressed ? 0.9 : 1 },
      ]}
    >
      <View style={styles.container}>
        <Pressable
          style={({ pressed }) => [
            styles.IconStyle,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => removeFromFavorite(data.item.id)}
        >
          
        </Pressable>
        <Image
          style={styles.imageStyle}
          source={{ uri: `${constant.imageUrl}/${data.item.poster_path}` }}
        ></Image>
        <View style={styles.blurStyle}></View>
        <Text style={styles.title}>{data.item.title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Pressable: {
    width: "49.3%",
    aspectRatio: 3 / 4,
  },
  container: {
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
  IconStyle: {
    zIndex: 2,
    position: "absolute",
    right: 5,
    top: 5,
  },
});

export default SearchItem;
