import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity
} from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import BusinessCard from './BusinessCard';
import { fetchOwnerFromServer } from '../store/owner';
import { Actions } from 'react-native-router-flux';
import styles from '../src/utils/styles';
import { useSelector, useDispatch } from 'react-redux';

const BusinessOwnerProfile = ({ id }) => {
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
    <Paragraph style={styles.businessOwnerProfile.paragraphStyle}>
      {owner.profile}
    </Paragraph>
  ) : (
    <Paragraph style={styles.businessOwnerProfile.paragraphStyle}>
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
            onPress={() => Actions.business({ id: business.id })}
          >
            <BusinessCard business={business} />
          </TouchableOpacity>
        ))}
      </View>
    ) : null;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.businessOwnerProfile.backgroundStyle}>
          <View style={styles.businessOwnerProfile.container}>
            <Card.Cover
              style={styles.businessOwnerProfile.imageStyle}
              source={{ uri: `${owner.image}` }}
            />
            <Card.Title
              title={`${owner.firstName} ${owner.lastName}`}
              titleStyle={styles.businessOwnerProfile.titleStyle}
            />
            <Text style={styles.businessOwnerProfile.textStyle}>About Me</Text>
            {profileText}
          </View>
        </View>
        <Text
          style={{
            paddingBottom: '0%',
            ...styles.businessOwnerProfile.textStyle
          }}
        >
          Businesses Owned by {owner.firstName}
        </Text>
        <Text style={styles.businessOwnerProfile.errorStyle}>
          {errorMessage}
        </Text>
        {showBusinessesOwned}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessOwnerProfile;
