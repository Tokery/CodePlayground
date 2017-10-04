// Insert first react component here
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

var tempTasks = [
  {
    _id: 1,
    username: 'Kevin',
    value: 100,
    createdAt: 0,
    private: true
  },
  {
    _id: 2,
    username: 'Kevin',
    value: 23,
    createdAt: 0,
    private: true,
    checked: true
  }
];
var count = 1;

ReactDOM.render(
  <App
    tasks={tempTasks}
    incompleteCount={count}
  />,
  document.getElementById('app')
);