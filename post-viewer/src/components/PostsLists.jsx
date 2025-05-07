import React from "react";
import "../styles/Posts.css";
function PostsList(props) {
  return (
    <div className="postsContainer">
      <p>{props.isLoading ? "Loading..." : ""}</p>
      <p>{props.error || ""}</p>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default PostsList;
