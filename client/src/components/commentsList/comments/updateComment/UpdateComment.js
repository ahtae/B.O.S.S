import React from "react";
import { View } from "react-native";
import Comment from "../comment/Comment";

const UpdateComment = ({ comment }) => {
  const output = comment ? (
    <View>
      <Comment information={comment} type="update" />
    </View>
  ) : null;

  return <View>{output}</View>;
};

export default UpdateComment;
