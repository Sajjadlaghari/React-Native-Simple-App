
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
    container:
    {
        flex: 1,
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