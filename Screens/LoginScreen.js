import { View } from "react-native";
import React from "react";
import LoginScreenImage from "../components/LoginScreenImage";
import LoginForm from "../components/LoginForm";

const LoginScreen = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(180deg, #CB9191 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%)",
      }}
    >
      <View style={{ width: "100%", height: "55%" }}>
        <LoginScreenImage />
      </View>
      <View style={{ width: "100%", height: "auto" }}>
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;
