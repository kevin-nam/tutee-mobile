import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default EStyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: '$facebookBlue',
    width: SCREEN_WIDTH * 0.8,
    borderRadius: SCREEN_WIDTH * 0.8 / 2,
  },
  wrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    backgroundColor: 'white',
    color: '$facebookBlue',
    marginRight: 15,
  },
  text: {
    paddingVertical: 15,
    paddingLeft: 15,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: 'white',
  },
});
