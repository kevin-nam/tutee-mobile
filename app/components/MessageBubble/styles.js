import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  messageContainer: {
    marginTop: 10,
    alignSelf: 'stretch',
  },
  myMessageView: {
    marginRight: 5,
    alignItems: 'center',
    minHeight: 45,
    maxWidth: '90%',
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    borderRadius: 15,
    alignSelf: 'flex-end'
  },
  notMyMessageView: {
    marginLeft: 5,
    alignItems: 'center',
    minHeight: 45,
    maxWidth: '90%',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    alignSelf: 'flex-start'
  },
  textView: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10
  },
  myMessageText: {
    color: 'white',
    fontSize: 16,
  },
  notMyMessageText: {
    color: 'black',
    fontSize: 16,
  },
});
