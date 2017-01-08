import * as constants from './constants';

const defaultState = 2;

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return state + 1
    case constants.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter;
