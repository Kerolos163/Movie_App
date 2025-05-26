import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 36,
    backgroundColor: "#1E201D",
  },
  search: {
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    color: "orange",
    borderRadius: 20,
    width: "85%",
    position: "relative",
    left: "50%",
    transform: [{ translateX: "-50%" }],
    paddingLeft: 14,
    paddingRight: 55,
  },
  SearchContainer: {
    width: "100%",
    position: "relative",
  },
  btn: {
    position: "absolute",
    top: "20%",
    right: "8%",
    backgroundColor: "orange",
    borderRadius: 17,
    padding: 8,
  },
});

export default styles;
