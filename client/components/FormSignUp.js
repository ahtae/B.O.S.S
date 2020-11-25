import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { authsignup } from '../store/user';
import styles from '../src/utils/styles';

const FormSignUp = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    dispatch(authsignup(firstName, lastName, email, password));
  };

  return (
    <View style={styles.formSignUp.container}>
      <TextInput
        style={styles.formSignUp.inputBox}
        placeholder="First Name"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={firstName}
        onChangeText={(text) => {
          setFirstName(text);
        }}
      />
      <TextInput
        style={styles.formSignUp.inputBox}
        placeholder="Last Name"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={lastName}
        onChangeText={(text) => {
          setLastName(text);
        }}
      />
      <TextInput
        style={styles.formSignUp.inputBox}
        placeholder="Email"
        placeholderTextColor="#003344"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.formSignUp.formSignUp.inputBox}
        placeholder="Password"
        placeholderTextColor="#003344"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
        }}
      />
      <TouchableOpacity style={styles.formSignUp.button} onPress={onSubmit}>
        <Text style={styles.formSignUp.textStyle}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormSignUp;
