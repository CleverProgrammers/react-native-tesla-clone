Draft.js;

import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";

const items = [
  {
    id: 1,
    icon: "musicnote",
    title: "Media",
  },
  {
    id: 2,
    icon: "alarmclock",
    title: "Software Updates",
  },
  {
    id: 3,
    icon: "thermometer",
    title: "Climate",
  },
];

const CarItem = (props) => {
  const getMenuItems = () => {
    return items.map((item) => {
      let key = item.id;
      let icon = item.icon;
      let title = item.title;
      return (
        <View style={styles.menuRow} key={key}>
          <Image
            source={require("../../assets/" + { icon } + ".png")}
            style={styles.icon}
          />
          <Text style={styles.menuText}>{title}</Text>
          <Image
            source={require("../../assets/chevronright.png")}
            style={styles.icon}
          />
        </View>
      );
    });
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.jpeg")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <Image
          source={require("../../assets/settings.png")}
          style={styles.icon}
        />
        <Text style={styles.headerTitle}>My Model 3</Text>
        <Image
          source={require("../../assets/treasure.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.battery}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryIcon}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      <View style={styles.parked}>
        <Text style={styles.parkedText}>Parked</Text>
      </View>
      <View style={styles.threeIcons}>
        <Image
          source={require("../../assets/musicnote.png")}
          style={styles.icon}
        />

        <Image
          source={require("../../assets/chevronright.png")}
          style={styles.icon}
        />
        <Image
          source={require("../../assets/chevronright.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.menuItems}>{getMenuItems()}</View>
    </View>
  );
};

export default CarItem;
