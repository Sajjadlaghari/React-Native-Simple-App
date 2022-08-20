/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './src/navigation/RootNavigation';
import { configureStore } from './src/redux/configureStore';
import {Provider} from 'react-redux';

 
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}




const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

 const store=configureStore();
function App() {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => setData(json))
    console.log(data);
  }, []);


  function display() 
  {
    alert('Working')
    console.log("Type of this is "+typeof data);

    return (
         data.map(item =>{
          <Text>{item.title}</Text>
         })
    );
  };

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <View>
    //  <Text>Hello</Text>
    //  <Button title='Click Me' onPress={display} />
    // </View>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
    
  );
}

export default App;