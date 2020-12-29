import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { AppLoading } from 'expo';
import { Title } from 'react-native-paper';
import {
  useFonts,
  Roboto_300Light,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import styles from '../utils/styles/home';

const homeImage = require('../../../assets/images/HomePage.png');

const Home = ({ navigation }) => {
  const navigateToLogIn = () => navigation.navigate('Login');
  const navigateToSignUp = () => navigation.navigate('User Signup');
  const navigateToOptions = () => navigation.navigate('Options');

  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={homeImage} style={styles.image} alt="People">
      <SafeAreaView style={styles.container}>
        <Title style={styles.title}>B.O.S.S.</Title>
        <TouchableOpacity style={styles.button} onPress={navigateToSignUp}>
          <Text style={styles.textSign}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToLogIn}>
          <Text style={styles.textSign}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToOptions}>
          <Text style={styles.textSign}>Guest</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
