
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

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
        borderRadius:10,
        width:340,
        backgroundColor:'white',
        marginVertical:5,
        alignItems:'center'
    },
    text:
    {
     marginLeft:20,
     fontWeight:'bold',
     color:'purple',
     marginTop:5
    },
    image:
    {
      width:300,
      height:100,
      marginTop:10,
      borderRadius:10,
      alignItems:'center'
    },
    
    });
}