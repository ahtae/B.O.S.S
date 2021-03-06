import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import UpdateComment from './updateComment/UpdateComment';
import PreviousComments from './previousComments/PreviousComments';
import styles from '../../../utils/styles/comments';
import ExpandButton from '../../../../../assets/images/ExpandButton.png';
import ExpandArrow from '../../../../../assets/images/ExpandArrow.png';

const Comments = ({ comments }) => {
  const [showPreviousComments, setPreviousComments] = useState(false);

  const updateComment = comments.length ? (
    <UpdateComment key={comments[0].id} comment={comments[0]} />
  ) : null;

  const previousComments =
    comments.length > 1 ? (
      <PreviousComments key={comments[1].id} comments={comments.slice(1)} />
    ) : null;

  const handleTogglePreviousComments = () => {
    setPreviousComments(!showPreviousComments);
  };

  return (
    <View style={styles.containerStyle}>
      {updateComment}
      <TouchableOpacity
        style={{
          marginLeft: 10
        }}
        onPress={handleTogglePreviousComments}
      >
        <Image
          source={showPreviousComments ? ExpandArrow : ExpandButton}
          style={styles.icon}
          alt="expand"
        />
      </TouchableOpacity>
      {showPreviousComments ? previousComments : null}
    </View>
  );
};

export default Comments;
