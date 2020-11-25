import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { authlogin } from '../store/user';
import styles from '../src/utils/styles';

const SignIn = (props) => {
  const dispatch = useDispatch();
  const signup = () => {
    Actions.signup();
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector((state) => state.user);
  const onSubmit = () => {
    dispatch(authlogin(email, password));
  };

  return (
    <SafeAreaView style={styles.signIn.container}>
      <StatusBar backgroundColor="#99573d" barStyle="light-content" />
      <Logo />
      <View style={styles.signIn.container2}>
        <TextInput
          style={styles.signIn.inputBox}
          placeholder="Email"
          placeholderTextColor="#003344"
          selectionColor="#fff"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.signIn.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#003344"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.signIn.button} onPress={onSubmit}>
          <Text style={styles.signIn.textStyle}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signIn.signuptext}>
        <Text style={styles.signIn.text}>Don't have an account?</Text>
        <TouchableOpacity onPress={signup}>
          <Text style={styles.signIn.signupButton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
