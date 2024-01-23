import React from 'react';
import './myStyles.css';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';



function Maincontainer() {
  return (
    <div className='main-container'>
      <Sidebar />
      <ChatArea />
      
    </div>
  );
}

export default Maincontainer
