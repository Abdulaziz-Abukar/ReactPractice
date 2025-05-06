import React from "react";

function PostsList(props) {
  return (
    <div>
      <p>{props.isLoading ? "Loading..." : ""}</p>
      <p>{props.error || ""}</p>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
export default PostsList;
