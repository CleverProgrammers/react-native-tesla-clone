import React from "react";
import { View, Image, Text, ImageBackground, StyleSheet } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar} from '@fortawesome/free-solid-svg-icons'

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <FontAwesomeIcon icon={faCog} style={styles.icon} size={24}/>
        <Text style={styles.headerTitle}>My Model 3</Text>
        <FontAwesomeIcon icon={faToolbox} style={styles.icon} size={24}/>
      </View>
      <View style={styles.batterySection}>
        <Image
          source={require("../../assets/battery.png")}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      <View style={styles.parked}>
        <Text style={styles.parkedText}>Parked</Text>
      </View>
      <View style={styles.threeIcons}>
        <View style={styles.iconBorder}>
        <FontAwesomeIcon icon={faFan} style={styles.icon} size={24}/></View>
        <View style={styles.iconBorder}>
        <FontAwesomeIcon icon={faKey} style={styles.icon} size={24}/></View>
        <View style={styles.iconBorder}>
        <FontAwesomeIcon icon={faUnlockAlt} style={styles.icon} size={24}/></View>
      </View>
      <View style={styles.menuItems}>
        <View style={styles.menuRow}>
          <FontAwesomeIcon icon={faMusic} style={styles.icon} size={24}/>
          <Text style={styles.menuText}>Media</Text>
          <FontAwesomeIcon icon={faChevronRight} style={styles.icon} size={24}/>
        </View>
        <View style={styles.menuRow}>
          <FontAwesomeIcon icon={faClock} style={styles.icon} size={24}/>
          <Text style={styles.menuText}>Software Updates</Text>
          <Text style={styles.subText}>Approximate time to install: 45 min</Text>
          <FontAwesomeIcon icon={faChevronRight} style={styles.icon} size={24}/>
        </View>
        <View style={styles.menuRow}>
          <FontAwesomeIcon icon={faThermometerHalf} style={styles.icon} size={24}/>
          <Text style={styles.menuText}>Climate</Text>
          <Text style={styles.subText}>Interior 20°F</Text>
          <FontAwesomeIcon icon={faChevronRight} style={styles.icon} size={24}/>
        </View>
        <View style={styles.menuRow}>
          <FontAwesomeIcon icon={faCar} style={styles.icon} size={24}/>
          <Text style={styles.menuText}>Controls</Text>
          <FontAwesomeIcon icon={faChevronRight} style={styles.icon} size={24}/>
        </View>
      </View>
    </View>
  );
};

export default CarItem;
