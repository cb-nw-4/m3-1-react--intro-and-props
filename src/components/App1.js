import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css'; //Same as App1

// const App = ({currentUser, conversation}) => {
    // console.log(currentUser, conversation)
  const App1 = (props) => {
    return (
      <div className='wrapper'>
      <Header
        participants={props.conversation.participants}
        currentUser={props.currentUser}
      />
      <ChatStream
        messages={props.conversation.messages}
        currentUser={props.currentUser}
      />
      <Footer class={props.class}/>
    </div>
  );
};
export default App1;
