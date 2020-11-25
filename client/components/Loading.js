import * as React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../src/utils/styles';

const Loading = () => {
  return (
    <View style={styles.loading.container}>
      <Spinner
        visible={true}
        size="large"
        textContent="Loading..."
        color="gray"
        textStyle={styles.spinnerTextStyle}
      />
    </View>
  );
};

export default Loading;
