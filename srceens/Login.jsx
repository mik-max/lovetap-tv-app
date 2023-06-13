import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Dimensions, Switch} from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from '@react-navigation/native'
import { RectButton } from '../components/Buttons'
import image from '../assets/images/loginImg.png'
import google from '../assets/images/Google.png'
import facebook from '../assets/images/Facebook.png'
import Apple from '../assets/images/AppleId.png'
import FocusedStatusBar from '../components/FocusedStatusBar'
const Login = () => {
     const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
     const navigation = useNavigation()
     return (
          <View>
               <FocusedStatusBar background ='black' />
              <View>
                    <Image source={image} resizeMode='cover' style={{width: Dimensions.get("screen").width, height: 250}} />
              </View>
              <Text style={{textAlign: "center", fontSize: 18, fontWeight: "800", paddingTop: 25, textTransform: 'uppercase'}} >Login</Text>
              <View style={{marginTop: 25, paddingHorizontal: 20 }} >
                    <TextInput placeholder='Email address' style={styles.textInput}  />
                    <TextInput placeholder='Password' style={styles.textInput}  />
                    <View style={{display:"flex", justifyContent:"space-between", alignItems: "center", flexDirection:"row"}}>
                         <Switch trackColor={{false: '#767577', true: '#7B16FF'}}thumbColor={isEnabled ? '#3e3e3e' : '#f4f3f4'}ios_backgroundColor="#3e3e3e"onValueChange={toggleSwitch}value={isEnabled} />
                         <Text>Forgot Password?</Text>
                    </View>
                    <RectButton title='Login' fontSize={20}  handlePress= {() => navigation.navigate('Home')} />
                    <View style={{marginTop: 20}}>
                         <Text style={{textAlign: "center",textTransform: 'uppercase', fontSize: 20, fontWeight:"400"}}>OR</Text>
                         <Text style={{textAlign: "center"}}>Login with</Text>
                    </View>
                    <View style={{marginTop: 15, display:"flex", justifyContent:"space-around", alignItems: "center", flexDirection:"row"}}>
                         <Image source={google} style={{width: 40, height:40}} />
                         <Image source={Apple} style={{width: 40, height:40}} />
                         <Image source={facebook} style={{width: 40, height:40}} />
                    </View>
                    <Text style={{textAlign: "center", marginTop:10}}>Don't have an account? <Text style={{color: 'blue', textDecorationLine:"underline", }}>Register now</Text></Text>
               </View>
          </View>
     )
}

export default Login

const styles = StyleSheet.create({
     
     textInput:{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
          borderBottomColor: "black",
          borderBottomWidth: 0.5
     }
})