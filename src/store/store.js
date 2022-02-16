import {composeWithDevTools} from 'redux-devtools-extension'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import { reducer } from './reducers/authReducer'
import alertReducer from './reducers/alertReducer';

const rootReducer = combineReducers({
    authReducer: reducer,
    alert: alertReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store