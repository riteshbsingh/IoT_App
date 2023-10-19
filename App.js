import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import DetailScreen from "./Screens/DetailScreen";
import ControlPanel from "./Screens/ControlPanel";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const option = { headerShown: false } 
  return (
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={option} />
          <Stack.Screen name="Detail Page" component={DetailScreen} options={option} />
          <Stack.Screen name="Control Panel" component={ControlPanel} options={option} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
});
