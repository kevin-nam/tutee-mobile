import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    elevation: 4,
    alignSelf: 'center',
  },
  modifyContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    maxHeight: '100%',
    width: '100%',
    elevation: 4,
    alignSelf: 'center',
  },
  smallContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    elevation: 4,
    alignSelf: 'center',
    marginBottom: 6,
  },
  header: {
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '$grayLighten50',
  },
  smallHeader: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '$grayLighten50',
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    marginLeft: 5,
    marginTop: 5,
  },
  smallTitle: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  authorSubView: {
    marginLeft: 5,
  },
  descriptionText: {
    fontFamily: 'Poppins-Light',
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
    width: 50,
    height: 50,
  },
  smallIcon: {
    marginLeft: 15,
    marginRight: 5,
    width: 50,
    height: 50,
  },
  user: {
    marginLeft: 5,
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'Poppins-Italic',
  },
  smallBody: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
    minHeight: 60,
  },
  editFullBody: {
    minHeight: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: '$grayLighten50',
  },
  fullBody: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    width: '100%',
    height: '100%',
    borderBottomWidth: 1,
    borderColor: '$grayLighten50',
  },
  content: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Poppins-Light',
  },
  titleInput: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
    height: '100%',
    width: '100%',
  },
  smallFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    marginRight: 20,
    marginBottom: 5,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingBottom: 5,
    paddingVertical: 5,
  },
  date: {
    color: '$baseGray',
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10,
  },
  tagSection: {
    width: '100%',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginLeft: 5,
  },
  tags: {
    color: '$baseGray',
    fontFamily: 'Poppins-ExtraLight',
  },
  actionButton: {
    marginRight: 8,
  },
  requestMessageText: {
    fontFamily: 'Poppins-Light',
    color: '$baseBlue',
    fontSize: 18,
    marginTop: 4,
    marginRight: 3,
  },
  editMessageText: {
    fontFamily: 'Poppins-Light',
    color: '$baseCoral',
    fontSize: 18,
    marginTop: 4,
    marginRight: 3,
  },
  cancelMessageText: {
    color: '$baseRed',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    paddingLeft: 5,
  },
  saveMessageText: {
    color: '$baseGreen',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
  createPostBtnContainer: {
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 5,
    backgroundColor: '$baseBlue',
    width: SCREEN_WIDTH * 0.6,
    borderRadius: SCREEN_WIDTH * 0.6 / 2,
  },
  createPostBtnWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  createPostBtnText: {
    paddingVertical: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
  },
  ratingText: {
    fontSize: 12,
    color: '$baseYellow',
    marginLeft: 4,
  },
  ratingView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modifyHeader: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: '$grayLighten50',
  },
  editTagSection: {
    height: 40,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: '$grayLighten50',
  },
  editFooter: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableImageBig: {
    height: 50,
    borderRadius: 25,
  },
  touchableImageSmall: {
    borderRadius: 35,
  },
});

export default styles;
