import React from "react";
import { StyleSheet, View } from "react-native";
import { Caption, Paragraph } from "react-native-paper";

const StatsItem = (props) => {
  return (
    <View style={styles.section}>
      <Caption style={styles.caption}>{props.caption}</Caption>
      <Paragraph style={[styles.paragraph, styles.caption]}>
        {props.stat}
      </Paragraph>
    </View>
  );
};

export default StatsItem;

const styles = StyleSheet.create({
  section: {
    flexDirection: "column",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
});
