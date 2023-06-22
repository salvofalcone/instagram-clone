import "./index.css";

// import {  } from "../../icons";

const Chat = ({ chatData }) => {
  return (
    <>
      <div className="Chat">Sono una chat
      <h3>{chatData.message}</h3>
      </div>
    </>
  );
};

export default Chat;
