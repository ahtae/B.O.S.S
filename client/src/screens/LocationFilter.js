import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { Search } from '../components/index';
import styles from '../utils/styles/locationFilter';
import * as Permissions from 'expo-permissions';
import config from '../../../config';

const LocationFilter = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [location, setLocation] = useState(null);

  const getCurrentLocationHook = async () => {
    try {
      await Permissions.askAsync(Permissions.LOCATION);

      const currentLocation = await Location.getCurrentPositionAsync();

      setLocation({
        latitude: `${currentLocation.coords.latitude}`,
        longitude: `${currentLocation.coords.longitude}`
      });
    } catch (err) {
      setError('Permission to access location was denied!');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    try {
      const url = `https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json?apiKey=${config.HERE_API_KEY}&mode=retrieveAddresses&prox=${latitude},${longitude}`;
      const response = await fetch(url);
      const responseData = await response.json();

      if (
        responseData &&
        responseData.Response &&
        responseData.Response.View &&
        responseData.Response.View[0] &&
        responseData.Response.View[0].Result &&
        responseData.Response.View[0].Result[0]
      ) {
        setSearch(
          responseData.Response.View[0].Result[0].Location.Address.City
        );
      }
    } catch (err) {
      setError('Something went wrong!');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  useEffect(() => {
    getCurrentLocationHook();
  }, []);

  useEffect(() => {
    if (location && location.latitude && location.longitude) {
      getAddressFromCoordinates(location.latitude, location.longitude);
    }
  }, [location]);

  const handleSearchUpdate = (event) => {
    setSearch(event);
  };

  const resetSearchValue = () => {
    setSearch('');
  };

  const handleSubmitClick = () => {
    if (selected && search.trim().length) {
      navigation.navigate('All Businesses', {
        searchLocation: search.trim(),
        category: ''
      });

      resetSearchValue();
    } else {
      setError('Location was not specified!');
      setTimeout(() => {
        setError('');
      }, 5000);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Filter Businesses</Text>
      <View>
        <Search search={search} handleSearchUpdate={handleSearchUpdate} />
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: !search.trim().length ? 'lightgray' : '#5fb7fe'
          }}
          onPress={handleSubmitClick}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationFilter;

LocationFilter.defaultProps = {
  HERE_API_KEY: process.env.HERE_API_KEY
};
