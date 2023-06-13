import { View, Text, Image, TextInput, SafeAreaView, StyleSheet, Dimensions, Switch} from 'react-native'
import React, {useState} from 'react'
import FocusedStatusBar from "../components/FocusedStatusBar";
import { BackButton } from '../components/Buttons';
import image from "../assets/images/loginImg.png";
import google from "../assets/images/Google.png";
import facebook from "../assets/images/Facebook.png";
import Apple from "../assets/images/AppleId.png";
import { RectButton } from '../components/Buttons'

export default function Signup() {
    // const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <BackButton iconColor={"#24292E"}  handlePress={()=>{navigation.goBack()}}/>
      <View>
        <Image
          source={image}
          resizeMode="cover"
          style={{ width: Dimensions.get("screen").width, height: 250 }}
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
      <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
        <TextInput placeholder="Full Name" style={styles.textInput} />
        <TextInput placeholder="Email address" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
        <TextInput placeholder="Confirm Password" style={styles.textInput} />
        {/* <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Switch
            trackColor={{ false: "#767577", true: "#7B16FF" }}
            thumbColor={isEnabled ? "#3e3e3e" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>Forgot Password?</Text>
        </View> */}
        <RectButton title="Signup" fontSize={20} />
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
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
});