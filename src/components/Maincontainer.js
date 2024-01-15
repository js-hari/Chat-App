import React from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import Chat from './Chat';


function Maincontainer() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Chat />
    </div>
  );
}

export default Maincontainer
