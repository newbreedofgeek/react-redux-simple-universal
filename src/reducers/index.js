import { combineReducers } from 'redux';
import counter from './counter';
import stations from './stations';

const rootReducer = combineReducers({
  counter,
  stations
});

export default rootReducer;
