import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "./style";
import SeeAllHeader from "../../components/seeAll/seeAllHeader";
import UpComing from "../../components/upComing/upComing";

const SeeAllUpComing = () => {
  const { params } = useRoute();
  console.log(params);

  return (
    <View style={styles.containter}>
      <SeeAllHeader title={params}></SeeAllHeader>
      <UpComing></UpComing>
    </View>
  );
};

export default SeeAllUpComing;
