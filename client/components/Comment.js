import * as React from 'react';
import { Paragraph, IconButton } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { removeCommentFromServer } from '../store/comments';
import { useDispatch, useSelector } from 'react-redux';

const Comment = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { removeComment, information, type } = props;
  const {
    id,
    title,
    comment,
    stars,
    user,
    photo,
    createdAt,
    updatedAt
  } = information;
  const { firstName, lastName, image } = user;

  const typeOutput =
    type === 'update' ? (
      <MaterialCommunityIcons name="update" size={15} color="black" />
    ) : null;
  const date =
    updatedAt !== createdAt || type === 'update'
      ? `Updated Review ${new Date(createdAt).toDateString()}`
      : updatedAt === createdAt && type === 'previous'
      ? `Previous Review ${new Date(updatedAt).toDateString()}`
      : `${new Date(updatedAt).toDateString()}`;

  const handleRemoveClick = (id) => {
    dispatch(removeCommentFromServer(id));
  };

  return (
    <View>
      <Text>
        {title} {typeOutput} {date}
      </Text>
      {(props.user && props.user.isAdmin) ||
      (props.user && props.user.id === user.id) ? (
        <IconButton
          style={{ alignSelf: 'baseline', margin: 0, padding: 0 }}
          size={20}
          icon="delete"
          onPress={() => handleRemoveClick(id)}
          accessibilityLabel="close"
        />
      ) : null}
      <Rating
        type="custom"
        ratingCount={5}
        imageSize={20}
        startingValue={stars}
        readonly={true}
        style={styles.starStyle}
      />
      <Image style={styles.imageStyle} source={{ uri: `${image}` }} />
      <Paragraph>{`${firstName} ${lastName}`}</Paragraph>
      <Paragraph>{comment}</Paragraph>
    </View>
  );
};

export default Comment;
