import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
 
 
import Task from './Task.jsx';
import Transactions from './Transactions.jsx';
//import AccountsUIWrapper from './AccountsUIWrapper.jsx';
 
// App component - represents the whole app
// Should probably split this into sub components for income and expenses
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
        console.log('Kevin');
        console.log(response);
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
 
  render() {
    return (
      <div>
        <div className="col-md-4">
        </div>
        <div className="col-md-4 offset-md-4" style={{textAlign:'center', marginTop: '10em'}}>
          <h1 style={{textAlign: 'center'}}>Expense Tracker</h1>

          <div id="main-app">
          { this.loggedIn ? 
          <div>
            <a href="/logout">Logout</a> 
            <div id="root"></div>
          </div> : 
          <div> 
            <a href="/login">Login</a> | <a href="/signup">Signup</a>
          </div>
          }
          </div>
        </div>
        <div className="container">
          <Transactions 
          tasks={this.state.tasks} 
          incompleteCount={this.props.incompleteCount}
          type="Expenses"
          currentUser= {this.state.currentUser}/>        
        </div>
      </div>
      
      
    );
  }
}

App.propTypes = {
  incompleteCount: PropTypes.number.isRequired,
  session: PropTypes.object
};
