import  "./Messages.css";

const Messages = ({ text }) => {
  return (
    <div className="messages">
      <h3>hello, {text}</h3>
    </div>
  )
};

export default Messages;