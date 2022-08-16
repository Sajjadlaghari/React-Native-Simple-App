/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { CameraRoll, StyleSheet,  Text, View,} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import Home from '../screens/Home/Home';

 import Login from '../screens/Login/Login'
import Signup from '../screens/Signup/Signup';
import User from '../screens/User/User';
import TabNavigation from './TabNavigation'; 
import Details from '../screens/details/details';
import DrawerNavigation from './DrawerNavigation';
 const Stack = createStackNavigator();
 
 const RootNavigation = (props) => {
 
   return (
 
     <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
       <Stack.Screen name="Home" component={Home} />
       <Stack.Screen name="Login" component={Login} initialParams={{id:1}}/>
       <Stack.Screen name="Signup" component={Signup} />
       <Stack.Screen name="User" component={User} />
       <Stack.Screen name="TabNavigation" component={TabNavigation} />
       <Stack.Screen name="Details" component={Details} />
       <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
     </Stack.Navigator>
     </NavigationContainer>
     
   );
 };
 
 const styles = StyleSheet.create({
 
 });
 
 export default RootNavigation;
 