import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  BusinessesList,
  BusinessOwnerProfile,
  CommentForm,
  UserSignUpForm,
  Home,
  LoginForm,
  OwnerSignUpForm,
  SingleBusiness,
  LocationAndTypeFilter,
  LocationFilter,
  TypeFilter,
  Prompt,
  Options
} from './client/src/screens';
import store from './client/src/redux/store';
import { navigationRef } from './client/src/utils/RootNavigation';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Location and Type"
        component={LocationAndTypeFilter}
      />
      <Stack.Screen name="Location" component={LocationFilter} />
      <Stack.Screen name="Type" component={TypeFilter} />
      <Stack.Screen name="All Businesses" component={BusinessesList} />
      <Stack.Screen name="Login" component={LoginForm} />
      <Stack.Screen name="Business" component={SingleBusiness} />
      <Stack.Screen name="User Signup" component={UserSignUpForm} />
      <Stack.Screen name="Owner Signup" component={OwnerSignUpForm} />
      <Stack.Screen name="Comment Form" component={CommentForm} />
      <Stack.Screen
        name="Business Owner Profile"
        component={BusinessOwnerProfile}
      />
      <Stack.Screen name="Prompt" component={Prompt} />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <StatusBar style="auto" />
        <MyStack />
      </Provider>
    </NavigationContainer>
  );
}
