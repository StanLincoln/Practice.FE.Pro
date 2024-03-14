import React from "react";
import { useGetSinglePostQuery } from "../../store/slices/apiSlice";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetSinglePostQuery(id);

  return (
    <>
      <h2>Post info</h2>
      { isLoading && <p>Please, wait - we are loading the post data!!!</p>}
      { isError && <p>Something went wrong with post: {error.error}</p>}
      {
        data && <>
          <h3>{data.title}</h3>
          <p>{data.body}</p>
        </>
      }
    </>
  );
};

export default PostDetailPage;
