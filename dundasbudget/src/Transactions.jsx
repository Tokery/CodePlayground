import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


import Task from './Task.jsx';
//import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Transactions extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const value = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    //Meteor.call('tasks.insert', value, this.props.type);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      //const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = true;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>{this.props.type} ({this.props.incompleteCount})</h1>

          <label className="hide-completed">
            <input
              type="checkbox"
              readOnly
              checked={this.state.hideCompleted}
              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          

          {this.props.currentUser ?
            <form className="new-expense" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add a new expense"
              />
            </form> : ''
          }
        </div>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

Transactions.propTypes = {
  tasks: PropTypes.array.isRequired,
  incompleteCount: PropTypes.number.isRequired,
  //currentUser: PropTypes.object,
  type: PropTypes.string.isRequired
}