import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = ({currentUser, conversation}) => {
  // console.log(currentUser,conversation)
  return (
    <div className='wrapper'>
      <Header 
        currentUser={currentUser}
        participants={conversation.participants}
      />
      <ChatStream 
        currentUser={currentUser}
        conversation={conversation}
      />
      <Footer />
    </div>
  );
};

export default App;
