import React from 'react';
import { View, Text, Button } from 'react-native';
import { Categories, Search } from '../components/index';
import styles from '../utils/styles/dashboard';

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Filter Businesses</Text>
      <View>
        <Search />
        <Categories />
        <Button
          onPress={() => navigation.navigate('All Businesses')}
          title="Submit"
        />
      </View>
    </View>
  );
};

export default Dashboard;
