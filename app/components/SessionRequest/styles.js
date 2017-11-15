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
  imageView: {
    marginTop: '50%',
  },
  image: {
    width: 150,
    height: 150,
  },
  infoView: {
    marginTop: '15%',
    alignItems: 'flex-start',
    width: '70%',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
  },
  infoText: {
    marginTop: 4,
    fontSize: 14,
  },
  acceptRejectView: {
    position: 'absolute',
    bottom: 0,
    marginBottom: '25%',
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
  },
  acceptBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '$baseGreen',
  },
  rejectBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 100,
    backgroundColor: '$baseRed',
  },
  acceptText: {
    color: 'white',
  },
  rejectText: {
    color: 'white',
  },
});
