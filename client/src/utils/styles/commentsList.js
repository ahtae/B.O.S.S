import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    margin: '5%',
    marginBottom: '3%',
    textAlign: 'left',
    borderColor: 'lightgray',
    borderWidth: 1,
    padding: '1%'
  },
  paragraphStyle: {
    color: 'lightgray',
    fontFamily: 'Roboto_300Light'
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
    textAlign: 'center',
    fontFamily: 'Roboto_300Light'
  },
  imageStyle: {
    flex: 1,
    margin: '10%',
    fontSize: 18
  }
});

export default styles;
