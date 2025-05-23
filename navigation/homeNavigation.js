import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import HomePage from "../screens/home/homePage";
import FavoritePage from "../screens/favorite/favoritePage";
import routes from "../utils/router";
import { HomeIcon, StarIcon } from "react-native-heroicons/solid"; 

const { width } = Dimensions.get("window");
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#1E201D", width: width / 1.5 },
        headerStyle: { backgroundColor: "#1E201D" },
        drawerActiveTintColor: "orange",
        drawerInactiveTintColor: "white",
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name={routes.Home}
        component={HomePage}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <HomeIcon size={size || 24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={routes.Favorite}
        component={FavoritePage}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <StarIcon size={size || 24} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
