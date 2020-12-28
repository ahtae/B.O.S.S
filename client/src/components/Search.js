import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View } from 'react-native';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearchUpdate = (event) => {
    setSearch(event);
  };

  return (
    <View>
      <SearchBar
        placeholder="Enter location"
        onChangeText={handleSearchUpdate}
        value={search}
        platform="ios"
      />
    </View>
  );
};

export default Search;
