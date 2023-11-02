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
    title: "Climate",
    value: "24 C",
    color: false,
    room: "Living Room",
  },
  {
    title: "Air Conditioner",
    value: "26.6 C",
    color: true,
    room: "Master Bedroom",
  },
  {
    title: "Wi-Fi",
    value: "2 devices",
    color: true,
    room: "Living Room",
  },
  {
    title: "Desk Lamp",
    value: "-",
    color: false,
    room: "Kids Room",
  },
];

const DeviceCard = () => {
  const [checked1, setChecked1] = useState(false);
  const [visible, setVisible] = useState(false);
  const [service, setService] = useState("");
  const [service1, setService1] = useState("");
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(false);
  const [name, setName] = useState("");
  const [borderColor, setBorderColor] = useState("#3a3f54");
  const navigation = useNavigation();
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
          Add Device
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
                  Add Device
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
                placeholder="Air Conditioner"
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
            <View
              style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Type</Text>
              <Select
                selectedValue={service}
                accessibilityLabel="Choose Device Type"
                placeholder="Choose Device Type"
                borderColor={borderColor}
                style={{ fontSize: 16, fontWeight: 500 }}
                height={12}
                borderWidth={2}
                paddingLeft={5}
                borderRadius={8}
                onValueChange={(itemValue) => setService(itemValue)}
              >
                <Select.Item label="Air Conditioner" value="Air Conditioner" />
                <Select.Item label="Wi-Fi" value="Wi-Fi" />
                <Select.Item label="Weather" value="Weather" />
                <Select.Item label="Lamp" value="Lamp" />
                <Select.Item label="Washing Machine" value="Washing Machine" />
              </Select>
            </View>
            <View
              style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                gap: 5,
                marginBottom: 20,
              }}
            >
              <Text style={{ fontWeight: 600, fontSize: 18 }}>Room</Text>
              <Select
                selectedValue={service1}
                accessibilityLabel="Choose Device Room"
                placeholder="Choose Device Room"
                borderColor={borderColor}
                style={{ fontSize: 16, fontWeight: 500 }}
                height={12}
                borderWidth={2}
                paddingLeft={5}
                borderRadius={8}
                onValueChange={(itemValue) => setService1(itemValue)}
              >
                <Select.Item label="Master Bedroom" value="Master Bedroom" />
                <Select.Item label="Living Room" value="Living Room" />
                <Select.Item label="Kids Room" value="Kids Room" />
                <Select.Item label="Kitchen" value="Kitchen" />
              </Select>
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
              backgroundColor: getState(index) ? "#FFF" : "#3a3f54",
              width: "45%",
              padding: 0,
              margin: 0,
            }}
          >
            <View
              style={{ padding: 10, display: "flex", flexDirection: "column" }}
            >
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: getState(index) ? "#3a3f54" : "#FFF",
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  {index == 0
                    ? checked1
                      ? "ON"
                      : "OFF"
                    : index == 1
                    ? checked2
                      ? "ON"
                      : "OFF"
                    : index == 2
                    ? checked3
                      ? "ON"
                      : "OFF"
                    : checked4
                    ? "ON"
                    : "OFF"}
                </Text>
                <Switch
                  value={
                    index == 0
                      ? checked1
                      : index == 1
                      ? checked2
                      : index == 2
                      ? checked3
                      : checked4
                  }
                  onValueChange={() => toggleSwitch(index)}
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Remote", { title: item.title })
                }
              >
                <View
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 30,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 5,
                        color: getState(index) ? "#3a3f54" : "#FFF",
                      }}
                    >
                      {index == 0 ? (
                        <MaterialCommunityIcons
                          name="home-thermometer"
                          size={35}
                          color={checked1 ? "black" : "white"}
                        />
                      ) : index == 1 ? (
                        <MaterialCommunityIcons
                          name="air-conditioner"
                          size={35}
                          color={checked2 ? "black" : "white"}
                        />
                      ) : index == 2 ? (
                        <FontAwesome5
                          name="wifi"
                          size={35}
                          color={checked3 ? "black" : "white"}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="desk-lamp"
                          size={40}
                          color={checked4 ? "black" : "white"}
                        />
                      )}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 5,
                        color: getState(index) ? "#3a3f54" : "#FFF",
                        fontWeight: 700,
                        fontSize: 15,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 5,
                        color: getState(index) ? "#3a3f54" : "#FFF",
                        fontWeight: 500,
                        fontSize: 15,
                      }}
                    >
                      {item.value}
                    </Text>
                  </View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: getState(index) ? "#3a3f54" : "#FFF",
                      fontWeight: 600,
                      fontSize: 14,
                      paddingTop: 5,
                    }}
                  >
                    {item.room}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        ))}
      </View>
    </>
  );
};

export default DeviceCard;
