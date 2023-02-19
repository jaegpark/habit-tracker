import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      padding: 12,
      marginTop: 12,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
    },
    textInput: {

    },
    input:{
      width:350,
      height:35,
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 18,
      marginTop: 5,
      marginBottom: 5,
    }, 
    smallPadding:{
      paddingVertical: 8
    },
    largePadding:{
      paddingVertical: 16
    },
    item:{
      backgroundColor: 'pink',
    }, 
    headers:{
      fontSize: 36,
      fontWeight: 'bold',
    }, 
    headings:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10,
    },
    normal:{
        fontSize: 18,
        fontWeight: 'normal',
    }

  });
  