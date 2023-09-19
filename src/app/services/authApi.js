import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = 'http://localhost:5500/api/v1';

export const authApi = createApi({
  reducerPath:'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState()).auth.access_token
      console.log("Token", token)
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),

  // tagTypes: ["businesses"],
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (credentials) => ({
        url: 'auth/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: 'auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getAllBusinesses: builder.query({
      query: () => `business-entities`,
      // providesTags: ["businesses"],
    }),
    registerBusiness: builder.mutation({
      query: (body) => ({
        url: `business-entities`,
        method: "POST",
        body
      }),
      // invalidatesTags: ["relationshipManagers", "portfolios"],
    }),
  }),
})

export const { useLoginMutation, useSignupMutation, useGetAllBusinessesQuery, useRegisterBusinessMutation } = authApi