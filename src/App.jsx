import './App.css';
import Messages from "./components/Messages/Messages";
import {useEffect , useState} from "react";
import { v4 as uuidv4 } from 'uuid';


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

  return (
      <>
        <Messages messageList={messageList}/>
        <input className="input" type="text" onChange={handleTextChange} value={textMessage}/>
        <button onClick={()=>sendNewMessage('Ann')}>Отправить</button>
      </>

  )
}

export default App;
