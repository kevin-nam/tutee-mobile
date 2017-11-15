import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  /**
   * LOGIN STYLE
   */
  loginView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  loginButtonView: {
    position: 'absolute',
    bottom: '5%',
  },
  loginLogoView: {
    marginTop: '50%',
    height: '100%',
  },
  // TODO: Change when Logo is entered
  loginLogo: {
    color: 'white',
    fontFamily: 'Poppins-BlackItalic',
    fontSize: 50,
    textAlign: 'center',
  },
  /**
   * HOME STYLE
   */
  homeMainView: {
    width: '100%',
    height: '78%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    alignContent: 'center',
  },
  // homeImage: {
  //   flex: 1,
  //   height: '30%',
  //   width: '30%',
  //   resizeMode: 'contain',
  // },
  homeWelcomeText: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
  homeCreatePostButtonView: {
    position: 'absolute',
    bottom: '3%',
  },
  homeCatchPhrase: {
    fontFamily: 'Poppins-BlackItalic',
    fontSize: 20,
    color: 'white',
  },
  homeTagPhrase: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: 'white',
    marginVertical: 10,
  },
  homeNoTagPhrase: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  homeBadgeView: {
    marginVertical: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBadgeContainer: {
    backgroundColor: '$grayLighten50',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  homeBadgeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '$baseGray',
  },
  /**
   * SEARCHLANDINGPAGE STYLE
   */
  searchLandingList: {
    flex: 1,
    marginTop: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: 'transparent',
    marginVertical: 5,
  },
  searchLandingErrorText: {
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 25,
    color: '$baseGray',
  },
  /**
   * MODIFYPOSTPAGE STYLE
   */
  deletePostView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /**
   * RATINGPAGE STYLE
   */
  ratingBoxView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_HEIGHT * 0.7,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  ratingContentView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ratingText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 50,
    fontSize: 15,
  },
  ratingPropView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
