import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import PostCard from "../../components/Post";
import Story from "../../components/Story";

const Feed = (props) => {
  const posts = [
    {
      name: "abdennafea",
    },
    {
      name: "ikkene",
    },
  ];

  const stories = [
    {
      name: "abdennafea",
    },
    {
      name: "ikkene",
    },
    {
      name: "ikkene1",
    },
    {
      name: "ikkene2",
    },
    {
      name: "ikkene3",
    },
  ];

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={stories}
        renderItem={({ item }) => {
          return <Story>{item.name}</Story>;
        }}
        keyExtractor={(post) => post.name}
        ItemSeparatorComponent={() => (
          <View style={{ height: StyleSheet.hairlineWidth }} />
        )}
      />
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return <PostCard>{item.name}</PostCard>;
        }}
        keyExtractor={(post) => post.name}
        ItemSeparatorComponent={() => (
          <View style={{ height: StyleSheet.hairlineWidth }} />
        )}
      />
    </View>
  );
};

export default Feed;
