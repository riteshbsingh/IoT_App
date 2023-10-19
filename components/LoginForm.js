import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.form}>
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          fontStyle: "normal",
          fontWeight: 500,
          textTransform: "capitalize",
        }}
      >
        Sign In
      </Text>
      <View>
        <TextInput
          placeholder="Email ID"
          style={{
            border: "1px solid #FDA43C",
            height: 32,
            borderRadius: 8,
            color: "#fff",
            padding: 20,
          }}
        />
        <FontAwesome
          name="envelope"
          size={15}
          color="#FDA43C"
          style={{ position: "absolute", top: 13, right: 18 }}
        />
      </View>
      <View>
        <TextInput
          placeholder="Enter Password "
          style={{
            border: "1px solid #FDA43C",
            height: 32,
            borderRadius: 8,
            color: "#fff",
            padding: 20,
            marginBottom: 15,
          }}
        />
        <FontAwesome
          name="lock"
          size={20}
          color="#FDA43C"
          style={{ position: "absolute", top: 13, right: 18 }}
        />
      </View>
      <Button radius={"sm"} color="#FDA43C" onPress={() => navigation.navigate('Detail Page')} borderRadius={8}>
        Log In
      </Button>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontSize: 12, fontWeight: 400 }}>
          Don't have an account yet?
        </Text>
        <Text style={{ color: "#FDA43C", fontSize: 12, fontWeight: 400, textDecorationLine: 'underline' }}>
          Create an account
        </Text>
      </View>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  form: {
    padding: 40,
    width: "100%",
    height: "100%",
    gap: 10,
  },
});
