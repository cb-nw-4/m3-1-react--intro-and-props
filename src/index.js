import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root1');

ReactDOM.render(
  <App currentUser={data.currentUser} conversation={data.conversation} />,
  rootElement
);

rootElement.style.width = "50%";

const rootElement2 = document.getElementById('root2');

ReactDOM.render(
  <App currentUser={data.currentUser2} conversation={data.conversation} />,
  rootElement2
);

rootElement2.style.width = "50%";
