const initialState = {
  username: 'undefined',
  uid: 'undefined',
};

export default (state=initialState, action) => {
  switch(action.type) {
    case 'SET_USER_NAME':
      return { ...state, username: action.username || 'undefined' };
    case 'SET_UID':
      return { ...state, uid: action.uid || 'undefined' };
    default:
      return state;
  }
}