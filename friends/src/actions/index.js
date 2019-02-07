import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ADDING = 'ADDING';
export const DELETING = 'DELETING';
export const FAILURE = 'FAILURE';
export const SELECT = 'SELECT';
export const UPDATING = 'UPDATING';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING });
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
  dispatch({ type: ADDING });
  axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(() => {
      dispatch({ type: FAILURE, error: 'Could not make new Friend. Typical...'});
    });
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETING })
  axios.delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(()  => {
      dispatch({ type: FAILURE, error: 'Could not delete. FRIENDS TO THE END!'});
    })
}

export const updateFriend = (friend, id) => dispatch => {
  dispatch({ type: UPDATING });
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