
import { StyleSheet } from 'react-native';

export default landscapStyle = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flexDirection: 'row',
            flex: 1,
            flexWrap: 'wrap'
        },
        innerView: {
            marginLeft: 15,
            marginTop:10,
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
            width: 217,
            height: 130,
            elevation: 10
        },
    
     })
}