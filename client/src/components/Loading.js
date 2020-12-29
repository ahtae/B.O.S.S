import React from "react";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import styles from "../utils/styles/loading";

const Loading = () => {
  return (
    <View style={styles.container}>
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
