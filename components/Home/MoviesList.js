import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Pressable,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const MoviesList = ({ data, header }) => {
  console.log("data", data);
  console.log("header", header);
  return (
    <View style={styles.wrapper}>
      <View style={styles.upComingStyle}>
        <Text style={styles.upComingTextStyle}>{header}</Text>
        <Text style={styles.seeAllStyle}>See All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {data.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => console.log("item", item)}
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <View style={styles.styleItem}>
              <Image
                style={styles.image}
                source={require("../../assets/customSplash.png")}
              />
              <Text style={{ color: "white", fontSize: 16, marginTop: 5 }}>
                Kerolos
              </Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth - 40,
    height: 250,
    marginTop: 10,
    alignSelf: "center",
  },
  styleItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 150,
    height: 160,
  },
  upComingStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upComingTextStyle: { color: "white", fontSize: 20, fontWeight: "bold" },
  seeAllStyle: {
    color: "orange",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default MoviesList;
