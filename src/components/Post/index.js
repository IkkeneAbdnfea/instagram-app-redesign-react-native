import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Avatar, Card, Paragraph, useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const LeftContent = props => (
  <Avatar.Image
    {...props}
    source={require('../../../assets/images/user.png')}
  />
);

const PostCard = () => {
  const theme = useTheme();
  return (
    <Card style={styles.cardStyle}>
      <Card.Title
        title="Abdennafea ikkene"
        subtitle="@programmedev"
        left={LeftContent}
      />
      <Card.Cover
        source={{
          uri: 'https://picsum.photos/' + Math.floor(Math.random() * 22 + 700),
        }}
      />
      <Card.Actions style={styles.row}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={24}
          style={styles.actionElement}
          color={theme.colors.text}
        />
        <MaterialCommunityIcons
          name="message-outline"
          size={24}
          style={styles.actionElement}
          color={theme.colors.text}
        />
        <Feather name="send" size={24} color={theme.colors.text} />
        <MaterialCommunityIcons
          name="bookmark-outline"
          size={24}
          style={styles.save}
          color={theme.colors.text}
        />
      </Card.Actions>
      <Card.Content>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae
          sapien pellentesque habitant
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  cardStyle: {
    marginBottom: 20,
  },

  actionElement: {
    marginRight: 20,
  },
  row: {
    flexDirection: 'row',
  },
  save: {
    marginLeft: 'auto', // to align the icon to the right ~ justify-self: left
  },
});
