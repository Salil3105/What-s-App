import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat'
// import db from './firebase';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {

    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        // db.colletion("rooms").onSnapshot((snapshot)
        // =>
        //     setRooms(
        //         snapshot.docs.map((doc) => (
        //             {
        //                 id: doc.id,
        //                 data: doc.data(),
        //             }
        //         ))
        //     )

        // );
            
    }, []) 

    return (
        <div className='sidebar'>
            
            <div className='sidebar__header'>
                <Avatar />
                <div className='sidebar__headerRight' >
                    
                    <IconButton>  {/*For Touchable feel we added IconButton*/}
                        <DonutLargeIcon />
                    </IconButton>

                    <IconButton>  {/*For Touchable feel we added IconButton*/}
                        <ChatIcon />
                    </IconButton>

                    <IconButton>  {/*For Touchable feel we added IconButton*/}
                        <MoreVertIcon />
                    </IconButton>
            
                </div>
            </div>

            <div className='sidebar__search'>
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new chat " type="text" />
                </div>
            </div>

            <div className='sidebar__chats'>
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>


        </div>
    );
}

export default Sidebar
