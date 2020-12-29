import React from "react";
import { Pagination } from "react-native-snap-carousel";
import CarouselPaginationBar from "./CarouselPaginationBar";
import styles from "../../utils/styles/paginationBar";

const PaginationBar = ({ activeSlide, images, carouselRef }) => {
  return (
    <Pagination
      carouselRef={carouselRef}
      dotsLength={images ? images.length : 0}
      activeDotIndex={activeSlide}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      dotElement={
        <CarouselPaginationBar width={10} carouselRef={carouselRef} />
      }
      inactiveDotElement={
        <CarouselPaginationBar width={10} carouselRef={carouselRef} inactive />
      }
    />
  );
};

export default PaginationBar;
