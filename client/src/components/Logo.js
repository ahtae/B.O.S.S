import * as React from 'react';
import { Image } from 'react-native';
import styles from '../utils/styles/logo';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/images/smallIcon.png')}
    />
  );
};

export default Logo;
