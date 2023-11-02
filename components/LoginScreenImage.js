import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import BgImg from "../assets/loginbgImg.svg";

const LoginScreenImage = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {/* <ImageBackground
        source={{
          uri: BgImg,
        }}
        blurRadius={1}
        style={styles.img}
      > */}
        <View style={styles.text}>
          <Text
            style={{
              fontSize: 33,
              fontWeight: 400,
              fontStyle: "normal",
              fontWeight: "400",
            }}
          >
            SAMPLE
          </Text>
          <Text
            style={{
              fontSize: 75,
              fontWeight: 500,
              color: "#000",
              textShadowColor: "rgba(0, 0, 0, 0.25)",
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 4,
              fontSize: 75,
              fontStyle: "normal",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            IOT APP
          </Text>
        </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default LoginScreenImage;

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
    alignItems: "start",
  },
  text: {
    padding: 40,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    // backgroundColor: "rgba(240, 160, 115, 0.00)",
    // backgroundImage:
    //   "linear-gradient(180deg, rgba(240, 160, 115, 0.00) 0%, #CC7154 100%)",
  },
});

