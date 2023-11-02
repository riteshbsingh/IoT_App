import React, { useState } from "react";
import { View, Image, Text } from "react-native";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Switch } from "@rneui/themed";
import { TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Dialog } from "@rneui/themed";
import { TextInput } from "react-native";
import { Select, CheckIcon } from "native-base";
import { Button } from "@rneui/base";

const data = [
  {
    imageSource:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The idea with React Native Elements is more about component structure than actual design.",
    title: "Master Bedroom",
    devices: 4,
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The idea with React Native Elements is more about component structure than actual design.",
    title: "Living Room",
    devices: 15,
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1505692795793-20f543407193?auto=format&fit=crop&q=80&w=2039&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The idea with React Native Elements is more about component structure than actual design.",
    title: "Kids Room",
    devices: 5,
  },
  {
    imageSource:
      "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The idea with React Native Elements is more about component structure than actual design.",
    title: "Kitchen",
    devices: 3,
  },
];

const CardGrid = () => {
  const navigation = useNavigation();
  const [checked1, setChecked1] = useState(false);
  const [visible, setVisible] = useState(false);
  const [service, setService] = useState("");
  const [service1, setService1] = useState("");
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(false);
  const [name, setName] = useState("");
  const [borderColor, setBorderColor] = useState("#3a3f54");
  const toggleDialog = () => {
    setVisible(!visible);
  };

  const handleAddDevice = () => {
    data.push({ title: name, type: service, value: "", color: false });
    setName("");
    setService("");
    toggleDialog();
  };

  const handleFocus = () => {
    // Change the border color when the input is focused
    setBorderColor("#007AFF"); // You can set your desired color here
  };

  const handleBlur = () => {
    // Reset the border color when the input is blurred
    setBorderColor("#000"); // You can set your default color here
  };

  const toggleSwitch = (item) => {
    if (item == 0) setChecked1(!checked1);
    else if (item == 1) setChecked2(!checked2);
    else if (item == 2) setChecked3(!checked3);
    else setChecked4(!checked4);
  };

  const getState = (index) => {
    if (index == 0) return checked1;
    else if (index == 1) return checked2;
    else if (index == 2) return checked3;
    else return checked4;
  };
  return (
    <>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingBottom: 10,
          paddingRight: 15,
        }}
      >
        <Button
          radius={"lg"}
          style={{ width: 150 }}
          onPress={toggleDialog}
          titleStyle={{ color: "#FFF", fontSize: 16, fontWeight: 600 }}
          color={"#3a3f54"}
        >
          Add Room
          <Ionicons
            name="ios-add"
            size={24}
            style={{ paddingLeft: 5 }}
            color="white"
          />
        </Button>
        <Dialog
          isVisible={visible}
          onBackdropPress={toggleDialog}
          overlayStyle={{ borderRadius: 12 }}
        >
          <Dialog.Title
            title={
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 700 }}>
                  Add Room
                </Text>
                <Ionicons
                  name="close"
                  size={24}
                  color="black"
                  onPress={toggleDialog}
                />
              </View>
            }
          />
          <View>
            <View
              style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Name</Text>
              <TextInput
                placeholder="Bedroom"
                style={{
                  borderWidth: 2,
                  borderColor: borderColor,
                  height: 32,
                  borderRadius: 8,
                  color: "#000",
                  padding: 20,
                  marginBottom: 15,
                  fontSize: 16,
                  fontWeight: 500,
                }}
                placeholderTextColor="#8e8e8e"
                onChange={(e) => setName(e.target.value)}
              />
            </View>
            <Button
              radius={"lg"}
              onPress={handleAddDevice}
              titleStyle={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: 600,
                textAlign: "center",
              }}
              color={"#3a3f54"}
            >
              Submit
            </Button>
          </View>
        </Dialog>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 5,
          gap: 10,
          justifyContent: "center",
        }}
      >
        {data.map((item, index) => (
          <Card
            key={index}
            containerStyle={{
              borderRadius: 18,
              borderWidth: 2,
              borderColor: "#FFF",
              backgroundColor: "#FFF",
              width: "45%",
              padding: 0,
              margin: 0,
            }}
          >
            <Image
              source={{ uri: item.imageSource }}
              style={{
                width: "100%",
                height: 150,
                borderTopLeftRadius: 18,
                borderTopRightRadius: 18,
              }}
            />
            <View style={{ padding: 10 }}>
              <Text
                style={{
                  marginBottom: 5,
                  color: "#808080",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                {item.title}
              </Text>
              <Text style={{ marginBottom: 5, color: "#808080" }}>
                {item.devices} devices
              </Text>
              <Button
                size="sm"
                style={{ display: "flex", alignSelf: "flex-end" }}
                onPress={() =>
                  navigation.navigate("IndividualRoom", { title: item.title })
                }
                type="clear"
                title={"view"}
              />
            </View>
          </Card>
        ))}
      </View>
    </>
  );
};

export default CardGrid;
