import * as React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import FormSignUp from './FormSignUp';
import SignIn from './SignIn';
import OwnerFormSignUp from './OwnerFormSignUp';
import styles from '../src/utils/styles';

export default class SignUp extends React.Component {
  goBack() {
    Actions.signin();
  }
  goForward() {
    Actions.ownerSignup();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Logo />
        <FormSignUp type="Sign Up" />
        <View style={styles.signUp.signupText}>
          <Text style={styles.signUp.text}>Have an account?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signUp.signupButton}> Log in</Text>
          </TouchableOpacity>
          <Text style={styles.signUp.text}>Are you an owner?</Text>
          <TouchableOpacity onPress={this.goForward}>
            <Text style={styles.signUp.signupButton}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
