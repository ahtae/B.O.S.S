import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { auth } from '../store/user';
import styles from '../src/utils/styles';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const signup = () => Actions.signup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => dispatch(auth(email, password, 'signup'));

  return (
    <SafeAreaView style={styles.formSignIn.container}>
      <StatusBar backgroundColor="#99573d" barStyle="light-content" />
      <Logo />
      <View style={styles.formSignIn.container}>
        <TextInput
          style={styles.formSignIn.inputBox}
          placeholder="Email"
          placeholderTextColor="#003344"
          selectionColor="#fff"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.formSignIn.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003344"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.formSignIn.button} onPress={onSubmit}>
          <Text style={styles.formSignIn.textStyle}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formSignIn.signuptext}>
        <Text style={styles.formSignIn.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.formSignIn.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
