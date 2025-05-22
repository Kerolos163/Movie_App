import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

const Cast = ({ cast }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "center", padding: 10 }}
    >
      {cast &&
        cast.map((actor, index) => (
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
                  width: 100,
                  height: 100,
                  borderRadius: 50,
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

export default Cast;
