import React from 'react';

import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const Friend = props => {
  return (
    <div>
      {props.friend.name}
      <span onClick={() => props.deleteFriend(props.friend.id)}>  X  </span>
    </div>
  )
}

export default connect(null, { deleteFriend })(Friend);