import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Users } from "../constants/Users";

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const setData = () => {
    AsyncStorage.setItem("email", email);
  };

  function doesUserExist(userToCheck) {
    for (const user of Users) {
      if (
        user.email === userToCheck.email &&
        user.password === userToCheck.password
      ) {
        return true;
      }
    }
    return false;
  }

  const handleLogin = () => {
    if (email.trim() == "")
      toast.show("Please enter your email!", {
        type: "warning",
        placement: "bottom",
        duration: 2000,
        offset: 30,
        animationType: "zoom-in",
      });
    else if (password.trim() == "")
      toast.show("Please enter your password!", {
        type: "warning",
        placement: "bottom",
        duration: 2000,
        offset: 30,
        animationType: "zoom-in",
      });
    else {
      if (doesUserExist({ email, password })) {
        setData();
        toast.show("Login Successful!", {
          type: "success",
          placement: "bottom",
          duration: 2000,
          offset: 30,
          animationType: "zoom-in",
        });
        navigation.navigate("Home");
      } else
        toast.show("Invalid Credentials!", {
          type: "danger",
          placement: "bottom",
          duration: 2000,
          offset: 30,
          animationType: "zoom-in",
        });
    }
  };

  const getIsSignedIn = async () => {
    const user = await AsyncStorage.getItem("email");
    if (user != null) navigation.navigate("Home");
  };

  useFocusEffect(() => {
    getIsSignedIn();
  });

  return (
    <View style={styles.form}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 600,
          color: "#FFF",
          display: "flex",
        }}
      >
        Sign in
      </Text>
      <View style={{ width: 300 }}>
        <TextInput
          placeholder="Email ID"
          style={{
            border: "2px solid #E5F3FF",
            height: 32,
            borderRadius: 8,
            color: "#fff",
            padding: 20,
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FontAwesome
          name="envelope"
          size={15}
          color="#E5F3FF"
          style={{ position: "absolute", top: 13, right: 18 }}
        />
      </View>
      <View style={{ width: 300 }}>
        <TextInput
          placeholder="Enter Password "
          style={{
            border: "2px solid #E5F3FF",
            height: 32,
            borderRadius: 8,
            color: "#fff",
            padding: 20,
            marginBottom: 15,
          }}
          secureTextEntry={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesome
          name="lock"
          size={20}
          color="#E5F3FF"
          style={{ position: "absolute", top: 13, right: 18 }}
        />
      </View>
      <Button
        radius={"lg"}
        style={{ width: 300 }}
        titleStyle={{ color: "#FFF", fontSize: 16, fontWeight: 600 }}
        color={"#3a3f54"}
        onPress={handleLogin}
      >
        Log In
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "100%",
    gap: 10,
    display: "flex",
    alignItems: "center",
  },
});
