import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import BusinessesList from './BusinessesList';
import SingleBusiness from './SingleBusiness';
import CommentForm from './CommentForm';

// TAB NAVIGATION
const Tab = createBottomTabNavigator();

export function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Businesses" component={BusinessesList} />
      <Tab.Screen name="SingleBusiness" component={SingleBusiness} />
      <Tab.Screen name="CommentForm" component={CommentForm} />
    </Tab.Navigator>
  );
}

// STACK NAVIGATION

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Businesses" component={BusinessesList} />
      <Stack.Screen name="SingleBusiness" component={SingleBusiness} />
      <Stack.Screen name="CommentForm" component={CommentForm} />
    </Stack.Navigator>
  );
}
