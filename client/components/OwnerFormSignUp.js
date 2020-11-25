import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from './Logo';
import axios from 'axios';
import styles from '../src/utils/styles';

const OwnerFormSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const newOwner = {
        firstName,
        lastName,
        email,
        password,
        isBusinessOwner: true
      };
      await axios.post(
        `https://localhost:8000.com/api/users`,
        newOwner,
        Actions.signin()
      );
      setFirstName('');
      setLastName('');
      setCompanyName('');
      setCompanyAddress('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.ownerFormSignUp.container}>
      <Logo />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="First Name"
        placeholderTextColor="#003344"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="Last Name"
        placeholderTextColor="#003344"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="Company Name"
        placeholderTextColor="#003344"
        value={companyName}
        onChangeText={(text) => setCompanyName(text)}
      />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="Company Address"
        placeholderTextColor="#003344"
        value={companyAddress}
        onChangeText={(text) => setCompanyAddress(text)}
      />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="Email"
        placeholderTextColor="#003344"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.ownerFormSignUp.inputBox}
        placeholder="Password"
        placeholderTextColor="#003344"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.ownerFormSignUp.button}
        onPress={handleSubmit}
      >
        <Text style={styles.ownerFormSignUp.textStyle}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.ownerFormSignUp.signupText}>
        <Text style={styles.ownerFormSignUp.text}>Not a business owner?</Text>
        <TouchableOpacity onPress={() => Actions.signup()}>
          <Text style={styles.ownerFormSignUp.signupButton}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OwnerFormSignUp;

const styles = StyleSheet.create({});
