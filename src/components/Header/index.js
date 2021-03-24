import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Appbar, Avatar, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';

const Header = ({scene, previous, navigation}) => {
  const theme = useTheme();

  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.pop()} />
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <Avatar.Image
            size={40}
            source={require('../../../assets/images/user.png')}
          />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={
          previous ? (
            title
          ) : (
            <View>
              <Title>{title}</Title>
            </View>
          )
        }
      />
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
});
