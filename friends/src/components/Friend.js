import React from 'react';

import { connect } from 'react-redux';
import { deleteFriend, selectFriend } from '../actions';
import FriendForm from './FriendForm';

const Friend = props => {
  return (
    <div
      className="friend-container" 
      onClick={props.selected !== props.friend.id ? () => props.selectFriend(props.friend.id) : null}
    >
      {props.selected === props.friend.id ? 
        <FriendForm friend={props.friend} selected /> :
        <div className="friend">{props.friend.name}</div>
      }
      <span onClick={() => props.deleteFriend(props.friend.id)}>  X  </span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selected: state.selectedID
  }
}

export default connect(mapStateToProps, { deleteFriend, selectFriend })(Friend);