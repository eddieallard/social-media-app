import React from "react";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const App = () => {
  const [user, setUser] = useState("eddie");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} setPosts={setPosts} posts={posts} />
      <PostList posts={posts} />
    </>
  );
};

export default App;
