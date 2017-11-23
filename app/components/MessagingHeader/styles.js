import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '$grayLighten40',
    backgroundColor: 'white',
    marginTop: 5,
  },
  profileImageView: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    overflow: 'hidden',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  profileInfo: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'flex-start',
    flex: 2,
    justifyContent: 'center',
    height: 70,
  },
  profileText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  requestBtnView: {
    marginTop: 10,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: 47,
    marginRight: 15,
    borderRadius: 25,
    backgroundColor: '$baseCoral',
  },
  hideRequestBtnViw: {
    opacity: 0,
    height: 0,
    width: 0,
  },
  requestBtnText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
  },
  backBtnView: {
    marginLeft: 5,
    marginRight: 15,
  },
});
