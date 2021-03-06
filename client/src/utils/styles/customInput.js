import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '80%',
    margin: 10,
    backgroundColor: 'rgb(245, 245, 245)',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 5,
    fontFamily: 'Roboto_300Light'
  },
  errorText: {
    fontSize: 10,
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Roboto_300Light'
  },
  errorInput: {
    borderColor: 'red'
  }
});

export default styles;
