
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
    container:
    {
        flex: 1,
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
       marginTop:300,
       marginLeft:120,
       backgroundColor:'#fff',
       elevation:8,
    },
    innerView:
    {
        width:'100%',
       height:73,
      marginTop:8,
      borderRadius:10,
       flexDirection:'row',
       flexWrap:'wrap',
       backgroundColor:'white',
       elevation:6,

    },
 
    userInfo:
    {
       flexDirection:'column'
    },
    image:
    {
      width:65,
      marginLeft:4,
      height:65,
      marginTop:5,
      marginLeft:5,
      borderRadius:10,
      alignItems:'center'
    },

    });
}