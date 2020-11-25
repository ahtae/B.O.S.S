import * as React from 'react';
import { View, Image } from 'react-native';
import styles from '../src/utils/styles';

const Logo = () => {
  return (
    <View style={styles.logo.container}>
      <Image
        style={{ width: 250, height: 250 }}
        source={require('../../assets/lastone.png')}
      />
    </View>
  );
};

export default Logo;
