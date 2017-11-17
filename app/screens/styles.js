import { Platform, Dimensions, StatusBar } from 'react-native';
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
  homeBadgeSectionView: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBadgeContainer: {
    backgroundColor: '$grayLighten50',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  homeBadgeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '$baseGray',
  },
  /**
   * STARTASESSION STYLE
   */
  startASessionView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  startASessionInfoView: {
    marginTop: 70,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  startSessionImage: {
    height: 150,
    width: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  startASessionTuteeText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
  },
  startSessionUsername: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
    color: 'black',
    marginBottom: 10,
  },
  startSessionDurationInput: {
    width: 300,
    height: '10%',
    backgroundColor: 'white',
    borderColor: '$baseBlue',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
  startSessionRateInput: {
    width: 300,
    height: '10%',
    borderColor: '$baseBlue',
    borderWidth: 1,
    backgroundColor: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
  },
  startSessionButtonStyle: {
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: '$baseCoral',
    width: 175,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startASessionDurationRateText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: 'black',
  },
  startSessionButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    color: 'white',
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
    marginTop: '15%',
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 18,
    color: '$baseGray',
    textAlign: 'center',
  },
  searchLandingView: {
    flex: 1,
  },
  /**
   * MODIFYPOST STYLE
   */
  deletePostView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hiddenPostView: {
    opacity: 0,
    display: 'none',
    height: 0,
    width: 0,
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
  /**
   * PROFILE STYLE
   */
  profileView: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
  },
  /**
   * PENDINGREQUEST STYLE
   */
  pendingRequestImage: {
    marginTop: 20,
    alignSelf: 'center',
  },
  /**
   * MESSAGING STYLE
   */
  messagingView: {
    flex: 1,
    backgroundColor: 'white',
  },
  messagingKeyboardAvoid: {
    flex: 1,
    alignSelf: 'stretch',
  },
  /**
   * MULTI-SCREEN STYLE
   */
  customScrollView: {
    flex: 1,
    width: '100%',
    marginTop: 70,
  },
  customScrollViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  customHeaderOuterContainerStyle: {
    height: 70,
  },
  customHeaderInnerContainerStyle: {
    marginTop: 15,
    alignItems: 'center',
  },
  customHeaderCenterComponentText: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  customHeaderCenterComponentTextWhite: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  /**
   *  SETTINGS STYLE
   */
  settingsHeaderOuterContainerStyle: {
    height: 70,
    marginTop: StatusBar.currentHeight,
  },
  settingsScrollView: {
    flex: 1,
    width: '100%',
    marginTop: 70 + StatusBar.currentHeight,
  }
});

export default styles;
