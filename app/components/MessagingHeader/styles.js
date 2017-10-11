import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white'
  },
  profileImageView: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 20,
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
  profileInfo: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-start',
    width: 200,
    justifyContent: 'center',
    height: 70
  },
  profileText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  }
});
