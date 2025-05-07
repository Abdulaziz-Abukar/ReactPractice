/*
🧠 PostViewerContainer Responsibilities:
useState for:

posts

isLoading

error

useEffect to:

Fetch from https://jsonplaceholder.typicode.com/posts

Handle loading and error states

Render logic:

If loading → show a loading message

If error → show an error message

Otherwise → pass posts to a PostList component
*/

import React, { useState, useEffect } from "react";
import PostsLists from "../components/PostsLists";
import "../styles/Header.css";
import "../styles/Searchbar.css";

function PostViewerContainer() {
  // useStates
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // API URL
  const dataURL = "https://jsonplaceholder.typicode.com/posts";

  // API Fetching Function
  const fetchPosts = async () => {
    try {
      const response = await fetch(dataURL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      setError(error.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  // UseEffect for DataDisplaying
  useEffect(() => {
    setIsLoading(true);
    fetchPosts();
  }, []);

  // Posts filtering
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Return to a PostsList component
  return (
    <>
      <header>
        <h1>PostViewer</h1>
      </header>
      <div className="searchBarContainer">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="searchBar"
        />
      </div>
      <PostsLists posts={filteredPosts} isLoading={isLoading} error={error} />
    </>
  );
}

export default PostViewerContainer;
