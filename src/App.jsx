import './App.css';
import Messages from "./components/Messages/Messages";
import {useEffect , useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import * as React from 'react';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';




const App = () => {

  const [messageList, setMessageList] = useState([]);
  const [textMessage, setTextMessage] = useState('');

  useEffect(() => {
    let timer;
    if (messageList.length !== 0 && messageList[messageList.length - 1]?.author !== 'Good') {
      timer = setTimeout(() => sendNewMessage(), 1500);
    }
    return () => clearTimeout(timer);
  },[messageList, sendNewMessage]);

  const handleTextChange = (e) => {
    setTextMessage(e.target.value)
  }

  function sendNewMessage (author = 'Good'){
    let newMessage = {
      id: uuidv4(),
      author: author,
      text: textMessage !== '' ? textMessage : 'Заглушка для робота'
    }
    setTextMessage('')
    setMessageList([...messageList, newMessage]);
  }

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
      <React.Fragment >
        <div className="content">

          <List component="nav" aria-label="secondary mailbox folder" className='nav'>
            {chatLists.map((chat) => (
              <ListItemButton key={chat.id}>
                <ListItemText primary={chat.name}/>
              </ListItemButton>
              ))}
          </List>

          <div className="box">
            <Messages messageList={messageList}/>
            <TextField
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              value={textMessage}
              onChange={handleTextChange}
              autoFocus
            />
            <Button onClick={()=>sendNewMessage('Ann')} variant="contained" endIcon={<SendIcon />} >
              Send
            </Button>
          </div>
        </div>
      </React.Fragment>

  )
}

export default App;
