import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
 
 
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
      currentUser: 'Kevin'
    };
  }
 
  render() {
    return (
      <div className="container">
        <Transactions 
        tasks={this.props.tasks} 
        incompleteCount={this.props.incompleteCount}
        type="Expenses"
        currentUser= {this.state.currentUser}/>
        
        <Transactions 
        tasks={this.props.tasks} 
        incompleteCount={this.props.incompleteCount}
        type="Income"
        currentUser= {this.state.currentUser}/>
      </div>
      
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  //currentUser: PropTypes.object,
};
 
// export default createContainer(() => {
//   Meteor.subscribe('tasks');
//   return {
//     tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
//     incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
//     currentUser: Meteor.user(),
//   };
// }, App);