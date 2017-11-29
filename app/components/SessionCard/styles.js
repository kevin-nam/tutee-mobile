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
    borderColor: '$grayLighten40',
    borderTopWidth: 2,
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
    borderColor: '$grayLighten35',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileTextView: {
    justifyContent: 'center',
    height: 70,
  },
  profileText: {
    color: '$baseGray',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  sessionInfoText: {
    color: '$baseGray',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  badgeContainer: {
    backgroundColor: '$baseCoral',
  },
});
