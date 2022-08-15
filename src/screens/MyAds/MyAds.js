import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResponsiveStyle from './styles';

const { width, height } = Dimensions.get('screen')


function MyAds(props) {
  const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);

  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        setUserData(response)
        //  console.log(response)
      }
      )
  }, []);


  return (
    <View style={{flex:1,width:'100%',height:'100%'}}>
      <Text style={{fontSize:40}}>MY Ads</Text>
    </View>

  );
}

export default MyAds;