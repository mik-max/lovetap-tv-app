import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { ParallaxImage } from 'react-native-snap-carousel'
import { SHADOWS } from '../constants'
export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const CarouselCardItem = ({ item, index }) => {
  return (
     <View style={[styles.container, {...SHADOWS.light}]} key={index}>
          <View style={{width:200, height: 150, }}>
               <Image source = {{uri: item.imgUrl}} resizeMode = 'cover' style = {[styles.image, {width: '100%', height: '100%'}]}/>
          </View>
          <View style={{dispaly: "flex", justifyContent: 'center', alignItems:"center", height: 50, }}> 
               <Text style={{color: 'black', textAlign: 'center'}}>{item.title}</Text>
          </View>
     </View>
   
  )
}

const styles = StyleSheet.create({
     container: {
         width: 200,
         borderRadius: 10,
         backgroundColor: 'white',
         marginHorizontal: 4,
         marginVertical:5
     },
     image: {
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
     },
   })

export default CarouselCardItem