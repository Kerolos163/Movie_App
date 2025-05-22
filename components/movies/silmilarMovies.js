import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";

const SilmilarMovies = ({ movies }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingBottom: 80 }}
      contentContainerStyle={{ alignItems: "center", padding: 20 }}
    >
      {movies &&
        movies.map((actor, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            onPress={() => console.log(actor)}
          >
            <View
              key={index}
              style={{
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/demo.jpg")}
                style={{
                  width: 150,
                  height: 160,
                  borderRadius: 10,
                }}
              />
              <Text style={{ color: "white", marginTop: 5 }}>{actor.name}</Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default SilmilarMovies;
