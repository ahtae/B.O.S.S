import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Title } from 'react-native-paper';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import BusinessCard from './BusinessCard';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { fetchBusinessesFromServer } from '../store/businesses';
import Loading from './Loading';
import styles from '../src/utils/styles';
import { useDispatch, useSelector } from 'react-redux';

const BusinessesList = () => {
  const businesses = useSelector((state) => state.businesses);
  const dispatch = useDispatch();
  const [markers, setMarkers] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const getAllBusinessesHook = () => {
    try {
      dispatch(fetchBusinessesFromServer());
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  const createMarkersHook = () => {
    const arrayOfDirections = businesses.map((business) => ({
      id: business.id,
      title: business.name,
      images: business.images[0],
      longitude: Number(business.longitude),
      latitude: Number(business.latitude)
    }));

    setMarkers(arrayOfDirections);
  };

  const getCurrentLocationHook = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);

      const currentLocation = await Location.getCurrentPositionAsync();

      setLocation(currentLocation);
    } catch (err) {
      setErrorMessage('Permission to access location was denied!');
    }
  };

  useEffect(() => {
    getCurrentLocationHook();

    if (!errorMessage) {
      getAllBusinessesHook();
    }
  }, []);

  useEffect(() => {
    createMarkersHook();
  }, [businesses]);

  const output = location ? (
    <View>
      <MapView
        style={styles.businesses.mapStyle}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1
        }}
        zoomEnabled={true}
        scrollEnabled={true}
        showCompass={true}
        rotateEnabled={false}
      >
        {markers.map((marker) => (
          <Marker key={marker.id} coordinate={marker} title={marker.title} />
        ))}
      </MapView>
      {businesses.map((business) => (
        <TouchableOpacity
          key={business.id}
          activeOpacity={1.0}
          onPress={() => Actions.business({ id: business.id })}
        >
          <BusinessCard business={business} />
        </TouchableOpacity>
      ))}
    </View>
  ) : null;

  return (
    <SafeAreaView>
      {businesses ? (
        <ScrollView>
          <Title style={styles.businesses.titleStyle}>Businesses</Title>
          <Text style={styles.businesses.errorStyle}>{errorMessage}</Text>
          {output}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default BusinessesList;
