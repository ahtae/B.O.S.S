import * as React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { removeUserFromServer } from '../store/users';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../src/utils/styles';

const User = ({ currentUser }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { firstName, lastName, email, image } = currentUser;
  const handleRemoveClick = (id) => {
    dispatch(removeUserFromServer(id));
  };

  return (
    <View style={styles.user.backgroundStyle}>
      {user && user.isAdmin ? (
        <IconButton
          size={20}
          icon="close"
          onPress={() => handleRemoveClick(currentUser.id)}
          accessibilityLabel="close"
        />
      ) : null}
      <Title style={styles.user.textStyle}>{`${firstName} ${lastName}`}</Title>
      <Paragraph style={styles.user.paragraphStyle}>{`${email} \n`}</Paragraph>
      <Card.Cover style={styles.imageStyle} source={{ uri: `${image}` }} />
    </View>
  );
};

export default User;
