import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Task from './Task.jsx';
//import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      tasks: []
    };
  }

  componentDidMount() {
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

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const value = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    var newItem = {
      text: value,
      createdAt: Date.now(),
      createdBy: 'Kevin'
    }
    axios.post('/transaction', newItem);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newItem)
    }));
  }

  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  renderTasks() {
    let filteredTasks = this.state.tasks;
    console.log('This state');
    console.log(this.state);
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
          <h1>{this.props.type} </h1>

          {this.props.currentUser ?
            <form className="new-expense" onSubmit={this.handleSubmit.bind(this)} >
              <input
                type="text"
                ref="textInput"
                placeholder="Type to add a new item"
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
  incompleteCount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}