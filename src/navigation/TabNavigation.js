import React, { useEffect, useState } from 'react';
import { View ,Text} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OlxHome from '../screens/olxHome/olxHome';
import Chats from '../screens/Chats/Chats';
import MyAds from '../screens/MyAds/MyAds'
import Account from '../screens/Accounts/Account'
import Sell from '../screens/Sell/Sell';
import IconEntypo from 'react-native-vector-icons/Entypo'
import Iconic from 'react-native-vector-icons/Ionicons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'



const Tab = createBottomTabNavigator();

function TabNavigation(props) {

    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false

            }}
        >
            <Tab.Screen name="Home" component={OlxHome}
                options={{
                    tabBarIcon: () =>
                    (

                        <IconEntypo    name="home"  size={35} color="#000" />
                    )
                }}
            />
            <Tab.Screen name="Chats" component={Chats}
                options={{
                    tabBarIcon: () =>
                    (
                        <Iconic name="chatbox-ellipses-outline" size={30} color="#000" />
                    )
                }}
            />

            <Tab.Screen name="Sell" component={Sell}
              
                 
                options={{
                    tabBarButton:()=>
                    {
                       return <TouchableOpacity 
                       onPress={()=>
                    {
                        props.navigation.navigate('DrawerNavigation')
                    }}
                       >
                        <Text>
                        <IconAntDesign name='plussquare' size={32} color='#777' />
                            
                              </Text>
                       </TouchableOpacity>
                    },
                    tabBarIcon: () =>
                    (
                        <IconAntDesign name='plussquare' size={33} color='#777' />
                        // <Icon name="person" size={30} color="#900" />
                        
                    )
                    
                }}
                
            />

            <Tab.Screen name="MyAds" component={MyAds}
                options={{
                    tabBarIcon: () =>
                    (
                        <IconAntDesign name="hearto" size={30} />
                    )
                }}
            />

            <Tab.Screen name="Account" component={Account}
                options={{
                    tabBarIcon: () =>
                    (
                        <IconAntDesign name="user" size={30} />
                    )
                }}
            />
        </Tab.Navigator>

    );
}

export default TabNavigation;