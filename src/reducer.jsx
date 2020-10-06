// how data layer looks when the app start (user not logged in)
export const initialState = {
  user: null,
};

// push user to the data layer
export const actionTypes = {
  SET_USER: 'SET_USER',
};

// listen to the action and change it, keep the state of the data layer but change the user to what is being dispatched (SET_USER)
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
