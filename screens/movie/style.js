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
  imageStyle: {
    width: screenWidth,
    height: screenHeight * 0.55,
    position: "absolute",
    top: 0,
  },
});

export default styles;
