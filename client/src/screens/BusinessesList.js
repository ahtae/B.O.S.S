import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import { Businesses } from '../components/index';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { fetchBusinessesFromServer } from '../redux/actions/businesses';
import { Loading } from '../components';
import styles from '../utils/styles/businessLists';
import { useDispatch, useSelector } from 'react-redux';
import { removeErrors } from '../redux/actionCreators/error';

const BusinessesList = ({ route, navigation }) => {
  const { searchLocation, category } = route.params;
  const error = useSelector((state) => state.error);
  const businesses = useSelector((state) => state.businesses);
  const dispatch = useDispatch();
  const [markers, setMarkers] = useState([]);
  const [averageLatitude, setAverageLatitude] = useState(null);
  const [averageLongitude, setAverageLongitude] = useState(null);

  const getAllBusinessesHook = () => {
    dispatch(fetchBusinessesFromServer(searchLocation, category));

    setTimeout(() => {
      dispatch(removeErrors());
    }, 5000);
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

  const determineRegion = () => {
    const longitude = businesses.length
      ? businesses.reduce(
          (sum, business) => Number(business.longitude) + sum,
          0
        ) / businesses.length
      : 0;
    const latitude = businesses.length
      ? businesses.reduce(
          (sum, business) => Number(business.latitude) + sum,
          0
        ) / businesses.length
      : 0;

    setAverageLongitude(longitude);
    setAverageLatitude(latitude);
  };

  useEffect(() => {
    getAllBusinessesHook();
  }, []);

  useEffect(() => {
    determineRegion();
    createMarkersHook();
  }, [businesses]);

  const output =
    averageLatitude && averageLongitude ? (
      <View>
        <MapView
          style={styles.mapStyle}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={false}
          region={{
            latitude: averageLatitude,
            longitude: averageLongitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
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
        <Businesses navigation={navigation} businesses={businesses} />
      </View>
    ) : null;

  if (businesses && !businesses.length) {
    return (
      <View>
        <Title style={styles.titleStyle}>Businesses</Title>
        <Text style={styles.paragraph}>No businesses to show!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      {businesses ? (
        <ScrollView>
          <Title style={styles.titleStyle}>Businesses</Title>
          <Text style={styles.errorStyle}>{error}</Text>
          {output}
        </ScrollView>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

export default BusinessesList;
