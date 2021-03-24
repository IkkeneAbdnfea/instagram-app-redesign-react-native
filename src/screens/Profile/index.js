import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../context/authContext';
const Profile = ({navigation}) => {
  const {signOut} = React.useContext(AuthContext);
  return (
    <View>
      <Text style={styles.center}>Profile screen</Text>

      <TouchableOpacity
        style={styles.center}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Messages',
          })
        }>
        <Text>Goto Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.center} onPress={() => signOut()}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
