import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";
import routes from "../../utils/router";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import constant from "../../utils/constant";

const Cast = ({ id }) => {
  const navigation = useNavigation();
  const [cast, setcast] = useState([]);

  useEffect(() => {
    axios
      .get(`${constant.baseUrl}/movie/${id}/credits?api_key=${constant.apiKey}`)
      .then((res) => {
        setcast([...res.data.cast]);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ alignItems: "end", padding: 10 }}
    >
      {cast &&
        cast.map((actor, index) => (
          <Pressable
            key={index}
            style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
            onPress={() => navigation.navigate(routes.Person, actor)}
          >
            <View
              key={index}
              style={{
                marginRight: 10,
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: `${constant.imageUrl}/${actor.profile_path}` }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
              />
              <Text style={{ color: "white", marginTop: 5, width: 100, textAlign: "center" }}>
                {actor.name}
              </Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Cast;
