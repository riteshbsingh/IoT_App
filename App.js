import 'react-native-gesture-handler';
import "setimmediate";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import DetailScreen from "./Screens/DetailScreen";
import ControlPanel from "./Screens/ControlPanel";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ToastProvider } from "react-native-toast-notifications";
import SignUpScreen from "./Screens/SignUpScreen";
import GettingStartedPage from './Screens/GettingStartedPage';
import HomeScreen from "./Screens/HomeScreen";
import { NativeBaseProvider } from "native-base";
import RemoteScreen from "./Screens/RemoteScreen";
import IndividualRoomScreen from './Screens/IndividualRoomScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  const option = { headerShown: false };

  return (

    <ToastProvider>
      <NativeBaseProvider>
        <NavigationContainer style={styles.container}>
          {/* Stack Navigator */}
          <Stack.Navigator>
            <Stack.Screen
              name="GettingStarted"
              component={GettingStartedPage}
              options={option}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={option}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={option}
            />
            <Stack.Screen name="Home" component={HomeScreen} options={option} />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={option}
            />
            <Stack.Screen
              name="Control"
              component={ControlPanel}
              options={option}
            />
            <Stack.Screen
              name="Remote"
              component={RemoteScreen}
              options={option}
            />
            <Stack.Screen
              name="IndividualRoom"
              component={IndividualRoomScreen}
              options={option}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ToastProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
