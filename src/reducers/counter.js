import * as actions from '../actions/counter';

const defaultState = 2;

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1
    case actions.DECREMENT:
      return state - 1
    default:
      return state
  }
}

export default counter;
