import "./index.css";
import { Photo__Messages } from "../../icons";

const Message = ({ message }) => {
  return (
    <>
      <div className="Message">
        <img
          src={message.userImage}
          alt="user profile image"
          className="Message__Image"
        />

        <div className="Message__Info">
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
