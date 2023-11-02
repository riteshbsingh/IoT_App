import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Users } from "../constants/Users";
import validator from "validator";
import { useEffect } from "react";

const SignUpForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const toast = useToast();

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
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(email)) {
      if (password == cpassword) {
        if (!doesUserExist({ email, password })) {
          Users.push({ email, password });
          toast.show("SignUp Successful!", {
            type: "success",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "zoom-in",
          });
          navigation.navigate("Login");
        } else {
          toast.show("User already registerd!", {
            type: "danger",
            placement: "bottom",
            duration: 2000,
            offset: 30,
            animationType: "zoom-in",
          });
        }
      } else {
        toast.show("Passwords don't match!", {
          type: "danger",
          placement: "bottom",
          duration: 2000,
          offset: 30,
          animationType: "zoom-in",
        });
      }
    }
    else {
      toast.show("Email is not correct!", {
        type: "warning",
        placement: "bottom",
        duration: 2000,
        offset: 30,
        animationType: "zoom-in",
      });
    }
    }
  };

  // useEffect( () => {
  // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  // console.log(reg.test('test@gmail.com'))
  // },[])


  return (
    <View style={styles.form}>
      <Text style={{ fontSize: 32, fontWeight: 600, color: "#FFF" }}>
        Sign up
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
            // marginBottom: 15,
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
            // marginBottom: 15,
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
      <View style={{ width: 300 }}>
        <TextInput
          placeholder="Confirm Password "
          style={{
            border: "2px solid #E5F3FF",
            height: 32,
            borderRadius: 8,
            color: "#fff",
            padding: 20,
            marginBottom: 15,
          }}
          secureTextEntry={true}
          onChange={(e) => setCPassword(e.target.value)}
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
        Sign Up
      </Button>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  form: {
    width: "100%",
    height: "100%",
    gap: 10,
    display: "flex",
    alignItems: "center",
  },
});
