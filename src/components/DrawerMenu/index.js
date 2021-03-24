import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DrawerMenuItem from "./DrawerMenuItem";
import { Drawer } from "react-native-paper";

const DrawerMenu = () => {
  return (
    <Drawer.Section style={styles.drawerSection}>
      <DrawerMenuItem label="Profile" iconName="account-outline" />
      <DrawerMenuItem label="Saved" iconName="bookmark-outline" />
      <DrawerMenuItem label="IGTV" iconName="television" />
    </Drawer.Section>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  drawerSection: {
    marginTop: 15,
  },
});
