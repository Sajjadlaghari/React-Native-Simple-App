import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OlxHome from '../screens/olxHome/olxHome';
import Chats from '../screens/Chats/Chats';
import MyAds from '../screens/MyAds/MyAds'
import Account from '../screens/Accounts/Account'
import Sell from '../screens/Sell/Sell';
import Icon from 'react-native-vector-icons/Ionicons'



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

                        <Icon    name="mail-outline"                      
                        />
                    )
                }}
            />
            <Tab.Screen name="Chats" component={Chats}
                options={{
                    tabBarIcon: () =>
                    (
                        <Icon name="home-outline" size={30} color="#900" />
                    )
                }}
            />

            <Tab.Screen name="Sell" component={Sell}
                options={{
                    // tabBarIcon: () =>
                    // (
                    //     <Icon name='plus' size={30} color='#777' />
                    //     // <Icon name="person" size={30} color="#900" />
                    // )
                }}
            />

            <Tab.Screen name="MyAds" component={MyAds}
                options={{
                    // tabBarIcon: () =>
                    // (
                    //     // <Icon name="person" size={30} color="#900" />
                    // )
                }}
            />

            <Tab.Screen name="Account" component={Account}
                options={{
                    // tabBarIcon: () =>
                    // (
                    //     // <Icon name="person" size={30} color="#900" />
                    // )
                }}
            />
        </Tab.Navigator>

    );
}

export default TabNavigation;