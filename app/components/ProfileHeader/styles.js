import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImageView: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'gray'
  },
  profileImage: {
    height: 125,
    width: 125
  },
  profileInfo: {
    marginTop: 10,
    marginRight: 10,
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    height: 100
  },
  profileText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  }
});
