import axios from 'axios';
import { Action } from 'rxjs/internal/scheduler/Action';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ADDING = 'ADDING';
export const DELETING = 'DELETING';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err);
    })
}

export const addFriend = friend => dispatch => {
  dispatch({ type: ADDING });
  axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err);
    });
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING })
  axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log(response);
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err);
    })
}