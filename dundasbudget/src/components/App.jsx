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
      currentUser: 'Kevin',
      loggedIn: true,
      tasks: []
    };
  }

  componentWillMount() {
    console.log('App mounting');
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
          <h1 style={{textAlign: 'center'}}>Expense Tracker</h1>

          <div id="main-app">
            <AuthComponent/>
          </div>
          <div className="container">
            <Transactions 
            tasks={this.state.tasks} 
            incompleteCount={this.props.incompleteCount}
            type="Expenses"
            currentUser= {this.state.currentUser}/>        
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  incompleteCount: PropTypes.number.isRequired,
  session: PropTypes.object
};
