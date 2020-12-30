import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: '10%',
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
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
    fontFamily: 'Roboto_300Light'
  },
  titleInput: {
    marginBottom: '5%',
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'Roboto_300Light'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },
  commentInput: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'Roboto_300Light'
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: 6,
    fontFamily: 'Roboto_300Light'
  },
  textStyle: {
    color: '#d6f3ff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 7,
    fontFamily: 'Roboto_300Light'
  },
  button: {
    backgroundColor: '#144d62',
    borderRadius: 25,
    marginVertical: 10
  },
  iconButton: {
    alignSelf: 'flex-end'
  },
  rating: {
    alignSelf: 'flex-start',
    marginTop: '5%',
    marginBottom: '5%'
  },
  photoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10
  },
  closeIconButton: { margin: 0, padding: 0 },
  errorStyle: {
    fontSize: 10,
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Roboto_300Light',
    margin: 5
  }
});

export default styles;
