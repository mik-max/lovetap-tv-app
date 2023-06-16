import React from 'react'
import { View, Dimensions } from "react-native"
import Carousel from 'react-native-snap-carousel'

import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem'
import data from '../constants/dummy'

const CarouselCards = () => {
  const isCarousel = React.useRef(null)

  return (
    <View>
      <Carousel
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={Dimensions.get('window').width}
        sliderHeight={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width-100}
        hasParallaxImages={true}
      />
      
    </View>
  )
}


export default CarouselCards