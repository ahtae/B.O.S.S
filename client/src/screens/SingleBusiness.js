import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import moment from 'moment';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Rating } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusinessFromServer, unmountBusiness } from '../store/business';
import { fetchCommentsFromServer } from '../store/comments';
import { CarouselOfImages, CommentsList } from '../components/index';
import Loading from '../components/Loading';
import styles from '../utils/styles/singleBusiness';

const SingleBusiness = ({ route, navigation }) => {
  const { id } = route.params;
  const dispatch = useDispatch();
  const business = useSelector((state) => state.business);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchCommentsFromServer(id));
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
      <Text style={styles.hourStyle}>Hours</Text>
      {daysOfTheWeek.map((day, index) =>
        !hoursOpened[index] ? (
          <Text key={day} style={styles.paragraphStyle}>
            {day} Closed
          </Text>
        ) : (
          <Text
            style={styles.paragraphStyle}
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
      style={styles.ownerName}
      onPress={() =>
        navigation.navigate('Business Owner Profile', { id: owner.id })
      }
    >
      <Subheading>
        Owner: {owner.firstName} {owner.lastName}
      </Subheading>
    </TouchableOpacity>
  ) : null;

  const imageOutput =
    images && !images.length ? (
      <Card.Cover
        style={styles.imageStyle}
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png'
        }}
      />
    ) : images && images.length === 1 ? (
      <Card.Cover style={styles.imageStyle} source={{ uri: images[0] }} />
    ) : (
      <CarouselOfImages images={business.images || []} />
    );

  const location = Object.keys(business).length ? (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Location</Text>
      <Paragraph
        style={styles.paragraphStyle}
      >{`${address} \n${city}, ${state} ${postalCode} \n ${phone}`}</Paragraph>
      <MapView
        style={styles.mapStyle}
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
  ) : null;

  if (business) {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.backgroundStyle}>
            <Title style={styles.titleStyle}>{name}</Title>
            {ownerInfo}
            <Rating
              type="custom"
              ratingCount={5}
              imageSize={20}
              startingValue={calculatedTotalRating}
              readonly={true}
            />
            {imageOutput}
            {location}
            {hoursOutput}
            <CommentsList
              navigation={navigation}
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
