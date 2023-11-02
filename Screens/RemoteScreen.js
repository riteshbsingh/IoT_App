import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Tab, TabView } from "@rneui/base";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import CircleSlider from "react-native-circle-slider";

const RemoteScreen = ({ route }) => {
  const { title } = route.params;
  const navigation = useNavigation();
  const [currPage, setCurrPage] = useState(0);
  const [value, setValue] = useState(90);
  const [sliderValue, setSliderValue] = useState(10);
  const [state, setState] = useState(true)

  const handleValueChange = (value) => {
    setSliderValue(value);
    return value;
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
      <View style={{ gap: 20 }}>
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
          <Text style={{ fontSize: 20, fontWeight: 700, marginRight: 5 }}>
            {title}
          </Text>
          <Text></Text>
        </View>
        {/* Mode Control Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 700 }}>Mode</Text>
          <View>
            <Tab
              value={currPage}
              disableIndicator={true}
              style={{
                padding: 5,
                paddingLeft: 0,
                backgroundColor: "#eff1f5",
                gap: 15,
              }}
              onChange={(e) => setCurrPage(e)}
            >
              <Tab.Item
                style={{
                  backgroundColor: currPage == 0 ? "#3a3f54" : "#eff1f5",
                  borderRadius: 8,
                  border: "2px solid #3a3f54",
                  padding: 0,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                titleStyle={{ color: "#000", fontWeight: 500 }}
                title={
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 600,
                        color: currPage == 0 ? "white" : "black",
                      }}
                    >
                      Hot
                    </Text>
                    <MaterialCommunityIcons
                      name="sun-thermometer"
                      size={24}
                      color={currPage == 0 ? "white" : "black"}
                    />
                  </View>
                }
              />
              <Tab.Item
                style={{
                  backgroundColor: currPage == 1 ? "#3a3f54" : "#eff1f5",
                  borderRadius: 8,
                  border: "2px solid #3a3f54",
                  padding: 0,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                titleStyle={{ color: "#000", fontWeight: 500 }}
                title={
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: currPage == 1 ? "white" : "black",
                      }}
                    >
                      Cold
                    </Text>
                    <MaterialCommunityIcons
                      name="weather-snowy"
                      size={24}
                      color={currPage == 1 ? "white" : "black"}
                    />
                  </View>
                }
              />
              <Tab.Item
                style={{
                  backgroundColor: currPage == 2 ? "#3a3f54" : "#eff1f5",
                  borderRadius: 8,
                  border: "2px solid #3a3f54",
                  padding: 0,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                titleStyle={{ color: "#000", fontWeight: 500 }}
                title={
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: currPage == 2 ? "white" : "black",
                      }}
                    >
                      Dry
                    </Text>
                    <MaterialCommunityIcons
                      name="weather-sunny"
                      size={24}
                      color={currPage == 2 ? "white" : "black"}
                    />
                  </View>
                }
              />
            </Tab>
          </View>
        </View>
        {/* Progress Remote Section */}
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CircleSlider
            value={sliderValue}
            onValueChange={handleValueChange}
            strokeWidth={10}
            btnRadius={20}
            max={50}
            step={1}
            startIcon={<Text style={styles.icon}>0</Text>}
            endIcon={<Text style={styles.icon}>100</Text>}
            gradientColorFrom="#00ff00"
            gradientColorTo="#ff0000"
            startDegree={0}
            endDegree={180}
          />
        </View>
      </View>
      {/* Control Button Section */}
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
          titleStyle={{ color: "#FFF", fontSize: 16, fontWeight: 600 }}
          color={state ? "#3a3f54" : "#eff1f5"}
          onPress={() => setState(!state)}
        >
          {state ? "Turn on" : "Turn off"}
        </Button>
      </View>
    </View>
  );
};

export default RemoteScreen;

const styles = StyleSheet.create({
  details: {
    flex: 1,
    width: "100%",
    padding: 20,
    backgroundColor: "#eff1f5",
  },
});
