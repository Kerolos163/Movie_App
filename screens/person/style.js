import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 36,
    backgroundColor: "#1E201D",
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
  backArrowStyle: {
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 10,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  avatar: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.6,
    borderRadius: screenWidth * 0.6,
    borderWidth: 2,
    borderColor: "white",
    boxShadow: "0px 0px 80px rgba(225, 225, 225, 0.85)",
  },
  infoContainer: {
    paddingTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  overviewContainer: {
    // borderWidth: 1,
    // borderColor: "white",
    // boxShadow: "0px 0px 80px rgba(225, 225, 225, 0)",
    padding: 10,
    margin: 10,
    marginTop: 50,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overviewItem:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
  }
});

export default styles;
