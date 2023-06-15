import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './srceens/Home';
import Login from './srceens/Login';
import Live from './srceens/Live';
import Profile from './srceens/Profile';
import News from './srceens/News';
import Give from './srceens/Give';

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
     <NavigationContainer theme={theme} >
          <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "Home" >
               <Stack.Screen name = "Home" component={Home} />
               <Stack.Screen name='Login' component={Login} />
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
