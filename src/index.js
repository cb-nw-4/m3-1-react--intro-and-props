import React from 'react';
import ReactDOM from 'react-dom';

import data from './data';


import App from './components/App';

import './styles.css';

const rootElement = document.getElementById('root');


function TwoApp(props){
  return(
    <div className='twoApp'>
        <App currentUser={data.currentUser} conversation={data.conversation} /> 
        <App currentUser={data.currentUser1} conversation={data.conversation} />
    </div>

  )
}



ReactDOM.render(
  <TwoApp />,
  rootElement
);
