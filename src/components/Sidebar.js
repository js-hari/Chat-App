import React, { useState } from 'react'
import "./myStyles.css";
import AccountCircleIcon  from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import NightlightIcon from '@mui/icons-material/Nightlight';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationItem';

function Sidebar() {
    const [conversations, setConversation] = useState([
        {
           name:"Test#1",
           lastMessage: "Last Message #1",
           timestamp: "today", 
        },
        {
            name:"Test#2",
            lastMessage: "Last Message #2",
            timestamp: "today", 
         },
         {
            name:"Test#3",
            lastMessage: "Last Message #3",
            timestamp: "today ", 
         },
        ])


  return (
    <div className='sidebar-container'>
      <div className="sb-header">
      <div>
        <IconButton>
            <AccountCircleIcon />
        </IconButton>
    </div>

    <div>
        <IconButton>
            <PersonAddIcon />
        </IconButton>
        <IconButton>
            <GroupAddIcon />
        </IconButton>
        <IconButton>
            <AddCircleIcon />
        </IconButton>
        <IconButton>
            <NightlightIcon />
        </IconButton>
    </div>  

      </div>
      <div className="sb-search">
      <IconButton>
        <SearchIcon />
      </IconButton>
        
        <input placeholder='Search' className='search-box'/>
      </div>
      <div className="sb-conversation">
            {conversations.map((conversation) => {
                return (  
                  <ConversationsItem props = {conversation}  key={conversation.name} /> 
                  );
            })}
      </div>
    </div>
  );
}

export default Sidebar
