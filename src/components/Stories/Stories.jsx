import "./index.css";

import Story from "../Story";

const Stories = ({ user, stories }) => {
  return (
    <div className="Stories">
      <ul className="Stories__List">
        <li className="Stories__Item">
          <Story story={user} key={1}/>
        </li>

        {stories &&
          stories.map((story) => (
            <li className="Stories__Item">
              <Story story={story} key={story.id} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Stories;
