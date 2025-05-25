import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import axios from "axios";
import constant from "../../utils/constant";
import SeeAllBody from "../seeAll/seeAllBody";

const TopRate = () => {
  const [upComing, setupComing] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = () => {
    if (!hasMore) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `${constant.baseUrl}/movie/top_rated?api_key=${constant.apiKey}&page=${page}`
      )
      .then((response) => {
        console.log("response => ", response.data.page);
        console.log("Page Number ", page);
        setupComing((prev) => [...prev, ...response.data.results]);

        if (response.data.total_pages <= page) {
          setHasMore(false);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const loadMore = () => {
    console.log("❤️");
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return <SeeAllBody data={upComing} loadMore={loadMore}></SeeAllBody>;
};

export default TopRate;
