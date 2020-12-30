import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    fontFamily: 'Roboto_300Light'
  },
  imageStyle: {
    fontSize: 18,
    marginLeft: '5%',
    marginRight: '5%'
  },
  paragraphStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto_300Light'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5%',
    fontFamily: 'Roboto_300Light'
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto_300Light'
  }
});

export default styles;
