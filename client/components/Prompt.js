import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { Title, Paragraph, IconButton } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import styles from '../src/utils/styles';

const Prompt = () => {
  const signin = () => Actions.signin();
  const signup = () => Actions.signup();

  return (
    <View style={styles.prompt.container}>
      <IconButton
        style={{ alignSelf: 'flex-end' }}
        icon="close"
        onPress={() => Actions.pop()}
        accessibilityLabel="close"
      />
      <Title style={styles.prompt.title}>
        We need to know about you before we post your review. :)
      </Title>
      <View style={styles.prompt.buttonsStyle}>
        <TouchableOpacity style={styles.prompt.button} onPress={signin}>
          <Text style={styles.prompt.textStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.prompt.button} onPress={signup}>
          <Text style={styles.prompt.textStyle}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Prompt;
