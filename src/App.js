import React, { Component } from 'react';
import './App.css';
var $ = require('jquery');
import Profile from './github/Profile.jsx';
<<<<<<< HEAD
import Search from './github/Search.jsx';

=======
>>>>>>> 03bf968e605ed74e1bd19affccc9357cc5f2f175

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'samersm',
      userData: [],
      userRepos: [],
      perPage: 5
    };
  }
  
  // Get user data from github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userData: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }
  
  // Get user repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({userRepos: data});
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({username: null});
        alert(err);
      }.bind(this)
    });
  }
  
<<<<<<< HEAD
  handleFormSubmit(username) {
    this.setState({username: username}, function() {
      this.getUserData();
      this.getUserRepos();
    });
  }
  
=======
>>>>>>> 03bf968e605ed74e1bd19affccc9357cc5f2f175
  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }
  
  render() {
    return (
      
      <div>
<<<<<<< HEAD
        <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
=======
>>>>>>> 03bf968e605ed74e1bd19affccc9357cc5f2f175
        <Profile {...this.state} />
      </div>
      
    );
  }
}

App.porpTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: 'f91dd717909f5ad2a7b9',
  clientSecret: 'fca71b1ca189c858f1117258a7dc78997788fb65'
};

export default App;
