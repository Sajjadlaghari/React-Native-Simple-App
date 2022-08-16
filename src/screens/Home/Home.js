import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';


function Home(props) {

    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);
    return (
        <View style={styles.container}>

            <Image resizeMode='contain' elevation={5} style={styles.image} source={require('../../../assets/logo.jpg')} />
            <View style={styles.inner}>

                <Text style={styles.text}>Stay connect with everyone</Text>
                <Text style={{ fontSize: 15, marginLeft: 15, }} >Sign in with account</Text>

                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        props.navigation.navigate('Login')
                    }}
                >
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Get Started</Text>
                    
                    {/* <FontAwesome5 name={'comments'} size={30} /> */}
                </TouchableOpacity>

            </View>
        </View>

    );
}

export default Home;