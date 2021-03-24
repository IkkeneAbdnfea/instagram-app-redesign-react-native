import React from 'react';
import {StyleSheet} from 'react-native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import {createStackNavigator} from '@react-navigation/stack';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}></AuthStack.Screen>
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Sign Up'}}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
