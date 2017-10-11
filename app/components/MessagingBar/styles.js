import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderTopWidth: 2
  },
  bar: {
    height: 30,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    marginLeft: 10,
    borderWidth: 2,
    borderColor: 'lightgrey'
  },
  sendBtn: {
    color: 'skyblue',
    marginLeft: 10,
    fontSize: 28
  }
});
