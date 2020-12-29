import React from "react";
import BusinessIcon from "../../../../assets/images/Business.png";
import HairSalonIcon from "../../../../assets/images/HairSalon.png";
import NailSalonIcon from "../../../../assets/images/NailSalon.png";
import RestaurantIcon from "../../../../assets/images/Restaurant.png";
import { View } from "react-native";
import styles from "../../utils/styles/categories";
import Category from "../categories/category/Category";

const Categories = ({ selected, handleCategoryClick }) => {
  const categories = [
    { label: "All Businesses", icon: BusinessIcon },
    { label: "Restaurant", icon: RestaurantIcon },
    { label: "Hair Salon", icon: HairSalonIcon },
    { label: "Nail Salon", icon: NailSalonIcon },
  ];

  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <Category
          key={category.label}
          category={category}
          selected={selected}
          handleCategoryClick={handleCategoryClick}
        />
      ))}
    </View>
  );
};

export default Categories;
