import "./index.css";

import Message from "../Message";
import { SearchIcon__Messages } from "../../icons";

const Messages = ({ messages }) => {
  return (
    <div className="Messages">
      <div className="Messages__TopBar">
        <span>{"<"}</span>
        <span>nome utente</span>
        <span>+</span>
      </div>

      <div className="Messages__SearchBar">
        <SearchIcon__Messages />
        <input type="search" id="searchBar" placeholder="Search" />
      </div>

      <ul className="Messages__Container">
        {messages?.map((message) => (
          <li className="Message__Item" key={message.id}>
            <Message message={message} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
