import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

const marginTopOffset = Platform.OS === 'ios' ? 0 : 10;

export default EStyleSheet.create({
  flexHorizontal: {
    marginTop: marginTopOffset,
    alignItems: 'center',
    height: 140 + marginTopOffset * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '$baseCoral',
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
    borderWidth: 2,
    borderColor: '$grayLighten40',
  },
  profileInfo: {
    marginRight: 10,
    alignItems: 'flex-start',
    width: '50%',
    justifyContent: 'center',
  },
  profileText: {
    fontFamily: 'Poppins-Medium',
    color: 'white',
    fontSize: 22,
  },
  ratingView: {
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '$baseYellow',
    marginTop: 5,
    marginLeft: 5,
  },
  notRatedYetText: {
    fontFamily: 'Poppins-Regular',
    marginTop: 5,
    fontSize: 12,
    color: '$baseYellow',
  },
});
