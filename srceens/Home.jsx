import { View, Text, SafeAreaView, StyleSheet,  ScrollView, FlatList, Dimensions } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import Header from '../components/Header'

import Footer from '../components/Footer'
import FocusedStatusBar from '../components/FocusedStatusBar'
import CarouselCardItem from '../components/CarouselCardItem'
import data from '../constants/dummy'
export default function Home() {
     return (
          <SafeAreaView style={{flex: 1}}>
               <FocusedStatusBar background ='black' />
               <View style={{flex: 1}}>
                    <ScrollView style={{marginBottom: 85, paddingBottom: 10}}>
                         <Header/>
                         <Text style={styles.title}>Lovetap TV Programs</Text>
                         <View style={{marginTop: 20}} >
                              <Text style={{fontSize: 16, fontWeight: '500', marginLeft:10}}>Faith</Text>
                              <FlatList
                              data={data}
                              renderItem={({item}) => <CarouselCardItem item={item}  />}
                              keyExtractor={item => item.id}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              
                              />
                         </View>
                         <View style={{marginTop: 20}} >
                              <Text style={{fontSize: 16, fontWeight: '500', marginLeft:10}}>Devotional</Text>
                              <FlatList
                              data={data}
                              renderItem={({item}) => <CarouselCardItem item={item}  />}
                              keyExtractor={item => item.id}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              
                              />
                         </View>
                         <View style={{marginTop: 20}} >
                              <Text style={{fontSize: 16, fontWeight: '500', marginLeft:10}}>Drama</Text>
                              <FlatList
                              data={data}
                              renderItem={({item}) => <CarouselCardItem item={item}  />}
                              keyExtractor={item => item.id}
                              horizontal
                              showsHorizontalScrollIndicator={false}
                              
                              />
                         </View>
                    </ScrollView>
                    {/* For bottom space */}
                    {/* <View style={{width: Dimensions.get('window').width, height: 200}}></View> */}
                    <Footer/>
               </View>
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     image: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     title:{
          fontSize :24,
          fontWeight:'bold',
          textAlign: 'center',
          paddingHorizontal: 5,
     }
})
