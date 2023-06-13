import { View, Text, Image, TextInput, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, SHADOWS, assets } from '../constants'
import FeatherIcon from 'react-native-vector-icons/Feather'

const Header = ({onSearch}) => {
     return (
          <View style = {{height: 250}}>
               <ImageBackground source={require('../assets/images/header.png')} resizeMode='cover'>
                    <View style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems: "center", paddingHorizontal: 25, paddingTop: 30}}>
                         <Text style={{color:"white", fontSize: 25, fontWeight:"600"}}>Lovetap TV</Text>
                         <View style = {{width: 45, height:45}}>
                              <Image source={assets.person01} resizeMode = 'contain' style = {{width: '100%', height: '100%'}} />
                         </View>
                    </View>
                    <View style={{paddingTop: 35, paddingHorizontal: 25, paddingBottom:20}}>
                         <Text style={{color:"white", fontSize: 20, fontWeight:"600" }}>Hi Michael Chinye</Text>
                         <Text style={{color:"white", fontSize: 14}}>Ununding Streams of Possibilities</Text>
                    </View>
                    <View style = {{marginTop: 10, paddingHorizontal: 25,}}>
                         <View style = {{width: "100%", borderRadius: SIZES.font, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', marginBottom: -20, paddingHorizontal: SIZES.font, paddingVertical: SIZES.small - 2 , ...SHADOWS.dark}}>
                              <FeatherIcon name = 'search' size={20} color='gray' style = {{ marginRight:  SIZES.base}} />
                              <TextInput placeholder='Search NFTs' style = {{flex: 1}} onChangeText = {onSearch} />
                         </View>
                    </View>
               </ImageBackground>
               
          </View>
     )
}

export default Header