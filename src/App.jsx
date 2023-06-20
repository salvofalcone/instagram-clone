import { useState, useEffect } from "react";

import "./App.css";

/* COMPONENTS */
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera";

/* DATA */
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);

  /* Fetch per posts */
  useEffect(() => {
    fetch("https://api.npoint.io/627ee2d2c0096f6dcfbf")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  /* Fetch per stories */
  useEffect(() => {
    fetch("https://api.npoint.io/e9976850174aa60dd7aa")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  /* Creo una funzione per avere la home modulare alle sezioni */
  const homeBySection = () => {
    switch (section) {
      case "home":
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
        break;

      case "camera":
        return (
          <>
            <Camera />
          </>
        );
        break;

      case "igtv":
        return (
          <>
            <h3>Qui andranno le igtv</h3>
            {/* <Stories user={user} stories={stories} />
            <Posts posts={posts} /> */}
          </>
        );
        break;

      case "messanger":
        return (
          <>
            <h3>Qui andranno tutti i messaggi</h3>
            {/* <Stories user={user} stories={stories} />
            <Posts posts={posts} /> */}
          </>
        );
        break;

      default:
        break;
    }
  };

  return (
    <>
      <TopBar setSection={setSection} />
      {homeBySection()}
      <BottomBar />
    </>
  );
}

export default App;
