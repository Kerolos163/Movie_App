import React, { useEffect, useReducer } from "react";
import { View, Text, ScrollView } from "react-native";
import CustomHeader from "../../components/Home/customHeader";
import styles from "./style";
import MoviesList from "../../components/Home/MoviesList";
import HomeReducer from "../../reducer/homeReducer";
import axios from "axios";
import rTypes from "../../utils/types";
import constant from "../../utils/constant";
import CustomImageCarousel from "../../components/Home/customImageCarousel";

const HomePage = () => {
  const [movies, dispatch] = useReducer(HomeReducer, []);

  useEffect(() => {
    axios
      .get(
        `${constant.baseUrl}/movie/upcoming?api_key=${constant.apiKey}`
      )
      .then((response) => {
        // console.log("response => ", response.data.results);
        dispatch({
          type: rTypes.GETALLupcoming,
          payload: response.data.results,
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
      {/* <CustomImageCarousel data={[1, 2, 3, 4, 5, 6, 7, 8]}></CustomImageCarousel> */}

      <MoviesList data={movies} header="UpComing"></MoviesList>
      <MoviesList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        header="Top Rate"
      ></MoviesList>
    </View>
  );
};

export default HomePage;
