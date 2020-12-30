import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import {
  businessesReducer,
  businessReducer,
  photoReducer,
  commentsReducer,
  userReducer,
  ownerReducer,
  errorReducer,
  usersReducer,
  loadingReducer
} from './reducers';

const reducer = combineReducers({
  user: userReducer,
  owner: ownerReducer,
  businesses: businessesReducer,
  business: businessReducer,
  comments: commentsReducer,
  users: usersReducer,
  error: errorReducer,
  photo: photoReducer,
  loading: loadingReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: false }))
);

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
