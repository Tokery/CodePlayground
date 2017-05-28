// Insert first react component here
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

var tempTasks = [
  {
    _id: 1,
    username: 'Kevin',
    value: 100,
    createdAt: 0,
    private: true
  }
];
var count = 2;

ReactDOM.render(
  <App
    tasks={tempTasks}
    incompleteCount={count}
  />,
  document.getElementById('root')
);