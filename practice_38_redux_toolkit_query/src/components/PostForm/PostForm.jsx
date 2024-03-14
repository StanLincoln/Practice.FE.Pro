import React, { useState } from "react";
import { useAddNewPostMutation } from "../../store/slices/apiSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [addNewPost, { isError, isLoading, isSuccess }] =
    useAddNewPostMutation();


  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      title,
      body,
    };

    addNewPost(newPost);

    setTitle("");
    setBody("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>

      <label htmlFor="body">
        Text
        <input
          id="body"
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      <button type="submit">Add new post</button>
    </form>
  );
};

export default PostForm;
