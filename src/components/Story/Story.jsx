import "./index.css";

const Story = ({ story }) => {
  return (
    <div className="Story" key={story.id}>
      <div className="Story__Image">
        <img src={story?.userImage} alt={story.title} />
        {story?.isLive && <div className="Story__Live">{"LIVE"}</div>}
      </div>
      <div className="Story__Username">{story.username}</div>
    </div>
  );
};

export default Story;
