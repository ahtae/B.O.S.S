import * as React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../src/utils/styles';

const image = require('../../assets/HomePage.png');
const HomeScreen = () => {
  const signin = () => Actions.signin();
  const signup = () => Actions.signup();
  const guest = () => Actions.businesses();

  return (
    <ImageBackground source={image} style={styles.home.image}>
      <SafeAreaView style={styles.home.container}>
        <Text style={styles.home.appTitle}>WELCOME!</Text>
        <TouchableOpacity style={styles.home.button} onPress={signup}>
          <Text style={styles.home.textSign}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.button} onPress={signin}>
          <Text style={styles.home.textSign}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.home.button} onPress={guest}>
          <Text style={styles.home.textSign}>Guest</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
