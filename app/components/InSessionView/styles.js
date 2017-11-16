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
  titleView: {
    marginBottom: 40,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'white'
  },
  imageView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginHorizontal: 15,
    borderRadius: 75,
    borderWidth: 1,
    borderColor: '$baseGray',
    width: 150,
    height: 150,
  },
  infoView: {
    marginTop: 15,
    alignItems: 'center',
    width: '70%',
  },
  tutorTuteeText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: 'white'
  },
  nameText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: 'white'
  },
  infoText: {
    fontFamily: 'Poppins-Light',
    marginTop: 10,
    fontSize: 14,
    color: 'white'
  },
  endBtnView: {
    marginTop: 50,
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    height: 65,
    borderRadius: 20,
    backgroundColor: '$baseBlue',
  },
  endBtnText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
});
