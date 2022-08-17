
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flexDirection: 'row',
            marginTop:15,
            flex: 1,
            width:'100%',
            justifyContent:'space-between',
            flexWrap: 'wrap',
            elevation:2,

        },
        innerView: {
            marginLeft: 15,
            marginBottom: 10,
            backgroundColor: 'white',
            elevation: 5,
            borderTopLeftRadius:10,
            borderTopRightRadius:10,

        },
        image:
        {
            borderTopRightRadius:10,
            borderTopLeftRadius:10,
            width: '100%',
            height: 300,
            elevation: 10
        },
    });
}