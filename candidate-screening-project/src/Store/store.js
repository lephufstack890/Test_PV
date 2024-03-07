import { thunk } from 'redux-thunk';
import testReducer from './Reducer/testReducer';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        // users: UserReducer,
        // auth: authReducer,
        test: testReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store;
