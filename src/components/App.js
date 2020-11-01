import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  return (
    <div className='wrapper'>
      <Header 
        participantsInHeader={props.participants}
        personWriting={props.currentUser}
      />
      <ChatStream 
        messages={props.conversation.messages}
        personWriting={props.currentUser}
      />
      <Footer />
    </div>
  );
};

export default App;
