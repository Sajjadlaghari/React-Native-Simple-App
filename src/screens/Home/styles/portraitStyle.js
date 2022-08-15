
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

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
            marginLeft: 185,
            marginTop: 50,
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
            marginTop: 20,
        },
        image:
        {
            width: 150,
            height: 150,
            marginTop: 160,
            marginLeft: 120,
            marginBottom: 130,
        }     
    });
}