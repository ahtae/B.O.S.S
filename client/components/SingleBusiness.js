import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import CommentsList from './CommentsList';
import { Rating } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusinessFromServer, unmountBusiness } from '../store/business';
import { fetchCommentsFromServer } from '../store/comments';
import CarouselOfImages from './CarouselOfImages';
import Loading from './Loading';
import styles from '../src/utils/styles';

const SingleBusiness = (props) => {
  const dispatch = useDispatch();
  const { id, fetchBusiness, destroy, fetchComments } = props;
  const business = useSelector((state) => state.business);
  const comments = useSelector((state) => state.comments);
  const comments = props.comments;

  useEffect(() => {
    dispatch(fetchCommentsFromServer(id));
    // return () => destroy();
  }, [comments.length]);

  useEffect(() => {
    dispatch(fetchBusinessFromServer(id));
    return () => dispatch(unmountBusiness());
  }, []);

  const {
    latitude,
    longitude,
    name,
    address,
    city,
    state,
    postalCode,
    phone,
    images,
    hours,
    isClosed,
    owner
  } = business;

  const commentsHash = {};

  if (comments.length) {
    comments.map((currentComment) => {
      if (commentsHash[currentComment.user.id]) {
        commentsHash[currentComment.user.id].unshift(currentComment);
      } else {
        commentsHash[currentComment.user.id] = [currentComment];
      }
    });
  }

  const arrayOfComments = [];
  for (let userId in commentsHash) {
    const commentsOfUser = commentsHash[userId];

    arrayOfComments.unshift(commentsOfUser);
  }

  arrayOfComments.sort((a, b) => b[0].updatedAt - a[0].updatedAt);

  const JSONifiedHours = hours ? JSON.parse(hours)[0] : { open: [] };
  const hoursOpened = [];
  JSONifiedHours.open.forEach(
    ({ day, start, end }) =>
      (hoursOpened[Number(day)] = {
        start: moment(start, 'HH:mm').format('h:mm a'),
        end: moment(end, 'HH:mm').format('h:mm a')
      })
  );
  const daysOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hoursOutput = isClosed ? (
    <Text>Users report this location has closed.</Text>
  ) : (
    <View>
      <Text style={styles.singleBusiness.hourStyle}>Hours</Text>
      {daysOfTheWeek.map((day, index) =>
        !hoursOpened[index] ? (
          <Text key={day} style={styles.paragraphStyle}>
            {day} Closed
          </Text>
        ) : (
          <Text
            style={styles.singleBusiness.paragraphStyle}
            key={day}
          >{`${day} ${hoursOpened[index].start} - ${hoursOpened[index].end}`}</Text>
        )
      )}
    </View>
  );
  const calculatedTotalRating =
    arrayOfComments && arrayOfComments.length
      ? arrayOfComments.reduce(
          (accumulator, comments) => accumulator + comments[0].stars,
          0
        ) / arrayOfComments.length
      : 0;

  const ownerInfo = owner ? (
    <TouchableOpacity
      style={styles.singleBusiness.ownerName}
      onPress={() => Actions.ownerProfile({ id: owner.id })}
    >
      <Subheading>
        Owner: {owner.firstName} {owner.lastName}
      </Subheading>
    </TouchableOpacity>
  ) : null;

  const imageOutput =
    images && !images.length ? (
      <Card.Cover
        style={styles.singleBusiness.imageStyle}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
        }}
      />
    ) : images && images.length === 1 ? (
      <Card.Cover
        style={styles.singleBusiness.imageStyle}
        source={{ uri: images[0] }}
      />
    ) : (
      <CarouselOfImages images={business.images || []} />
    );

  if (Object.keys(business).length) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.singleBusiness.backgroundStyle}>
            <Title style={styles.singleBusiness.titleStyle}>{name}</Title>
            {ownerInfo}
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              startingValue={calculatedTotalRating}
              readonly={true}
            />
            {imageOutput}
            <View style={styles.singleBusiness.container}>
              <Text style={styles.singleBusiness.textStyle}>Location</Text>
              <Paragraph
                style={styles.singleBusiness.paragraphStyle}
              >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
              <MapView
                style={styles.singleBusiness.mapStyle}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                region={{
                  latitude: Number(latitude),
                  longitude: Number(longitude),
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1
                }}
                zoomEnabled={true}
                scrollEnabled={true}
                showCompass={true}
                rotateEnabled={false}
              >
                <Marker
                  coordinate={{
                    latitude: Number(latitude),
                    longitude: Number(longitude)
                  }}
                  title={name}
                />
              </MapView>
            </View>
            {hoursOutput}
            <CommentsList
              arrayOfComments={arrayOfComments}
              business={business}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return <Loading />;
  }
};

export default SingleBusiness;
