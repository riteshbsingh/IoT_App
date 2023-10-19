import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { AntDesign } from "@expo/vector-icons";
import FAN from "../assets/fanImage.png";
import REMOTE from "../assets/remote.png";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ControlPanel = () => {
  const [selected, setSelected] = React.useState("");
  const [count, setCount] = React.useState(20);

  const data = [
    { key: "1", value: "Master Bedroom" },
    { key: "2", value: "Bedroom" },
    { key: "3", value: "Kids Bedroom" },
    { key: "4", value: "Drawing Room" },
  ];

  return (
    <View style={styles.details}>
      {/* Dropdown Button Section */}
      <View
        style={{ display: "flex", alignItems: "flex-end", paddingRight: 20 }}
      >
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          arrowicon={
            <AntDesign
              name="down"
              size={14}
              style={{ paddingLeft: 10, paddingTop: 3 }}
              color="red"
            />
          }
          defaultOption={data[1]}
          save="value"
          boxStyles={{
            backgroundImage: "linear-gradient(90deg, #FDA43C 0%, #FFF 100%)",
            borderRadius: 100,
            borderWidth: 0,
            shadowColor: "(0, 0, 0, 0.25)",
            shadowOffset: "0px 4px 4px 0px",
          }}
        />
      </View>
      {/* Image Section */}
      <View style={{ flex: 1, alignItems: "center", gap: 20 }}>
        <Image style={{ width: 330, height: 170 }} source={FAN} />
        <Text style={{ color: "#FDA43C", fontWeight: 400, fontSize: 26 }}>
          Black Ceiling Fan
        </Text>
      </View>
      {/* Remote Section */}
      <View style={{ flex: 1, alignItems: "center", gap: 20 }}>
        <View
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(253, 164, 60, 0.09) 0%, rgba(253, 164, 60, 0.09) 100%)",
            width: 220,
            height: 55,
            maxHeight: 55,
            borderRadius: 100,
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
          }}
        >
          <MaterialCommunityIcons
            onPress={() => setCount(count - 1)}
            name="sine-wave"
            size={24}
            color="#FDA43C"
          />
          <Text style={{ color: "#FDA43C", fontWeight: 500, fontSize: 30 }}>
            {count}
          </Text>
          <MaterialIcons
            onPress={() => setCount(count + 1)}
            name="waves"
            size={24}
            color="#FDA43C"
          />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 2 }} >
            <Text style={{ color: '#FDA43C', fontSize: 16 }} >Low</Text>
          <View>
            <TouchableOpacity></TouchableOpacity>
            <Image style={{ width: 170, height: 170 }} source={REMOTE} />
            <TouchableOpacity></TouchableOpacity>
          </View>
          <Text style={{ color: '#FDA43C', fontSize: 16 }}>High</Text>
        </View>
      </View>
    </View>
  );
};

export default ControlPanel;

const styles = StyleSheet.create({
  details: {
    width: "100%",
    height: "100%",
    paddingTop: 30,
    gap: 20,
    backgroundImage:
      "linear-gradient(180deg, #EAA9A9 0%, #000 99.98%, #514E4E 99.99%, rgba(0, 0, 0, 0.00) 100%)",
  },
});
