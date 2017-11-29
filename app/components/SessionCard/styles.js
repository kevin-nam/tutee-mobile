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
    width: '100%',
    height: 110,
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '$grayLighten40',
    borderTopWidth: 2,
  },
  profileImageView: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '$grayLighten35',
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  profileTextView: {
    justifyContent: 'center',
    height: 70,
    alignItems: 'center',
  },
  profileTextSubView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  profileText: {
    color: '$baseGray',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },
  sessionInfoText: {
    color: '$baseGray',
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    marginHorizontal: 5,
  },
  badgeContainer: {
    backgroundColor: '$baseCoral',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});
