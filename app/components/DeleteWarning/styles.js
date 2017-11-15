import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    width: 0.9 * SCREEN_WIDTH,
    borderWidth: 3,
    borderColor: '$baseRed',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  warningTitle: {
    fontSize: 30,
    paddingBottom: 7,
    fontFamily: 'Poppins-Regular',
  },
  warningDesc: {
    fontSize: 18,
    paddingBottom: 20,
    fontFamily: 'Poppins-Regular',
  },
});

export default styles;
