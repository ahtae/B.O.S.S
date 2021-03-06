import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  },
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
  text: {
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
    marginTop: 0
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
    margin: 30,
    backgroundColor: 'rgb(245, 245, 245)',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    fontFamily: 'Roboto_300Light'
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Roboto_300Light'
  },
  paragraphContainer: {
    margin: 10
  }
});

export default styles;
