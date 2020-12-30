import React from 'react';
import { StackActions } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { Title, IconButton } from 'react-native-paper';
import styles from '../utils/styles/prompt';

const Prompt = ({ navigation, route }) => {
  const popAction = StackActions.pop(1);
  const { businessId } = route.params;

  const handleLoginNavigate = () =>
    navigation.navigate('Login', { businessId });

  const handleSignUpNavigate = () =>
    navigation.navigate('User Signup', { businessId });

  const handleClosePrompt = () => navigation.dispatch(popAction);

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.iconButton}
        icon="close"
        onPress={handleClosePrompt}
        accessibilityLabel="close"
      />
      <Title style={styles.title}>
        We need to know about you before we post your review!
      </Title>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginNavigate}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUpNavigate}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Prompt;
