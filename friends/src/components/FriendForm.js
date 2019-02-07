import React from 'react';

import { connect } from 'react-redux';
import { addFriend } from '../actions';


class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    if(this.props.selected) {
      this.setState({ 
        name: this.props.friend.name,
        age: this.props.friend.age,
        email: this.props.friend.email
      });
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: '',
      email: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Enter Name" 
            name="name" 
            value={this.state.name}
          >
          </input>
          <input 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Enter Age" 
            name="age" 
            value={this.state.age}
          >
          </input>
          <input 
            onChange={this.handleChange} 
            type="text" 
            placeholder="Enter Email" 
            name="email" 
            value={this.state.email}
          >
          </input>
          <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addFriend })(FriendForm);