import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  messageContainer: {
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'stretch',
  },
  myMessageView: {
    marginRight: 5,
    alignItems: 'center',
    minHeight: 35,
    minWidth: 70,
    maxWidth: '87%',
    flexDirection: 'row',
    backgroundColor: '$baseBlue',
    borderRadius: 17,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  notMyMessageView: {
    marginLeft: 5,
    alignItems: 'center',
    minHeight: 35,
    minWidth: 70,
    maxWidth: '87%',
    flexDirection: 'row',
    backgroundColor: '$grayLighten40',
    borderRadius: 17,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },
  textView: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  myMessageText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  notMyMessageText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  systemMessageView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  systemText: {
    color: '$baseGray',
    fontSize: 14,
    textAlign: 'center',
  },
});
