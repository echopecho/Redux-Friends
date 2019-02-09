import React from 'react';
import Friend from './Friend';

import { connect } from 'react-redux';

const FriendList = props => {
  return (
    <div className="friend-list">
      {props.loading ? <p>LOADING...</p> : null}
      {props.error ? <p>{props.error}</p> : null}
      {props.friends.map(friend => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(FriendList);