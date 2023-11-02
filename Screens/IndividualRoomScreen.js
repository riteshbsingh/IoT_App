import { View, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Card } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Dialog, Switch } from "@rneui/themed";
import { TouchableOpacity } from "react-native-web";
import { Button } from "@rneui/base";
import { TextInput } from "react-native";
import { Select, CheckIcon } from "native-base";

const data = [
  {
    title: "Climate",
    value: "24 C",
    color: false,
    type: "Weather",
  },
  {
    title: "Air Conditioner",
    value: "26.6 C",
    color: true,
    type: "Air Conditioner",
  },
  {
    title: "Wi-Fi",
    value: "2 devices",
    color: true,
    type: "Wi-Fi",
  },
  {
    title: "Desk Lamp",
    value: "",
    color: false,
    type: "Lamp",
  },
];

const IndividualRoomScreen = ({ route }) => {
  const [visible, setVisible] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(true);
  const [checked4, setChecked4] = useState(false);
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [borderColor, setBorderColor] = useState("#3a3f54");
  const { title } = route.params;
  const navigation = useNavigation();

  const toggleDialog = () => {
    setVisible(!visible);
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

  const handleFocus = () => {
    // Change the border color when the input is focused
    setBorderColor("#007AFF"); // You can set your desired color here
  };

  const handleBlur = () => {
    // Reset the border color when the input is blurred
    setBorderColor("#000"); // You can set your default color here
  };

  const handleAddDevice = () => {
    data.push({ title: name, type: service, value: "", color: false });
    setName('')
    setService('')
    toggleDialog();
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        padding: 20,
        backgroundColor: "#eff1f5",
        paddingBottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: 40 }}>
        {/* Title Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, fontWeight: 700 }}>{title}</Text>
          <Text></Text>
        </View>
        {/* Device Card Section */}
        <View
          style={{
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
                height: 170,
                padding: 0,
                margin: 0,
              }}
            >
              <View
                style={{
                  padding: 10,
                  display: "flex",
                  flexDirection: "column",
                }}
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
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: 30,
                    }}
                  >
                    <Text
                      style={{
                        marginBottom: 5,
                        color: getState(index) ? "#3a3f54" : "#FFF",
                      }}
                    >
                      {item.type == "Weather" ? (
                        <MaterialCommunityIcons
                          name="home-thermometer"
                          size={35}
                          color={checked1 ? "black" : "white"}
                        />
                      ) : item.type == "Air Conditioner" ? (
                        <MaterialCommunityIcons
                          name="air-conditioner"
                          size={35}
                          color={checked2 ? "black" : "white"}
                        />
                      ) : item.type == "Wi-Fi" ? (
                        <FontAwesome5
                          name="wifi"
                          size={35}
                          color={checked3 ? "black" : "white"}
                        />
                      ) : item.type == "Lamp" ? (
                        <MaterialCommunityIcons
                          name="desk-lamp"
                          size={40}
                          color={checked4 ? "black" : "white"}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name="washing-machine"
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
                      {!!item.value.length ? item.value : ''}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          ))}
        </View>
      </View>
      {/* Add Button Section */}
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Button
          radius={"lg"}
          style={{ width: 300 }}
          onPress={toggleDialog}
          titleStyle={{ color: "#FFF", fontSize: 16, fontWeight: 600 }}
          color={"#3a3f54"}
        >
          ADD
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
                theme={{
                  colors: {
                    placeholder: "white",
                    text: "white",
                    primary: "white",
                    underlineColor: "transparent",
                    background: "#003489",
                  },
                }}
                placeholderTextColor="#8e8e8e"
                onFocus={handleFocus}
                onBlur={handleBlur}
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
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
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
    </View>
  );
};

export default IndividualRoomScreen;
