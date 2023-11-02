import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Button } from "@rneui/base";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const image = {
  uri: "https://images.unsplash.com/photo-1610123172763-1f587473048f?auto=format&fit=crop&q=80&w=2002&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const GettingStartedPage = () => {
  const navigation = useNavigation();

  const getIsSignedIn = async () => {
    const user = await AsyncStorage.getItem("email");
    if (user != null) navigation.navigate("Home", { title: 'Master Bedroom' });
  };

  useFocusEffect(() => {
    getIsSignedIn();
  });

  return (
    <View style={styles.details}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            width: 300,
          }}
        >
          <Text style={{ fontSize: 32, fontWeight: 600, color: "#FFF" }}>
            Control your home
          </Text>
          <View
            style={{ width: 218, display: "flex", justifyContent: "center" }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                color: "#FFF",
                textAlign: "center",
              }}
            >
              Control all your smart devices and enjoy your life
            </Text>
          </View>
        </View>

        <View style={{ gap: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
          <Button radius={'lg'} style={{ width: 300 }} onPress={()=> navigation.navigate("SignUp")} titleStyle={{ color: '#FFF', fontSize: 16, fontWeight: 600 }} color={'#3a3f54'} >Get started</Button>
          <Button radius={'lg'} style={{ width: 300 }} onPress={()=> navigation.navigate("Login")} titleStyle={{ color: '#171717', fontSize: 16, fontWeight: 600 }} color={'#eff1f5'} >Sign in</Button>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GettingStartedPage;

const styles = StyleSheet.create({
  details: {
    width: "100%",
    height: "100%",
  },
  image: {
    gap: 20,
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60
  },
});
