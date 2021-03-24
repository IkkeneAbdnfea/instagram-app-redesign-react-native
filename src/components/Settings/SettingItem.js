import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableRipple, Switch, Text} from 'react-native-paper';
import SettingsContext from '../../context/SettingsContext';
import {AuthContext} from '../../context/authContext';

const SettingItem = () => {
  const {toggleTheme, isDarkTheme} = useContext(SettingsContext);
  const {signOut} = useContext(AuthContext);

  return (
    <>
      <TouchableRipple onPress={() => toggleTheme()}>
        <View style={styles.preference}>
          <Text>Dark Mode</Text>
          <View pointerEvents="none">
            <Switch value={isDarkTheme} />
          </View>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => signOut()}>
        <View style={styles.preference}>
          <Text>Sign Out</Text>
        </View>
      </TouchableRipple>
    </>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
