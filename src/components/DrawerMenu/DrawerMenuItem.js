import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerItem} from '@react-navigation/drawer';

const DrawerMenuItem = ({label, iconName}) => {
  return (
    <DrawerItem
      icon={({color, size}) => (
        <MaterialCommunityIcons name={iconName} color={color} size={size} />
      )}
      label={label}
      onPress={() => {}}
    />
  );
};

export default DrawerMenuItem;

const styles = StyleSheet.create({});
