import { FETCHING, SUCCESS } from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, friends: [], fetching: true, error: null };
    case SUCCESS:
      return { ...state, friends: action.payload, fetching: false, error: null }
    default:
      return state;
  }
}