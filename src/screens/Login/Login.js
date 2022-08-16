import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {useFunctionalOrientation} from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles';

function Login(props) {
    const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);
//    alert(props?.route?.params?.id)
    return (

        <View style={styles.container}>

            <Text style={styles.headerText}>Welcome To App</Text>

    
            <View style={styles.inner}>
            <ScrollView>
                <View style={styles.loginForm}>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                    />
                    <TouchableOpacity style={styles.Login}
                    onPress ={()=>{
                        props.navigation.navigate('TabNavigation');
                    }}
                    >
                        <Text style={{ textAlign: 'center', color: '#ffff', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:15,color:'#1A73E8',textAlign:'left',marginTop:15,}}>Forgot Password</Text>
                    
                    <TouchableOpacity style={styles.Signup}
                       onPress={() => {
                        props.navigation.navigate('Signup')
                    }}
                    >
                        <Text style={{ textAlign: 'center', color: '#4FC1F9', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.Camera}
                       onPress={() => {
                        props. navigation.navigate('User')
                    }}
                    >
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold' }}>Users Data</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>


            </View>
        </View>

    );
}


export default Login;