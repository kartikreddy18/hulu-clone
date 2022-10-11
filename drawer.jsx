import { createDrawerNavigator } from "@react-navigation/drawer";
import { Sidebar } from "./components/sidebar";
import { Home } from "./screens/Home";
import { Header } from "./components/header";
import Details from "./screens/Details";

const Drawer = createDrawerNavigator();

export default function MyDrawer({ user, accessToken, setIsAuth }) {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      defaultStatus="closed"
      drawerContent={(props) => (
        <Sidebar
          user={user}
          accessToken={accessToken}
          setIsAuth={setIsAuth}
          {...props}
        />
      )}
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
}
