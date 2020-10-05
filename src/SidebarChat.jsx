import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

function SidebarChat({ id, name, newChat }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter a name for chat room');

    if (roomName) {
      db.collection('rooms').add({ name: roomName });
    }
  };

  return !newChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChatContainer">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChatInfo">
          <h4>{name}</h4>
          <p>Last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChatContainer">
      <h4>Add New Chat</h4>
    </div>
  );
}

export default SidebarChat;
