import React from "react";
import { View, Text, ScrollView } from "react-native";
import CustomHeader from "../../components/Home/customHeader";
import styles from "./style";
// import TrandingMovies from "../../components/Home/trandingMovies";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>

      {/* <TrandingMovies data={[1,2,3,4]}></TrandingMovies> */}
    </View>
  );
};

export default HomePage;
