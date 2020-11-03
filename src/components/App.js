import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  //console.log(props.conversation.participants,props.currentUser);
  return (
    <div className='wrapper'>
        <Header 
        participants={props.conversation.participants.filter(element=>element!=props.currentUser)}
        />
        <ChatStream 
        messages={props.conversation.messages} 
        currentUser={props.currentUser}/>
        <Footer />
    </div>
  );
};

export default App;

