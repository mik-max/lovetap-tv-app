import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { PaperProvider } from "react-native-paper";
import { StyleSheet, Text, View } from 'react-native';
import Home from './srceens/Home';
import Signup from './srceens/SignUp';
import Login from './srceens/Login';
const theme = {
     ...DefaultTheme,
     colors: {
          ...DefaultTheme.colors,
          background: "transparent"
     }
}
const Stack = createStackNavigator();
export default function App() {
  return (
     <PaperProvider>
          <NavigationContainer theme={theme} >
               <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Signup" >
                    <Stack.Screen name = "Home" component={Home} />
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name="Signup" component={Signup} />
               </Stack.Navigator>
          </NavigationContainer>
     </PaperProvider>
 
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
