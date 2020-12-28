import React from 'react';
import Business from './business/Business';

const Businesses = ({ businesses }) => {
  return businesses.map((business) => (
    <Business key={business.id} business={business} />
  ));
};

export default Businesses;
