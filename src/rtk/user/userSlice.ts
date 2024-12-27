import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, IUserData } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://676e7272df5d7dac1ccaaa4c.mockapi.io/api/v1/' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query<IUser[], void>({
      query: () => `users`,
      providesTags: ['User']
    }),
    addUser: builder.mutation<IUser, IUserData>({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User']
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = userApi;
