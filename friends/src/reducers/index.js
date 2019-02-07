import { FETCHING, SUCCESS, ADDING, DELETING } from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  adding: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, friends: [], fetching: true, error: null };
    case SUCCESS:
      return { ...state, friends: action.payload, fetching: false, error: null }
    case ADDING:
      return { ...state, friends: [], adding: true, error: null }
    case DELETING:
      return { ...state, friends: [], deleting: true, error: null }
    default:
      return state;
  }
}