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
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '$baseCoral',
  },
  yourTutorText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: 'white',
  },
  imageView: {
    marginTop: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  infoView: {
    marginTop: 25,
    alignItems: 'center',
    width: '70%',
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 24,
    color: 'white',
  },
  infoText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: 'white',
  },
  acceptRejectView: {
    bottom: 0,
    marginTop: 60,
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
  },
  acceptBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
    borderRadius: 100,
    backgroundColor: '$baseGreen',
  },
  rejectBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 75,
    height: 75,
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
