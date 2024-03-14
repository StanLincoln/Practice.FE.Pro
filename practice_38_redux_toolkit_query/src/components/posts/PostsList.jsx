import React, { useEffect, useState } from "react";
import { useGetAllPostsQuery } from "../../store/slices/apiSlice";
import { Link } from "react-router-dom";

export default function PostsList() {
  const { data, isLoading } = useGetAllPostsQuery();

  return (
    <>
      <h3>Posts List</h3>

      {isLoading
        ? "Loading..."
        : data?.map((post) => (
            <div key={post.id}>
              <Link to={`${post.id}`}>
                <h2>{post.title}</h2>
              </Link>
              <p>{post.body}</p>
            </div>
          ))}
    </>
  );
}
