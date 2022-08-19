import React, { useEffect, useState } from 'react';
import { View, FlatList, Text,StyleSheet ,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();



function Seeting() {
    return (
        <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={{ fontSize: 12, color: 'purple', fontWeight: 'bold', padding: 10 }}>MANAGE PEOPLES</Text>
            <View style={{ padding: 5, flexDirection: 'row', width: '100%', backgroundColor: '#fff' }}>
                <Image style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#000' }} source={{ uri: 'https://www.kindpng.com/picc/m/63-632043_office-woman-png-transparent-png.png' }} />
                <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Diana Shelton</Text>
                        <Text style={{ paddingLeft: 10, }}>Chief Design Officer</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text> <MaterialIcons size={20} name="arrow-forward-ios" /></Text>
                    </View>
                </View>
            </View>
            <View style={{ padding: 5, marginTop: 5, flexDirection: 'row', width: '100%', backgroundColor: '#fff' }}>
                <Image style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#000' }} source={{ uri: 'https://thumbs.dreamstime.com/b/handsome-man-hair-style-beard-beauty-face-portrait-fashion-male-model-black-hair-high-resolution-handsome-man-125031765.jpg' }} />
                <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Ricky Mclaughin</Text>
                        <Text style={{ paddingLeft: 10, }}>Senor UX Designer</Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "orange" }}>Sign out <MaterialIcons color={'black'} size={20} name="arrow-forward-ios" /></Text>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, paddingTop: 10 }}>
                <Text style={{ fontSize: 12, color: 'purple', fontWeight: 'bold', paddingLeft: 10, paddingTop: 5, paddingBottom: 5 }}>REWARD</Text>
                <View style={{ padding: 5, flexDirection: 'row', width: '100%', backgroundColor: '#fff' }}>
                    <Image style={{ width: 40, height: 40, borderRadius: 30, justifyContent: 'center' }} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyj26xCeDJT5eY5ru8NvO-UX2Zn4kb-_YXVw&usqp=CAU' }} />
                    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Bitcoin Local Offers</Text>
                            <Text style={{ paddingLeft: 10, }}>Lorem Lorem Lorem Lorem</Text>
                        </View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text> <MaterialIcons size={20} name="arrow-forward-ios" /></Text>
                        </View>

                    </View>
                </View>
                <Text style={{ padding: 15 }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Text>
                <View style={{ paddingLeft: 10 }}>
                    <Text>CONFIGURATION</Text>
                </View>
                <View style={{ padding: 5, flexDirection: 'row', width: '100%', backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Recieve Updates</Text>
                            <Text style={{ paddingLeft: 10, }}>Lorem Lorem Lorem Lorem</Text>
                        </View>

                        <View style={{ justifyContent: 'center', }}>
                            <Text>Push <MaterialIcons size={20} name="arrow-forward-ios" /></Text>
                        </View>

                    </View>
                </View>
                <View style={{ padding: 5, flexDirection: 'row', marginTop: 5, width: '100%', backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Discount & Deals</Text>
                            <Text style={{ paddingLeft: 10, }}>Lorem Lorem Lorem Lorem</Text>
                        </View>

                        <View style={{ justifyContent: 'center', }}>
                            <Text>Everyday<MaterialIcons size={20} name="arrow-forward-ios" /></Text>
                        </View>

                    </View>
                </View>
                <View style={{ padding: 5, flexDirection: 'row', marginTop: 5, width: '100%', backgroundColor: '#fff' }}>
                    <View style={{ flex: 1, backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ paddingLeft: 8, paddingTop: 8, fontSize: 16, fontWeight: 'bold' }}>Use Auto-layout</Text>
                            <Text style={{ paddingLeft: 10, }}>Lorem Lorem Lorem Lorem</Text>
                        </View>

                        <View style={{ justifyContent: 'center', }}>
                            <Text>Ogot<MaterialIcons size={20} style={{ marginTop: 20 }} name="arrow-forward-ios" /></Text>
                        </View>

                    </View>

                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: '#417DE9', fontWeight: 'bold', marginTop: 5 }}>CONFIGURATION</Text>
                </View>
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ marginTop: 20 }}>Downloads</Text>
                </View>
            </View>

        </View>
    )
}


function Feed() {
    return (
        <View style={{ padding: 10, alignItems: 'center', flex: 1 }}>

            <TouchableOpacity style={{ width: 300, padding: 17, backgroundColor: '#58AEFF' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'orange' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'blue' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'lightgreen' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'green' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'purple' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'grey' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'pink' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'orange' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}


function WiFi() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30, color: 'purple', fontWeight: 'bold' }}>Wi-Fi</Text>
        </View>
    )
}


function Dual_SIMs() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30, color: 'purple', fontWeight: 'bold' }}>Dual SIMS and Mobile Networks</Text>
        </View>
    )
}


function User(props) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    // console.log(data);

    useEffect(() => {
        fetch('http://192.168.18.8:8000/api/get_employee')
            .then((response) => response.json())
            .then((json) => {
                //  console.log(JSON.stringify(json,null,2))
                setData(json)

            })

            .catch((error) => console.error(error))
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <TouchableOpacity style={{ width: '100%', flexDirection: 'row',marginTop:8,paddingLeft:10, backgroundColor: '#fff' }}
            onPress={()=>{
                props.navigation.navigate('User_Details',{item:item});
            }}
            >
                <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=' }} />
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.email}</Text>
                </View> 
                <View>
                    
                    <Text style={styles.text}>
                        <IconFontAwesome color={'black'} name='arrow-right' size={23}/>
                    </Text>
                </View>
                </View>
            </TouchableOpacity>

        </View>
    )
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    )
}


function System() {
    return (
        <View style={{ padding: 10, alignItems: 'center', flex: 1 }}>
            <Text style={{ width: '100%', borderWidth: 1, height: 1 }}></Text>
            <Text style={{ fontSize: 30 }}>SOCIAL BUTTONS</Text>
            <Text style={{ width: '100%', borderWidth: 1, height: 1, }}></Text>

            <TouchableOpacity style={{ width: 300, marginTop: 5, borderRadius: 30, padding: 17, backgroundColor: '#58AEFF' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 7, }}><MaterialIcons size={20} name="arrow-forward-ios" />Sign in with Facebook</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'orange' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'blue' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'lightgreen' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'green' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'purple' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'grey' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'pink' }}>
                <Text style={{ textAlign: 'center', color: '#000', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: 300, marginTop: 10, padding: 17, backgroundColor: 'orange' }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, }}>Button</Text>
            </TouchableOpacity>
        </View>
    )
}

function Security() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30, color: 'purple', fontWeight: 'bold' }}>Security</Text>
        </View>
    )
}

function Privacy() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30, color: 'purple', fontWeight: 'bold' }}>Privacy</Text>
        </View>
    )
}

function Battery() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text style={{ fontSize: 30, color: 'purple', fontWeight: 'bold' }}>Battery</Text>
        </View>
    )
}


function DrawerNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="User" component={User}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IconFontAwesome size={33} name="user" />

                    )
                }}
            />
            <Drawer.Screen name="Seeting" component={Seeting}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IconAntDesign size={33} name="setting" />
                    )
                }}
            />
            <Drawer.Screen name="Feed" component={Feed}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons size={33} name="feedback" />

                    )
                }}
            />
            <Drawer.Screen name="Wi-Fi" component={WiFi}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IconAntDesign size={33} name="wifi" />

                    )
                }}
            />
            <Drawer.Screen name="Dual_SIMs" component={Dual_SIMs}

                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons size={33} name="sim-card" />

                    )
                }}
            />
            <Drawer.Screen name="System" component={System}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons size={33} name="system-update" />

                    )
                }}
            />
            <Drawer.Screen name="Security" component={Security}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons size={33} name="security" />

                    )
                }}
            />
            <Drawer.Screen name="Privacy" component={Privacy}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons size={33} name="privacy-tip" />

                    )
                }}
            />
            <Drawer.Screen name="Battery" component={Battery}
                options={{
                    drawerIcon: ({ focused, size }) => (
                        <IconFontAwesome size={33} name="battery" />

                    )
                }}
            />

        </Drawer.Navigator>
    );
}


const styles=StyleSheet.create({
    text:
    {
        marginTop:7,
        marginLeft:8,
        fontSize:15,
        color:'blue',
        fontWeight:'bold'
    },
    image:
    {
        height:65,
        width:65,
        borderRadius:30,
    }

})
export default DrawerNavigation;