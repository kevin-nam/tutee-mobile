import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  flexHorizontal: {
    alignItems: 'center',
    flex: 4,
    flexDirection: 'column',
    backgroundColor: 'white'
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: 'grey'
  },
  iconSelected: {
    fontSize: 24,
    color: 'skyblue'
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
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  sessionsView: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'green'
  },
  bioText: {
    fontSize: 14,
    color: 'black'
  },
  noBioText: {
    fontSize: 14,
    color: 'darkgrey'
  },
  postText: {
    fontSize: 24,
    color: 'darkgrey',
    marginBottom: 5
  }
});
