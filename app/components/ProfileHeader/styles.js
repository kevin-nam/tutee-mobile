import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const marginTopOffset = Platform.OS === 'ios' ? 0 : 10;

export default EStyleSheet.create({
  flexHorizontal: {
    marginTop: marginTopOffset,
    alignItems: 'center',
    height: 140 + marginTopOffset * 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  profileImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    height: 100,
    overflow: 'hidden',
  },
  profileImage: {
    marginLeft: 5,
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '$grayLighten50'
  },
  profileInfo: {
    marginRight: 10,
    alignItems: 'flex-start',
    width: '50%',
    justifyContent: 'center',
  },
  profileText: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 22,
  },
  ratingView: {
    marginTop: 5,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '$baseGray',
    marginTop: 3,
  },
  notRatedYetText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    fontSize: 12,
    color: '$baseGray',
  }
});
