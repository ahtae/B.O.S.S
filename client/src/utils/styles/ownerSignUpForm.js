import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
