import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';
import {coffeeReducer} from './reducer';

const rootReducer = combineReducers({
    coffee: coffeeReducer
  });

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk, logger));


