import React, { useState, useEffect } from 'react';
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
import { createCommentFromServer } from '../store/comments';
import styles from '../utils/styles/commentForm';
import { uploadPhotoToTheServer } from '../store/photo';
import { AsyncStorage } from 'react-native';

const CommentForm = ({ navigation }) => {
  const business = useSelector((state) => state.business);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const prompt = () => navigation.navigate('Prompt');
  const userId = user ? user.id : null;
  const businessId = business.id;
  const { name } = business;
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [stars, setStars] = useState(0);
  const [photo, setPhoto] = useState('');
  const uploadedPhoto = useSelector((state) => state.photo);
  const [image, setImage] = useState(null);

  const handleSubmitClick = () => {
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
        style={{ alignSelf: 'flex-end' }}
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
          style={{
            alignSelf: 'flex-start',
            marginTop: '5%',
            marginBottom: '5%'
          }}
          onFinishRating={(rating) => setStars(rating)}
        />
        <TextInput
          placeholder="Great!"
          autoCapitalize="sentences"
          style={{
            marginBottom: '5%',
            height: 20,
            borderColor: 'gray',
            borderWidth: 1
          }}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
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
          style={{ height: 150, borderColor: 'gray', borderWidth: 1 }}
        />
        <IconButton
          style={{ alignSelf: 'flex-start' }}
          icon="camera"
          onPress={getPermissionAsync}
          accessibilityLabel="choose an image"
        />
        {photo ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              margin: 10
            }}
          >
            <IconButton
              size={15}
              icon="close"
              onPress={() => setPhoto('')}
              accessibilityLabel="close"
              style={{ margin: 0, padding: 0 }}
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
        <TouchableOpacity style={styles.button} onPress={handleSubmitClick}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentForm;
