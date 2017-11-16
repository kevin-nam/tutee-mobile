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
    fontSize: 18,
    color: '$baseGray',
  },
});

export default styles;
