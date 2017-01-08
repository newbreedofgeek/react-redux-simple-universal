import { combineReducers } from 'redux';
import counter from './counter';
import stations from './stations';

const rootReducer = combineReducers({
  counter,
  stations
});

export default rootReducer;



// export default (state = 2, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1
//     case 'DECREMENT':
//       return state - 1
//     default:
//       return state
//   }
// }
