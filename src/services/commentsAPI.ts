import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_API_DOMAIN } from "../config";
import type { IComment } from "../models/IComment";

const commentsAPI = createApi({
  reducerPath: 'commentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_API_DOMAIN}/api/comment` }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({

    getCommentsByPostId: builder.query<IComment[], number>({
      query: (postId) => ({
        url: `/by_Post/${postId}`
      }),
      providesTags: ['Comments'],
    }),

    addComment: builder.mutation<IComment, IComment>({
      query: (comment) => ({
        url: `/`,
        method: 'POST',
        body: comment,
      }),
      invalidatesTags: ['Comments'],
    }),

  }),
});

export const {
  useAddCommentMutation,
  useGetCommentsByPostIdQuery,
} = commentsAPI;

export default commentsAPI;