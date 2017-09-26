import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 30,
    backgroundColor: "#3B5699"
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: "white",
    color: "#3B5699",
    marginRight: 20
  },
  text: {
    paddingVertical: 20,
    paddingLeft: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: 'white'
  },
});
