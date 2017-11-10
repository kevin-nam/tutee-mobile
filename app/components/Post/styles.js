import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    marginVertical: 10,
    paddingBottom: 5,
    elevation: 4,
  },
  header: {
    backgroundColor: '$baseCoral',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 5,
  },
  smallHeader: {
    flexDirection: 'row',
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '$baseCoral',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
  },
  smallTitle: {
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  user: {
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 20,
    flex: 1,
    fontFamily: 'Poppins-Italic',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'flex-start',
    width: SCREEN_WIDTH,
  },
  content: {
    textAlign: 'left',
    fontFamily: 'Poppins-Light',
  },
  titleInput: {
    flex: 1,
  },
  footer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  date: {
    color: '$baseGray',
    fontFamily: 'Poppins-ExtraLight',
  },
  tagSection: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tags: {
    color: '$baseGray',
    fontFamily: 'Poppins-Thin',
  },
  actionButton: {
    marginRight: 8,
  },
  requestMessageText: {
    color: '$baseBlue',
    fontSize: 18,
  },
  editMessageText: {
    color: '$baseCoral',
    fontSize: 18,
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
});

export default styles;
