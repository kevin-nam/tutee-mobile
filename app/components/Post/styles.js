import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    backgroundColor: '#A8DBA8',
    width: 0.9 * SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
  user: {
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 20,
  },
});

export default styles;
