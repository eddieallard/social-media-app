import React from "react";
import { userContext } from "../App";



const Post = ({ image, content, user }) => {

  return (
    <userContext.Consumer>
      {(currentUser) => (
        <>
      {image && (
        <img
          style={{ height: 100, width: 200, objectFit: "cover" }}
          src={URL.createObjectURL(image)}
          alt="Post Cover"
        />
      )}
      <p>{content}</p>
      <div style={{ color: currentUser === user && "green" }}>{user}</div>
      </>
      )}
    </userContext.Consumer>
  );
}

export default Post;
