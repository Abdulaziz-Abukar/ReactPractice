/*
✅ Exercise: Fetch and Display Data

🎯 Goal:
Use useEffect to fetch data from an API and display it on the page.

🧠 What You'll Practice:
- Fetching data using `fetch()`
- Using `useEffect` to fetch once on mount
- Updating state with fetched data
- Conditional rendering (while data is loading)

📋 Requirements:
1. Use `useEffect` to fetch data from a public API (you can use the JSONPlaceholder one below)
2. Store the data in `useState`
3. Display a loading message until the data arrives
4. Once data is loaded, display it (title or name fields)

🔗 Suggested API:
https://jsonplaceholder.typicode.com/posts
(It's free and open — returns a list of blog posts)
*/
import React, { useState, useEffect } from "react";

export function FetchAndDisplayData() {
  const [data, setData] = useState([]);
  const dataURL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(dataURL);
      const jsonData = await response.json();
      setData(jsonData);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Fetch and Display Data!</h1>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}
