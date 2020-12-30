import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  submitButton: {
    alignItems: 'center',
    marginVertical: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 300
  },
  submitButtonText: {
    fontFamily: 'Roboto_300Light',
    color: 'black',
    fontSize: 15
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto_300Light'
  },
  navigationContainer: {
    margin: 15
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto_300Light',
    marginBottom: 20
  },
  paragraph: {
    marginTop: 10
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6'
  },
  textInput: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'rgb(245, 245, 245)',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    fontFamily: 'Roboto_300Light'
  },
  errorText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'red',
    margin: 10,
    fontFamily: 'Roboto_300Light'
  }
});

export default styles;
