import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import ShrinkReducer from './reducers/shrinkReducer';

const Store = createStore(combineReducers({
  Shrink: ShrinkReducer,
}), composeWithDevTools(applyMiddleware(thunk)));

export default Store;