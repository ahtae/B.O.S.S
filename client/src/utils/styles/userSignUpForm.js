import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
