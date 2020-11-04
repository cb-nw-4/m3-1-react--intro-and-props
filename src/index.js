import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div style={{display: "flex"}}>
    <App currentUser={data.currentUser} conversation={data.conversation} />
    <App currentUser={data.newcurrentUser} conversation={data.conversation} />
  </div>,
  rootElement
);
