import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import Header from '../components/Header'
import { RectButton } from '../components/Buttons'
import Login from '../components/Login'
import FocusedStatusBar from '../components/FocusedStatusBar'

export default function Home() {
     const image = {uri: 'https://res.cloudinary.com/mike-ik/image/upload/v1686595217/Login_f4simg.png'};
     return (
          <SafeAreaView style={styles.container}>
               <FocusedStatusBar background ='black' />
               <Login/>
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
     // formDiv:{
          
     //      display:"flex",
     //      flexDirection: 'column',
     //      justifyContent: "center",
     //      backgroundColor: 'rgba(255, 255, 255, 0.1)',
     //      boxshadow: '20px 20px 50px rgba(0, 0, 0, 0.5)',
     //      borderRadius: 10,
     //      height:500,
     //      width: 300,
     //      padding:30
     // }
})
// "hsla(0, 0%, 10%, 0.5)";