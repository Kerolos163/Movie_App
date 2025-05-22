import { StyleSheet, View, Text } from "react-native";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

const CustomHeader = () => {
  return (
    <View>
      <View style={styles.header}>
        <Bars3CenterLeftIcon size="30" color={"white"}></Bars3CenterLeftIcon>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text style={{ color: "orange", fontSize: 31, fontWeight: "bold" }}>
            M
          </Text>
          <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
            ovies
          </Text>
        </View>
        <MagnifyingGlassIcon size="30" color={"white"}></MagnifyingGlassIcon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CustomHeader;
