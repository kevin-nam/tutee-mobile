import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import color from 'color';

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
    marginRight: 20,
  },
  text: {
    paddingVertical: 20,
    paddingLeft: 20,
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: 'white',
  },
  $underlayColor: {
    color: () =>
      color(EStyleSheet.value('$facebookBlue'))
        .darken(0.5)
        .hex()
        .string(),
  },
});
