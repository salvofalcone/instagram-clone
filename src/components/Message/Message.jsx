import "./index.css";

import { Photo__Messages } from "../../icons";

const Message = ({ message, setSection, handleMessage }) => {
  const onHandleClick = (sectionName) => setSection(sectionName);

  const onHandleClickMessage = () => {
    const messageChat = message;
    handleMessage(messageChat);
  };

  return (
    <>
      <div className="Message" onClick={() => onHandleClickMessage()}>
        <img
          src={message.userImage}
          alt="user profile image"
          className="Message__Image"
        />

        <div className="Message__Info" onClick={() => onHandleClick("chat")}>
          <p>{message.userName}</p>

          <div className="Message__Info__bottom">
            <p className="Message__IB__text">{message.message}</p>
            <p className="Message__IB__date">{message.date}</p>
          </div>
        </div>

        <div className="Message__Photo">
          <Photo__Messages />
        </div>
      </div>
    </>
  );
};

export default Message;
