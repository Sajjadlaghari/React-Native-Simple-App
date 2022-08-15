import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResponsiveStyle from './styles';

const { width, height } = Dimensions.get('screen')

const data = new Array(2).fill(1)
const data1 = new Array(2).fill(1)
const data2 = new Array(2).fill(1)
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
        {data.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://www.unopiu.com/media/wysiwyg/_category-slides/96/101/collezione_les_arcs_2022.jpg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Tables with Chairs</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 1300</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://cdn.techjuice.pk/wp-content/uploads/2021/12/laptops-lowres-2x1-.jpeg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>MackBook Laptop</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 75000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://www.techadvisor.com/wp-content/uploads/2022/06/best_smartphone_apr_2022_hero.jpg?quality=50&strip=all' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>OPPO A32 </Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 22000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data2.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://lh4.googleusercontent.com/AZjrA9yb5XYMwR0xC5mGFvKCUqbugRbdZPljV5z1ZDHDheciAA2EsSjYxDSD-SP3f6sszO_9Infk3WpFF2gInkC4Lsf9ALr7AS2956MdTC6_g4jigL6_Ip7Ck3YYFD-vWdBfh6E2fDR3oEsuFQ' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Old Alto 2007 Model</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 800000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}
        {data2.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://sellobuyo.com/storage/files/pk/494/thumb-816x460-77aa4514c66f126680d4665c0e14a066.png' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Toyota Land Cruiser ZX V8 Model 2014 for sale in Lahore</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 43,000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data2.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://carrosnovos.net.br/wp-content/uploads/2015/11/lancamento-novo-corolla.jpg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Itens de Série, Preço, Fotos - CARROS 2022</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 43,000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}


        {data2.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://blog.olx.com.pk/wp-content/uploads/2021/10/1-1-1024x576.jpg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>ALTO 2020 Model</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 1533000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data2.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/photos/modern-apartment-buildings-on-a-sunny-day-with-a-blue-sky-picture-id1177797403?k=20&m=1177797403&s=612x612&w=0&h=bfprQyZxMluJaAfl2NyzIndyJDOoNGgSh8eOegCsAB4=' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>Flat For Sell</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 3533000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}



        {data1.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/photos/modern-power-home-desktop-computer-pc-system-picture-id184694550?k=20&m=184694550&s=612x612&w=0&h=hj-ymNrKBmg75KfMp2ilJUrvkESKW9KLAf6vGwFoyyI=' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>DESKTOP COMPUTER</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 9000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}

        {data1.map(item => {
          return (
            <View style={styles.innerView}>
              <Image style={styles.image} source={{ uri:'https://www.teclasap.com.br/wp-content/uploads/2009/09/house-1.jpg' }} />
              <Text style={{ flexWrap: 'wrap', width: 160, marginBottom: 5, marginTop: 7, marginLeft: 4 }}>House for Rent</Text>
              <Text style={{ fontWeight: 'bold', marginBottom: 5, marginLeft: 4 }}>RS 45000</Text>
              <Text style={{ marginBottom: 5, marginLeft: 4, fontSize: 12 }}>Karachi University Road</Text>
            </View>
          )
        })}
      </View>
    </ScrollView>
  );
}

export default OlxHome;