import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import router from "../../utils/router";

const SeeAllHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Pressable
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <ChevronLeftIcon
            size={30}
            color={"white"}
            style={styles.backArrowStyle}
          ></ChevronLeftIcon>
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: "orange", fontSize: 31, fontWeight: "bold" }}>
            {title[0]}
          </Text>
          <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
            {title.slice(1)}
          </Text>
        </View>
        <MagnifyingGlassIcon
          size="30"
          color={"white"}
          onPress={() => navigation.navigate(router.Search)}
        ></MagnifyingGlassIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
  },
  backArrowStyle: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 10,
  },
});

export default SeeAllHeader;
