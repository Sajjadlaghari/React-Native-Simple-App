import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Pressable,StyleSheet,Modal, Image, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
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


  const [modalVisible, setModalVisible] = useState(false);

    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [confirm, setConfirm] = useState([]);

    // console.log(data);


    useFocusEffect(
        React.useCallback(() => {
            API();
        }, [])
    );

    const API = () => {
        setLoading(true)
        fetch('http://192.168.18.8:8000/api/get_employee')
            .then((response) => response.json())
            .then((json) => {
                //  console.log(JSON.stringify(json,null,2))
                setData(json)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                console.error(error)
            })

    }

    const del = (id) => {

        Alert.alert(
            "Confirm",
            "Are You Sure Do you Want Do Delete",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "OK", onPress: () =>


                        fetch("http://192.168.18.8:8000/api/delete_employee/" + id, {

                            method: "DELETE",
                            // body: JSON.stringify(data),

                            // Adding headers to the request
                            headers: {
                                "Content-type": "application/json; charset=UTF-8"
                            },
                            credentials: 'same-origin'
                        })
                            // Converting to JSON
                            .then(response => response.json())

                            // Displaying results to console
                            .then(json => {
                                if (json.status) {
                                    setModalVisible(true)
                                    API();
                                } else {
                                    alert('Record Not Deleted')
                                }
                            })
                            .catch(error => console.log(error))
                }
            ]
        );


    }

    const renderItem = ({ item }) => (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: 'https://www.wallpaperflare.com/static/85/105/71/stains-light-dark-background-wallpaper.jpg' }}>
                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 8, paddingLeft: 4, backgroundColor: '#fff' }}
                    onPress={() => {
                        props.navigation.navigate('User_Details', { item: item });
                    }}

                    onLongPress={() => {
                        del(item.id)
                    }}
                >
                    <Image style={styles.image} source={{ uri: 'https://media.istockphoto.com/photos/mature-mixed-race-business-man-picture-id1059661424?k=20&m=1059661424&s=612x612&w=0&h=CLL4tto10GPo1gtMR9c-kPmf8VkvodjvTyqvtEuTLtg=' }} />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={styles.text}>Name: {item.name}</Text>
                            <Text style={styles.text}>Email: {item.email}</Text>
                        </View>
                        <View>

                            <Text style={[styles.text, { paddingTop: 25, paddingRight: 8 }]}>
                                <IconFontAwesome color={'black'} name='arrow-right' size={19} />
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
    return (
        <View style={{ width: '100%', flex: 1, }}>

            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'grey' }}>
                <View>

                </View>
                <View>
                    <TouchableOpacity style={{ backgroundColor: 'green', padding: 15 }}
                        onPress={() => {
                            props.navigation.navigate('Add_User')
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Add User</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                isLoading ?
                    <ActivityIndicator style={{marginTop:'70%'}} color={'red'} size={70} />
                    :
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                    />
            }



<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.main}>
          <View style={styles.modalView}>
            
            <Text style={[styles.modalText,{color:'#000'}]}>Record Delete successfully</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={()=>{
                setModalVisible(false)
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
        </View>
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


const styles = StyleSheet.create({
    text:
    {
        marginTop: 7,
        marginLeft: 8,
        fontSize: 15,
        color: 'black',
    },
    image:
    {
        height: 85,
        width: 65,
        borderRadius: 1,
    },
    main:
    {
        flex:1,
        width:'100%',
        height:200,
        marginLeft:-90
    },
    modalText:
    {
       fontSize:24,
       justifyContent:'center',
    },
    textStyle:
    {
        fontSize:20,
        color:'purple',
        marginTop:20,
    }, 
    modalView:
    {
       width:300,
       height:150,
       justifyContent:"center",
       alignItems:'center',
       borderRadius:10,
       marginTop:260,
       marginLeft:120,
       backgroundColor:'#fff',
       elevation:8,
    },

})
export default DrawerNavigation;