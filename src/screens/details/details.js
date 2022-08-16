import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResponsiveStyle from './styles';

const { width, height } = Dimensions.get('screen')

const data = new Array(5).fill({ id: 1 })
const data1 = new Array(2).fill({ id: 1 })
const data2 = new Array(2).fill({ id: 1 })
function Details(props) {
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
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={{ uri: 'https://carzclan.com/wp-content/uploads/2021/06/1.Toyota-200-Series-Land-Cruiser-SCL-Global.jpg' }} />
        <View style={{elevation:1}}>
        <View style={styles.details}>
          <Text style={{ fontWeight: 'bold', marginBottom: 5, marginTop: 10, marginLeft: 20 }}>RS 1300</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 13, marginLeft: 20, }}>Beautifull Car</Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.location}>
              <Text style={{ width: 200, marginBottom: 5, marginLeft: 20 }}>Gulshan E Iqbal Block-18 Karachi</Text>
            </View>
            <View style={styles.location}>
              <Text style={{ width: 150, marginBottom: 5, marginLeft: 20 }}>28/07/2022</Text>
            </View>
          </View>
        </View>
        </View>

         <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View style={{width:280}}>
            <Text style={{fontSize:16,marginLeft:10,fontWeight:'bold'}}>Details</Text>
            <Text style={{fontSize:14,marginTop:6,marginLeft:10}}>Year</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>KM's Driven</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Make</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Model</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Fuel</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Registration City</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Car Document</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Assembly</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Condition</Text>
          </View>
          <View>
          <Text style={{fontSize:14,marginTop:6,marginLeft:10}}></Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>2018</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>73,000</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Toyota</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Aqua</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Hybrid</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Karachi</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Orignal</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Imported</Text>
            <Text style={{fontSize:14,marginTop:6, marginLeft:10}}>Used</Text>
          </View>
         </View>
         <View>
          <Text style={{fontSize:15,marginLeft:10,fontWeight:'bold'}}>Description</Text>
          <Text style={{width:340,marginLeft:10,}}>Toyota Aqua</Text>
          <Text style={{width:340,marginLeft:10}}>Model 2018</Text>
          <Text style={{width:340,marginLeft:10,}}>Registration 2020</Text>
          <Text style={{width:340,marginLeft:10,}}>S style package Push Start</Text>
          <Text style={{width:340,marginLeft:10,}}>1st Owner</Text>
          <Text style={{width:340,marginLeft:10,}}>Battery 90 Plus</Text>
          <Text style={{width:340,marginLeft:10,}}>Abs 100%</Text>
          <Text style={{width:340,marginLeft:10,}}>Transfer Must</Text>
          <Text style={{width:340,marginLeft:10,}}>Just Like a Zero Meter Car. All Servic History log maintained</Text>
         </View>
      </View>
    </ScrollView>
  );
}

export default Details;