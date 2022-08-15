import React, {useEffect, useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {useFunctionalOrientation} from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles';

const {width,height } =Dimensions.get('screen')
function User(props) {
  const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);

    const [userData,setUserData]=useState();
    const [isLoaded,setIsLoaded]=useState(true);

        
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

              <FlatList 
            data ={userData}
            renderItem={({item,index})=>{
                return( 
                    <View style={styles.user}>
                       <Image resizeMode='contain' style={styles.image} source={{uri:'https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'}}/>
                        <Text style={styles.text}>Name : {item.name}</Text>
                        <Text style={styles.text}>Email : {item.email}</Text>
                    </View>
                )
            }}
              />

            </View>

    );
}

export default User;