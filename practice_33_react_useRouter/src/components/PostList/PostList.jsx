import React, { useEffect, useState } from "react";

const PostList = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        );
        if (!response.ok) throw new Error("Не получилось  получить посты");
        const data = await response.json();
        console.log(data);
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <div>
      <h2>Posts of Dwarves</h2>
      {post &&
        post.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};

export default PostList;
