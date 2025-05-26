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
    backgroundColor: "black",
    top: -35,
  },
  imageStyle: {
    width: screenWidth,
    height: screenHeight * 0.55,
  },
  infoContainer: {
    width: "100%",
    height: 75,
    position: "absolute",
    bottom: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  titleStyle: {
    color: "white",
    fontSize: 28,
    textAlign: "center",
    fontWeight: "bold",
  },
  releaseStyle: {
    color: "gray",

    marginTop: 10,

    fontSize: 16,
    fontWeight: "bold",
  },
  typesContainer: {
    padding: 10,
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  discripctionContainer: {
    position: "relative",
    bottom: 0,
    width: "100%",
  },
  discripctionStyle: {
    width: "100%",
    color: "gray",
    fontSize: 14,
    padding: 10,
    paddingTop: screenHeight * 0.44,
  },
  backArrowContainer: {
    position: "relative",
  },
  ratingContainer:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  }
});

export default styles;
