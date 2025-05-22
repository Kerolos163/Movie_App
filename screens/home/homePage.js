import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomHeader from "../../components/Home/customHeader";
import styles from "./style";
import MoviesList from "../../components/Home/MoviesList";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
    
      <MoviesList data={[1, 2, 3, 4, 5, 6, 7, 8]} header="UpComing"></MoviesList>
      <MoviesList data={[1, 2, 3, 4, 5, 6, 7, 8]} header="Top Rate"></MoviesList>
    </View>
  );
};

export default HomePage;
