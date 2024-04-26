import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL_API_DOMAIN } from "../config";
import type { IUser } from "../models/IUser";

const usersAPI = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${URL_API_DOMAIN}/api/user` }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({

    getUsers: builder.query<IUser[], void>({
      query: () => ({
        url: '/',
      }),
      providesTags: ['Users'],
    }),

    getUserById: builder.query<IUser, number>({
      query: (userId) => ({
        url: `/${userId}`,
      }),
      providesTags: ['Users'],
    }),

    createUser: builder.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),

  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation
} = usersAPI;

export default usersAPI;