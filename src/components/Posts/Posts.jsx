import Post from "../Post";

import "./index.css";

const Posts = ({ posts }) => {
  return (
    <div className="Posts">
      <ul className="Posts__Container">
        {posts?.map((post) => (
          <li className="Post__Item" key={post?.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
