import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import HomePage from "../screens/home/homePage";
import routes from "../utils/router";
import { HomeIcon } from 'react-native-heroicons/solid'; // ✅ Correct


const { width } = Dimensions.get("window");
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: "#1E201D", width: width / 1.5 },
        headerStyle: { backgroundColor: "#1E201D" },
        drawerActiveTintColor: "orange",
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
    </Drawer.Navigator>
  );
}

export default MyDrawer;
