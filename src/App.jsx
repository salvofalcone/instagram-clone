import { useState, useEffect } from "react";

import "./App.css";

/* COMPONENTS */
import TopBar from "./components/TopBar";
import BottomBar from "./components/BottomBar";
import Stories from "./components/Stories";
import Posts from "./components/Posts";
import Camera from "./components/Camera";
import Messages from "./components/Messages";
import Profile from "./components/Profile";

/* DATA */
import { storiesData } from "./mocks/stories";
import { userData } from "./mocks/user";
import { postsData } from "./mocks/posts";
import { messagesData } from "./mocks/messages";

function App() {
  const [section, setSection] = useState("home");
  const [stories, setStories] = useState(storiesData);
  const [user, setUser] = useState(userData);
  const [posts, setPosts] = useState(postsData);
  const [messages, setMessages] = useState(messagesData);

  useEffect(() => {
    /* dati proprietario progilp */
    fetch("https://api.npoint.io/d92d246c972bb8b31ce7")
      .then((res) => res.json())
      .then((data) => setUser(data));

    /* posts */
    fetch("https://api.npoint.io/79c365b5c6af193c95e6")
      .then((res) => res.json())
      .then((data) => setPosts(data));

    /* stories */
    fetch("https://api.npoint.io/b994bff8b2ddc40175e9")
      .then((res) => res.json())
      .then((data) => setStories(data));

    /* messages */
    fetch("https://api.npoint.io/acddaa1116ddd222e8b3")
      .then((res) => res.json())
      .then((data) => setMessages(data));
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

      case "camera":
        return <Camera />;

      case "igtv":
        return (
          <>
            <h3>Qui andranno le igtv</h3>
          </>
        );

      case "messanger":
        return <Messages messages={messages} setSection={setSection} />;

      case "profile":
        return <Profile user={user} />;

      default:
        return (
          <>
            <Stories user={user} stories={stories} />
            <Posts posts={posts} />
          </>
        );
    }
  };

  /* QUELLO CHE VIENE SEMPRE RENDERIZZATO */
  return (
    <>
      <TopBar setSection={setSection} />
      {homeBySection()}
      <BottomBar setSection={setSection} />
    </>
  );
}

export default App;
