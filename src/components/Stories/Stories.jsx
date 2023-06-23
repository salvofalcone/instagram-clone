import { useState, useEffect } from "react";

import "./index.css";

import Story from "../Story";
import Modal from "../Modal";

const Stories = ({ user, stories }) => {
  const [storyStart, setStoryStart] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalStories = (index) => {
    setStoryStart(index);
    setIsModalOpen(true);
  };
  useEffect(() => {
    setStoryStart(storyStart !== false ? storyStart : false);
  }, [storyStart]);

  const closeModalStories = () => {
    setIsModalOpen(false);
    setStoryStart(false);
  };


  return (
    <>
      <div className="Stories">
        <ul className="Stories__List">
          <li className="Stories__Item" key={99}>
            <Story story={user} key={99} />
            <p className="Stories__Yours">Your Story</p>
          </li>

          {stories &&
            stories.map((story, index) => (
              <li
                className="Stories__Item"
                key={story.id}
                onClick={() => openModalStories(index)}>
                <Story story={story} key={story.id} />
              </li>
            ))}
        </ul>
      </div>
      {storyStart !== false && (
        <Modal
          stories={stories}
          isOpen={isModalOpen}
          closeModal={closeModalStories}
          index={storyStart}
        />
      )}
    </>
  );
};

export default Stories;
