import React from 'react';
import Business from './business/Business';

const Businesses = ({ businesses, navigation }) => {
  return businesses.map((business) => (
    <Business key={business.id} business={business} navigation={navigation} />
  ));
};

export default Businesses;
