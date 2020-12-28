import React from 'react';
import { View } from 'react-native';
import Comment from './Comment';

const UpdateComment = ({ comment }) => {
  const output = comment ? (
    <View>
      <Comment information={comment} type="update" />
    </View>
  ) : null;

  return <View>{output}</View>;
};

export default UpdateComment;
