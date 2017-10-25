import EStyleSheet from 'react-native-extended-stylesheet';

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
