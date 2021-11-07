import React, {useEffect, useState} from "react";
import Messages from "../Messages/Messages";
import {Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {v4 as uuidv4} from "uuid";

export const MainSection = () => {

  const [messageList, setMessageList] = useState([]);
  const [textMessage, setTextMessage] = useState('');

  useEffect(() => {
    let timer;
    if (messageList.length !== 0 && messageList[messageList.length - 1]?.author !== 'Good') {
      timer = setTimeout(() => sendNewMessage(), 1500);
    }
    return () => clearTimeout(timer);
  },[messageList]);


  function sendNewMessage (author = 'Good'){
    let newMessage = {
      id: uuidv4(),
      author: author,
      text: textMessage !== '' ? textMessage : 'Заглушка для робота'
    }
    setTextMessage('')
    setMessageList([...messageList, newMessage]);
  }

  const handleTextChange = (e) => {
    setTextMessage(e.target.value)
  }

  return (
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
  )
}