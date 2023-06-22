import "./index.css";

const Chat = ({ messageChat }) => {
  const changeClass = (plh) => {
    {
      if (plh === 0) {
        return "mine";
      } else {
        return "not__mine";
      }
    }
  };

  return (
    <>
      <div className="Chat">
        <p className="Chat__Username">{messageChat.userName}</p>

        <div className="Chat__Messages">
          {messageChat.chat.map((el) => (
            <p className={changeClass(el.id)}>{el.message}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chat;
