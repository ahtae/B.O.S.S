import React, { useState } from 'react';
import { View } from 'react-native';
import { IconButton } from 'react-native-paper';
import UpdateComment from './UpdateComment';
import PreviousComments from './PreviousComments';
import styles from '../src/utils/styles';

const Comments = ({ comments }) => {
  const [showPreviousComments, setPreviousComments] = useState(false);
  const updateComment = comments.length ? (
    <UpdateComment key={comments[0].id} comment={comments[0]} />
  ) : null;
  const previousComments =
    comments.length > 1 ? (
      <PreviousComments key={comments[0].id} comments={comments.slice(1)} />
    ) : null;

  return (
    <View style={styles.comments.containerStyle}>
      {updateComment}
      <IconButton
        style={{ margin: 0, padding: 0 }}
        icon={
          showPreviousComments ? 'arrow-collapse-up' : 'arrow-collapse-down'
        }
        color="black"
        size={15}
        onPress={() => setPreviousComments(!showPreviousComments)}
      />
      {showPreviousComments ? previousComments : null}
    </View>
  );
};

export default Comments;
