import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import axios from 'axios';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
 

import Task from './Task.jsx';
import Transactions from './Transactions.jsx';
import AuthComponent from './AuthComponent.jsx';

var config = {
  apiKey: "AIzaSyCaOybCA27gy2sI-skFpgw7Awq4GOLHeIE",
  authDomain: "dundasbudget.firebaseapp.com",
  databaseURL: "https://dundasbudget.firebaseio.com",
  projectId: "dundasbudget",
  storageBucket: "",
  messagingSenderId: "547835951770"
};
firebase.initializeApp(config);
 
// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
      currentUser: null,
      loggedOut: true,
      tasks: []
    };
  }

  componentWillMount() {
    var that = this;
    axios.get('/transaction')
      .then(function(response) {
        that.setState({
          tasks: response.data
        })
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log('Hit auth state changed');
      if (user) {
        console.log('Logged in');
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var phoneNumber = user.phoneNumber;
        var providerData = user.providerData;
        this.setState({
          loggedOut: false,
          currentUser: displayName
        })
      }
      else {
        console.log('Not logged in');
        this.setState({
          loggedOut: true,
          currentUser: null
        })
      }
    });
  }

  handleLogin() {

  }

  handleLogout() {

  }
 
  render() {
    return (
      <div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4 offset-md-4" style={{textAlign:'center', marginTop: '10em'}}>
          <h1 style={{textAlign: 'center'}}>Eiditic: Remember Everything</h1>
          { this.state.loggedOut ? 
            <div id="main-app">
              <AuthComponent/>
            </div> :
            <div className="container">
              <Transactions 
              tasks={this.state.tasks} 
              incompleteCount={this.props.incompleteCount}
              type="Expenses"
              currentUser= {this.state.currentUser}/>        
            </div>
          }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  incompleteCount: PropTypes.number.isRequired,
  session: PropTypes.object
};
