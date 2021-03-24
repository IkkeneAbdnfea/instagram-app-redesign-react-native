import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useTheme} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {View, StyleSheet} from 'react-native';
import Profile from '../screens/Profile';
import Feed from '../screens/Feed';
import Messages from '../screens/Messages';
import Notifications from '../screens/Notifications';

import DrawerMenu from '../components/DrawerMenu';
import UserInfo from '../components/UserInfo';
import Settings from '../components/Settings';
import Header from '../components/Header';

import Explore from '../screens/Explore';
import Details from '../screens/Details';

import AddPost from '../screens/AddPost';
const Tab = createMaterialBottomTabNavigator();

const Drawer = createDrawerNavigator();

const Tabs = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MessagesStack = createStackNavigator();

const userInfo = {
  firstname: 'Abdennafea',
  lastname: 'Ikkene',
  username: 'programmedev',
  stats: {
    followers: 230,
    following: 300,
    posts: 22,
  },
};

export function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <UserInfo userInfo={userInfo} />
        <DrawerMenu />
        <Settings />
      </View>
    </DrawerContentScrollView>
  );
}

const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={TabsScreen} />
      <Drawer.Screen name="Settings" component={SettingsStackScreen} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;

// const TabsScreen = () => (
//   <Tabs.Navigator>
//     <Tabs.Screen
//       name="Home"
//       component={HomeStackScreen}
//       options={{
//         tabBarIcon: ({color}) => (
//           <MaterialCommunityIcons name="home-outline" size={24} color={color} />
//         ),
//       }}
//     />
//     <Tabs.Screen
//       name="Profile"
//       component={ProfileStackScreen}
//       options={{
//         tabBarIcon: ({color}) => (
//           <MaterialCommunityIcons
//             name="account-outline"
//             size={24}
//             color={color}
//           />
//         ),
//       }}
//     />
//   </Tabs.Navigator>
// );

const HomeStackScreen = () => (
  <HomeStack.Navigator
    headerMode="screen"
    screenOptions={{
      header: ({scene, previous, navigation}) => (
        <Header scene={scene} previous={previous} navigation={navigation} />
      ),
    }}>
    <HomeStack.Screen name="Feed" component={Feed} />
    <HomeStack.Screen name="Messages" component={Messages} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen name="Explore" component={Explore} />
    <ExploreStack.Screen name="Post Details" component={Details} />
  </ExploreStack.Navigator>
);

const NotificationsStackScreen = () => (
  <NotificationsStack.Navigator>
    <NotificationsStack.Screen name="Notifications" component={Notifications} />
  </NotificationsStack.Navigator>
);

const MessagesStackScreen = () => (
  <MessagesStack.Navigator>
    <MessagesStack.Screen name="Direct" component={Messages} />
  </MessagesStack.Navigator>
);
const SettingsStackScreen = () => (
  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings" component={Settings} />
    <SettingsStack.Screen name="Notifications" component={Notifications} />
  </SettingsStack.Navigator>
);

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

const TabsScreen = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      shifting={true}
      labeled={false}
      sceneAnimationEnabled={true}
      barStyle={{backgroundColor: theme.colors.surface}}>
      <Tab.Screen
        name="Feed"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          title: 'Explore',
          tabBarIcon: ({color}) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AddPost"
        component={AddPost}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={NotificationsStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="send" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
