import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IconAntDesign from 'react-native-vector-icons/AntDesign'


const Drawer = createDrawerNavigator();


function Feed()
{
    return(
        <View>
            <Text>Feed Screen</Text>
        </View>
    )
}


function WiFi()
{
    return(
        <View>
            <Text>Wi-Fi</Text>
        </View>
    )
}

function Seeting()
{
    return(
        <View>
            <Text>Setting</Text>
        </View>
    )
}

function Dual_SIMs()
{
    return(
        <View>
            <Text>Dual SIMS and Mobile Network</Text>
        </View>
    )
}

function System()
{
    return(
        <View>
            <Text>System Updated</Text>
        </View>
    )
}

function Security()
{
    return(
        <View>
            <Text>Security</Text>
        </View>
    )
}

function Privacy()
{
    return(
        <View>
            <Text>Privacy</Text>
        </View>
    )
}

function Battery()
{
    return(
        <View>
            <Text>Battery</Text>
        </View>
    )
}


function DrawerNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Seeting" component={Seeting} 
        options={{
            tabBarIcon: () =>
            (

                <IconEntypo    name="home"  size={35} color="#000" />
            )
        }}
      
      />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Wi-Fi" component={WiFi} />
      <Drawer.Screen name="Dual_SIMs" component={Dual_SIMs} />
      <Drawer.Screen name="System" component={System} />
      <Drawer.Screen name="Security" component={Security} />
      <Drawer.Screen name="Privacy" component={Privacy} />
      <Drawer.Screen name="Battery" component={Battery} />
    </Drawer.Navigator>
  );
}
export default DrawerNavigation;