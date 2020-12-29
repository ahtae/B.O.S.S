import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const CarouselPaginationBar = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.carouselRef.current.snapToItem(props.index);
      }}
    >
      <View
        width={props.width}
        marginHorizontal={10}
        height={6}
        backgroundColor={
          props.inactive ? 'rgba(0, 0, 0, 0.20)' : 'rgba(0, 0, 0, 0.90)'
        }
      />
    </TouchableOpacity>
  );
};

export default CarouselPaginationBar;
