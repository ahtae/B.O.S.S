import React from 'react';
import { Paragraph, IconButton } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import { removeCommentFromServer } from '../../../../redux/actions/comments';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../utils/styles/comment';

const Comment = ({ information, type }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    id,
    title,
    comment,
    stars,
    photo,
    createdAt,
    updatedAt
  } = information;
  const commentUser = information.user;
  const { firstName, lastName, image } = commentUser;

  const typeOutput =
    type === 'update'
      ? 'Updated review'
      : type === 'previous'
      ? 'Previous review'
      : null;

  const handleRemoveClick = (id) => {
    dispatch(removeCommentFromServer(id));
  };

  const updateButton = type === 'update' && (
    <IconButton
      size={15}
      style={styles.updateButton}
      icon="autorenew"
      accessibilityLabel="update"
    />
  );

  const deleteButton =
    (user && user.isAdmin) || (user && commentUser.id === user.id) ? (
      <IconButton
        style={styles.icon}
        size={20}
        icon="delete"
        onPress={() => handleRemoveClick(id)}
        accessibilityLabel="close"
      />
    ) : null;

  const userInformation = type === 'update' && (
    <View>
      <Image style={styles.userImage} source={{ uri: `${image}` }} />
      <Text>{`${firstName} ${lastName}`}</Text>
    </View>
  );

  const reviewPhoto = photo ? (
    <View style={styles.photoContainer}>
      <Image source={{ uri: photo }} style={styles.commentImage} />
    </View>
  ) : null;

  return (
    <View style={styles.containerStyle}>
      <View style={styles.row}>
        {updateButton}
        <Text style={styles.typeText}>{typeOutput}</Text>
        {deleteButton}
      </View>
      {userInformation}
      <View style={styles.row}>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={20}
          startingValue={stars}
          readonly={true}
        />
        <Text style={styles.date}>
          {'  '}
          {new Date(updatedAt).toLocaleDateString()}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Paragraph>{comment}</Paragraph>
      {reviewPhoto}
    </View>
  );
};

export default Comment;
