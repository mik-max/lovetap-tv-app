import { View, Text, SafeAreaView, StyleSheet, Dimensions, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import { assets } from '../constants'
import Header from '../components/Header'
import { RectButton } from '../components/Buttons'
import Footer from '../components/Footer'
import FocusedStatusBar from '../components/FocusedStatusBar'

export default function Home() {
     return (
          <SafeAreaView style={styles.container}>
               <FocusedStatusBar background ='black' />
               <Header/>
               <Footer/>
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
})
