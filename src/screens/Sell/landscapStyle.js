
import { StyleSheet } from 'react-native';

export default landscapStyle = (w, h) => {

    return StyleSheet.create({
        container:
        {
            flex: 1,
            width:'100%',
            justifyContent:'center',
            alignItems:'center'
        },
        user:
        {
            width: 700,
            backgroundColor:'white',
            marginVertical:5 
        },
        text:
        {
         marginLeft:280,
         fontWeight:'bold',
         color:'purple',
         marginTop:5
        },
        image:
        {
          width:400,
          justifyContent:'center',
          height:180,
          marginLeft:150,
          marginTop:10,
          borderRadius:10,
          alignItems:'center'
        },
        
    
     })
}