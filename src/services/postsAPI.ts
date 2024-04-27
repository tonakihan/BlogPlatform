import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../models/IPost";
import { URL_API_DOMAIN } from "../config";

const postsAPI = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_API_DOMAIN}/api/post` }),
  tagTypes: ['Posts'],
  endpoints: (builder) => ({
    
    getPosts: builder.query<IPost[], void>({
      query: () => ({
        url: '/'
      }),
      providesTags: ['Posts'],
    }),

    addPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/',
        method: 'POST',
        body: post
      }),
      invalidatesTags: ['Posts'],
    })

  })
});
 
export const {
  useGetPostsQuery,
  useAddPostMutation
} = postsAPI;

export default postsAPI;