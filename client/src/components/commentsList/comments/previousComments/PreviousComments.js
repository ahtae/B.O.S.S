import * as React from "react";
import { View } from "react-native";
import Comment from "../comment/Comment";

const PreviousComments = ({ comments }) => {
  const output = comments.length
    ? comments.map((comment) => (
        <View key={comment.id}>
          <Comment information={comment} type="previous" />
        </View>
      ))
    : null;

  return <View>{output}</View>;
};

export default PreviousComments;
