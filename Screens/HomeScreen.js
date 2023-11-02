import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  Center,
  NativeBaseProvider,
  WarningTwoIcon,
  SunIcon,
} from "native-base";
import { Tab, TabView } from "@rneui/base";
import CardGrid from "../components/CardLayout";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DeviceCard from "../components/DeviceCard";

const Example = () => {
  return (
    <Center>
      <Avatar.Group
        _avatar={{
          size: "2xl",
        }}
        max={4}
      >
        <Avatar
          bg="green.500"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
          size="40px"
        >
          AJ
        </Avatar>
        <Avatar
          bg="cyan.500"
          size="40px"
          source={{
            uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          TE
        </Avatar>
        <Avatar
          bg="indigo.500"
          size="40px"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          JB
        </Avatar>
        <Avatar
          bg="amber.500"
          size="40px"
          source={{
            uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          TS
        </Avatar>
      </Avatar.Group>
    </Center>
  );
};

const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [currPage, setCurrPage] = useState(0);
  return (
    <View style={styles.details}>
      {/* <ImageBackground source={image} blurRadius={1} resizeMode="cover" style={styles.image}> */}
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 20,
          backgroundColor: "#eff1f5",
          gap: 20,
          paddingBottom: 0,
        }}
      >
        {/* Title Section */}
        <View
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: 700, textAlign: "center" }}>
            Home
          </Text>
        </View>
        {/* Family Members Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: 600, color: "#808080" }}>
              Family Members
            </Text>
          </View>
          <View>
            <NativeBaseProvider>
              <Center flex={1}>
                <Example />
              </Center>
            </NativeBaseProvider>
          </View>
        </View>
        {/* Current Temperature Card Section */}
        <View
          style={{
            backgroundColor: "#FFF",
            height: 120,
            weight: "100%",
            borderRadius: 18,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 15,
            backgroundImage: "linear-gradient(to right, #cc5a91, #b15cbc)",
          }}
        >
          <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Text style={{ fontSize: 28, fontWeight: 500, color: "#FFF" }}>
              My Location
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 500, color: "#d1d5db" }}>
              Mumbai
            </Text>
            {/* <Text>Icon</Text> */}
            <View>
              <WarningTwoIcon color="coolGray.300" />
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <SunIcon color="coolGray.300" />
              <Text style={{ fontSize: 15, fontWeight: 500, color: "#d1d5db" }}>
                Partly Sunny
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 45,
                fontWeight: 400,
                textAlign: "right",
                color: "#FFF",
              }}
            >
              -10°
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 500,
                textAlign: "right",
                color: "#d1d5db",
              }}
            >
              H:2° L:12°
            </Text>
          </View>
        </View>
        {/* Tab Section */}
        <View style={{ zIndex: 20 }}>
          <Tab
            value={index}
            disableIndicator={true}
            style={{ backgroundColor: "#d1d5db", borderRadius: 18, padding: 5 }}
            onChange={(e) => setIndex(e)}
          >
            <Tab.Item
              style={{
                backgroundColor: !index == 0 ? "#d1d5db" : "#FFF",
                borderRadius: 18,
                padding: 0,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              titleStyle={{ color: "#000", fontWeight: 500 }}
              title="Room"
            />
            <Tab.Item
              style={{
                backgroundColor: !index == 1 ? "#d1d5db" : "#FFF",
                borderRadius: 18,
                padding: 0,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              titleStyle={{ color: "#000", fontWeight: 500 }}
              title="Devices"
            />
          </Tab>
          <TabView value={index} onChange={(e) => setIndex(e)}>
            <TabView.Item
              style={{
                width: "100%",
                height: 420,
                overflow: "scroll",
                marginTop: 20,
              }}
            >
              <CardGrid />
            </TabView.Item>
            <TabView.Item
              style={{
                width: "100%",
                height: 400,
                overflow: "scroll",
                marginTop: 20,
              }}
            >
              <DeviceCard />
            </TabView.Item>
          </TabView>
        </View>
        {/* Bottom Navbar Section */}
        <View
          style={{
            display: "flex",
            justifyContent: "flex-end",
            height: 500,
            zIndex: 10,
            padding: 0,
            margin: 0,
            width: "100%",
          }}
        >
          <Tab
            value={currPage}
            disableIndicator={true}
            style={{ borderRadius: 18, padding: 5, backgroundColor: "#3a3f54" }}
            onChange={(e) => setCurrPage(e)}
          >
            <Tab.Item
              style={{
                backgroundColor: currPage == 0 ? "#FFF" : "#3a3f54",
                borderRadius: 18,
                padding: 0,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              titleStyle={{ color: "#000", fontWeight: 500 }}
              title={
                <Entypo
                  name="home"
                  size={24}
                  color={currPage == 0 ? "black" : "white"}
                />
              }
            />
            <Tab.Item
              style={{
                backgroundColor: currPage == 1 ? "#FFF" : "#3a3f54",
                borderRadius: 18,
                padding: 0,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              titleStyle={{ color: "#000", fontWeight: 500 }}
              title={
                <Feather
                  name="mic"
                  size={24}
                  color={currPage == 1 ? "black" : "white"}
                />
              }
            />
            <Tab.Item
              style={{
                backgroundColor: currPage == 2 ? "#FFF" : "#3a3f54",
                borderRadius: 18,
                padding: 0,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              titleStyle={{ color: "#000", fontWeight: 500 }}
              title={
                <Entypo
                  name="user"
                  size={24}
                  color={currPage == 2 ? "black" : "white"}
                />
              }
            />
          </Tab>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const HomeScreen = () => {
  return (
    <HomePage/>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  details: {
    width: "100%",
    height: "auto",
  },
  image: {
    gap: 20,
    height: "100%",
    paddingBottom: 60,
  },
});
