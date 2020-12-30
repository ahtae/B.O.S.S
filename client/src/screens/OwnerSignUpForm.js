import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { authsignup } from '../redux/actions/user';
import styles from '../utils/styles/ownerSignUpForm';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import { removeErrors } from '../store/error';

const signUpValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required!'),
  lastName: yup.string().required('Last name is required!'),
  email: yup.string().email('Email is invalid!').required('Email is required!'),
  password: yup
    .string()
    .min(6, 'Password must have a minimum of 6 characters!')
    .required('Password is required!'),
  companyName: yup.string().required('Company name is required!'),
  companyAddress: yup.string().required('Company address is required!')
});

const OwnerSignUpForm = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleSubmitForm = (values) => {
    const { firstName, lastName, email, password } = values;

    if (route && route.params && route.params.businessId) {
      const { businessId } = route.params;

      dispatch(
        authsignup({
          firstName,
          lastName,
          email,
          password,
          businessId,
          isAdmin: true
        })
      );
    } else {
      dispatch(
        authsignup({ firstName, lastName, email, password, isAdmin: true })
      );
    }

    setTimeout(() => {
      dispatch(removeErrors());
    }, 5000);
  };

  const handleNavigateToUserSignUp = () => {
    if (route && route.params && route.params.businessId) {
      navigation.navigate('User Signup', {
        businessId: route.params.businessId
      });
    } else {
      navigation.navigate('User Signup');
    }
  };

  return (
    <>
      <View style={styles.container}>
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
              <TouchableOpacity
                style={{
                  ...styles.submitButton,
                  backgroundColor:
                    !isValid || values.email === '' ? 'lightgray' : '#5fb7fe',
                  padding: '5%'
                }}
                onPress={handleSubmit}
                disabled={!isValid || values.email === ''}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <Text style={styles.errorText}>{error ? `${error}!` : ''}</Text>
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Not a business owner?</Text>
          <TouchableOpacity onPress={handleNavigateToUserSignUp}>
            <Text style={styles.text}> Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default OwnerSignUpForm;
