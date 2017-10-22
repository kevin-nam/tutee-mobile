import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    width: 0.9 * SCREEN_WIDTH,
    borderWidth: 3,
    borderColor: 'red',
    borderRadius: 5,
  },
});

export default styles;
