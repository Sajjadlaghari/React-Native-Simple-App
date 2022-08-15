
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flexDirection: 'row',
            marginTop:15,
            flex: 1,
            flexWrap: 'wrap'
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
            width: 157,
            height: 130,
            elevation: 10
        },
    });
}