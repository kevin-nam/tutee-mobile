import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    '@media ios': {
      paddingTop: 20,
    },
  },
  ratingBox: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
    borderRadius: 10,
  },
  submitButton: {
    marginTop: 10,
    color: 'blue',
    fontSize: 18,
  },
});

export default styles;
