import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function ChatArea( { props }) {
  return (
    <div className='chatArea-container'>
      <div className="chatArea-header">
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
            <p className="con-title">{props.name}</p>
            <p className="con-timestamp">{props.timestamp}</p>
        </div>
        <IconButton>
            <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">Messages</div>
      <div className="text-input-area">Text-input-Area</div>
    </div>
  )
}

export default ChatArea
