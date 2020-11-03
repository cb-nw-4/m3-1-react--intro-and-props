import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => { 
    console.log(props.currentUser);
  return (
    <div className='wrapper'>
      <Header     
       participants={props.conversation.participants}
        currentUser={props.currentUser} />
        <div className="chatStreamDiv">
      <ChatStream  
      messages={props.conversation.messages} 
      currentUser={props.currentUser} /> 
      </div>
      <div className="pageFooter">

      </div>
      <Footer />
    </div>
  );
};

export default App;
