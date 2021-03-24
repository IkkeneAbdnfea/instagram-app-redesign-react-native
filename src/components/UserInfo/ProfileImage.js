import React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
const ProfileImage = () => {
  return (
    <Avatar.Image
      source={require('../../../assets/images/user.png')}
      size={50}
    />
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
