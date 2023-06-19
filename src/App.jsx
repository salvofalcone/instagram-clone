import { useState } from "react";

import "./App.css";

/* components */
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";

/* data */
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

function App() {
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  return (
    <>
      <TopBar />
      <Stories user={user} stories={stories} />
      <Posts posts={posts} />
      <BottomBar />
    </>
  );
}

export default App;
