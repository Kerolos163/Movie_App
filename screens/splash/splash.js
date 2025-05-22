import { StyleSheet, View, Text, Image } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={require("../../assets/customSplash.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
});

export default Splash;
