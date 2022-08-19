import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('screen')

const data = new Array(12).fill(1)
function User_Details(props) {
  const item = props.route.params.item;
  const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);

  const [userData, setUserData] = useState();
  const [name, setName] = useState(item.name);
  const [email, setEmail] = useState(item.email);
  const [address, setAddress] = useState(item.address);
  const [age, setAge] = useState(item.age);


  const update = (data,id) => {
  
 console.log(id)    // POST request using fetch()
    fetch("http://192.168.18.8:8000/api/update_employee"+id, {

      method: "POST",
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      credentials:'same-origin'
    })
      // Converting to JSON
      // .then(response => response.json())

      // Displaying results to console
      .then(json => alert('Record Updated'))
      .catch(error => console.log(error))
  }

  return (
    <View style={[styles.container, { backgroundColor: '#fff' }]}>
      <View style={{ width: '100%', marginBottom: 40, padding: 10, flexDirection: 'row', marginTop: 1, backgroundColor: 'purple', justifyContent: 'space-between' }}>
        <View>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack('User')
            }}
          >
            <Text style={{ color: '#fff' }}><AntDesign name='back' />  BaCK</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity

            onPress={() => {
              update({ name, email, address, age },item.id)
            }}
          >
            <Text style={{ color: '#fff' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: '100%', marginTop: 1, padding: 10 }}>

        <Text style={{ textAlign: 'center', backgroundColor: 'purple', height: 50, fontSize: 30, fontWeight: 'bold', color: '#fff' }}>User Information</Text>
        <View style={{ width: 300, padding: 10, height: 3 }}><Text></Text></View>
        <TextInput
          style={{ borderWidth: 1, marginTop: 8 }}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          value={email}
          onChangeText={(text) => setEmail(text)}

        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          value={address}
          onChangeText={(text) => setAddress(text)}

        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          value={age}
          onChangeText={(text) => setAge(text)}
        />
      </View>
    </View>

  );
}

export default User_Details;