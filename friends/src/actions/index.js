import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      console.log(response);
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err);
    })
}