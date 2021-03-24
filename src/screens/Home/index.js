import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        onPress={() => navigation.push('Messages')}>
        <Text>Goto Messages</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
