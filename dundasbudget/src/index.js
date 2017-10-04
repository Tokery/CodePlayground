// Insert first react component here
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

var count = 1;

ReactDOM.render(
  <App
    incompleteCount={count}
  />,
  document.getElementById('app')
);