import React from 'react';

import Header from './Header';
import ChatStream from './ChatStream';
import Footer from './Footer';

import './App.css';

const App = (props) => {
  console.log(props,"App props");
  return (
    <div className="mainWrapper">
      <div className='wrapper'>
        <Header participants={props.conversation.participants} currentUser={props.currentUser}/>
        <ChatStream messages={props.conversation.messages} currentUser={props.currentUser} />
        <Footer />
      </div>
      <div className='wrapper'>
        <Header participants={props.conversation.participants} currentUser={props.conversation.participants[1]}/>
        <ChatStream messages={props.conversation.messages} currentUser={props.conversation.participants[1]} />
        <Footer />
      </div>
    </div>
  );
};


export default App;
