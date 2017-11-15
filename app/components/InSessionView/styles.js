import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  hidden: {
    display: 'none',
    opacity: 0,
    height: 0,
    width: 0,
  },
  flexVertical: {
    alignItems: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '$baseCoral',
  },
  titleView: {
    marginTop: '15%',
  },
  titleText: {
    fontSize: 28,
  },
  imageView: {
    flexDirection: 'row',
    width: '100%',
    marginTop: '25%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '$baseGray',
    marginLeft: 15,
    marginRight: 15,
    width: 150,
    height: 150,
  },
  infoView: {
    marginTop: '15%',
    alignItems: 'flex-start',
    width: '70%',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
  },
  infoText: {
    marginTop: 4,
    fontSize: 14,
  },
  endBtnView: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '25%',
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: '$baseBlue',
  },
  endBtnText: {
    fontSize: 18,
    color: 'white',
  },
});
