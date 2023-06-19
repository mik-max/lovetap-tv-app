import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Dimensions, Switch} from 'react-native'
import React, {useState} from 'react'
import {useNavigation, useLinkTo} from '@react-navigation/native'
import { RectButton } from '../components/Buttons'
import image from '../assets/images/loginImg.png'
import google from '../assets/images/Google.png'
import facebook from '../assets/images/Facebook.png'
import Apple from '../assets/images/AppleId.png'
import FocusedStatusBar from '../components/FocusedStatusBar'
import Icon from "react-native-vector-icons/Ionicons";



const Login = () => {
     const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

     const linkTo = useLinkTo();
     const navigation = useNavigation();

     const [emailInputValue, setEmailInputValue] = useState("");
     const handleEmailChange = (text) => {
       setEmailInputValue(text);
     };

     const [passwordVisible, setPasswordVisible] = useState(true);

     const [passwordInputValue, setPasswordInputValue] = useState("");
     const handlePasswordChange = (text) => {
       setPasswordInputValue(text);
     };

     return (
          <View>
               <FocusedStatusBar background ='black' />
              <View>
                    <Image source={image} resizeMode='cover' style={{width: Dimensions.get("screen").width, height: 250}} />
              </View>
              <Text style={{textAlign: "center", fontSize: 18, fontWeight: "800", paddingTop: 25, textTransform: 'uppercase'}} >Login</Text>
              <View style={{marginTop: 25, paddingHorizontal: 20 }} >
                    <TextInput placeholder='Email address' value={emailInputValue}
                    onChangeText={handleEmailChange} style={styles.textInput}  />
                    <View style={styles.passwordContainer}>
                         <TextInput placeholder="Password" style={styles.PasswordInput} secureTextEntry={passwordVisible} value={passwordInputValue} onChangeText={handlePasswordChange}
                          />
                         <Icon onPress={() => { setPasswordVisible(!passwordVisible); }}
                         name={passwordVisible ? "eye" : "eye-off"} style={styles.eyeIcon} color="#24292E" size={20}/>
                    </View>
                    <View style={{display:"flex", justifyContent:"space-between", alignItems: "center", flexDirection:"row"}}>
                         <Switch trackColor={{false: '#767577', true: '#7B16FF'}}thumbColor={isEnabled ? '#3e3e3e' : '#f4f3f4'}ios_backgroundColor="#3e3e3e"onValueChange={toggleSwitch}value={isEnabled} />
                         <Text>Forgot Password?</Text>
                    </View>
                    <RectButton title='Login' fontSize={20}  handlePress={() => navigation.navigate('Home')} />
                    <View style={{marginTop: 20}}>
                         <Text style={{textAlign: "center",textTransform: 'uppercase', fontSize: 20, fontWeight:"400"}}>OR</Text>
                         <Text style={{textAlign: "center"}}>Login with</Text>
                    </View>
                    <View style={{marginTop: 15, display:"flex", justifyContent:"space-around", alignItems: "center", flexDirection:"row"}}>
                         <Image source={google} style={{width: 40, height:40}} />
                         <Image source={Apple} style={{width: 40, height:40}} />
                         <Image source={facebook} style={{width: 40, height:40}} />
                    </View>
                    <Text style={{textAlign: "center", marginTop:10}}>Don't have an account?{" "} <Text style={{color: 'blue', textDecorationLine:"underline", }} 
                    onPress={() => navigation.navigate('Signup')}> Register Now</Text></Text>
               </View>
          </View>
     )
}

export default Login

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  passwordContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  eyeIcon: {
    padding: 10,
    position: "absolute",
    right: 2,
    bottom: 22,
  },
  PasswordInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 6,
    marginBottom: 18,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
});