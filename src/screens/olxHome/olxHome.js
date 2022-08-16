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
function OlxHome(props) {
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
        {data.map((item, index) => {
          return (
            <TouchableOpacity style={styles.innerView}
              onPress={() => {
                props.navigation.navigate('Details', { id: item.id })
              }
              }
              key={index}
            >
              <Image style={styles.image} resizeMode="contain" source={{ uri: 'https://carzclan.com/wp-content/uploads/2021/06/1.Toyota-200-Series-Land-Cruiser-SCL-Global.jpg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Tables with Chairs</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 1300</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </TouchableOpacity>
          )
        })}
       </View>
    </ScrollView>
  );
}

export default OlxHome;