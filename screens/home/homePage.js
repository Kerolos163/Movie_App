import React, { useEffect, useReducer, useState } from "react";
import { View, Text } from "react-native";
import CustomHeader from "../../components/customHeader";
import styles from "./style";
import MoviesList from "../../components/Home/MoviesList";
import HomeReducer from "../../reducer/homeReducer";
import axios from "axios";
import rTypes from "../../utils/types";
import constant from "../../utils/constant";
import CustomImageCarousel from "../../components/Home/customImageCarousel";

const HomePage = () => {
  const [movies, dispatch] = useReducer(HomeReducer, []);
  const [topRate, settopRate] = useState([]);

  useEffect(() => {
    axios
      .get(`${constant.baseUrl}/movie/upcoming?api_key=${constant.apiKey}`)
      .then((response) => {
        // console.log("response => ", response.data.results);
        dispatch({
          type: rTypes.GETALLupcoming,
          payload: response.data.results,
        });
      });

    axios.get(
      `${constant.baseUrl}/movie/top_rated?api_key=${constant.apiKey}`
    ).then((response) => {
      settopRate([...response.data.results]);
    });
  }, []);

  return (
    <View style={styles.container}>
      <CustomHeader></CustomHeader>
      {/* <CustomImageCarousel data={[1, 2, 3, 4, 5, 6, 7, 8]}></CustomImageCarousel> */}

      <MoviesList data={movies} header="UpComing"></MoviesList>
      <MoviesList data={topRate} header="Top Rate"></MoviesList>
    </View>
  );
};

export default HomePage;
