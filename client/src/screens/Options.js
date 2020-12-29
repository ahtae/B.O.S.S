import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../utils/styles/options";

const Options = ({ navigation }) => {
  const navigateToLocationAndTypeFilter = () => {
    navigation.navigate("Location and Type");
  };

  const navigateToLocationFilter = () => {
    navigation.navigate("Location");
  };

  const navigateToTypeFilter = () => {
    navigation.navigate("Type");
  };

  const navigateToAllBusinesses = () => {
    navigation.navigate("All Businesses", {
      searchLocation: "",
      category: "",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>How do you want to filter the businesses?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToLocationAndTypeFilter}
      >
        <Text style={styles.buttonText}>By Location and Type</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={navigateToLocationFilter}
      >
        <Text style={styles.buttonText}>By Location</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToTypeFilter}>
        <Text style={styles.buttonText}>By Type</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={navigateToAllBusinesses}>
        <Text style={styles.buttonText}>None</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
