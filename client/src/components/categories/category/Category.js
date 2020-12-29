import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import styles from "../../../utils/styles/category";

const Category = ({ category, selected, handleCategoryClick }) => {
  return (
    <TouchableOpacity
      key={category.label}
      style={{
        ...styles.container,
        backgroundColor: selected === category.label ? "lightgray" : "white",
        borderRadius: "13%",
      }}
      onPress={() => handleCategoryClick(category.label)}
    >
      <Text style={styles.text}>{category.label}</Text>
      <Image source={category.icon} style={styles.image} alt={category.label} />
    </TouchableOpacity>
  );
};

export default Category;
