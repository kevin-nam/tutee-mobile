import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    width: '100%',
    marginTop: 5,
    elevation: 4,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '$grayLighten50',
    borderRadius: 10,
  },
  header: {
    backgroundColor: '$baseCoral',
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 10,
    paddingTop: 5,
  },
  smallHeader: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '$baseCoral',
    borderBottomWidth: 2,
    borderBottomColor: '$grayLighten50',
    borderRadius: 4,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
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
  icon: {
    marginLeft: 5,
    marginRight: 5,
    width: 50,
    height: 50,
  },
  user: {
    paddingHorizontal: 5,
    fontWeight: '400',
    fontSize: 20,
    flex: 1,
    fontFamily: 'Poppins-Italic',
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  content: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Poppins-Light',
  },
  titleInput: {
    flex: 1,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  date: {
    color: '$baseGray',
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 12,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10
  },
  tagSection: {
    width: '100%',
    paddingHorizontal: 5,
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
  $createButtonBackgroundColor: () => EStyleSheet.value('$baseBlue'),
  $createButtonUnderlayColor: () => EStyleSheet.value('$blueDarken30'),
  containerViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 100,
    backgroundColor: '$baseBlue',
  },
});

export default styles;
