import React from "react";
import { StyleSheet, View } from "react-native";
import { Title, Caption } from "react-native-paper";
const NameInfo = ({ firstname, lastname, username }) => {
  return (
    <View>
      <Title style={styles.title}>
        {lastname} {firstname}
      </Title>
      <Caption style={styles.caption}>@{username}</Caption>
    </View>
  );
};

export default NameInfo;

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },

  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
});
