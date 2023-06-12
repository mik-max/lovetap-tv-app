import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Home from './srceens/Home';
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
               {/* <Stack.Screen name='Details' component={Details} /> */}
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
