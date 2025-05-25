import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./style";
import SeeAllHeader from "./../../components/seeAll/seeAllHeader";

const SeeAllPage = () => {
  const { params } = useRoute();
  console.log(params);

  return (
    <View style={styles.containter}>
      <SeeAllHeader title={params}></SeeAllHeader>
    </View>
  );
};

export default SeeAllPage;
