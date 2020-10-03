import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function SidebarChat({ newChat }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {};

  return !newChat ? (
    <div className="sidebarChatContainer">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChatInfo">
        <h4>Room Name</h4>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChatContainer">
      <h4>Add New Chat</h4>
    </div>
  );
}

export default SidebarChat;
