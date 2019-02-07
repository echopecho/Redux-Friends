import React from 'react';

import { connect } from 'react-redux';
import { deleteFriend, selectFriend } from '../actions';

const Friend = props => {
  return (
    <div 
      onClick={() => props.selectFriend(props.friend.id)} 
      className={props.selected === props.friend.id ? "selected" : null}
    >
      {props.friend.name}
      <span onClick={() => props.deleteFriend(props.friend.id)}>  X  </span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    selected: state.select
  }
}

export default connect(mapStateToProps, { deleteFriend, selectFriend })(Friend);