import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  businessesList: {
    mapStyle: {
      alignSelf: 'stretch',
      height: 500,
      margin: '5%'
    },
    titleStyle: {
      marginTop: '12%',
      paddingTop: '5%',
      fontSize: 40,
      textAlign: 'center'
    },
    errorStyle: {
      color: 'red',
      textAlign: 'center',
      marginTop: '1%',
      fontWeight: 'bold'
    }
  },
  businessCard: {
    backgroundStyle: {
      margin: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center'
    },
    textStyle: {
      textAlign: 'center'
    },
    paragraphStyle: {
      textAlign: 'center',
      fontSize: 16
    },
    imageStyle: {
      margin: '5%',
      fontSize: 18
    }
  },
  businessOwnerProfile: {
    backgroundStyle: {
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      marginBottom: '5%',
      marginLeft: '5%',
      marginRight: '5%',
      marginTop: '10%',
      paddingTop: '5%',
      paddingBottom: '5%',
      textAlign: 'center'
    },
    container: {
      flex: 1
    },
    errorStyle: {
      color: 'red',
      textAlign: 'center',
      marginTop: '1%',
      fontWeight: 'bold'
    },
    imageStyle: {
      fontSize: 18,
      marginLeft: '5%',
      marginRight: '5%'
    },
    paragraphStyle: {
      fontSize: 15,
      textAlign: 'center'
    },
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: '5%'
    },
    titleStyle: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  },
  carouselOfImages: {
    backgroundStyle: {
      marginTop: '10%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: 'white'
    },
    mapStyle: {
      alignSelf: 'center',
      height: 200,
      width: 300,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
    },
    ownerName: {
      alignSelf: 'center'
    },
    starsStyle: {
      alignSelf: 'center'
    },
    container: {
      flex: 1
    },
    titleStyle: {
      fontSize: 23,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    hourStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginTop: '5%',
      marginBottom: '2%'
    },
    paragraphStyle: {
      fontSize: 15,
      textAlign: 'center'
    },
    imageStyle: {
      margin: '5%',
      fontSize: 18
    }
  },
  commentForm: {
    backgroundStyle: {
      marginTop: '10%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: 'white'
    },
    container: {
      marginTop: '15%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '1%'
    },
    input: {
      margin: '5%',
      borderRadius: 5,
      borderWidth: 1
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: '3%'
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      marginTop: 6
    },
    textStyle: {
      color: '#d6f3ff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    },
    button: {
      backgroundColor: '#144d62',
      borderRadius: 25,
      marginVertical: 10
    }
  },
  comments: {
    containerStyle: {
      margin: '5%',
      marginBottom: '3%',
      textAlign: 'left',
      borderColor: 'lightgray',
      borderWidth: 1,
      padding: '1%'
    },
    paragraphStyle: {
      color: 'lightgray'
    },
    starStyle: {
      alignSelf: 'flex-start',
      marginTop: '2%'
    },
    backgroundStyle: {
      marginTop: '10%',
      marginBottom: '10%',
      textAlign: 'center'
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    imageStyle: {
      flex: 1,
      margin: '10%',
      fontSize: 18
    }
  },
  commentsList: {
    containerStyle: {
      margin: '5%',
      marginBottom: '3%',
      textAlign: 'left',
      borderColor: 'lightgray',
      borderWidth: 1,
      padding: '1%'
    },
    paragraphStyle: {
      color: 'lightgray'
    },
    starStyle: {
      alignSelf: 'flex-start',
      marginTop: '2%'
    },
    backgroundStyle: {
      marginTop: '10%',
      marginBottom: '10%',
      textAlign: 'center'
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    imageStyle: {
      flex: 1,
      margin: '10%',
      fontSize: 18
    }
  },
  formSignIn: {
    container: {
      color: '#b5deef',
      fontSize: 20,
      fontWeight: 'bold'
    },
    inputBox: {
      backgroundColor: '#e8ebf3',
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 20,
      marginVertical: 10
    },
    button: {
      width: 300,
      backgroundColor: '#144d62',
      borderRadius: 25,
      marginVertical: 10
    },
    textStyle: {
      color: '#d6f3ff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    }
  },
  formSignUp: {
    container: {
      flex: 1.5,
      alignItems: 'center'
    },
    inputBox: {
      backgroundColor: '#e8ebf3',
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 20,
      marginVertical: 10
    },
    button: {
      width: 300,
      backgroundColor: '#144d62',
      borderRadius: 25,
      marginVertical: 10
    },
    textStyle: {
      color: '#d6f3ff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    }
  },
  home: {
    container: {
      flex: 1,
      marginTop: '65%',
      marginBottom: '15%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      height: '100%',
      width: '100%'
    },
    appTitle: {
      fontSize: 25
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#144d62',
      padding: '5%',
      marginVertical: 10,
      borderRadius: 25,
      width: 300
    },
    textSign: {
      color: '#e2f2f0'
    }
  },
  loading: {
    container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: 'white',
      padding: 8
    },
    spinnerTextStyle: {
      color: 'black',
      fontSize: 23
    }
  },
  logo: {
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
    logoText: {
      fontSize: 25,
      color: '#e2f2f0'
    }
  },
  ownerFormSignUp: {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3d7f99'
    },
    inputBox: {
      backgroundColor: '#e8ebf3',
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 20,
      marginVertical: 10
    },
    button: {
      width: 300,
      backgroundColor: 'black',
      borderRadius: 25,
      marginVertical: 10,
      color: 'white'
    },
    textStyle: {
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    },
    signupText: {
      flexGrow: 0.25,
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingVertical: 15,
      flexDirection: 'row',
      color: 'white'
    },
    signupButton: {
      color: '#ffffff',
      fontSize: 20,
      fontWeight: 'bold'
    },
    text: {
      color: '#ffffff',
      fontSize: 20
    }
  },
  prompt: {
    buttonsStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    backgroundStyle: {
      marginTop: '10%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: 'white'
    },
    container: {
      marginTop: '15%',
      marginLeft: '5%',
      marginRight: '5%',
      padding: '1%'
    },
    input: {
      margin: '5%',
      borderRadius: 5,
      borderWidth: 1
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: '3%',
      textAlign: 'center'
    },
    imageStyle: {
      width: '25%',
      height: '20%',
      margin: 0,
      padding: 0
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      marginTop: 6
    },
    textStyle: {
      color: '#d6f3ff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    },
    button: {
      backgroundColor: '#144d62',
      borderRadius: 25,
      width: '50%',
      marginHorizontal: 2,
      marginTop: '10%'
    }
  },
  signIn: {
    container: {
      flex: 1,
      backgroundColor: '#3d7f99',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    container2: {
      flex: 1,
      alignItems: 'center'
    },
    signupText: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      paddingVertical: 15
    },
    text: {
      color: '#b5deef',
      fontSize: 20
    },
    signupButton: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
    inputBox: {
      // flexGrow: 0.5,
      backgroundColor: '#e8ebf3',
      width: 300,
      borderRadius: 25,
      paddingHorizontal: 16,
      fontSize: 20,
      marginVertical: 10
    },
    button: {
      width: 300,
      backgroundColor: '#144d62',
      borderRadius: 25,
      marginVertical: 10
    },
    textStyle: {
      color: '#d6f3ff',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      paddingVertical: 7
    }
  },
  signUp: {
    container: {
      flex: 1,
      backgroundColor: '#3d7f99',
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupText: {
      flexGrow: 0.25,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    text: {
      color: '#b5deef',
      fontSize: 20
    },
    signupButton: {
      color: '#b5deef',
      fontSize: 20,
      fontWeight: 'bold'
    }
    // ownerText:{
    //   flexWrap: 'wrap',
    //   justifyContent: 'flex-start',
    //   flexDirection: 'row',
    //   alignItems: 'center'
    // }
  },
  singleBusiness: {
    backgroundStyle: {
      marginTop: '10%',
      marginLeft: '5%',
      marginRight: '5%',
      marginBottom: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center',
      backgroundColor: 'white'
    },
    mapStyle: {
      alignSelf: 'center',
      height: 200,
      width: 300,
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
    },
    ownerName: {
      alignSelf: 'center'
    },
    starsStyle: {
      alignSelf: 'center'
    },
    container: {
      flex: 1
    },
    titleStyle: {
      fontSize: 23,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center'
    },
    hourStyle: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      marginTop: '5%',
      marginBottom: '2%'
    },
    paragraphStyle: {
      fontSize: 15,
      textAlign: 'center'
    },
    imageStyle: {
      margin: '5%',
      fontSize: 18
    }
  },
  user: {
    backgroundStyle: {
      margin: '5%',
      borderRadius: 5,
      borderWidth: 1,
      textAlign: 'center'
    },
    textStyle: {
      textAlign: 'center'
    },
    paragraphStyle: {
      textAlign: 'center',
      fontSize: 16
    },
    imageStyle: {
      margin: '5%',
      fontSize: 18
    }
  },
  usersList: {
    mapStyle: {
      alignSelf: 'stretch',
      height: 500,
      margin: '5%'
    },
    titleStyle: {
      marginTop: '12%',
      paddingTop: '5%',
      fontSize: 40,
      textAlign: 'center'
    },
    errorStyle: {
      color: 'red',
      textAlign: 'center',
      marginTop: '1%',
      fontWeight: 'bold'
    }
  }
});

export default styles;
