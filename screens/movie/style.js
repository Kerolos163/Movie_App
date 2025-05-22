import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 36,

    backgroundColor: "#1E201D",
    position: "relative",
  },
  backArrowStyle: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 10,
  },
  header: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    zIndex: 1,
  },
  imageContainer: {
    position: "absolute",
    top: 0,
  },
  imageStyle: {
    width: screenWidth,
    height: screenHeight * 0.55,
  },
  titleContainer: {
    width: screenWidth,
    height: 60,
    position: "absolute",
    bottom: -10,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  titleStyle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default styles;
