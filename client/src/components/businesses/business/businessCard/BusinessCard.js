import React from 'react';
import { View } from 'react-native';
import { Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { removeBusinessFromServer } from '../../../../redux/actions/businesses';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../utils/styles/businessCard';

const BusinessCard = ({ business }) => {
  const user = useSelector((state) => state.user);
  const { name, address, city, state, postalCode, phone, images } = business;
  const image = images.length
    ? images[0]
    : 'http://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png';
  const dispatch = useDispatch();

  const handleRemoveClick = (id) => {
    dispatch(removeBusinessFromServer(id));
  };

  return (
    <View style={styles.backgroundStyle}>
      {user && user.isAdmin ? (
        <IconButton
          size={20}
          icon="close"
          onPress={() => handleRemoveClick(business.id)}
          accessibilityLabel="close"
        />
      ) : null}
      <Title style={styles.textStyle}>{name}</Title>
      <Paragraph
        style={styles.paragraphStyle}
      >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
      <Card.Cover style={styles.imageStyle} source={{ uri: `${image}` }} />
    </View>
  );
};

export default BusinessCard;
