import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResponsiveStyle from './styles';

const { width, height } = Dimensions.get('screen')
const data = new Array(10).fill(2);


function Chats(props) {
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
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', marginTop: 16, color: 'blue', fontSize: 20, fontWeight: 'bold' }}>CHATS</Text>
      <ScrollView>
      {data.map(item => {
        return (
          <View style={styles.innerView}>
            <View>
            <Image style={styles.image} resizeMode='contain' source={{ uri: 'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000' }} />
            </View>
            <View style={styles.userInfo}>
            <Text style={{ marginTop: 5, marginLeft: 10, fontWeight: 'bold', fontSize: 17 }}>Muhammad Ayaz:</Text>
            <Text style={{ marginTop: 10, marginLeft: 10,  fontSize: 15 }}>Hello Dear How Are You:</Text>
            </View>
            
        </View>
        )
      })}
      </ScrollView>

    </View>

  );
}

export default Chats;