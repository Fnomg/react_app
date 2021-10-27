import './App.css';
import Messages from "./components/Messages/Messages";
import {useEffect , useState} from "react";


const App = () => {

  const [messageList, setMessageList] = useState([]);
  const [textMessage, setTextMessage] = useState();
  const [countId, setCountId] = useState(0);

  useEffect(() => {
    setTimeout(sendRobotMessage, 1500)
  }, [messageList]);

  function sendRobotMessage (){
    if (messageList.length !== 0) {
      if (messageList[messageList.length - 1].author !== 'Good') {
        sendNewMessage();
      } else {
        return
      }
    }
  }

  const handleTextChange = (e) => {
    setTextMessage(e.target.value)
  }

  const sendNewMessage = (author = 'Good') => {
    let newMessage = {
      id: countId,
      author: author,
      text: textMessage ?? 'Заглушка для робота',
    }
    setTextMessage(null)
    setCountId(countId + 1);
    setMessageList([...messageList, newMessage]);
    document.querySelector('.input').value = '';
  }

  return (
      <>
        <Messages messageList={messageList}/>
        <input className="input" type="text" onChange={handleTextChange}/>
        <button onClick={()=>sendNewMessage('Ann')}>Отправить</button>
      </>

  )
}

export default App;
