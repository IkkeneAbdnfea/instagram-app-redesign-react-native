import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Drawer } from "react-native-paper";
import SettingItem from "./SettingItem";
const Settings = () => {
  return (
    <Drawer.Section title="Settings">
      <SettingItem />
    </Drawer.Section>
  );
};

export default Settings;

const styles = StyleSheet.create({});
