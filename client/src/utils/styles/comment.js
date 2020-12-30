import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  backgroundStyle: {
    margin: '5%',
    marginBottom: '3%'
  },
  containerStyle: {
    marginLeft: 10,
    backgroundColor: 'white'
  },
  photoStyle: {
    width: 100,
    height: 100,
    margin: '10%'
  },
  updateButton: {
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end'
  },
  row: {
    alignItems: 'flex-end',
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  date: {
    color: 'gray'
  },
  typeText: {
    fontStyle: 'italic'
  },
  starStyle: {
    alignSelf: 'flex-start',
    marginTop: '2%'
  },
  userImage: {
    width: '10%',
    height: 27,
    marginBottom: 10,
    padding: 0
  },
  icon: {
    alignSelf: 'baseline',
    margin: 0,
    padding: 0
  },
  commentImage: {
    width: 100,
    height: 100
  },
  title: { fontWeight: 'bold', marginTop: 5, marginBottom: 5 },
  photoContainer: { marginTop: 5, marginBottom: 5 }
});

export default styles;
