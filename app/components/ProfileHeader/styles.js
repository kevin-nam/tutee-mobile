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
    overflow: 'hidden',
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '$grayLighten50'
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
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 24,
  },
  ratingView: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '$baseGray',
    marginTop: 3,
    marginLeft: 8,
  },
  notRatedYetText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    fontSize: 12,
    color: '$baseGray',
  }
});
