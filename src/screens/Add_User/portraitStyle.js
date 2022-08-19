
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
        color:'orange',
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