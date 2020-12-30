import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Rating } from 'react-native-elements';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import * as ImagePicker from 'expo-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { createCommentFromServer } from '../redux/actions/comments';
import styles from '../utils/styles/commentForm';
import { uploadPhotoToTheServer } from '../redux/actions/photo';

const CommentForm = ({ navigation }) => {
  const business = useSelector((state) => state.business);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const prompt = () => navigation.navigate('Prompt');
  const userId = user ? user.id : null;
  const businessId = business.id;
  const { name } = business;
  const error = useSelector((state) => state.error);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [photo, setPhoto] = useState('');
  const [image, setImage] = useState(null);
  const [titleError, setTitleError] = useState('');
  const [commentError, setCommentError] = useState('');

  const clearInputs = () => {
    setTitle('');
    setComment('');
    setTitleError('');
    setCommentError('');
  };

  const handleSubmitClick = () => {
    if (!title.length) {
      setTitleError('The title cannot be empty!');
    }

    if (!comment.length) {
      setCommentError('The comment cannot be empty!');
    }

    if (title.length && comment.length) {
      if (!userId) {
        prompt();
      } else if (image) {
        const uri = image;
        const uriParts = uri.split('.');
        const fileType = uriParts[uriParts.length - 1];

        const formData = new FormData();
        formData.append('photo', {
          uri,
          name: `photo.${fileType}`,
          type: `image/${fileType}`
        });

        dispatch(
          uploadPhotoToTheServer(formData, businessId, {
            businessId,
            userId,
            title,
            comment,
            stars
          })
        );

        navigation.navigate('Business', { id: businessId });

        clearInputs();
      } else {
        dispatch(
          createCommentFromServer(businessId, {
            businessId,
            userId,
            title,
            comment,
            stars
          })
        );

        navigation.navigate('Business', { id: businessId });

        clearInputs();
      }
    }
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        aspect: [4, 3],
        quality: 1
      });

      if (!result.cancelled) {
        setPhoto(result.base64);
        setImage(result.uri);
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };

  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      } else {
        pickImage();
      }
    }
  };

  return (
    <View style={styles.container}>
      <IconButton
        style={styles.iconButton}
        icon="close"
        onPress={() => navigation.pop(1)}
        accessibilityLabel="close"
      />
      <Text style={styles.title}>{name}</Text>
      <View>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={20}
          startingValue={0}
          readonly={false}
          style={styles.rating}
          onFinishRating={(rating) => setStars(rating)}
        />
        <TextInput
          placeholder="Great!"
          autoCapitalize="sentences"
          style={styles.titleInput}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={styles.errorStyle}>{titleError}</Text>
        <TextInput
          placeholder="This is my favorite restaurant! The food is fantastic. :)"
          multiline
          value={comment}
          autoCapitalize="sentences"
          onChangeText={(text) => setComment(text)}
          blurOnSubmit={true}
          onSubmitEditing={() => {
            Keyboard.dismiss();
          }}
          style={styles.commentInput}
        />
        <Text style={styles.errorStyle}>{commentError}</Text>
        <IconButton
          icon="camera"
          onPress={getPermissionAsync}
          accessibilityLabel="choose an image"
        />
        {photo ? (
          <View style={styles.photoContainer}>
            <IconButton
              size={15}
              icon="close"
              onPress={() => setPhoto('')}
              accessibilityLabel="close"
              style={styles.closeIconButton}
            />
            <Image
              key={photo}
              style={styles.imageStyle}
              width={100}
              height={100}
              source={{ uri: `data:image/jpeg;base64,${photo}` }}
            />
          </View>
        ) : null}
        <Text style={styles.errorStyle}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSubmitClick}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentForm;
