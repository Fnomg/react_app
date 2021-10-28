import  "./Messages.css";

const Messages = ({ messageList }) => {
  return (
    <div className="messages">
      {messageList.map((message) => (
        <div key={message.id}>
          <h3>{message.text}</h3>
          <div>{message.author}</div>
        </div>
      ))}
    </div>
  )
};

export default Messages;