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
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: '$baseBlue',
    marginBottom: 5,
  },
  profileImageView: {
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '$grayLighten45'
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileTextView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15
  },
  profileText: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Light',
  },
  flexVerticalTutor: {
    alignItems: 'center',
    height: 80,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderColor: '$baseBlue',
    marginBottom: 5,
  },
  studentIconView: {
    position: 'absolute',
    right: 10,
  }
});
