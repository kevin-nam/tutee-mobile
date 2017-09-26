import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: 0.9 * SCREEN_WIDTH,
    marginVertical: 20,
    paddingBottom: 5,
  },
  title: {
    fontWeight: '800',
    fontSize: 30,
  },
  header: {
    flex: 1,
    backgroundColor: '#A8DBA8',
    width: 0.9 * SCREEN_WIDTH,
    height: 15,
  },
});

export default styles;
