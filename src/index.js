import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import newData from './newData';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div style={{display: "flex"}}>
    <App currentUser={data.currentUser} conversation={data.conversation} />
    <App currentUser={newData.currentUser} conversation={newData.conversation} />
  </div>,
  rootElement
);
