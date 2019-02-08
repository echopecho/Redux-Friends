import { LOADING, SUCCESS, FAILURE, SELECT } from '../actions';

const initialState = {
  friends: [],
  loading: false,
  selectedID: '',
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return { ...state, friends: [], loading: true, error: null };
    case SUCCESS:
      return { ...state, friends: action.payload, loading: false, selectedID: '', error: null }
    case FAILURE:
      return { ...state, friends: [], error: action.error }
    case SELECT:
      return { ...state, selectedID: action.id }
    default:
      return state;
  }
}