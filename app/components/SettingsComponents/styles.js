import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '$grayLighten45',
    borderBottomWidth: 1,
    borderColor: '$grayLighten40',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '$baseGray',
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '$baseGray',
  },
  titledTextInput: {
    width: '100%',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    backgroundColor: 'white',
    borderColor: '$baseBlue',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  titledTextInputView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '$grayLighten45',
    borderBottomWidth: 1,
    borderColor: '$grayLighten40',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    width: '100%',
  },
});

export default styles;
