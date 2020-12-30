import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto_300Light',
    textAlign: 'center'
  },
  iconButton: {
    alignSelf: 'flex-end'
  },
  container: {
    marginLeft: '7%',
    marginRight: '7%',
    marginTop: '10%'
  },
  buttonContainer: {
    marginTop: '5%'
  },
  button: {
    alignSelf: 'center',
    padding: '5%',
    marginVertical: 15,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    width: 300,
    margin: 100,
    backgroundColor: '#5fb7fe'
  },
  buttonText: {
    fontFamily: 'Roboto_300Light',
    color: 'black',
    fontSize: 15,
    textAlign: 'center'
  }
});

export default styles;
