
import React from 'react'

export default function ConversationItem({props}) {
  return (
    <div className="conversation-container">
        <p className='con-icon'>{props.name[0]}</p>
        <p className='con-title'>{props.name}</p>
        <p className='con-lastMessage'>{props.lastMessage}</p>
        <p className='con-timestamp'>{props.timestamp}</p>
        
    </div>
  )
}
