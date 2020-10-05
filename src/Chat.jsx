import React, { useState, useEffect } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useParams } from 'react-router-dom';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');
  const { roomId } = useParams();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed >>>', input);
    setInput('');
  };

  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chatHeaderInfo">
          <h4>Room name</h4>
        </div>

        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatBody">
        <p className={`chatMessage ${true && 'chatSender'}`}>
          <span className="chatName">Likitha</span>
          Hey y'all
          <span className="chatTime">4:00pm</span>
        </p>
      </div>

      <div className="chatFooter">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
            type="text"
          />
          <button onClick={sendMessage}>Send message</button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
