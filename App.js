import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';
import Home from './srceens/Home';
import Signup from './srceens/SignUp';
import Login from './srceens/Login';
import Live from './srceens/Live';
import Profile from './srceens/Profile';
import News from './srceens/News';
import Give from './srceens/Give';
import * as Font from "expo-font";
import { useEffect } from 'react';

const theme = {
     ...DefaultTheme,
     colors: {
          ...DefaultTheme.colors,
          background: "transparent"
     }
}
const Stack = createStackNavigator();
export default function App() {
     //   useEffect(() => {
     //     // Load the custom font
     //     Font.loadAsync({
     //       'DMSans-Regular': require("./assets/fonts/DMSans-Regular.ttf"),
     //     });
     //   }, []);
  return (
     <NavigationContainer theme={theme} >
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Login" >
               <Stack.Screen name = "Home" component={Home} />
               <Stack.Screen name='Login' component={Login} />
               <Stack.Screen name="Signup" component={Signup} />
               <Stack.Screen name='News' component={News} />
               <Stack.Screen name='Live' component={Live} />
               <Stack.Screen name='Profile' component={Profile} />
               <Stack.Screen name='Give' component={Give} />
          </Stack.Navigator>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
