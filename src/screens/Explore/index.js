import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Card} from 'react-native-paper';

const Explore = () => {
  const data = [
    {id: '00'},
    {id: '01'},
    {id: '02'},
    {id: '03'},
    {id: '04'},
    {id: '05'},
    {id: '06'},
    {id: '07'},
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      numColumns={3}
      renderItem={({item}) => {
        return (
          <Card style={styles.item}>
            <Card.Cover
              source={{
                uri:
                  'https://picsum.photos/' +
                  Math.floor(Math.random() * 100 + 700),
              }}
            />
          </Card>
        );
      }}
    />
  );
};

export default Explore;

const styles = StyleSheet.create({
  item: {
    flexBasis: 0,
    flexGrow: 1,
    margin: 4,
  },
});
