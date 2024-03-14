import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => `posts`,
      providesTags: ["Post"],
    }),
    getSinglePost: builder.query({
      query: (id) => `posts/${id}`,
    }),
    addNewPost: builder.mutation({
        query: (post) => ({
            url: 'posts',
            method: 'POST',
            body: post,
        }),
        invalidatesTags: ['Post'],
      })
  }),
});

export const {useGetAllPostsQuery, useGetSinglePostQuery, useAddNewPostMutation} = apiSlice
