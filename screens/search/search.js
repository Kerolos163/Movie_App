import React from "react";
import { Pressable, TextInput, View } from "react-native";
import styles from "./style";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.search}
          selectionColor={"gray"}
          placeholderTextColor={"orange"}
        ></TextInput>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <XMarkIcon size={30} color={"gray"}></XMarkIcon>
        </Pressable>
      </View>

      
    </View>
  );
};

export default Search;
