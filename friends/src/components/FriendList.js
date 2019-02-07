import React from 'react';
import Friend from './Friend';

import { connect } from 'react-redux';

const FriendList = props => {
  return (
    <div>
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
    error: state.error
  }
}

export default connect(mapStateToProps)(FriendList);