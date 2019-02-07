import { FETCHING, SUCCESS, ADDING, DELETING, FAILURE, SELECT, UPDATING } from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  adding: false,
  deleting: false,
  updating: false,
  selectedID: '',
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return { ...state, friends: [], fetching: true, error: null };
    case ADDING:
      return { ...state, friends: [], adding: true, error: null }
    case DELETING:
      return { ...state, friends: [], deleting: true, error: null }
    case UPDATING:
      return { ...state, friends: [], updating: true, error: null }
    case SUCCESS:
      return { ...state, friends: action.payload, fetching: false, selectedID: '', error: null }
    case FAILURE:
      return { ...state, friends: [], error: action.error }
    case SELECT:
      return { ...state, selectedID: action.id }
    default:
      return state;
  }
}