import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import LoginScreenImage from "../components/LoginScreenImage";
import SignUpForm from "../components/SignUpForm";

const image = {
  uri: "https://images.unsplash.com/photo-1610123172763-1f587473048f?auto=format&fit=crop&q=80&w=2002&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const SignUpScreen = () => {
  return (
    <View style={styles.details}>
      <ImageBackground source={image} blurRadius={1} resizeMode="cover" style={styles.image}>
        <View style={{ width: "100%", height: "auto" }}>
          <SignUpForm />
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  details: {
    width: "100%",
    height: "100%",
  },
  image: {
    gap: 20,
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
  },
});