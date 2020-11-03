import React from 'react';
import ReactDOM from 'react-dom';

import data from './data'; 
import data2 from './data2'
import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <div className="appDiv ">
  <App currentUser={data.currentUser} conversation={data.conversation} />  
  <div className="border">
  <App currentUser={data2.currentUser} conversation={data2.conversation} /> 
  </div>
  </div>,
  rootElement 
  
);
