import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  text: {
    marginTop: 40,
    marginLeft: 15,
    fontFamily: 'Roboto_300Light',
    textAlign: 'center',
    fontSize: 30,
    backgroundColor: 'white',
    marginBottom: 10
  },
  button: {
    alignSelf: 'center',
    padding: '5%',
    marginVertical: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 350
  },
  buttonText: {
    fontFamily: 'Roboto_300Light',
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto_300Light'
  }
});

export default styles;
