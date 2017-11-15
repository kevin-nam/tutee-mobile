import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    minHeight: 40,
    maxHeight: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '$grayLighten40',
    borderTopWidth: 2,
  },
  bar: {
    marginTop: 5,
    marginBottom: 5,
    minHeight: 30,
    maxHeight: 60,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '$grayLighten40',
    textAlign: 'left',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  sendBtn: {
    fontFamily: 'Poppins-Regular',
    color: '$baseBlue',
    marginLeft: 10,
    fontSize: 32,
  },
});
