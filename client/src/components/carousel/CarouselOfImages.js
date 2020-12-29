import React, { useState, useRef } from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Card } from "react-native-paper";
import PaginationBar from "./PaginationBar";
import styles from "../../utils/styles/carouselOfImages";

const CarouselOfImages = ({ images }) => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={images}
        removeClippedSubviews={false}
        renderItem={({ item }) => (
          <Card.Cover
            style={styles.imageStyle}
            source={{
              uri: `${item}`,
            }}
          />
        )}
        autoplay={true}
        enableSnap
        firstItem={0}
        onSnapToItem={(index) => setActiveSlide(index)}
        sliderWidth={330}
        itemWidth={330}
      />
      <PaginationBar
        activeSlide={activeSlide}
        images={images}
        carouselRef={carouselRef}
      />
    </View>
  );
};

export default CarouselOfImages;
