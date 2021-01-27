import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import data2 from './data2';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div style={{display: "flex"}}>
    <App 
    currentUser={data.currentUser} 
    conversation={data.conversation} 
    participants={data.conversation.participants}
    />
    <App 
    currentUser={data2.currentUser} 
    conversation={data2.conversation} 
    participants={data2.conversation.participants}
    />
  </div>,
  rootElement
);
