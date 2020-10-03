import React from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar />
        <div className="sidebarRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebarSearch">
        <div className="sidebarContainer">
          <SearchOutlined />
          <input placeholder="search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats"></div>
    </div>
  );
}

export default Sidebar;
