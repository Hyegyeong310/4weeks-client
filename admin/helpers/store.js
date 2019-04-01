import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const InitialState = {
  isLogin: false,
  keepLogin: true,
  searchVal: ''
};

export const actionTypes = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
};

const loginReducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogin: true
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogin: false
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer
});

export function initializeStore(initialState = InitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
