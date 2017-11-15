import EStyleSheet from 'react-native-extended-stylesheet';
import { Platform } from 'react-native';

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
   * STARTASESSION STYLE
   */
  startSessionImage: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  startSessionUsername: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  startSessionDurationInput: {
    width: 300,
    height: '10%',
    backgroundColor: 'white',
    marginBottom: 10,
  },
  startSessionRateInput: {
    width: 300,
    height: '10%',
    backgroundColor: 'white',
  },
  startSessionButtonStyle: {
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: 'blue',
    width: 150,
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  startSessionButtonText: {
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
    fontFamily: 'Poppins-SemiBoldItalic',
    fontSize: 25,
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
  /**
   * PROFILE STYLE
   */
  profileView: {
    paddingTop: Platform.OS === 'ios' ? 0 : 14,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  /**
   * PENDINGREQUEST STYLE
   */
  pendingRequestImage: {
    marginTop: 20,
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
  customHeaderCenterComponentTextBlack: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});

export default styles;
