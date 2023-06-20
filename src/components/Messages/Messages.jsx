import "./index.css";

import Message from "../Message";
import SearchBar from "../SearchBar";

import {
  SearchIcon__Messages,
  BackIcon__Messages,
  AddIcon__Messages,
  MoreInfoIcon__Messages,
} from "../../icons";

const Messages = ({ messages }) => {
  return (
    <div className="Messages">
      <div className="Messages__TopBar">
        <span>
          <BackIcon__Messages />
        </span>

        <span className="Messages__TopBar__Name">
          pippo <MoreInfoIcon__Messages />
        </span>

        <span>
          <AddIcon__Messages />
        </span>
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
