import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../components/Logo';
import { authsignup } from '../store/user';
import styles from '../utils/styles/ownerSignUpForm';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup.string().email('Email is invalid!').required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must have a minimum of 6 characters!')
    .required('Password is required'),
  companyName: yup.string().required('Company name is required!'),
  companyAddress: yup.string().required('Company address is required!')
});

const OwnerSignUpForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleSubmitForm = (values) => {
    const { firstName, lastName, email, password } = values;

    dispatch(authsignup(firstName, lastName, email, password, true));
  };

  return (
    <>
      <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>Sign Up</Text>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            companyName: '',
            companyAddress: ''
          }}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          {({ handleSubmit, isValid, values }) => (
            <>
              <Field
                component={CustomInput}
                name="firstName"
                placeholder="First Name"
              />
              <Field
                component={CustomInput}
                name="lastName"
                placeholder="Last Name"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="companyName"
                placeholder="Company Name"
              />
              <Field
                component={CustomInput}
                name="companyAddress"
                placeholder="Company Address"
              />
              <Button
                onPress={handleSubmit}
                title="Submit"
                disabled={!isValid || values.email === ''}
              />
            </>
          )}
        </Formik>
        <Text>{error ? `${error}` : ''}</Text>
        <View>
          <Text style={styles.paragraph}>Not a business owner?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('User Signup')}>
            <Text style={styles.text}> Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OwnerSignUpForm;
