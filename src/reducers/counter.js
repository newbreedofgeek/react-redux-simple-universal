import * as actions from '../actions/counter';

const defaultState = 2;

const counter = (state = defaultState, action) => {

  console.log(action.type);

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
