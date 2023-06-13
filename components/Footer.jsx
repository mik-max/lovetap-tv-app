import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { SHADOWS } from '../constants'


const Footer = () => {
  return (
    <View style={[styles.footer, styles.shadowProp, { ...SHADOWS.dark}]}>
          <View style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', }}>
               <EntypoIcon name="news" size={30} color="orange"  />
          </View>
          <View style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', }}>
               <FontAwesomeIcon name="bolt" size={30} color="#0db5e8"  />
          </View>
          <View style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#7B16FF'}}>
               <FeatherIcon name="tv" size={30} color="white"  />
          </View>
          <View style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', }}>
               <EntypoIcon name="heart" size={30} color="red"  />
          </View>
          <View style={{width: 45, height: 45, borderRadius: 50, display:'flex', justifyContent:'center', alignItems:'center', }}>
               <FeatherIcon name="user" size={30} color="#1cbc6cfb"  />
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
     position: 'absolute',
     bottom: 0,
     left: 0,
     right:0,
     zIndex:100,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  shadowProp:{
     shadowColor: '#171717',
     shadowOffset: {width: -2, height: 4},
     shadowOpacity: 0.2,
     shadowRadius: 3,
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default Footer;
