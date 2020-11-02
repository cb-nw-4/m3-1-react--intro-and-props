import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');
console.log(data);

ReactDOM.render(
  <div className='main-container'>
    <App currentUser={data.currentUser.user1} conversation={data.conversation} />
    <App currentUser={data.currentUser.user2} conversation={data.conversation} />
  </div>,
  rootElement
);
