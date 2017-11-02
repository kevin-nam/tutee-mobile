import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginButtonView: {
    position: 'absolute',
    bottom: '5%',
  },
  loginLogoView: {
    height: '100%',
  },
  // TODO: Change when Logo is entered
  loginLogo: {
    marginTop: '60%',
    color: 'white',
    fontFamily: 'Poppins-BlackItalic',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default styles;
