
import { StyleSheet } from 'react-native';

export default landscapStyle = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flex: 1,
            backgroundColor: '#05375A',
        },
        inner:
        {
            flex: 1,   
            backgroundColor: 'white',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
        },
        btn:
        {
            width: '37%',
            height: 40,
            marginLeft: 385,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            textAlign: 'center',
            backgroundColor: '#51C1FB'
        },
        text:
        {
            fontSize: 30,
            fontWeight: 'bold',
            color: '#05375A',
            marginLeft: 15,
            marginTop: 10,
        },
        image:
        {
            width: 150,
            height: 150,
            marginTop: 10,
            marginLeft: 275,
        },
     })
}