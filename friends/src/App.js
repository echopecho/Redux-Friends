import React, { Component } from 'react';
import './App.css';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

import { connect } from 'react-redux';
import { fetchFriends } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendList />
      </div>
    );
  }
}

export default connect(null, { fetchFriends })(App);
