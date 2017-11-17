const initialState = {
  username: 'undefined',
  uid: 'undefined',
  currentRoute: 'undefined',
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'SET_USER_NAME':
      return { ...state, username: action.username || 'undefined' };
    case 'SET_UID':
      return { ...state, uid: action.uid || 'undefined' };
    case 'SET_CURRENT_ROUTE':
      return { ...state, currentRoute: action.currentRoute || 'undefined' };
    default:
      return state;
  }
}