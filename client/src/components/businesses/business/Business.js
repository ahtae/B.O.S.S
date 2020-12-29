import React from 'react';
import { TouchableOpacity } from 'react-native';
import BusinessCard from './businessCard/BusinessCard';

const Business = ({ business, navigation }) => {
  const navigateToBusiness = () => {
    navigation.navigate('Business', { id: business.id });
  };

  return (
    <TouchableOpacity activeOpacity={1.0} onPress={navigateToBusiness}>
      <BusinessCard business={business} navigation={navigation} />
    </TouchableOpacity>
  );
};

export default Business;
