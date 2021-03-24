import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileImage from "./ProfileImage";
import NameInfo from "./NameInfo";
import Stats from "./Stats/index";
const UserInfo = ({ userInfo }) => {
  return (
    <View style={styles.userInfoSection}>
      <ProfileImage />
      <NameInfo
        firstname={userInfo.firstname}
        lastname={userInfo.lastname}
        username={userInfo.username}
      />
      <Stats stats={userInfo.stats} />
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 20,
  },
});
