import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  hidden: {
    display: 'none',
    opacity: 0,
    height: 0,
    width: 0,
  },
  flexVertical: {
    alignItems: 'center',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderTopWidth: 2
  },
  profileImageView: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'gray'
  },
  profileImage: {
    height: 50,
    width: 50
  },
  profileTextView: {
    marginRight: 200,
    justifyContent: 'center',
    height: 70
  },
  profileText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
});
