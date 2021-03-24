import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatsItem from './StatsItem';
const Stats = props => {
  return (
    <View style={styles.row}>
      <StatsItem caption="posts" stat={props.stats.posts} />
      <StatsItem caption="followers" stat={props.stats.followers} />
      <StatsItem caption="following" stat={props.stats.following} />
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
