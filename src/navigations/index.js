import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './app-navigator';
import AuthNavigator from './auth-navigator';

const RootStack = createStackNavigator();
const RootStackScreen = ({authToken}) => (
  <RootStack.Navigator headerMode="none">
    {authToken ? (
      <RootStack.Screen name="App" component={AppNavigator} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthNavigator} />
    )}
  </RootStack.Navigator>
);

export default RootStackScreen;

const styles = StyleSheet.create({});
