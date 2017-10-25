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
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  warningTitle: {
    fontSize: 30,
    fontWeight: '800',
    paddingBottom: 7,
  },
  warningDesc: {
    fontSize: 18,
    fontWeight: '500',
    paddingBottom: 20,
  },
});

export default styles;
