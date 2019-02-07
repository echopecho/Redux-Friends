import React from 'react';

import { connect } from 'react-redux';
import { deleteFriend, selectFriend } from '../actions';
import FriendForm from './FriendForm';

const Friend = props => {
  return (
    <div 
      onClick={!props.selected ? () => props.selectFriend(props.friend.id) : null} 
      // className={props.selected === props.friend.id ? "selected" : null}
    >
      {props.selected === props.friend.id ? 
        <div>
          <FriendForm friend={props.friend} selected />
        </div> :
        <div>
          {props.friend.name}
        </div>
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