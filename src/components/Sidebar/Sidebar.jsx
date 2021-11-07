import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import {v4 as uuidv4} from "uuid";

export const Sidebar = () => {

  const chatLists = [
    {
      id: uuidv4(),
      name: 'Ann'
    },
    {
      id: uuidv4(),
      name: 'Good'
    }
  ];

  return (
    <List component="nav" aria-label="secondary mailbox folder" className='nav'>
      {chatLists.map((chat) => (
        <ListItemButton key={chat.id}>
          <ListItemText primary={chat.name}/>
        </ListItemButton>
      ))}
    </List>
  )
}