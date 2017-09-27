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
    elevation: 4,
  },
  header: {
    backgroundColor: '#A8DBA8',
    width: 0.9 * SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 5,
  },
  smallHeader: {
    flexDirection: 'row',
    width: 0.9 * SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'flex-start',
    backgroundColor: '#A8DBA8',
  },
  title: {
    fontWeight: '800',
    fontSize: 25,
  },
  smallTitle: {
    paddingHorizontal: 10,
    fontWeight: '600',
    fontSize: 20,
    flex: 1,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  user: {
    paddingHorizontal: 10,
    fontWeight: '400',
    fontSize: 20,
    flex: 1,
  },
  body: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  content: {},
  footer: {
    width: 0.9 * SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  date: {
    fontWeight: '300',
    color: '$disabled',
  },
  tagSection: {
    width: 0.9 * SCREEN_WIDTH,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  tags: {
    color: '$disabled',
  },
});

export default styles;
