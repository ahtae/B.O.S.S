import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Categories } from '../components/index';
import styles from '../utils/styles/typeFilter';

const TypeFilter = ({ navigation }) => {
  const [selected, setSelected] = useState('All Businesses');

  const handleCategoryClick = (label) => {
    setSelected(label);
  };

  const handleSubmitClick = () => {
    navigation.navigate('All Businesses', {
      searchLocation: '',
      category: selected
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter Businesses</Text>
      <View>
        <Categories
          selected={selected}
          handleCategoryClick={handleCategoryClick}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmitClick}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TypeFilter;
