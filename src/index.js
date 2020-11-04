import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';
import App from './components/App';
import App1 from './components/App1.js'

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <div className='main-wrapper'>
      <App
      currentUser={data.currentUser}
      conversation={data.conversation}
      class='left-footer footer'
      />
      <App1
      currentUser={data.currentUser1}
      conversation={data.conversation}
      class='right-footer footer'
      />
    </div>,
  rootElement
);
