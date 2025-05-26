import { Pressable, TextInput, View } from "react-native";
import styles from "./style";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import constant from "../../utils/constant";
import FavoriteBody from "../../components/favorite/favoriteBody";
import SearchBody from "../../components/search/searchBody";

const Search = () => {
  const [allData, setallData] = useState([]);
  const [SelectedData, setSelectedData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    axios
      .get(`${constant.baseUrl}/discover/movie?api_key=${constant.apiKey}`)
      .then((res) => {
        console.log(res.data.results);
        setallData([...res.data.results]);
      });
  }, []);

  const filterData = (event) => {
    let value = event.nativeEvent.text;
    // console.log(allData);
    setSelectedData(
      allData.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase());
      })
    );
    if (value === "") {
      setSelectedData([]);
    }
    console.log(SelectedData);
  };
  return (
    <View style={styles.container}>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.search}
          selectionColor={"gray"}
          placeholderTextColor={"orange"}
          onChange={(e) => filterData(e)}
        ></TextInput>
        <Pressable style={styles.btn} onPress={() => navigation.goBack()}>
          <XMarkIcon size={30} color={"white"}></XMarkIcon>
        </Pressable>
      </View>
      <SearchBody data={SelectedData}></SearchBody>
    </View>
  );
};

export default Search;
