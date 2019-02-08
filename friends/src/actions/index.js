import axios from 'axios';

export const LOADING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const SELECT = 'SELECT';

export const fetchFriends = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(() => {
      dispatch({ type: FAILURE, error: 'Something went so wrong. No Friends found!'})
    })
}

export const addFriend = friend => dispatch => {
  dispatch({ type: LOADING });
  axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(() => {
      dispatch({ type: FAILURE, error: 'Could not make new Friend. Typical...'});
    });
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: LOADING })
  axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(()  => {
      dispatch({ type: FAILURE, error: 'Could not delete. FRIENDS TO THE END!'});
    })
}

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: LOADING });
  axios.put(`http://localhost:5000/api/friends/${id}`, friend)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      console.log(err);
    })
}

export const selectFriend = id => {
  return { type: SELECT, id: id }
}