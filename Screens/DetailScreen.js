import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, Tab } from "@rneui/base";
import {
  Feather,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailScreen = () => {
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(true);
  const navigation = useNavigation();

  const getIsSignedIn = async () => {
    const user = await AsyncStorage.getItem("email");
    if(user == null) navigation.navigate("Login");
  };

  useFocusEffect(() => {
    getIsSignedIn();
})

  return (
    <View style={styles.details}>
      {/* Home Section */}
      <View style={{ width: "100%", height: "30%" }}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 7,
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "normal",
              textShadowColor: "#000",
              textShadowOffset: { width: 0, height: 1 },
              textShadowRadius: 5,
            }}
          >
            Home Sweet Home
          </Text>
          <View
            style={{
              width: 300,
              height: 150,
              borderRadius: 15,
              backgroundColor: "#FEB35B",
              shadowColor: "rgba(0, 0, 0, 0.23)",
              shadowOffset: "0px 12px 51px 43px",
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  border: "1px solid #EA9939",
                  borderRightWidth: 0,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>22°C</Text>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>
                  Avg House Temp
                </Text>
              </View>
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  border: "1px solid #EA9939",
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>60°C</Text>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>
                  Outside Temp
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                height: "100%",
                flex: 1,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  border: "1px solid #EA9939",
                  borderLeftWidth: 0,
                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>60 %</Text>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>PPP</Text>
              </View>
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  border: "1px solid #EA9939",
                  borderLeftWidth: 0,

                  borderBottomWidth: 0,
                  borderTopWidth: 0,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: 600 }}>3</Text>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>Devices</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Room Section */}
      <View
        style={{
          width: "100%",
          height: "25%",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10, width: 320, gap: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: "#FDA43C" }}>
            Room
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Master Bedroom"
              titleStyle={{ fontSize: 16, color: "#000", fontWeight: 600 }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 8,
                backgroundImage:
                  "linear-gradient(90deg, #FFF 0%, #FDA43C 100%)",
              }}
              onPress={() =>
                navigation.navigate("Control", {
                  screen: "Control",
                  params: { room: "Master Bedroom" },
                })
              }
              containerStyle={{
                width: 150,
              }}
            />
            <Button
              title="Bedroom"
              titleStyle={{ fontSize: 16, color: "#000", fontWeight: 600 }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 8,
                backgroundImage:
                  "linear-gradient(90deg, #FFF 0%, #FDA43C 100%)",
              }}
              onPress={() =>
                navigation.navigate("Control", {
                  screen: "Control",
                  params: { room: "Bedroom" },
                })
              }
              containerStyle={{
                width: 140,
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Kids Room"
              titleStyle={{ fontSize: 16, color: "#000", fontWeight: 600 }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 8,
                backgroundImage:
                  "linear-gradient(90deg, #FFF 0%, #FDA43C 100%)",
              }}
              onPress={() =>
                navigation.navigate("Control", {
                  screen: "Control",
                  params: { room: "Kids Room" },
                })
              }
              containerStyle={{
                width: 150,
              }}
            />
            <Button
              title="Drawing Room"
              titleStyle={{ fontSize: 16, color: "#000", fontWeight: 600 }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 8,
                backgroundImage:
                  "linear-gradient(90deg, #FFF 0%, #FDA43C 100%)",
              }}
              onPress={() =>
                navigation.navigate("Control", {
                  screen: "Control",
                  params: { room: "Drawing Room" },
                })
              }
              containerStyle={{
                width: 140,
              }}
            />
          </View>
        </View>
      </View>
      {/* Routines Section */}
      <View
        style={{
          width: "100%",
          height: "25%",
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View style={{ padding: 10, width: 320, gap: 20 }}>
          <Text style={{ fontSize: 16, fontWeight: 600, color: "#FDA43C" }}>
            Routines
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              gap: 20,
            }}
          >
            <TouchableOpacity onPress={() => setTime(!time)}>
              <View
                style={{
                  backgroundColor: time ? "#FAA23B" : "#3F3F3F",
                  width: 110,
                  height: 90,
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="sun"
                    size={30}
                    color={time ? "#3F3F3F" : "#FAA23B"}
                  />
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: time ? "#3F3F3F" : "#FAA23B",
                    }}
                  >
                    Morning
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setTime(!time)}>
              <View
                style={{
                  backgroundColor: time ? "#3F3F3F" : "#FAA23B",
                  width: 110,
                  height: 90,
                  borderRadius: 15,
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="log-out"
                    size={30}
                    color={!time ? "#3F3F3F" : "#FAA23B"}
                  />
                  <Text
                    style={{
                      color: !time ? "#3F3F3F" : "#FAA23B",
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    Out
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Device in use Section */}
      <View
        style={{
          width: "100%",
          height: "25%",
        }}
      >
        <View style={{ padding: 10, gap: 20, paddingRight: 0 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "#FDA43C",
              paddingLeft: 25,
            }}
          >
            Device in Use
          </Text>
          <View
            style={{
              width: "100%",
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Tab
              value={index}
              onChange={(e) => setIndex(e)}
              indicatorStyle={{
                backgroundColor: "",
                height: 0,
              }}
              variant="primary"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #FFF 0%, #FDA43C 100%)",
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                paddingLeft: 10,
              }}
            >
              <Tab.Item
                containerStyle={(active) => ({
                  backgroundColor: active ? "#C2771E" : undefined,
                  borderRadius: 100,
                  width: 70,
                  height: 70,
                  margin: 5,
                })}
                icon={
                  <MaterialCommunityIcons
                    name="ceiling-fan-light"
                    size={44}
                    color="black"
                  />
                }
              />
              <Tab.Item
                containerStyle={(active) => ({
                  backgroundColor: active ? "#C2771E" : undefined,
                  borderRadius: 100,
                  width: 70,
                  height: 70,
                  margin: 5,
                })}
                icon={<Foundation name="lightbulb" size={44} color="black" />}
              />
              <Tab.Item
                containerStyle={(active) => ({
                  backgroundColor: active ? "#C2771E" : undefined,
                  borderRadius: 100,
                  width: 70,
                  height: 70,
                  margin: 5,
                })}
                icon={
                  <MaterialCommunityIcons
                    name="air-conditioner"
                    size={44}
                    color="black"
                  />
                }
              />
              <Tab.Item
                containerStyle={(active) => ({
                  backgroundColor: active ? "#C2771E" : undefined,
                  borderRadius: 100,
                  width: 70,
                  height: 70,
                  margin: 5,
                })}
                icon={
                  <MaterialCommunityIcons
                    name="fridge"
                    size={44}
                    color="black"
                  />
                }
              />
            </Tab>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  details: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    backgroundImage:
      "linear-gradient(180deg, #EAA9A9 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%)",
  },
});
