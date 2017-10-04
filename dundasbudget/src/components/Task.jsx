import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Task component - represents a single memory item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    //Meteor.call('tasks.setChecked', this.props.task._id, !this.props.task.checked);
  }
 
  deleteThisTask() {
    //Tasks.remove(this.props.task._id);
  }

  togglePrivate() {
    //Meteor.call('tasks.setPrivate', this.props.task._id, ! this.props.task.private);
  }

  formatDate(date) {
    var newDate = new Date(date)
    // Could use moment js
    return newDate.toLocaleDateString() + " @ " + newDate.toLocaleTimeString();
  }

  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = classnames({
      checked: this.props.task.checked,
      private: this.props.task.private,
    });

    return (
      <li className={taskClassName} key={this.props.key}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

        <span className="date">
          {this.formatDate(this.props.task.createdAt)}
        </span>
        <span className="text">
          <strong>{this.props.task.createdBy}</strong>: {this.props.task.text} 
        </span>
      </li>
    );
  }
}
 
Task.propTypes = {
  task: PropTypes.object.isRequired,
  showPrivateButton: React.PropTypes.bool.isRequired,
  key: React.PropTypes.string
};