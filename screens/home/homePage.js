import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomHeader from "../../components/Home/customHeader";
import styles from "./style";
import MoviesList from "../../components/Home/MoviesList";
import CustomImageCarousel from "../../components/Home/customImageCarousel";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
      {/* <CustomImageCarousel data={[1, 2, 3, 4, 5, 6, 7, 8]}></CustomImageCarousel> */}

      <MoviesList data={[1, 2, 3, 4, 5, 6, 7, 8]} header="UpComing"></MoviesList>
      <MoviesList data={[1, 2, 3, 4, 5, 6, 7, 8]} header="Top Rate"></MoviesList>
    </View>
  );
};

export default HomePage;
