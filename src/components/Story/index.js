import * as React from 'react';
import {Avatar, Text} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
const Story = () => (
  <View style={styles.row}>
    <Avatar.Image
      size={60}
      source={{
        uri: 'https://picsum.photos/' + Math.floor(Math.random() * 100),
      }}
      style={styles.story}
    />
    <Text style={styles.text}>abdennafea</Text>
  </View>
);
export default Story;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  story: {
    marginTop: 15,
    marginHorizontal: 5,
  },
  text: {
    marginBottom: 30,
    fontSize: 12,
  },
});
