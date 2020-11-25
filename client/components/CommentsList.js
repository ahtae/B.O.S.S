import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import Comment from './Comment';
import Comments from './Comments';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import styles from '../src/utils/styles';

const CommentsList = ({ arrayOfComments, business }) => {
  const user = useSelector((state) => state.user);

  const output = arrayOfComments.length ? (
    <View>
      {arrayOfComments.map((comments) => {
        return comments.length === 1 ? (
          <View key={comments[0].id} style={styles.containerStyle}>
            <Comment information={comments[0]} type="regular" />
          </View>
        ) : (
          <Comments key={comments[0].id} comments={comments} />
        );
      })}
    </View>
  ) : null;

  return (
    <View style={styles.backgroundStyle}>
      <Title style={styles.textStyle}>Recommended Reviews</Title>
      {user && user.isAdmin ? null : (
        <View style={styles.containerStyle}>
          <TouchableOpacity onPress={() => Actions.commentForm({ business })}>
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              ratingColor="lightgray"
              ratingTextColor="lightgray"
              startingValue={0}
              readonly={true}
              style={styles.commentsList.starStyle}
            />
            <Paragraph style={styles.commentsList.paragraphStyle}>
              Tap to review...
            </Paragraph>
          </TouchableOpacity>
        </View>
      )}
      {output}
    </View>
  );
};

export default CommentsList;
