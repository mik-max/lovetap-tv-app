import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import Header from '../components/Header'
import { RectButton } from '../components/Buttons'
import FocusedStatusBar from '../components/FocusedStatusBar'

export default function Home() {
     const image = {uri: 'https://res.cloudinary.com/mike-ik/image/upload/v1686595217/Login_f4simg.png'};
     return (
          <SafeAreaView style={styles.container}>
               <FocusedStatusBar background ='black' />
               <ImageBackground source={image} resizeMode = 'cover' style={styles.image}>
                    <View style={styles.formDiv}>
                         <Text style={{fontSize: 20, fontWeight: "800", color:"white"}}>Sign In</Text>
                         <Text style={{paddingTop: 10, color: "white"}}>New user? <Text style={{fontWeight: '600'}}>Create an account</Text></Text>
                         <View style={{marginTop: 35, }} >
                              <TextInput placeholder='Email address' style={{backgroundColor: 'white', borderRadius: 50, padding: 10, marginBottom: 10,}}  />
                              <TextInput placeholder='Password' style={{backgroundColor: 'white', borderRadius: 50, padding: 10, marginBottom: 10}}  />
                              <RectButton title='Login' fontSize={20} />
                         </View>
                    </View>
                    
                    
               </ImageBackground>
              
          </SafeAreaView>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1
     },
     image: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     formDiv:{
          display:"flex",
          flexDirection: 'column',
          justifyContent: "center",
          backgroundColor: 'hsla(0, 0%, 10%, 0.5)',
          borderRadius: 10,
          height:500,
          width: 300,
          padding:30
     }
})