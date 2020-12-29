import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { authlogin } from "../store/user";
import styles from "../utils/styles/login";
import { Formik } from "formik";
import * as yup from "yup";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.error);

  const signup = () => navigation.navigate("User Signup");

  const handleSubmitForm = (values) => {
    const { email, password } = values;

    dispatch(authlogin(email, password));
  };

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email is invalid!")
      .required("Email is required!"),
    password: yup
      .string()
      .min(6, "Password needs to be a minimum of 6 characters!")
      .required("Password is required!"),
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Formik
          validateOnMount={true}
          validationSchema={loginValidationSchema}
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleSubmitForm(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <TextInput
                name="email"
                placeholder="Email Address"
                style={styles.textInput}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
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
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
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
                    !isValid || values.email === "" ? "lightgray" : "#5fb7fe",
                }}
                onPress={handleSubmit}
                disabled={!isValid || values.email === ""}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_700Bold",
                    color: "black",
                    fontSize: 15,
                  }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
        <Text style={styles.errorText}>{error ? `${error}!` : ""}</Text>
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
