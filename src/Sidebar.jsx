import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('rooms').onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <Avatar src={user?.photoURL} />
        <div className="sidebarRight"></div>
      </div>

      <div className="sidebarSearch">
        <div className="sidebarContainer">
          <SearchOutlined />
          <input
            className="inputSearch"
            placeholder="search or start new chat"
            type="text"
          />
        </div>
      </div>

      <div className="sidebarChat">
        <SidebarChat newChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
