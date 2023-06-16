import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import { Vimeo } from 'react-native-vimeo-iframe'
import FocusedStatusBar from '../components/FocusedStatusBar'
import Footer from '../components/Footer'
import CommentCard from '../components/CommentCard'
const Live = () => {
     const videoCallbacks = {
          timeupdate: (data) => console.log('timeupdate: ', data),
          play: (data) => console.log('play: ', data),
          pause: (data) => console.log('pause: ', data),
          fullscreenchange: (data) => console.log('fullscreenchange: ', data),
          ended: (data) => console.log('ended: ', data),
          controlschange: (data) => console.log('controlschange: ', data),
        };
     return (
          <SafeAreaView style={{flex:1}}>
               <FocusedStatusBar background ='black' />
               <View style={{flex:1, backgroundColor: '#f1f2f3f4'}}>
                    <ScrollView>
                         <View>
                              <Text style={{textAlign: 'center', fontSize: 17, fontWeight: '500', paddingVertical:10}} >Live TV Transmission</Text>
                              <Vimeo videoId={'3420837'}params={'api=1&autoplay=0'}handlers={videoCallbacks} style={{width: Dimensions.get('screen').width, height:240}} allowsFullscreenVideo={true} />
                         </View>
                         <View style={{padding:10}}>
                              <Text style={{fontSize:18, fontWeight:"bold", paddingVertical: 15}}>Comments</Text>
                              <CommentCard/>
                              <CommentCard/>
                              <CommentCard/>
                              <CommentCard/>
                         </View>
                    </ScrollView>
                    <Footer/>
               </View>
          </SafeAreaView>
     )
}

export default Live