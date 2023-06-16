import { View, Text, Image,TextInput, SafeAreaView, StyleSheet, Dimensions, Switch} from 'react-native'
// import {} from 'react-native-paper'
import React, {useState} from 'react'
import FocusedStatusBar from "../components/FocusedStatusBar";
import { BackButton } from '../components/Buttons';
import image from "../assets/images/logina.jpg";
import google from "../assets/images/Google.png";
import facebook from "../assets/images/Facebook.png";
import Apple from "../assets/images/AppleId.png";
import { RectButton } from '../components/Buttons';
import Icon from 'react-native-vector-icons/Ionicons';
 import { Formik, Form, Field, FormikProvider } from "formik";
 import * as Yup from "yup";

import {validateEmail, validatePassword} from '../utilities/validations'



export default function Signup() {

  const signUpData = {
    fullName: fullNameInputValue,
    email: emailInputValue,
    password: passwordInputValue
  }

     const [fullNameInputValue, setFullNameInputValue] = useState("");
     const handleFullNameChange = (text) => {
       setFullNameInputValue(text);
     };

    const [emailIsValid, setEmailIsValid] = useState(true)
    const [emailInputValue, setEmailInputValue] = useState("");
    const handleEmailChange = (text) => {
      setEmailInputValue(text);
    };

    const [passwordIsValid, setPasswordIsValid] = useState(true)
    const [passwordVisible, setPasswordVisible] = useState(true)
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(true)

    const [passwordInputValue, setPasswordInputValue] = useState("");
    const handlePasswordChange = (text) => {
      setPasswordInputValue(text);
    }
    const [passwordStrenghtText, setPasswordStrenghtText] = useState('');
   
    const showPasswordStrenght = () =>{
      if (passwordIsValid) {
        setPasswordStrenghtText('Strong Password***')
      }else{setPasswordStrenghtText("Weak Password***");}
    }


    const [passwordConfirmValue, setPasswordConfirmValue] = useState("");
    const handleConfirmChange = (text) => {
      setPasswordConfirmValue(text);
    }

     const [isConfirmed, setIsConfirmed] = useState(true)
     const confirm = (password, confirmPassword) => {
       if (password ===  confirmPassword) {
         setIsConfirmed(true);
       } else {
         setIsConfirmed(false);
       }
     };
   
      const handleButtonPress = () => {
      console.log(signUpData)
      };
  return (
    <SafeAreaView style={styles.container}>
      <BackButton
        iconColor={"#24292E"}
        handlePress={() => {
          navigation.goBack();
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: 258, height: 248 }}
        />
      </View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 18,
          fontWeight: "800",
          paddingTop: 25,
          textTransform: "uppercase",
        }}
      >
        Signup
      </Text>
     
      <View style={{ paddingHorizontal: 20 }}>
        <TextInput
          placeholder="Full Name"
          value={fullNameInputValue}
          onChangeText={handleFullNameChange}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Email address"
          value={emailInputValue}
          onChangeText={handleEmailChange}
          style={styles.textInput}
          onChange={() => {
            setEmailIsValid(validateEmail(emailInputValue));
          }}
        />
        {emailIsValid == false && emailInputValue !== "" ? (
          <Text
            style={{
              color: emailIsValid == false && "#DE5E78",
              fontSize: 11,
              fontStyle: "italic",
              alignSelf: "flex-end",
            }}
          >
            {" "}
            {"Invalid email format"}{" "}
          </Text>
        ) : (
          <></>
        )}
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            style={styles.PasswordInput}
            secureTextEntry={passwordVisible}
            value={passwordInputValue}
            onChangeText={handlePasswordChange}
            onChange={() => {
              setPasswordIsValid(validatePassword(passwordInputValue)),
                showPasswordStrenght();
            }}
          />
          <Icon
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}
            name={passwordVisible ? "eye" : "eye-off"}
            style={styles.eyeIcon}
            color="#000"
            size={20}
          />
        </View>
        {passwordStrenghtText !== "" && (
          <Text
            style={{
              color: passwordIsValid ? "#24997F" : "#D26D2B",
              fontSize: 11,
              fontStyle: "italic",
              alignSelf: "flex-end",
            }}
          >
            {passwordStrenghtText}
          </Text>
        )}

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirm Password"
            style={styles.PasswordInput}
            secureTextEntry={confirmPasswordVisible}
            value={passwordConfirmValue}
            onChangeText={handleConfirmChange}
            onChange={() => {
              confirm(passwordInputValue, passwordConfirmValue);
            }}
          />
          <Icon
            onPress={() => {
              setConfirmPasswordVisible(!confirmPasswordVisible);
            }}
            name={confirmPasswordVisible ? "eye" : "eye-off"}
            style={styles.eyeIcon}
            color="#000"
            size={20}
          />
        </View>
        {isConfirmed == false && passwordConfirmValue !== "" ? (
          <Text
            style={{
              color: isConfirmed == false && "#DE5E78",
              fontSize: 11,
              fontStyle: "italic",
              alignSelf: "flex-end",
            }}
          >
            {"Password do not match"}
          </Text>
        ) : (
          <></>
        )}

        <RectButton title="Signup" fontSize={20} onPress={handleButtonPress} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            fontSize: 20,
            fontWeight: "400",
          }}
        >
          OR
        </Text>
        <Text style={{ textAlign: "center" }}>Signup with</Text>
      </View>
      <View
        style={{
          marginTop: 15,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Image source={google} style={{ width: 40, height: 40 }} />
        <Image source={Apple} style={{ width: 40, height: 40 }} />
        <Image source={facebook} style={{ width: 40, height: 40 }} />
      </View>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Already have an account?{" "}
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          Login Now
        </Text>
      </Text>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "white",
    padding: 6,
    marginBottom: 18,
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
    position: 'absolute',
    right: 2,
    bottom: 22
  },
  PasswordInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 6,
    marginBottom: 18,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  infoText:{
    fontSize:"15px",
  },
})