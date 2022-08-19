import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Modal, Pressable, onLongPress, PermissionsAndroid, TouchableOpacity, Image, InteractionManager, Dimensions } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useFunctionalOrientation } from '../../utility/responsiveUtil'
import ResponsiveStyle from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { lunchCamera } from 'react-native-image-picker';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('screen');




function Add_User(props) {
  const { styles, isPortrait, heightToDp, widthToDp } = useFunctionalOrientation(ResponsiveStyle);

  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [age, setAge] = useState();

  const [filePath, setFilePath] = useState({});

  const Add = (data) => {

    fetch("http://192.168.18.8:8000/api/add_employee/", {

      method: "POST",
      body: JSON.stringify(data),

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
          setModalVisible(true);
        } else {
          alert('User Not Added')
        }
      })
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
              Add({ name, email, address, age })
            }}
          >
            <Text style={{ color: '#fff' }}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1, width: '100%', marginTop: 1, padding: 10 }}>

        {/* <Text style={{ textAlign: 'center', backgroundColor: 'purple', height: 50, fontSize: 30, fontWeight: 'bold', color: '#fff' }}>Add New User</Text> */}
        <View style={{ width: 300, padding: 10, height: 3 }}><Text></Text></View>
        <TextInput
          style={{ borderWidth: 1, marginTop: 8 }}
          onChangeText={(text) => setName(text)}
          placeholder="Enter Your Name  Here"
        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          placeholder="Enter Your Email  Here"


          onChangeText={(text) => setEmail(text)}

        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          onChangeText={(text) => setAddress(text)}
          placeholder="Enter Your Address  Here"


        />
        <TextInput
          style={{ borderWidth: 1, marginTop: 9 }}
          onChangeText={(text) => setAge(text)}
          placeholder="Enter Your Age  Here"
        />
      </View>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.main}>
          <View style={styles.modalView}>
            
            <Text style={styles.modalText}>Data Added successfully</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                props.navigation.goBack()
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

  );
}

export default Add_User;