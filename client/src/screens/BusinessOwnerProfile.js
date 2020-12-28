import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { BusinessCard } from '../components';
import { fetchOwnerFromServer } from '../store/owner';
import styles from '../utils/styles/businessOwnerProfile';
import { useSelector, useDispatch } from 'react-redux';

const BusinessOwnerProfile = ({ route, navigation }) => {
  const { id } = route.params;
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const owner = useSelector((state) => state.owner);

  const getBusinessesOwnedHook = () => {
    try {
      dispatch(fetchOwnerFromServer(id));
    } catch (error) {
      setErrorMessage("Couldn't get businesses owned :(");
    }
  };

  useEffect(() => {
    getBusinessesOwnedHook();
  }, []);

  const profileText = owner.profile ? (
    <Paragraph style={styles.paragraphStyle}>{owner.profile}</Paragraph>
  ) : (
    <Paragraph style={styles.paragraphStyle}>
      Unfortunately, {owner.firstName} has not submitted profile information yet
    </Paragraph>
  );

  const showBusinessesOwned =
    Object.keys(owner).length && owner.businesses.length ? (
      <View>
        {owner.businesses.map((business) => (
          <TouchableOpacity
            key={business.id}
            activeOpacity={1.0}
            onPress={() => navigation.navigate.business({ id: business.id })}
          >
            <BusinessCard business={business} />
          </TouchableOpacity>
        ))}
      </View>
    ) : null;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.backgroundStyle}>
          <View style={styles.container}>
            <Card.Cover
              style={styles.imageStyle}
              source={{ uri: `${owner.image}` }}
            />
            <Card.Title
              title={`${owner.firstName} ${owner.lastName}`}
              titleStyle={styles.titleStyle}
            />
            <Text style={styles.textStyle}>About Me</Text>
            {profileText}
          </View>
        </View>
        <Text
          style={{
            paddingBottom: '0%',
            ...styles.textStyle
          }}
        >
          Businesses Owned by {owner.firstName}
        </Text>
        <Text style={styles.errorStyle}>{errorMessage}</Text>
        {showBusinessesOwned}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessOwnerProfile;
