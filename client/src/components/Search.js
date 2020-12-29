import React from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';
import styles from '../utils/styles/search';

const Search = ({ search, handleSearchUpdate }) => {
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Enter a city"
        onChangeText={handleSearchUpdate}
        value={search}
        platform="ios"
        color="white"
        containerStyle={styles.searchBarContainer}
      />
    </View>
  );
};

export default Search;
