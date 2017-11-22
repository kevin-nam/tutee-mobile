import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    flex: 4,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  profileText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  tabsView: {
    height: 50,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '$grayLighten45',
    backgroundColor: 'white',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'grey',
  },
  iconSelected: {
    fontSize: 24,
    color: '$baseBlue',
  },
  bioView: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flex: 1,
    alignSelf: 'stretch',
  },
  postsView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '$grayLighten50',
    flexDirection: 'column',
  },
  sessionsView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '$baseGreen',
  },
  bioText: {
    fontSize: 16,
    color: '$baseGray',
    fontFamily: 'Poppins-Medium',
  },
  noBioText: {
    fontSize: 14,
    color: '$baseGray',
  },
  postText: {
    fontSize: 24,
    color: '$baseGray',
    marginBottom: 5,
  },
  noPostsImage: {
    marginTop: 20,
    alignSelf: 'center',
  },
});
