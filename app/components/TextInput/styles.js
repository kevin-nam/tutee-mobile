import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  textInput: {
    width: 0.9 * SCREEN_WIDTH,
    paddingRight: 20,
    paddingVertical: 5,
  },
});

export default styles;
