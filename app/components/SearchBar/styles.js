import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    'position': 'absolute',
    'left': 0,
    'top': 0,
    'right': 0,
    '@media ios': {
      paddingTop: 20,
    },
  },
});

export default styles;
