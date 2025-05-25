import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "../screens/home/homePage";
import MyDrawer from "./homeNavigation";
import MoviePage from "../screens/movie/moviePage";
import Person from "../screens/person/person";
import Search from "../screens/search/search";
import routes from "../utils/router";
import SeeAllPage from "../screens/seeAll/seeAllPage";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.Home}
          component={MyDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.Movie}
          component={MoviePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.Person}
          component={Person}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.Search}
          component={Search}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={routes.SeeAll}
          component={SeeAllPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default AppNavigation;
