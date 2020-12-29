import React, { useState } from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import UpdateComment from "./updateComment/UpdateComment";
import PreviousComments from "./previousComments/PreviousComments";
import styles from "../../../utils/styles/comments";

const Comments = ({ comments }) => {
  const [showPreviousComments, setPreviousComments] = useState(false);

  const updateComment = comments.length ? (
    <UpdateComment key={comments[0].id} comment={comments[0]} />
  ) : null;

  const previousComments =
    comments.length > 1 ? (
      <PreviousComments key={comments[0].id} comments={comments.slice(1)} />
    ) : null;

  const handleTogglePreviousComments = () => {
    setPreviousComments(!showPreviousComments);
  };

  return (
    <View style={styles.containerStyle}>
      {updateComment}
      <IconButton
        style={styles.icon}
        icon={
          showPreviousComments ? "arrow-collapse-up" : "arrow-collapse-down"
        }
        color="black"
        size={15}
        onPress={handleTogglePreviousComments}
      />
      {showPreviousComments ? previousComments : null}
    </View>
  );
};

export default Comments;
