import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Switch } from 'react-native'
import React from 'react'
import FocusedStatusBar from '../components/FocusedStatusBar';
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Ionicons, SimpleLineIcons, Fontisto } from "@expo/vector-icons";
import { SHADOWS, FONTS } from '../constants';
import { useState } from 'react';


const Profile = () => {

   const [isEnabled, setIsEnabled] = useState(false);
     const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <FocusedStatusBar />
      <View style={{ flex: 1, backgroundColor: "#DFE7EF", }}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text
              style={{ color: "#181D27", fontSize: 20, fontWeight: "bold" }}
            >
              Profile
            </Text>
          </View>
          <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <View style={styles.profileHero}>
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image source={require("../assets/images/userImage.png")} style={styles.profileImg}/>
                <View
                  style={{ marginLeft: 10, flex: 0, flexDirection: "column", justifyContent:"space-between"}}
                >
                  <Text style={{ fontSize: 14, color: "white", marginBottom: 9, fontWeight:'700', }}>
                    Pleroma Manuel
                  </Text>
                  <Text style={styles.handle}>@p_manuel</Text>
                </View>
              </View>
              <FontAwesomeIcon name="pencil" color={"#fff"} size={20} />
            </View>
            <View style={{backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:18, borderRadius:5,marginBottom:30}} >
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <FeatherIcon name='user' color={"#0601B4"} size={22} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 14,fontWeight:'700', }} >My Account </Text>
                        <Text style={{ fontSize: 12,fontWeight:'400',color:"#ABABAB", }}>Make changes to your account</Text>
                      </View>
                    </View>
                    <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center" }}>
                          <EntypoIcon name='warning' color={"#EC5865"} size={20} style={{marginRight:20}} />
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <FeatherIcon name='menu' color={"#0601B4"} size={22} />
                          <Image source={"../assets/images/RedWarning.png"} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 14,fontWeight:'700', }} >My Communities </Text>
                        <Text style={{ fontSize: 12,fontWeight:'400',color:"#ABABAB", }}>Manage your saved account</Text>
                      </View>
                    </View>
                    <View>
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <SimpleLineIcons name='lock' color={"#0601B4"} size={22} />
                          
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 14,fontWeight:'700', }} >Face ID / Touch ID</Text>
                        <Text style={{ fontSize: 12,fontWeight:'400',color:"#ABABAB", }}>Manage your device security</Text>
                      </View>
                    </View>
                    <View>
                            <Switch trackColor={{false: '#767577', true: '#7B16FF'}}thumbColor={isEnabled ? '#3e3e3e' : '#f4f3f4'}ios_backgroundColor="#3e3e3e"onValueChange={toggleSwitch}value={isEnabled} />
                    </View>
                </View>
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <Ionicons name='shield-checkmark-outline' color={"#0601B4"} size={22} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 14,fontWeight:'700', }} >Two-Factor Authentication </Text>
                        <Text style={{ fontSize: 12,fontWeight:'400',color:"#ABABAB", }}>Further secure your account for safety</Text>
                      </View>
                    </View>
                    <View>
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <FeatherIcon name='log-out' color={"#0601B4"} size={22} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 14,fontWeight:'700', }} >Log out </Text>
                        <Text style={{ fontSize: 12,fontWeight:'400',color:"#ABABAB", }}>Want to log out of your account?</Text>
                      </View>
                    </View>
                    <View>
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
             
            </View>
            <Text style={{marginBottom:30, color:"#181D27",opacity:0.8, fontSize:14}} >More</Text>
             <View style={{backgroundColor:'#fff', paddingHorizontal:15, paddingVertical:18, borderRadius:5,marginBottom:30}} >
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginBottom:30 }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <FeatherIcon name='bell' color={"#0601B4"} size={22} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 13,fontWeight:'500', color:"#181D27",font: FONTS.bold }} >
                         Help & Support </Text>
                      </View>
                    </View>
                    <View>
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
                <View style={{ flex:0, flexDirection:"row", justifyContent:"space-between", alignItems:"center",  }}>
                    <View style={{ flex:1, flexDirection:"row", justifyContent:"space-evenly", alignItems:"center",  }}>
                      <View style={{backgroundColor:"#F6F7F8", width:50, height:50, borderRadius:40, justifyContent:"center", alignItems:"center", flex:0, marginRight:10 }} >
                          <Fontisto name='heart-alt' color={"#0601B4"} size={22} />
                      </View>
                      <View style={{ flex:1, flexDirection:"column", justifyContent:"space-between", alignItems:"flex-start" }} >
                        <Text style={{ fontSize: 13,fontWeight:'500', color:"#181D27",font: FONTS.bold }} >About Lovetap Networks</Text>
                        
                      </View>
                    </View>
                    <View>
                          <EntypoIcon name='chevron-small-right' color={"#0601B4"} size={20} />
                    </View>
                </View>
               
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Profile

const styles = StyleSheet.create({
  headerContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  profileHero: {
    backgroundColor: "#9B51E0",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
    paddingHorizontal: 26,
    borderRadius: 5,
    boxShadow: SHADOWS.medium,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 14,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 40,
  },
  handle: {
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 12,
    color: "#D7D7D7",
  },
});