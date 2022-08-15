
import { StyleSheet } from 'react-native';



export default portraitStyles = (w, h) => {

    return StyleSheet.create({
           container:
    {
        flex: 1,
        backgroundColor: '#05375A',

    },
    Login:
    {
       backgroundColor:'#47C7F8',
       width:'80%',
       height:50,
       marginTop:27,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:180,
    },
    Signup:
    {
       borderColor:'#000',
       borderWidth:1,
       width:'80%',
       height:50,
       marginTop:27,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:50,
    },

    Camera:
    {
       borderColor:'#000',
       borderWidth:1,
       width:'30%',
       backgroundColor:'#000000',
       height:50,
       marginTop:27,
       justifyContent:'center',
       alignItems:'center',
       borderRadius:5,
    },
    loginForm:
    {
        marginTop: 40,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    headerText:
    {
      color: 'white', 
      fontSize: 30, 
      fontWeight: 'bold', 
      marginTop: 110, 
      marginLeft: 20, 
    }, 
    input:
    {
        borderRadius:18,
        width: '80%',
        textAlign: 'center',
        height: 50,
        borderWidth: 1,
        marginTop: 20,

    },
    inner:
    {
        flex: 1,

        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 65,
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

    });
}