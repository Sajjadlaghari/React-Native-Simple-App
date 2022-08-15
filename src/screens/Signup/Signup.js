import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useFunctionalOrientation} from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles';

function Signup(props) {
    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);

    return (
        <View style={styles.container}>

            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', marginTop: 15, marginLeft: 20, }}>Welcome To App</Text>
            <View style={styles.inner}>
            <ScrollView>
                <View style={styles.loginForm}>

                    <TextInput
                    
                        style={styles.input}
                        placeholder='Enter Email'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                    />

                    <TextInput
                        style={styles.input}
                        placeholder='Confirm Password'
                    />                
                    <Text style={{marginLeft:20,marginTop:20,marginBottom:30,}}>
                        By Signing up you agree to our Term of services {'\n'} and Privacy Policy
                    </Text>
                    <TouchableOpacity style={styles.Signup}
                    >

                        <Text style={{ textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


            </View>

        </View>
    );
}
export default Signup;