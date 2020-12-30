import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { authlogin } from '../redux/actions/user';
import styles from '../utils/styles/login';
import { Formik } from 'formik';
import * as yup from 'yup';
import { removeErrors } from '../store/error';

const Login = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const signup = () => {
    if (route && route.params && route.params.businessId) {
      navigation.navigate('User Signup', {
        businessId: route.params.businessId
      });
    } else {
      navigation.navigate('User Signup');
    }
  };

  const handleSubmitForm = (values) => {
    const { email, password } = values;

    if (route && route.params && route.params.businessId) {
      const { businessId } = route.params;

      dispatch(authlogin(email, password, businessId));
    } else {
      dispatch(authlogin(email, password));
    }

    setTimeout(() => {
      dispatch(removeErrors());
    }, 5000);
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid!')
      .required('Email is required!'),
    password: yup
      .string()
      .min(6, 'Password needs to be a minimum of 6 characters!')
      .required('Password is required!')
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid
          }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                name="password"
                placeholder="Password"
                style={styles.textInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
              <TouchableOpacity
                style={{
                  ...styles.submitButton,
                  backgroundColor:
                    !isValid || values.email === '' ? 'lightgray' : '#5fb7fe'
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
        <View style={styles.navigationContainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={signup}>
            <Text style={styles.text}>Sign up here.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Login;
